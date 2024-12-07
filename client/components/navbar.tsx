import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/icon.png"

export const Navbar = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <Image src={logo} alt="Logo" className="h-7 w-7" />
                <span className="text-2xl font-semibold ml-2">Summarizer</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                <Link
                    href="/"
                    className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                    prefetch={false}
                >
                    Features
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 text-primary"
                    prefetch={false}
                >
                    Contact
                </Link>
                <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    Sign Up
                </Link>
            </nav>
        </header>
    )
}

export default Navbar