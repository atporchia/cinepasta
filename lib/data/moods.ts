import type { MoodOption } from "@/lib/types";

export const homeMoodOptions: MoodOption[] = [
  { id: "funny-painful", label: "I want something funny but painful", href: "/watch-paths/laughing-at-italy" },
  { id: "dreamlike", label: "I want something dreamlike", href: "/directors/federico-fellini" },
  { id: "political", label: "I want something political", href: "/watch-paths/politics-enters-the-home" },
  { id: "stylish", label: "I want something stylish", href: "/watch-paths/pure-cinema-style" },
  { id: "emotional-human", label: "I want something emotional and human", href: "/movies/una-giornata-particolare" },
  { id: "loneliness", label: "I want something about loneliness", href: "/movies/leclisse" },
  { id: "friendship", label: "I want something about friendship", href: "/movies/ceravamo-tanto-amati" },
  { id: "power", label: "I want something about power", href: "/movies/pasqualino-settebellezze" },
];

export const beginHereMoodOptions: MoodOption[] = [
  { id: "funny-painful", label: "I want something funny but painful", href: "/watch-paths/laughing-at-italy" },
  { id: "dreamlike", label: "I want something dreamlike", href: "/directors/federico-fellini" },
  { id: "political", label: "I want something political", href: "/watch-paths/politics-enters-the-home" },
  { id: "emotional-human", label: "I want something emotional and human", href: "/movies/una-giornata-particolare" },
  { id: "stylish-tense", label: "I want something stylish and tense", href: "/watch-paths/pure-cinema-style" },
  { id: "loneliness", label: "I want something about loneliness", href: "/movies/leclisse" },
  { id: "friendship", label: "I want something about friendship", href: "/movies/ceravamo-tanto-amati" },
  { id: "social-change", label: "I want something about social change", href: "/watch-paths/rome-as-a-world" },
];

export const firstTenMovieIds = [
  "il-sorpasso",
  "i-soliti-ignoti",
  "ceravamo-tanto-amati",
  "la-dolce-vita",
  "ladri-di-biciclette",
  "una-giornata-particolare",
  "il-buono-il-brutto-il-cattivo",
  "amarcord",
  "mamma-roma",
  "profumo-di-donna",
];
