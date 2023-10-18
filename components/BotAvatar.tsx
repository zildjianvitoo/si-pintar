import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

export default function BotAvatar({}: Props) {
  return (
    <Avatar className="w-10 h-1w-10">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  );
}
