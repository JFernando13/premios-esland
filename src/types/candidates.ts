export interface TCandidate {
  name: string;
  image: string;
  link: string | null;
  id: string
  ranking?: number
}

export interface TCandidateVote extends TCandidate {
  ranking?: number
}

export interface TCandidatesByCategory {
  categoryName: string
  candidates: TCandidate[]
}