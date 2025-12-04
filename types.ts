export interface PrixParTransporteur {
  [key: string]: number;
}

export interface Tarif {
  departement: string;
  prix_par_transporteur: PrixParTransporteur;
}

export interface Feuille {
  nom: string;
  type: string;
  info: string;
  pays: string;
  transporteurs: string[];
  nombre_departements: number;
  tarifs: Tarif[];
}

export interface TransportData {
  fichier: string;
  description: string;
  feuilles: Feuille[];
}

export interface BestPriceResult {
  transporteur: string;
  prix: number;
}

export interface CategoryResult {
  categoryName: string;
  bestOptions: BestPriceResult[];
  departmentName: string;
}