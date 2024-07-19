import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/app/navbar/Navbar";
import { navbarHeight } from "@/config";

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
        <main className="flex w-full h-screen">
          {/* <div className="w-full flex flex-col h-full"> */}
          <div className="background-image relative flex-grow h-full w-full">
            <div className={`mt-${navbarHeight}`}>{children}</div>
            <div className={`absolute top-0 h-${navbarHeight} w-full`}>
              <Navbar />
            </div>
          </div>
          {/* </div> */}
        </main>
      </body>
    </html>
  );
}
