import Link from "next/link";

export default function Header() {
    return(
        <header className="flex gap-3 items-center justify-between bg-black p-4">
            <Link href={'/'} className="text-white">StyleTracker</Link>
            <nav className="navigation text-gray-300">
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>All Products</Link>
                <Link href={'/categories'}>Categories</Link>
                <Link href={'/account'}>Account</Link>
                <Link href={'/cart'}>Cart(0)</Link>
            </nav>
        </header>
    )
}