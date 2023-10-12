import "@ui/styles/globals.css";
import '@/app/local.css'
import AppHeader from "@/components/widgets/AppHeader";
import { Metadata } from "next";
import SubStatusWatcher from "@/components/entities/user/SubStatus.watcher";
import StateProvider from "@/components/StateProvider";

export const metadata: Metadata = {
  title: 'Dark Material'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider>
      <html lang="en">
        <body className='min-h-screen dark'>
          <SubStatusWatcher />
          <AppHeader />
          {children}
        </body>
      </html>
    </StateProvider>
  );
}
