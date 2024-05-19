import {inter} from "@/app/ui/fonts";
import "./globals.scss";
import Providers from "@/app/providers";
import ThemeButton from "@/app/components/theme-button";

export const metadata = {
  title: "linux tips by FVuar",
  description: "linux-tips is the website where you can find Linux tips, Linux Mint usage and many other Linux distribution tips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <Providers>
              <ThemeButton />
          </Providers>
        {children}
      </body>
    </html>
  );
}
