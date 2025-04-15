import type { PropsWithChildren } from "react";

export default async function RootElement({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
