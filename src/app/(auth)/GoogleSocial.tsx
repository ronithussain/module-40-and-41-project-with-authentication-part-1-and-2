"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const GoogleSocial = () => {
  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    console.log(data);
    if (error) {
      toast.error(error.message || "Google দিয়ে লগইন করা যায়নি।");
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="
        w-full
        h-12
        flex items-center justify-center gap-3
        rounded-xl
        border border-gray-300
        bg-white
        text-gray-700
        font-medium
        shadow-sm
        transition-all duration-200
        hover:bg-gray-50
        hover:shadow-md
        active:scale-[0.98]
      "
      >
        {/* Google Logo */}
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M21.35 12.23c0-.79-.07-1.55-.23-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.92v2.42h3.14c1.84-1.69 2.93-4.18 2.93-7.37Z"
          />
          <path
            fill="#34A853"
            d="M12 21.5c2.63 0 4.84-.87 6.46-2.35l-3.14-2.42c-.87.58-1.98.92-3.32.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.5A9.75 9.75 0 0 0 12 21.5Z"
          />
          <path
            fill="#FBBC05"
            d="M6.51 13.62A5.86 5.86 0 0 1 6.2 12c0-.56.1-1.1.31-1.62v-2.5H3.27A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.02 4.38l3.24-2.76Z"
          />
          <path
            fill="#EA4335"
            d="M12 6.35c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 3.45 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.73 5.38l3.24 2.5C7.29 8.07 9.45 6.35 12 6.35Z"
          />
        </svg>

        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleSocial;
