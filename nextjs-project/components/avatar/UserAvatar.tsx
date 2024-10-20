import { getInitials } from "@/lib/utils";
import { Avatar } from "@mui/material";

interface Props {
  className?: string;
  username: string;
  src?: string | null;
  userfullname?: string | null;
}

export default function UserAvatar({
  className,
  username,
  src,
  userfullname,
}: Props) {
  if (src) {
    return <Avatar src={src} alt="User avatar" className={className} />;
  }

  const userInitials = getInitials(userfullname ?? username);
  return <Avatar className={className}>{userInitials}</Avatar>;
}
