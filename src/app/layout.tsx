import Navbar from "@/components/Navigation/Navbar";
import "./globals.css";
import Script from "next/dist/client/script";

export const metadata = {
  title: "Countries-Api",
  description: "Project Solution for Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
