"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { FaCamera, FaEdit, FaEnvelope, FaUser } from "react-icons/fa";

const ProfilePage = () => {
  const [show, setShow] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return <span className="loading loading-spinner text-error"></span>;
  }
  const user = session?.user;
  console.log(user);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    // console.log(newUserData)

    await authClient.updateUser({
      ...newUserData,
    });
  };
  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Profile Card */}
        <div className="overflow-hidden rounded-md border border-base-300 bg-base-100 shadow-xl">
          {/* Cover */}
          <div className="relative h-44 bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/70 sm:h-52">
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Profile Header */}
          <div className="relative px-6 pb-6 sm:px-10">
            {/* Avatar */}
            <div className="absolute -top-16 left-6 sm:left-10">
              <div className="avatar">
                <div className="relative w-32 rounded-full border-4 border-base-100 bg-base-200 shadow-xl sm:w-36">
                  <Image
                    src={user?.image as string}
                    alt="User profile"
                    width={144}
                    height={144}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Camera button */}
              <button
                type="button"
                className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-content shadow-lg transition hover:scale-105"
              >
                <FaCamera size={14} />
              </button>
            </div>

            {/* User Info */}
            <div className="flex min-h-32 flex-col justify-end gap-3 pt-20 sm:flex-row sm:items-end sm:justify-between sm:pt-20">
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {user?.name as string}
                </h1>

                <div className="mt-2 flex items-center gap-2 text-sm text-base-content/60">
                  <FaEnvelope size={13} />
                  <span>{user?.email as string} </span>
                </div>
              </div>

              <div className="badge badge-primary badge-outline bg-red-700 text-white rounded-md gap-2 px-4 py-4">
                <FaUser size={12} />
                <button onClick={handleShowForm}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        {/* Update Profile */}
        {show && (
          <div className="mt-8 ">
            {/* Form */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg sm:p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-bold">Update Profile</h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Update your personal information below.
                </p>
              </div>

              {/* jodi show true hoy taholey dekhaw */}

              <form onSubmit={handleUpdateProfile} className="space-y-6">
                {/* Image */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Profile Image
                    </span>
                  </label>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="avatar">
                      <div className="w-20 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                        <Image
                          src={(user?.image as string) || "/default-avatar.png"}
                          alt="Profile"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <input
                        type="url"
                        name="image"
                        placeholder="https://example.com/profile.jpg"
                        className="input input-bordered w-full focus:input-primary"
                      />

                      <p className="mt-2 text-xs text-base-content/50">
                        Enter a valid image URL for your profile picture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>

                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered w-full pl-3 focus:input-primary"
                    />
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="btn min-w-36 bg-red-700 text-white  rounded-md shadow-lg shadow-primary/20"
                  >
                    <FaEdit size={14} />
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProfilePage;
