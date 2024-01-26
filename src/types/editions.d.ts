export interface FinalistByCategory {
  categoria: string;
  ganador: string;
  foto1: string;
  comunidad1: number;
  streamers1: number;
  total1: number;
  finalista: string;
  foto2: string;
  comunidad2: number;
  streamers2: number;
  total2: number;
}

export interface Finalist {
  name: string;
  category: string;
  photo: string;
  community: number;
  streamers: number;
  total: number;
}