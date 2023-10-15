import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";

type Props = {};

export default function NavbarAuth({}: Props) {
  return (
    <nav className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex justify-end w-full ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
