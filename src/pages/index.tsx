import { DarkThemeToggle } from "flowbite-react";

export default function Root() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Waku</h1>
      <DarkThemeToggle />
    </div>
  );
}
