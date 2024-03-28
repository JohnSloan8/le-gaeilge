import "./globals.css";
import { LinkButton, AuthButton } from "@/components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const defaultUrl =
  process.env.VERCEL_URL !== null
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
}): React.ReactNode {
  return (
    <html lang="en">
      <body className={`background-image text-foreground ${roboto.className}`}>
        <main className="min-h-screen flex flex-col items-center w-full">
          <nav className="w-full flex justify-center bg-white border-b border-b-foreground/10 h-16">
            <div className="w-full flex  md:max-w-3xl justify-center items-center p-3 text-sm">
              <LinkButton path="imeachtaí" />
              <LinkButton path="grupaí" />
              <LinkButton path="foclóir" />
              <AuthButton />
            </div>
          </nav>
          <div className="w-full flex flex-grow max-w-6xl m-2 md:m-5 p-2 md:p-5">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
