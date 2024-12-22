import { Metadata } from "next";
import Header from "./components/header/page";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metadata (SEO)",
  description: "Subprojeto usando Metadatas(metadados)",
  openGraph: {
    title: "Projeto que utiliza metadatas(metadados)",
    description: "Subprojeto em Next JS",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased bg-stone-800 text-white`}
      >
        <Header />

        <div className="mx-[10px]">
          {children}
        </div>
      </body>
    </html>
  );
}
