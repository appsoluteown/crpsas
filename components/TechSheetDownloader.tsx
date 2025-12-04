import React, { useState, useRef, useEffect } from 'react';

// Définition des états du processus
type ProcessStatus = 'idle' | 'uploading' | 'processing' | 'completed' | 'error';

// Détection de l'environnement - uniquement une fois au chargement
const IS_LOCAL_DEV = typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

// En production, TOUJOURS utiliser l'URL actuelle, jamais localStorage
const getApiBaseUrl = (): string => {
  if (IS_LOCAL_DEV) {
    // En dev local, permettre l'override via localStorage
    const saved = localStorage.getItem('crp_api_url');
    return saved || 'http://localhost:3000';
  }
  // PRODUCTION: Toujours utiliser l'origine actuelle
  // Nettoyer aussi le localStorage pour éviter les problèmes futurs
  if (localStorage.getItem('crp_api_url')) {
    localStorage.removeItem('crp_api_url');
    console.log('[CRP] Cleared stale localStorage API URL');
  }
  return window.location.origin;
};

export const TechSheetDownloader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // URL du serveur - calculée une seule fois
  const [serverUrl, setServerUrl] = useState<string>(getApiBaseUrl());
  const [showConfig, setShowConfig] = useState(false);
  const [testStatus, setTestStatus] = useState<'none' | 'success' | 'fail'>('none');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sauvegarde de l'URL quand elle change
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setServerUrl(url);
    localStorage.setItem('crp_api_url', url);
    setTestStatus('none'); // Reset test on change
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const testConnection = async () => {
    const cleanUrl = serverUrl.replace(/\/$/, '');
    try {
      const res = await fetch(`${cleanUrl}/`, { method: 'GET' });
      if (res.ok) {
        setTestStatus('success');
      } else {
        setTestStatus('fail');
      }
    } catch (e) {
      setTestStatus('fail');
    }
  };

  const processFileOnServer = async () => {
    if (!file) return;

    // Nettoyage de l'URL (retirer le slash final si présent)
    const cleanUrl = serverUrl.replace(/\/$/, '');

    try {
      setStatus('uploading');

      const formData = new FormData();
      formData.append('devis', file);

      setStatus('processing');

      // Appel au vrai Backend avec l'URL configurée
      const response = await fetch(`${cleanUrl}/api/process-devis`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        // Tentative de lecture du message d'erreur JSON, sinon texte brut, sinon statut
        let errorText = response.statusText;
        try {
          const errData = await response.json();
          if (errData.error) errorText = errData.error;
        } catch (e) {
          // Ignorer si ce n'est pas du JSON
        }
        throw new Error(`Erreur serveur (${response.status}): ${errorText}`);
      }

      // Le serveur renvoie un flux binaire (le fichier ZIP)
      const blob = await response.blob();

      // Déclenchement du téléchargement navigateur
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Fiches_Techniques_Verifiees_${new Date().toISOString().slice(0, 10)}.zip`;
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

  return (
    <div className="w-full space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center md:text-left border-b border-gray-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#1B2B4C] mb-2">
            Fiches Techniques
          </h2>
          <p className="text-gray-500 text-sm">
            Traitement sécurisé via API Backend & Google Drive
          </p>
        </div>

        {/* Bouton Configuration */}
        <button
          onClick={() => setShowConfig(!showConfig)}
          className="text-xs font-medium text-gray-500 hover:text-[#1B2B4C] flex items-center gap-1 border border-gray-200 rounded px-3 py-1 bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.157.92c.44.088.863.22 1.266.388l.84-.442c.483-.254 1.082-.112 1.428.337l.547.947c.346.6.223 1.25-.19 1.643l-.715.683c.038.213.064.43.064.653 0 .223-.026.44-.064.653l.715.683c.413.393.536 1.043.19 1.643l-.547.947c-.346.45-.945.591-1.428.337l-.84-.442c-.403.168-.826.3-1.266.388l-.157.92c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.02-.398-1.11-.94l-.157-.92a6.963 6.963 0 01-1.266-.388l-.84.442c-.483.254-1.082.112-1.428-.337l-.547-.947c-.346-.6-.223-1.25.19-1.643l.715-.683a3.543 3.543 0 01-.064-.653c0-.223.026-.44.064-.653l-.715-.683c-.413-.393-.536-1.043-.19-1.643l.547-.947c.346-.45.945-.591 1.428-.337l.84.442c.403-.168.826-.3 1.266-.388l.157-.92z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Config API
        </button>
      </div>

      {/* Zone de Configuration API */}
      {showConfig && (
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 text-sm">
          <label className="block font-semibold text-[#1B2B4C] mb-1">URL du Serveur API Backend</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={serverUrl}
              onChange={handleUrlChange}
              placeholder="ex: https://mon-app.run.app"
              className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#F08C34]"
            />
            <button
              onClick={testConnection}
              className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 font-medium text-gray-700"
            >
              Tester la connexion
            </button>
          </div>

          {testStatus === 'success' && (
            <p className="text-green-600 mt-2 font-medium flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Serveur connecté avec succès !
            </p>
          )}

          {testStatus === 'fail' && (
            <p className="text-red-600 mt-2 font-medium flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
              Connexion échouée.
            </p>
          )}

          <div className="text-gray-500 mt-2 text-xs border-t border-gray-200 pt-2 mt-2">
            <p className="font-semibold text-gray-700 mb-1">Si vous utilisez Google Cloud Run :</p>
            <p>Si vous avez l'erreur <span className="text-red-500">Failed to fetch</span> alors que l'URL est bonne, c'est probablement que votre service est privé.</p>
            <p className="mt-1">Allez sur la console GCP → Cloud Run → Votre Service → Onglet Security → Cochez <strong>"Allow unauthenticated invocations"</strong>.</p>
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

        {/* Bouton Action */}
        <div className="space-y-4">
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
              <strong>Erreur :</strong> {errorMessage}
              <p className="text-xs mt-1 text-red-500">Vérifiez la configuration API ci-dessus.</p>
            </div>
          )}

          {status === 'completed' && (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center">
              <strong>Succès !</strong> Le téléchargement de l'archive ZIP a commencé.
            </div>
          )}

          <button
            onClick={processFileOnServer}
            disabled={!file || (status !== 'idle' && status !== 'error')}
            className={`
              w-full py-5 rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-3
              ${!file || (status !== 'idle' && status !== 'error')
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
                {status === 'uploading' ? 'Envoi du fichier...' : 'Traitement en cours (Drive & IA)...'}
              </>
            )}
          </button>

          <div className="text-center text-xs text-gray-400 mt-2">
            Serveur Cible : <span className="font-mono bg-gray-100 px-1 rounded">{serverUrl}</span>
          </div>
        </div>

      </div>
    </div>
  );
};