import "@ui/styles/globals.css";
import '@/app/local.css'
import AppHeader from "@/components/widgets/AppHeader";
import { Metadata } from "next";
import SubStatusWatcher from "@/components/entities/user/SubStatus.watcher";
import StateProvider from "@/components/StateProvider";
import SessionWatcher from '@ui/components/entities/session/session.watcher'
import TokenWatcher from '@ui/components/entities/session/token.watcher'
import SessionPicker from '@ui/components/widgets/SessionPicker'

export const metadata: Metadata = {
  title: 'Dark Material',
  icons: ['@ui/assets/dm.svg']
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
          <AppHeader />
          {children}
        </body>
      </html>
    </StateProvider>
  );
}
