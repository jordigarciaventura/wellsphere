import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/utils/style";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function getInitials(name: string) {
  const words = name.trim().split(/\s+/).slice(0, 2);
  const initials = words.reduce((acc, word) => acc + word[0], "");

  return initials.toUpperCase();
}

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
    return (
      <Avatar className="flex items-center justify-center">
        <AvatarImage src={src} alt="User avatar" className={className} />
        <AvatarFallback className="text-lg">
          {getInitials(userfullname ?? username)}
        </AvatarFallback>
      </Avatar>
    );
  }

  const userInitials = getInitials(userfullname ?? username);
  return (
    <Avatar className={cn("flex items-center justify-center", className)}>
      {userInitials}
    </Avatar>
  );
}
