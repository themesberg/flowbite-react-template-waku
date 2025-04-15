import { ThemeModeScript } from "flowbite-react";
import type { ReactNode } from "react";
import "../styles.css";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ThemeModeScript />
      <main className="antialiased">{children}</main>
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
