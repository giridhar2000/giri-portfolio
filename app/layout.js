import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Giridhar's Portfolio",
  description: "This portfolio is developed by the web-dev [Giridhar]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900 text-white-500">
      <body className={inter.className}>
        <Navbar />  
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
