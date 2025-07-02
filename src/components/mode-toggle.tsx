"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"




export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <button
      className="p-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
      onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
    >
      <Sun className="hidden h-5 w-5 text-gray-500 dark:block" />
      <Moon className="block h-5 w-5 text-gray-800 dark:hidden" />
    </button>
  )
}
