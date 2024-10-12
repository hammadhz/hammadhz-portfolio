import { Poppins } from "next/font/google";
import "./globals.css";
import "./assets/fonts/font.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hammad.hz portfolio",
  description: "Hammad HZ Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
