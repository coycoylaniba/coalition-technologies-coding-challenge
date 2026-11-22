import { cn } from "cn";

interface AvatarProps {
  className?: string;
  img: string;
  title: string;
  description: string;
}

function Avatar({ className, img, title, description }: AvatarProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img src={img} alt={title} className="size-11 rounded-full" />

      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="text-[#707070]">{description}</p>
      </div>
    </div>
  );
}

export { Avatar };
