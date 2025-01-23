"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PiggyBank, RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="relative">
          <PiggyBank className="w-32 h-32 text-red-500 mx-auto" />
          <RefreshCcw className="w-12 h-12 text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
        </div>

        <h1 className="text-4xl font-bold text-gray-800">Oops! Our Piggy Bank Broke</h1>

        <p className="text-xl text-gray-600">
          Don't worry, your money is safe! We're just having a little technical hiccup.
        </p>

        <div className="space-y-4">
          <Button
            onClick={reset}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Try again
          </Button>

          <div>
            <Link href="/" className="text-blue-500 hover:text-blue-600 underline transition duration-300 ease-in-out">
              Or go back to the homepage
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 animate-bounce">
          Our financial wizards are working their magic to fix this!
        </p>
      </div>
    </div>
  )
}

