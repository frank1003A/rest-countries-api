import Navbar from "@/components/Navigation/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Countries-Api",
  description: "Project Solution for Frontend Mentor Challenge",
  icons: {
    icon: "./favicon.ico"
  }
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
