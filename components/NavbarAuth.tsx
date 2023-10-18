import { getApiLimitCount } from "@/lib/apiLimit";
import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";
import { checkSubscription } from "@/lib/subscription";

type Props = {};

export default async function NavbarAuth({}: Props) {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <nav className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex justify-end w-full ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
