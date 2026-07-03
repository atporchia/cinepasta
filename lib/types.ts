export type Difficulty =
  | "Easy entry"
  | "Easy but emotional"
  | "Medium"
  | "Slow but rewarding"
  | "For patient viewers"
  | "Not casual";

export type Director = {
  id: string;
  slug: string;
  name: string;
  birthYear?: number;
  deathYear?: number;
  imageUrl?: string;
  imageCredit?: string;
  imagePosition?: string;
  shortIdentity: string;
  beginWithMovieId: string;
  shortBio: string;
  directorsWorld: string;
  focus: string[];
  cinemaLanguage?: string;
  whyTheyMatterToday?: string;
  startHereMovieIds: string[];
  majorMovieIds: string[];
  filmography: FilmographyEntry[];
  relatedDirectorIds: string[];
  priority: 1 | 2;
};

export type FilmographyEntry = {
  title: string;
  year: number;
  role?: string;
  oneLineDescription?: string;
  movieId?: string;
};

export type Movie = {
  id: string;
  slug: string;
  title: string;
  originalTitle?: string;
  year: number;
  directorIds: string[];
  difficulty: Difficulty;
  oneLineDescription: string;
  whatItsAbout: string;
  whyItMatters: string;
  whatMakesItSpecial: string;
  whatToNotice: string;
  placeInDirectorsWorld: string;
  goodFirstWatch: string;
  watchThisIfYouLike: string;
  whereToGoNextMovieIds: string[];
  focus: string[];
  spoilerFree: boolean;
  fullPageAvailable: boolean;
};

export type WatchPath = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  movieIds: string[];
};

export type GlossaryEntry = {
  id: string;
  slug: string;
  term: string;
  shortDefinition: string;
  longerExplanation?: string;
  relatedDirectorIds?: string[];
  relatedMovieIds?: string[];
};

export type MoodOption = {
  id: string;
  label: string;
  href: string;
};
