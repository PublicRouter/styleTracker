import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useRouter } from "next/router";

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const router = useRouter();
    const currentPath = router.pathname;

    const isRootPath = currentPath === '/';

    return (
        <header className="flex gap-3 items-center justify-between bg-[#222] p-4">
            <Link href={'/'} className="text-white flex gap-1">
                <span>
                    <img className="h-6 w-6" src="https://next-styletracker.s3.us-east-2.amazonaws.com/1688852585164.png" />
                </span>
                StyleTracker
            </Link>
            <nav className={`sm:block sm:text-white ${isMobileMenuOpen ? 'block absolute grid top-[58px] right-2 text-end' : 'hidden'} ${isRootPath && isMobileMenuOpen ? 'text-white' : 'text-[#222]'} navigation text-sm sm:text-[16px] md:text-[18px]`}>
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>All Products</Link>
                <Link href={'/categories'}>Categories</Link>
                <Link href={'/cart'}>Cart({cartProducts.length})</Link>
            </nav>
            <button className="sm:hidden" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className='w-6 h-6'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>
    )
}