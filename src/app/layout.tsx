import Navbar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="parent min-h-screen  p-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 3xl:px-128 justify-between">

        <Navbar/>
        {children}
        <Footer/>
        </div>
      </ThemeProvider>
    </body>
  </html>
  );
}
