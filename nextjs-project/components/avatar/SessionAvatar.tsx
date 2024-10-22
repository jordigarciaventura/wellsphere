import UserAvatar from "@/components/avatar/UserAvatar";
// import { getServerAuthSession } from "@/lib/auth";

interface Props {
  className?: string;
}

export default async function SessionAvatar({ className }: Props) {
  return <UserAvatar className={className} username="Well Sphere" />;

  // const session = await getServerAuthSession();

  // if (!session) return null;

  // const src = session?.user?.image;
  // const userfullname = session?.user?.name;
  // const username = session?.user?.id ?? "";

  // return (
  //   <UserAvatar
  //     className={className}
  //     username={username}
  //     src={src}
  //     userfullname={userfullname}
  //   />
  // );
}
