"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    // console.log(user);

    const { data, error } = await authClient.signUp.email({
      ...user,
    });
    if (data) {
      toast.success("সাইন আপ সফল হয়েছে! 🎉");
      redirect("/");
    } else {
      toast.error(error?.message || "সাইন আপ করা যায়নি!");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <h2 className="text-2xl text-red-700 text-center font-bold mb-2">
          সাইন আপ
        </h2>
        <fieldset className="fieldset">
          <label className="label text-lg">নাম</label>
          <input
            type="text"
            name="name"
            className="input w-md outline-none"
            placeholder="Name"
          />

          <label className="label text-lg">Image</label>
          <input
            type="url"
            name="image"
            className="input w-md outline-none"
            placeholder="Image Url"
          />

          <label className="label  text-lg">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input w-md outline-none"
            placeholder="Email"
          />

          <label className="label  text-lg">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input w-md outline-none"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
