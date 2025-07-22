import { ThemeModeScript } from "flowbite-react";
import type { ReactNode } from "react";
import { ThemeInit } from "../../.flowbite-react/init";
import "../styles.css";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ThemeModeScript />
      <ThemeInit />
      <main className="antialiased">{children}</main>
    </>
  );
}
