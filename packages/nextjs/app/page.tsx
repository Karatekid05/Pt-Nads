"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { CalendarDaysIcon, TrophyIcon, UserGroupIcon, LanguageIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "~~/contexts/LanguageContext";

const Home: NextPage = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-700 to-purple-950">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all shadow-lg backdrop-blur-sm"
          >
            <LanguageIcon className="h-5 w-5" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>

        <div className="flex items-center flex-col pt-16">
          {/* Hero Section */}
          <div className="px-5 text-white relative mb-16">
            <SparklesIcon className="h-8 w-8 absolute -top-4 -left-4 text-yellow-300 animate-pulse" />
            <h1 className="text-center">
              <span className="block text-5xl mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-300 to-green-500 animate-gradient">
                {t("title")}
              </span>
              <span className="block text-2xl mt-4 text-purple-200 font-light">
                {t("subtitle")}
              </span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="w-full px-8 py-12">
            <div className="flex justify-center items-stretch gap-8 flex-col lg:flex-row max-w-6xl mx-auto">
              {/* Events Card */}
              <div className="group flex flex-col bg-white/5 backdrop-blur-lg px-8 py-10 text-center items-center w-full lg:w-[350px] rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
                  <CalendarDaysIcon className="h-12 w-12 text-green-400 mb-4 relative z-10" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{t("upcomingEvents")}</h2>
                <p className="text-purple-200">
                  {t("upcomingEventsDesc")}
                </p>
                <Link
                  href="/events"
                  className="mt-6 px-6 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-full transition-colors border border-green-500/20 hover:border-green-500/30"
                >
                  {t("viewEvents")}
                </Link>
              </div>

              {/* Nad of the Week Card */}
              <div className="group flex flex-col bg-white/5 backdrop-blur-lg px-8 py-10 text-center items-center w-full lg:w-[350px] rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
                  <TrophyIcon className="h-12 w-12 text-yellow-400 mb-4 relative z-10" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{t("nadOfWeek")}</h2>
                <p className="text-purple-200">
                  {t("nadOfWeekDesc")}
                </p>
                <Link
                  href="/nad-of-week"
                  className="mt-6 px-6 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 rounded-full transition-colors border border-yellow-500/20 hover:border-yellow-500/30"
                >
                  {t("viewWinner")}
                </Link>
              </div>

              {/* My Collection Card */}
              <div className="group flex flex-col bg-white/5 backdrop-blur-lg px-8 py-10 text-center items-center w-full lg:w-[350px] rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-400 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
                  <UserGroupIcon className="h-12 w-12 text-red-400 mb-4 relative z-10" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{t("myCollection")}</h2>
                <p className="text-purple-200">
                  {t("myCollectionDesc")}
                </p>
                <Link
                  href="/my-poaps"
                  className="mt-6 px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-full transition-colors border border-red-500/20 hover:border-red-500/30"
                >
                  {t("viewCollection")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
