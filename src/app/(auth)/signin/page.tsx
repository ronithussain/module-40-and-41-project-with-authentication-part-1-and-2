"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import GoogleSocial from "../GoogleSocial";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("সফলভাবে লগইন করেছেন! 👋");
    } else {
      toast.error(error?.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <h2 className="text-2xl text-red-700 text-center font-bold mb-2">
          সাইন ইন
        </h2>
        <fieldset className="fieldset ">
          <label className="label text-lg">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label text-lg">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button className="btn text-white bg-red-700 mt-4">
            সাইন ইন করুন
          </button>
          <div className="divider">OR</div>
          <GoogleSocial/>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
