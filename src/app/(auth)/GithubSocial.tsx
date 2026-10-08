import { authClient } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { toast } from "sonner";

const GithubSocial = () => {
  const handleGithubSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "github",
    });
    if (error) {
      toast.error(error.message || "Github দিয়ে লগইন করা যায়নি।");
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleGithubSignIn}
        className="
        w-full
        py-3
        px-3
        flex items-center justify-center gap-3
        rounded-sm
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

        <FaGithub size={24} />
        <span>Continue with Github</span>
      </button>
    </div>
  );
};

export default GithubSocial;
