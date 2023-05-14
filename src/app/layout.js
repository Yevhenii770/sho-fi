import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoe Finder",
  description: "Help to find any shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center">
          {children}
        </main>

        <Footer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
