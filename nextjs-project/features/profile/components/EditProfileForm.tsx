"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export default function EditProfileForm() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 p-8">
      <div className="mb-6 flex items-center gap-4">
        <Link href={route.settings}>
          <button className="flex items-center focus:outline-none">
            <ArrowLeft className="mr-2 size-5" />
          </button>
        </Link>
        <h2 className="text-2xl font-semibold">Profile</h2>
      </div>

      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <Label>Name</Label>
            <Input type="text" placeholder="John Doe" />
          </div>
          <div className="space-y-4">
            <Label>Username</Label>
            <Input type="text" placeholder="John Doe" />
          </div>
          <div className="space-y-4">
            <Label>Email</Label>
            <Input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="space-y-4">
            <Label>Password</Label>
            <Input type="password" placeholder="******" />
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto block w-full max-w-72 rounded-full bg-[#9C2CF3] px-12 py-3 font-medium text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
