import "@ui/styles/globals.css";
import '@/app/local.css'
import { Rubik, Spectral } from 'next/font/google'
import { Metadata } from "next";
import SubStatusWatcher from "@/components/entities/user/SubStatus.watcher";
import StateProvider from "@/components/StateProvider";
import SessionWatcher from '@ui/components/entities/session/session.watcher'
import TokenWatcher from '@ui/components/entities/session/token.watcher'
import SessionPicker from '@ui/components/widgets/SessionPicker'
const rubik = Rubik({ subsets: ['latin', 'cyrillic'], variable: '--root-font' })
const spectral = Spectral({ subsets: ['latin', 'cyrillic'], weight: ['600', '400'], variable: '--second-font' })

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
      <html lang="en" className={`${rubik.className} ${rubik.variable} ${spectral.variable}`}>
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
