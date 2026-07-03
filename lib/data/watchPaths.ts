import type { WatchPath } from "@/lib/types";

export const watchPaths: WatchPath[] = [
  {
    id: "laughing-at-italy",
    slug: "laughing-at-italy",
    title: "Laughing at Italy",
    subtitle: "Comedy, failure, social satire, friendship, masculinity",
    description:
      "A path through the directors who turned Italian failure into some of cinema's warmest comedy. These films follow hopeless plans, reluctant soldiers, and lifelong friends, using laughter to look honestly at poverty, war, and the fear of growing up.",
    focus: ["Comedy", "Failure", "Social satire", "Friendship", "Masculinity"],
    movieIds: ["i-soliti-ignoti", "il-sorpasso", "la-grande-guerra", "ceravamo-tanto-amati", "amici-miei"],
  },
  {
    id: "rome-as-a-world",
    slug: "rome-as-a-world",
    title: "Rome as a world",
    subtitle: "Rome as spectacle, memory, politics, poverty, private life",
    description:
      "Rome is never just a backdrop in these films. It is a stage for glamour and gossip, a witness to private history, and a home for the people the city's postcard image tends to leave out.",
    focus: ["Rome", "Spectacle", "Politics", "Poverty", "Private life"],
    movieIds: ["la-dolce-vita", "una-giornata-particolare", "mamma-roma", "brutti-sporchi-e-cattivi"],
  },
  {
    id: "beauty-and-decline",
    slug: "beauty-and-decline",
    title: "Beauty and decline",
    subtitle: "Class, elegance, decay, desire, historical change",
    description:
      "A path for viewers drawn to elegance with sadness underneath. These films watch aristocracies, artists, and old certainties fade, finding real beauty in the process of things ending.",
    focus: ["Class", "Elegance", "Decay", "Desire", "Historical change"],
    movieIds: ["il-gattopardo", "morte-a-venezia", "la-dolce-vita", "leclisse"],
  },
  {
    id: "politics-enters-the-home",
    slug: "politics-enters-the-home",
    title: "Politics enters the home",
    subtitle: "Politics through relationships, family, work, and private life",
    description:
      "History rarely announces itself with speeches in these films. It shows up in an apartment, a marriage, a family argument, or a father's search for stolen work tools, reshaping private life without asking permission.",
    focus: ["Politics", "Family", "Work", "Private life"],
    movieIds: ["una-giornata-particolare", "ceravamo-tanto-amati", "mamma-roma", "ladri-di-biciclette"],
  },
  {
    id: "pure-cinema-style",
    slug: "pure-cinema-style",
    title: "Pure cinema style",
    subtitle: "Music, faces, rhythm, silence, visual confidence",
    description:
      "For viewers who want to feel a film as much as follow one. These directors trust silence, music, and the human face to carry entire scenes, building tension and emotion without needing much dialogue at all.",
    focus: ["Music", "Rhythm", "Silence", "Visual style"],
    movieIds: ["il-buono-il-brutto-il-cattivo", "cera-una-volta-il-west", "otto-e-mezzo", "morte-a-venezia"],
  },
];

export function getWatchPathBySlug(slug: string): WatchPath | undefined {
  return watchPaths.find((path) => path.slug === slug);
}
