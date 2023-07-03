import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
    const { cartProducts } = useContext(CartContext);

    return(
        <header className="flex gap-3 items-center justify-between bg-[#222] p-4">
            <Link href={'/'} className="text-white">StyleTracker</Link>
            <nav className="navigation text-white text-sm sm:text-[16px] md:text-[18px]">
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>All Products</Link>
                <Link href={'/categories'}>Categories</Link>
                <Link href={'/account'}>Account</Link>
                <Link href={'/cart'}>Cart({cartProducts.length})</Link>
            </nav>
        </header>
    )
}