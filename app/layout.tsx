import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hammad Azam | Portfolio",
  description:
    "Frontend Developer specializing in React, Next.js, and modern UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "relative bg-background text-foreground"
        )}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="hammad-portfolio-theme"
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          {/* <AnimatedBackground /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
