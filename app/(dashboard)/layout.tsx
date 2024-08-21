import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-[255px] md:flex-col md:fixed md:inset-y-0 z-80 border-r-[1px] border-gray-200">
        <Sidebar isPro={isPro!} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-[255px]">
        {children}
      </main>
    </div>
  );
}
