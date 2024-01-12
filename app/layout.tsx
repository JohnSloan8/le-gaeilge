import { GeistSans } from "geist/font/sans";
import "./globals.css";
import LinkButton from "../components/LinkButton";
import AuthButton from "../components/AuthButton";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "le Gaeilge",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background-100 text-foreground">
        <main className="min-h-screen flex flex-col items-center w-full">
          <nav className="w-full max-w-6xl flex justify-center bg-white border-b border-b-foreground/10 h-16">
            <div className="w-full flex justify-between items-center p-3 text-sm">
              {/* <DeployButton /> */}
              <LinkButton path="proifilí" />
              <LinkButton path="imeachtaí" />
              <LinkButton path="grupaí" />

              <AuthButton />
            </div>
          </nav>
          <div className="w-full flex flex-grow md:max-w-6xl bg-white">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
