import Navbar from "@/components/Navigation/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/Navigation/Footer";

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
      {/**body tag is in the theme provider component */}
      <ThemeProvider>
        <Navbar />
        {children}
      </ThemeProvider>
    </html>
  );
}
