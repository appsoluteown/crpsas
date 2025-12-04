import React from 'react';
import { BestPriceResult } from '../types';

interface ResultCardProps {
  title: string;
  results: BestPriceResult[];
  colorTheme: 'primary' | 'accent'; // primary = Dark Blue, accent = Orange
}

export const ResultCard: React.FC<ResultCardProps> = ({ title, results, colorTheme }) => {
  
  // CRP Brand Colors
  // Primary: #1B2B4C (Dark Blue)
  // Accent: #F08C34 (Orange)
  
  const bgHeader = colorTheme === 'primary' ? 'bg-[#1B2B4C]' : 'bg-[#F08C34]';
  const textColorHeader = 'text-white';
  
  const bgBadge = colorTheme === 'primary' 
    ? 'bg-blue-50 text-[#1B2B4C]' 
    : 'bg-orange-50 text-[#C05600]';

  const borderClass = colorTheme === 'primary' ? 'border-blue-100' : 'border-orange-100';

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg bg-white border ${borderClass} flex flex-col h-full transition-all duration-300 hover:shadow-xl`}>
      <div className={`${bgHeader} px-6 py-4`}>
        <h3 className={`text-xl font-bold ${textColorHeader} uppercase tracking-wide flex items-center gap-2`}>
          {colorTheme === 'primary' ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
             </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
          )}
          {title}
        </h3>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-center bg-white">
        {results.length === 0 ? (
          <div className="text-center text-gray-400 py-4">
            <p>Aucun tarif disponible</p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((res, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                <div>
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Transporteur</span>
                   <p className="text-lg font-bold text-[#1B2B4C]">{res.transporteur}</p>
                </div>
                <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-1 uppercase tracking-wide ${bgBadge}`}>
                        Meilleur Prix
                    </span>
                    <p className="text-3xl font-extrabold text-[#1B2B4C]">
                        {res.prix} <span className="text-lg font-medium text-gray-500">€</span>
                    </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};