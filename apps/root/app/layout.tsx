import AppHeader from "@/components/widgets/AppHeader";
import "@ui/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='dark'>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
