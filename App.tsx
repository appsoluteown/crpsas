import React, { useState } from 'react';
import { TransportComparator } from './components/TransportComparator';
import { TechSheetDownloader } from './components/TechSheetDownloader';

type Tool = 'comparator' | 'tech-sheets';

function App() {
  const [currentTool, setCurrentTool] = useState<Tool>('comparator');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-[#1B2B4C] text-white flex flex-col shadow-2xl z-10">
        
        {/* Logo Section - Background white for visibility of blue logo */}
        <div className="p-8 flex items-center justify-center bg-white border-b border-gray-200">
          <img 
            src="https://www.crpsas.com/app/themes/crpsas/assets/images/logo.svg" 
            alt="CRP SAS Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">
            Outils
          </div>
          
          <button 
            onClick={() => setCurrentTool('comparator')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
              currentTool === 'comparator' 
                ? 'bg-[#F08C34] text-white shadow-lg' 
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            Comparateur Prix
          </button>

          <button 
            onClick={() => setCurrentTool('tech-sheets')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
              currentTool === 'tech-sheets' 
                ? 'bg-[#F08C34] text-white shadow-lg' 
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Fiches Techniques
          </button>
        </nav>

        {/* Footer Sidebar */}
        <div className="p-4 bg-[#14244E] border-t border-white/10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#F08C34] flex items-center justify-center text-white font-bold text-xs">
                CRP
             </div>
             <div>
               <p className="text-sm font-medium text-white">CRP SAS</p>
               <p className="text-xs text-gray-400">Outils Internes</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {currentTool === 'comparator' && (
            <TransportComparator />
          )}

          {currentTool === 'tech-sheets' && (
             <TechSheetDownloader />
          )}
          
        </div>
      </main>
    </div>
  );
}

export default App;