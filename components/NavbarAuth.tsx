import { getApiLimitCount } from "@/lib/apiLimit";
import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";

type Props = {};

export default async function NavbarAuth({}: Props) {
  const apiLimitCount = await getApiLimitCount();

  return (
    <nav className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex justify-end w-full ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
