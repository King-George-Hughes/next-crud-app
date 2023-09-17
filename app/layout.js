import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nrxt Crud App",
  description: "Create Read Update & Delete",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <NavBar />
          <div className="my-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
