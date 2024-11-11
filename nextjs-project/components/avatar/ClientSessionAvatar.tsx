"use client";

import UserAvatar from "@/components/avatar/UserAvatar";
import { useSession } from "next-auth/react";

interface Props {
  className?: string;
}

export default function ClientUserAvatar({ className }: Props) {
  const { data: session } = useSession();

  if (!session) return null;

  const src = session?.user?.image;
  const userfullname = session?.user?.name;
  const username = session?.user?.id ?? "";

  return (
    <UserAvatar
      className={className}
      src={src}
      userfullname={userfullname}
      username={username}
    />
  );
}
