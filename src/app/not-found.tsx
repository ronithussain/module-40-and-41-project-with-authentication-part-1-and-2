"use client";

import Link from "next/link";
import {
  FiArrowLeft,
  FiHome,
  FiSearch,
  FiAlertCircle,
} from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen  flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <FiAlertCircle className="text-3xl text-purple-400" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-black tracking-tight sm:text-9xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          Sorry, the page you are looking for doesn t exist or may have been
          moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
          >
            <FiHome className="text-lg" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/90 px-6 py-3 font-semibold  backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            <FiArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
        </div>

        {/* Bottom hint */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
          <FiSearch />
          <span>Check the URL or return to the homepage</span>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;