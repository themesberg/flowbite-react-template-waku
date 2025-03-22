import type { ReactNode } from "react";
import { ThemeModeScript } from "flowbite-react";
import "../styles.css";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <head>
        <ThemeModeScript />
      </head>
      <main className="antialiased">{children}</main>
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
