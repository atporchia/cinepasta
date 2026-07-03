import type { GlossaryEntry } from "@/lib/types";

export const glossary: GlossaryEntry[] = [
  {
    id: "neorealism",
    slug: "neorealism",
    term: "Neorealism",
    shortDefinition:
      "A postwar movement that filmed ordinary, poor, and working-class life with real locations, non-professional actors, and unflinching honesty.",
    longerExplanation:
      "Neorealism emerged in Italy right after the Second World War, when film studios were damaged and money was scarce. Directors took their cameras into real streets and used ordinary people alongside actors, focusing on poverty, unemployment, and survival rather than glamour. Its honesty and simplicity reshaped what cinema around the world believed it could show.",
    relatedDirectorIds: ["vittorio-de-sica"],
    relatedMovieIds: ["ladri-di-biciclette"],
  },
  {
    id: "commedia-allitaliana",
    slug: "commedia-allitaliana",
    term: "Commedia all'italiana",
    shortDefinition:
      "Comedy that begins with jokes and gradually reveals fear, failure, hypocrisy, class tension, and moral compromise.",
    longerExplanation:
      "This genre took shape in the late 1950s as Italy modernized quickly and unevenly. Its films are genuinely funny, built around charismatic, flawed characters, but they use that humor to look honestly at social change, poverty, and the compromises people make to get ahead. The comedy rarely stays comfortable for long.",
    relatedDirectorIds: ["mario-monicelli", "dino-risi"],
    relatedMovieIds: ["i-soliti-ignoti", "il-sorpasso"],
  },
  {
    id: "spaghetti-western",
    slug: "spaghetti-western",
    term: "Spaghetti western",
    shortDefinition:
      "Westerns made by Italian directors, known for extended silences, close-ups, operatic scores, and morally ambiguous heroes.",
    longerExplanation:
      "Made mostly in the 1960s, often on Spanish and Italian locations standing in for the American frontier, these westerns leaned into style over realism. Silence, tension, and music became storytelling tools in their own right, and heroes were rarely purely good.",
    relatedDirectorIds: ["sergio-leone"],
    relatedMovieIds: ["il-buono-il-brutto-il-cattivo", "cera-una-volta-il-west"],
  },
  {
    id: "giallo",
    slug: "giallo",
    term: "Giallo",
    shortDefinition:
      "A stylish, suspenseful Italian thriller genre built around mystery, violence, and striking visual design.",
    longerExplanation:
      "Named after the yellow covers of Italian pulp mystery novels, giallo films combine whodunit plotting with bold color, unusual camera work, and a strong emphasis on atmosphere. The genre became especially influential from the late 1960s through the 1970s and shaped horror and thriller filmmaking well beyond Italy.",
  },
  {
    id: "political-cinema",
    slug: "political-cinema",
    term: "Political cinema",
    shortDefinition:
      "Films that engage directly with power, class, corruption, or ideology, often provoking public debate.",
    longerExplanation:
      "Italian political cinema flourished especially in the 1960s and 1970s, when directors used film to argue openly about class, corruption, fascism's legacy, and the direction of the country. It could be confrontational or subtle, but it always treated cinema as a place for real argument.",
    relatedDirectorIds: ["pier-paolo-pasolini", "lina-wertmuller"],
  },
  {
    id: "melodrama",
    slug: "melodrama",
    term: "Melodrama",
    shortDefinition:
      "Heightened, emotionally intense storytelling that treats love, class, and family with operatic seriousness.",
    longerExplanation:
      "Melodrama uses heightened emotion, music, and visual grandeur to make personal stories feel monumental. In Italian cinema it often appears alongside historical settings, turning private heartbreak into something as sweeping as the history surrounding it.",
    relatedDirectorIds: ["luchino-visconti"],
  },
  {
    id: "modernism",
    slug: "modernism",
    term: "Modernism",
    shortDefinition:
      "A style that favors ambiguity, silence, and fragmented storytelling over neat plots and resolutions.",
    longerExplanation:
      "Modernist Italian cinema, especially in the 1960s, questioned traditional storytelling itself, favoring mood, space, and emotional truth over tidy narrative. It often reflects modern life's comfort and disconnection existing side by side.",
    relatedDirectorIds: ["michelangelo-antonioni"],
  },
  {
    id: "economic-boom",
    slug: "economic-boom",
    term: "Economic boom",
    shortDefinition:
      "Italy's rapid economic growth in the late 1950s and early 1960s, which reshaped daily life and national confidence.",
    longerExplanation:
      "Also known as the 'economic miracle,' this period saw Italy shift quickly from an agricultural, war-damaged country toward industrial modernity. Cars, appliances, and new consumer habits arrived fast, and cinema of the era often captured both the excitement and the disorientation this speed created.",
    relatedDirectorIds: ["dino-risi"],
    relatedMovieIds: ["il-sorpasso"],
  },
  {
    id: "postwar-italy",
    slug: "postwar-italy",
    term: "Postwar Italy",
    shortDefinition:
      "The decades after 1945, marked by rebuilding, poverty, political upheaval, and eventually rapid modernization.",
    longerExplanation:
      "This era shaped much of classic Italian cinema, from the raw poverty of the late 1940s to the confident modernity of the 1960s and the political tension of the 1970s. Many of the films on CinePasta are, in one way or another, films about living through this period.",
    relatedDirectorIds: ["vittorio-de-sica", "ettore-scola"],
  },
  {
    id: "auteur",
    slug: "auteur",
    term: "Auteur",
    shortDefinition:
      "A director whose personal vision and recurring themes shape a film as strongly as a novelist shapes a book.",
    longerExplanation:
      "The idea of the auteur treats a director as the primary creative voice behind a film, recognizable across their body of work through recurring themes, visual habits, and preoccupations. Every director profiled on CinePasta is presented as an auteur in this sense: someone with a distinct world, not just a name attached to a credit.",
    relatedDirectorIds: ["federico-fellini"],
  },
];

export function getGlossaryEntryBySlug(slug: string): GlossaryEntry | undefined {
  return glossary.find((entry) => entry.slug === slug);
}
