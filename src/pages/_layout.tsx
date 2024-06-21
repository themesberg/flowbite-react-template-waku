import { ThemeModeScript } from "flowbite-react";
import type { PropsWithChildren } from "react";
import "../styles.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeModeScript />
      <main className="antialiased">{children}</main>
    </>
  );
}
