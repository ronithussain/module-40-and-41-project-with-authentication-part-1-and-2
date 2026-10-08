
import { FiLoader } from "react-icons/fi";

const LoadingPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Loading Card */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Spinner */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500" />

          <FiLoader className="text-3xl text-purple-400" />
        </div>

        {/* Loading Text */}
        <h2 className="mt-8 text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Loading
          </span>
          <span className="ml-1 animate-pulse">...</span>
        </h2>

        <p className="mt-3 text-center text-sm text-slate-400 sm:text-base">
          Please wait while we prepare everything for you.
        </p>

        {/* Animated Dots */}
        <div className="mt-6 flex gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-purple-400" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-pink-400 [animation-delay:150ms]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-400 [animation-delay:300ms]" />
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
