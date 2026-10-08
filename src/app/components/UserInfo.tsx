"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return <span className="loading loading-spinner text-error"></span>;
  }
  const user = session?.user;
  // console.log(user);

  const handleSIgnOut = async () => {
    await authClient.signOut();
    toast.success("আপনি সফলভাবে লগআউট করেছেন।");
  };

  return (
    <div className="absolute top-5 right-2 flex items-center gap-2">
      {user ? (
        <div className="flex flex-col items-center gap-2">
          <Link href={'/profile'}>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Image
                  width={10}
                  height={10}
                  alt={user?.image as string}
                  src={user?.image as string}
                ></Image>
                {/* <img alt={user?.image} src={user?.image as string} /> */}
              </div>
            </div>
          </Link>
          <h3 className="text-sm">{user?.name}</h3>
          <button
            onClick={handleSIgnOut}
            className="btn btn-xs bg-red-700 text-white"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className=" text-sm">
          <Link href="/signin">
            <button className="btn">সাইন ইন</button>
          </Link>
          <Link href="/signup">
            <button className="btn bg-red-700 text-white">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
