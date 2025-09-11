import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full">
      <Header type={1}></Header>
        {children}
      </body>
    </html>
  );
}
