import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

export default function BotAvatar({}: Props) {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  );
}
