import ClientUserAvatar from "@/components/avatar/ClientSessionAvatar";
import { cn } from "@/lib/utils";

interface Props {
  content: string;
  className?: string;
}

export default function UserMessage({ content, className }: Props) {
  return (
    <div className={cn(className, "ml-auto flex items-center w-full gap-4 mb-4")}>
      <div className="size-7">
        <img 
          src="/assets/User_Img.svg" 
          alt="User Icon" 
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      </div>
      {/* Contenedor de mensaje centrado */}
      <div className="flex justify-center items-center bg-[#E5EAFC] p-4 rounded-lg border border-transparent text-[#2E3A59] w-full">
        <p className="m-0">{content}</p>
      </div>
    </div>
  );
}

   

