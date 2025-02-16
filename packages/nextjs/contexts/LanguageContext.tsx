"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    title: "PT-Nads POAPs",
    subtitle: "Proof of Attendance for Monad Portugal",
    connectedAs: "Connected as",
    upcomingEvents: "Upcoming Events",
    upcomingEventsDesc: "Join our next PT-Nads meetup and earn your exclusive POAP!",
    viewEvents: "View Events",
    nadOfWeek: "Nad of the Week",
    nadOfWeekDesc: "Check out our featured community member and their special NFT!",
    viewWinner: "View Winner",
    myCollection: "My Collection",
    myCollectionDesc: "View your earned POAPs and special achievements",
    viewCollection: "View Collection",
  },
  pt: {
    title: "PT-Nads POAPs",
    subtitle: "Prova de Participação para Monad Portugal",
    connectedAs: "Conectado como",
    upcomingEvents: "Próximos Eventos",
    upcomingEventsDesc: "Participe no próximo encontro PT-Nads e ganhe o seu POAP exclusivo!",
    viewEvents: "Ver Eventos",
    nadOfWeek: "Nad da Semana",
    nadOfWeekDesc: "Conheça o membro em destaque da comunidade e o seu NFT especial!",
    viewWinner: "Ver Vencedor",
    myCollection: "Minha Coleção",
    myCollectionDesc: "Veja os seus POAPs conquistados e conquistas especiais",
    viewCollection: "Ver Coleção",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 