"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { ArrowLeftIcon, TrophyIcon, CalendarDaysIcon, MapPinIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "~~/contexts/LanguageContext";
import { Address } from "~~/components/scaffold-eth";

// Mock data - substituir com dados do contrato
const userPoaps = [
  {
    id: 1,
    type: "event",
    name: "PT-Nads Meetup #3",
    date: "2024-03-10",
    location: "Braga",
    image: "/poap-event-1.png", // placeholder, criar imagens reais
    description: "Participou do encontro mensal da comunidade PT-Nads",
  },
  {
    id: 2,
    type: "achievement",
    name: "Nad da Semana",
    date: "2024-02-15",
    image: "/poap-achievement-1.png",
    description: "Reconhecimento por contribuições excepcionais para a comunidade",
    special: true,
  },
  {
    id: 3,
    type: "event",
    name: "Monad Workshop",
    date: "2024-02-02",
    location: "Online",
    image: "/poap-event-2.png",
    description: "Participou do workshop de introdução ao desenvolvimento na Monad",
  },
];

const MyPoaps: NextPage = () => {
  const { address } = useAccount();
  const { t } = useLanguage();

  const eventPoaps = userPoaps.filter(poap => poap.type === "event");
  const achievementPoaps = userPoaps.filter(poap => poap.type === "achievement");

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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Minha Coleção</h1>
          <div className="flex justify-center items-center space-x-2">
            <Address address={address} />
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">{eventPoaps.length}</p>
              <p className="text-purple-200">Eventos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">{achievementPoaps.length}</p>
              <p className="text-purple-200">Conquistas</p>
            </div>
          </div>
        </div>

        {/* Special Achievements Section */}
        {achievementPoaps.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <TrophyIcon className="h-8 w-8 text-yellow-400 mr-2" />
              Conquistas Especiais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievementPoaps.map((poap) => (
                <div
                  key={poap.id}
                  className="group bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-yellow-500/20 hover:border-yellow-500/30 transition-all"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-yellow-500/20">
                          <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-purple-600/20 flex items-center justify-center">
                            <SparklesIcon className="h-12 w-12 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{poap.name}</h3>
                        <p className="text-purple-200 mb-4">{poap.description}</p>
                        <div className="flex items-center text-purple-200 text-sm">
                          <CalendarDaysIcon className="h-4 w-4 mr-1" />
                          <span>{new Date(poap.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">POAPs de Eventos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {eventPoaps.map((poap) => (
              <div
                key={poap.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/20 transition-all"
              >
                <div className="relative mb-4">
                  <div className="w-full h-48 rounded-xl overflow-hidden border border-purple-500/20">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                      <CalendarDaysIcon className="h-12 w-12 text-purple-400" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{poap.name}</h3>
                <p className="text-purple-200 text-sm mb-4">{poap.description}</p>
                <div className="flex items-center justify-between text-purple-200 text-sm">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="h-4 w-4 mr-1" />
                    <span>{new Date(poap.date).toLocaleDateString()}</span>
                  </div>
                  {poap.location && (
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{poap.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyPoaps; 