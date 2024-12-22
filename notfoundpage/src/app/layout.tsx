import Header from "./components/header/page";
import "./globals.css";

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
