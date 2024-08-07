import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/app/navbar/Navbar";

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
  description: "A community for Irish learners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <main className="flex flex-col items-center w-full">
          <div className="w-full flex flex-col h-screen">
            <div className="background-image flex-grow">
              {children}
              <Navbar />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
