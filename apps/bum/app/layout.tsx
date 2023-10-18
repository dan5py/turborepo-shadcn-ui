import "@ui/styles/globals.css";
import '@/app/local.css'
import { Metadata } from "next";
import SessionWatcher from '@ui/components/entities/session/session.watcher'
import TokenWatcher from '@ui/components/entities/session/token.watcher'
import SessionPicker from '@ui/components/widgets/SessionPicker'
import StateProvider from "@/components/StateProvider";
import SubStatusWatcher from "@/components/entities/user/SubStatus.watcher";
import AppHeader from "@/components/widgets/AppHeader";

export const metadata: Metadata = {
  title: 'Dark Material',
  icons: ['@ui/assets/bum.svg']
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
          <SessionWatcher />
          <TokenWatcher />
          <SubStatusWatcher />
          <SessionPicker />
          {children}
        </body>
      </html>
    </StateProvider>
  );
}
