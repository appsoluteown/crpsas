import React, { useState, useRef, useEffect } from 'react';

type ProcessStatus = 'idle' | 'uploading' | 'processing' | 'completed' | 'error';

// API base URL detection
const getApiBaseUrl = (): string => {
  if (typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:3000';
  }
  return window.location.origin;
};

const API_BASE = getApiBaseUrl();

interface IndexStatus {
  lastIndexed: string | null;
  totalFiles: number;
  isRunning: boolean;
}

interface IndexationProgress {
  isRunning: boolean;
  progress: number;
  currentFile: string;
  totalFiles: number;
  processedFiles: number;
  error: string | null;
}

export const TechSheetDownloader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Index state
  const [indexStatus, setIndexStatus] = useState<IndexStatus | null>(null);
  const [showIndexModal, setShowIndexModal] = useState(false);
  const [indexProgress, setIndexProgress] = useState<IndexationProgress | null>(null);
  const [isIndexing, setIsIndexing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Charger le statut de l'index au démarrage
  useEffect(() => {
    fetchIndexStatus();
  }, []);

  // Polling de la progression si indexation en cours
  useEffect(() => {
    let interval: number;
    if (isIndexing) {
      interval = window.setInterval(async () => {
        try {
          const res = await fetch(`${API_BASE}/api/indexation-progress`);
          const data: IndexationProgress = await res.json();
          setIndexProgress(data);

          if (!data.isRunning) {
            setIsIndexing(false);
            fetchIndexStatus(); // Rafraîchir le statut final
          }
        } catch (e) {
          console.error('Erreur polling:', e);
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isIndexing]);

  const fetchIndexStatus = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/index-status`);
      const data = await res.json();
      setIndexStatus(data);
      if (data.isRunning) {
        setIsIndexing(true);
      }
    } catch (e) {
      console.error('Erreur récupération statut index:', e);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const startIndexation = async () => {
    setShowIndexModal(false);
    setIsIndexing(true);
    setIndexProgress({
      isRunning: true,
      progress: 0,
      currentFile: 'Démarrage...',
      totalFiles: 0,
      processedFiles: 0,
      error: null
    });

    try {
      await fetch(`${API_BASE}/api/start-indexation`, { method: 'POST' });
    } catch (e) {
      console.error('Erreur démarrage indexation:', e);
      setIsIndexing(false);
    }
  };

  const processFileOnServer = async () => {
    if (!file) return;

    try {
      setStatus('uploading');

      const formData = new FormData();
      formData.append('devis', file);

      setStatus('processing');

      const response = await fetch(`${API_BASE}/api/process-devis`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorText = response.statusText;
        try {
          const errData = await response.json();
          if (errData.error) errorText = errData.error;
        } catch (e) { }
        throw new Error(`Erreur serveur (${response.status}): ${errorText}`);
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Fiches_Techniques_${new Date().toISOString().slice(0, 10)}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setStatus('completed');

    } catch (error) {
      console.error(error);
      setErrorMessage((error as Error).message);
      setStatus('error');
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Jamais';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center md:text-left border-b border-gray-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#1B2B4C] mb-2">
            Fiches Techniques
          </h2>
          <p className="text-gray-500 text-sm">
            Extraction automatique des fiches techniques depuis Google Drive
          </p>
        </div>

        {/* Bouton Relancer Indexation */}
        <button
          onClick={() => setShowIndexModal(true)}
          disabled={isIndexing}
          className={`text-xs font-medium flex items-center gap-2 border rounded px-4 py-2 transition-all ${isIndexing
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
              : 'text-[#1B2B4C] hover:bg-[#1B2B4C] hover:text-white border-[#1B2B4C]'
            }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          {isIndexing ? 'Indexation en cours...' : 'Relancer indexation'}
        </button>
      </div>

      {/* Statut de l'index */}
      {indexStatus && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${indexStatus.totalFiles > 0 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <div>
              <p className="text-sm font-medium text-[#1B2B4C]">
                Base d'indexation: <span className="text-[#F08C34]">{indexStatus.totalFiles} fiches</span>
              </p>
              <p className="text-xs text-gray-500">
                Dernière mise à jour: {formatDate(indexStatus.lastIndexed)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Barre de progression d'indexation */}
      {isIndexing && indexProgress && (
        <div className="bg-[#1B2B4C] text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Indexation en cours...</h3>
            <span className="text-2xl font-bold text-[#F08C34]">{indexProgress.progress}%</span>
          </div>

          <div className="w-full bg-white/20 rounded-full h-3 mb-4">
            <div
              className="bg-[#F08C34] h-3 rounded-full transition-all duration-500"
              style={{ width: `${indexProgress.progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-300">
            <span>📄 {indexProgress.currentFile}</span>
            <span>{indexProgress.processedFiles} / {indexProgress.totalFiles} fichiers</span>
          </div>

          {indexProgress.error && (
            <p className="mt-3 text-red-300 text-sm">Erreur: {indexProgress.error}</p>
          )}
        </div>
      )}

      {/* Modal de confirmation */}
      {showIndexModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <h3 className="text-xl font-bold text-[#1B2B4C] mb-4">Relancer l'indexation ?</h3>
            <p className="text-gray-600 mb-6">
              Cette action va réanalyser tous les PDFs du Google Drive avec l'IA pour extraire les références produits.
              <br /><br />
              <strong className="text-[#F08C34]">⚠️ L'index actuel sera remplacé.</strong>
              <br /><br />
              Cette opération peut prendre plusieurs minutes selon le nombre de fichiers.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowIndexModal(false)}
                className="flex-1 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={startIndexation}
                className="flex-1 py-3 bg-[#F08C34] text-white rounded-lg font-bold hover:bg-[#d67a28]"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">

        {/* Zone Upload */}
        <div
          className={`
            border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer mb-8
            ${file ? 'border-[#F08C34] bg-orange-50/30' : 'border-gray-300 hover:border-[#F08C34] hover:bg-gray-50'}
          `}
          onClick={() => status === 'idle' && fileInputRef.current?.click()}
        >
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            disabled={status !== 'idle'}
          />
          <div className="flex flex-col items-center gap-4">
            <div className={`p-4 rounded-full ${file ? 'bg-[#F08C34] text-white' : 'bg-gray-100 text-gray-400'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div className="text-lg font-medium text-[#1B2B4C]">
              {file ? file.name : "Cliquez pour sélectionner le Devis (PDF)"}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-4">
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
              <strong>Erreur :</strong> {errorMessage}
            </div>
          )}

          {status === 'completed' && (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center">
              <strong>Succès !</strong> Le téléchargement de l'archive ZIP a commencé.
            </div>
          )}

          {/* Warning si pas d'index */}
          {indexStatus && indexStatus.totalFiles === 0 && (
            <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
              <strong>⚠️ Index vide</strong> - Lancez d'abord une indexation pour pouvoir rechercher des fiches techniques.
            </div>
          )}

          <button
            onClick={processFileOnServer}
            disabled={!file || (status !== 'idle' && status !== 'error') || isIndexing || (indexStatus?.totalFiles === 0)}
            className={`
              w-full py-5 rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-3
              ${!file || (status !== 'idle' && status !== 'error') || isIndexing || (indexStatus?.totalFiles === 0)
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#1B2B4C] text-white hover:bg-[#2a406c]'}
            `}
          >
            {status === 'idle' || status === 'error' || status === 'completed' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Lancer le Traitement
              </>
            ) : (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {status === 'uploading' ? 'Envoi du fichier...' : 'Recherche dans l\'index...'}
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};