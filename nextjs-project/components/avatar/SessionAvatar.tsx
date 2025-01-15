import UserAvatar from "@/components/avatar/UserAvatar";
import { getServerAuthSession } from "@/features/auth/utils/lib";

interface Props {
  className?: string;
}

export default async function SessionAvatar({ className }: Props) {
  const session = await getServerAuthSession();

  if (!session)
    return <UserAvatar className={className} username="Well Sphere" />;

  const src = session?.user?.image;
  const userfullname = session?.user?.name;
  const username = session?.user?.name ?? "";

  return (
    <UserAvatar
      className={className}
      username={username}
      src={src}
      userfullname={userfullname}
    />
  );
}
