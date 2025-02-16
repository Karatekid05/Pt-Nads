"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { CalendarDaysIcon, MapPinIcon, ClockIcon, ArrowLeftIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "~~/contexts/LanguageContext";

// Mock data - você pode substituir isso com dados reais do seu contrato
const upcomingEvents = [
  {
    id: 1,
    title: "PT-Nads Meetup #4",
    date: "2024-03-25",
    time: "18:30",
    location: "Lisboa",
    maxParticipants: 50,
    currentParticipants: 32,
    description: "Junte-se a nós para discutir as últimas novidades do Monad e da web3 em Portugal!",
  },
  {
    id: 2,
    title: "Monad Workshop",
    date: "2024-04-02",
    time: "14:00",
    location: "Porto",
    maxParticipants: 30,
    currentParticipants: 15,
    description: "Workshop hands-on sobre desenvolvimento na Monad. Traga seu laptop!",
  },
];

const pastEvents = [
  {
    id: 3,
    title: "PT-Nads Meetup #3",
    date: "2024-03-10",
    location: "Braga",
    participants: 45,
  },
  {
    id: 4,
    title: "PT-Nads Meetup #2",
    date: "2024-02-25",
    location: "Lisboa",
    participants: 38,
  },
];

const Events: NextPage = () => {
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
        {/* Upcoming Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Próximos Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                <div className="space-y-3 text-purple-200">
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="h-5 w-5" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-5 w-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UsersIcon className="h-5 w-5" />
                    <span>{event.currentParticipants}/{event.maxParticipants} participantes</span>
                  </div>
                </div>
                <p className="mt-4 text-purple-200">{event.description}</p>
                <button className="mt-6 w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-colors">
                  Registrar Participação
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Eventos Passados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className="space-y-2 text-purple-200 text-sm">
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UsersIcon className="h-4 w-4" />
                    <span>{event.participants} participantes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events; 