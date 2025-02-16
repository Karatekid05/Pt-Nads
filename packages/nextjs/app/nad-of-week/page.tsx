"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { ArrowLeftIcon, TrophyIcon, StarIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "~~/contexts/LanguageContext";

// Mock data - substituir com dados do contrato
const currentNad = {
  id: 1,
  name: "Ana Silva",
  week: "18-24 Março 2024",
  achievement: "Organizou 3 workshops sobre Monad e ajudou mais de 20 desenvolvedores a começarem seus projetos",
  walletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  image: "https://api.dicebear.com/7.x/personas/svg?seed=AnaSilva", // placeholder avatar
  contributions: [
    "Criação do PT-Nads Learning Hub",
    "Mentoria para novos desenvolvedores",
    "Organização de eventos comunitários",
  ],
};

const pastNads = [
  {
    id: 2,
    name: "João Santos",
    week: "11-17 Março 2024",
    achievement: "Desenvolveu uma biblioteca open-source para Monad",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=JoaoSantos",
  },
  {
    id: 3,
    name: "Maria Costa",
    week: "4-10 Março 2024",
    achievement: "Criou uma série de tutoriais em português sobre Monad",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=MariaCosta",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    week: "26 Fev - 3 Mar 2024",
    achievement: "Contribuiu com melhorias significativas para a documentação",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=PedroOliveira",
  },
];

const NadOfWeek: NextPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Voltar</span>
      </Link>

      <div className="container mx-auto px-4 py-16">
        {/* Current Nad of the Week */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Nad da Semana</h1>
            <p className="text-purple-200">{currentNad.week}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500/30 transition-all max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-10"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-500/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={currentNad.image} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <TrophyIcon className="h-12 w-12 text-yellow-400 absolute -top-2 -right-2" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">{currentNad.name}</h2>
                    <p className="text-purple-200 mb-6">{currentNad.achievement}</p>
                    <div className="space-y-2">
                      <h3 className="text-white font-semibold mb-2">Contribuições Destacadas:</h3>
                      {currentNad.contributions.map((contribution, index) => (
                        <div key={index} className="flex items-center space-x-2 text-purple-200">
                          <StarIcon className="h-5 w-5 text-yellow-400" />
                          <span>{contribution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Nads */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Hall da Fama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pastNads.map((nad) => (
              <div
                key={nad.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellow-500/20 transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={nad.image} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{nad.name}</h3>
                    <div className="flex items-center space-x-1 text-purple-200 text-sm">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <span>{nad.week}</span>
                    </div>
                  </div>
                </div>
                <p className="text-purple-200 text-sm">{nad.achievement}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NadOfWeek; 