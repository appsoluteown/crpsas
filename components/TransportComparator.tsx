import React, { useState, useMemo } from 'react';
import { Autocomplete } from './Autocomplete';
import { ResultCard } from './ResultCard';
import { TRANSPORT_DATA } from '../constants';
import { BestPriceResult, CategoryResult } from '../types';

export const TransportComparator: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');

  // Extract list of all unique departments from the first sheet (assuming consistency)
  const departmentOptions = useMemo(() => {
    if (!TRANSPORT_DATA.feuilles || TRANSPORT_DATA.feuilles.length === 0) return [];
    return TRANSPORT_DATA.feuilles[0].tarifs.map(t => t.departement);
  }, []);

  // Calculation Logic
  const results = useMemo<CategoryResult[]>(() => {
    if (!selectedDepartment) return [];

    const calculatedResults: CategoryResult[] = [];

    TRANSPORT_DATA.feuilles.forEach(feuille => {
      // Find the tarif entry for the selected department
      const tarifEntry = feuille.tarifs.find(t => t.departement === selectedDepartment);
      
      let bestOptions: BestPriceResult[] = [];
      
      if (tarifEntry && tarifEntry.prix_par_transporteur) {
        let minPrice = Infinity;

        // Iterate through all carriers to find the minimum > 0
        Object.entries(tarifEntry.prix_par_transporteur).forEach(([transporteur, prix]) => {
          // IMPORTANT: Check if price > 0. Usually 0 means no service/invalid in this context.
          if (typeof prix === 'number' && prix > 0) {
            if (prix < minPrice) {
              minPrice = prix;
              bestOptions = [{ transporteur, prix }];
            } else if (prix === minPrice) {
              // Handle ties
              bestOptions.push({ transporteur, prix });
            }
          }
        });
      }

      // If minPrice is still Infinity, it means no valid prices were found
      if (bestOptions.length > 0) {
          calculatedResults.push({
              categoryName: feuille.type, // "Taut" or "Plateau"
              bestOptions,
              departmentName: selectedDepartment
          });
      } else {
           // Push empty result to show card with "No data"
           calculatedResults.push({
              categoryName: feuille.type,
              bestOptions: [],
              departmentName: selectedDepartment
          });
      }
    });

    return calculatedResults;
  }, [selectedDepartment]);

  const tautResult = results.find(r => r.categoryName === 'Taut');
  const plateauResult = results.find(r => r.categoryName === 'Plateau');

  return (
    <div className="w-full space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center md:text-left border-b border-gray-200 pb-6">
          <h2 className="text-3xl font-bold text-[#1B2B4C] mb-2">
            Comparateur Transport
          </h2>
          <p className="text-gray-500">
            Identifiez rapidement le transporteur le moins cher pour vos expéditions Tautliner et Plateau.
          </p>
        </div>

        {/* Search Container */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/60">
          <Autocomplete 
            options={departmentOptions}
            label="Rechercher un département"
            placeholder="Ex: 33 - Gironde, 75..."
            onSelect={setSelectedDepartment}
          />
        </div>

        {/* Results Grid */}
        {selectedDepartment && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ResultCard 
                    title="Général - Taut" 
                    results={tautResult ? tautResult.bestOptions : []}
                    colorTheme="primary"
                />
                <ResultCard 
                    title="Général - Plateau" 
                    results={plateauResult ? plateauResult.bestOptions : []}
                    colorTheme="accent"
                />
            </div>
        )}

        {/* Initial Empty State */}
        {!selectedDepartment && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4 text-[#1B2B4C]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#1B2B4C] mb-1">En attente de recherche</h3>
                <p className="text-gray-500 max-w-sm mx-auto">Sélectionnez un département ci-dessus pour afficher les meilleurs tarifs disponibles.</p>
            </div>
        )}
    </div>
  );
};