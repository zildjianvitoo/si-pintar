import Heading from "@/components/Heading";
import SubscriptionButton from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";
import React from "react";

type Props = {};

export default async function SettingsPage({}: Props) {
  const isPro = await checkSubscription();

  return (
    <main>
      <Heading
        title="Pengaturan"
        description="Kelola Akun"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? (
            <p>Kamu saat ini menggunakan paket Pro </p>
          ) : (
            <p>Kamu saat ini menggunakan paket Gratis </p>
          )}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </main>
  );
}
