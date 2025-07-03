import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { NavbarComp } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujal Patel | Portfolio",
  description:
    "Portfolio of Sujal Patel, a web developer specializing in React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className="antialiased dark:bg-neutral-950 bg-neutral-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className=" mx-auto w-[56rem] dark:bg-neutral-900 bg-white h-screen relative">
            <div className="w-10 absolute h-full bg-white dark:bg-neutral-900 -left-10 top-0 border-x border-gray-200 dark:border-neutral-800 bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#e5e7eb_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed dark:bg-[repeating-linear-gradient(315deg,#27272a_0,#27272a_1px,transparent_0,transparent_50%)]" />
            <div className="">
              <div>
                <NavbarComp />
                {children}
              </div>
            </div>
            <div className="w-10 absolute h-full bg-white dark:bg-neutral-900 -right-10 top-0 border-x border-gray-200 dark:border-neutral-800 bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#e5e7eb_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed dark:bg-[repeating-linear-gradient(315deg,#27272a_0,#27272a_1px,transparent_0,transparent_50%)]" />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
