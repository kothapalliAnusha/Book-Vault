import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAppStore, FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll); }
    }, []);

    // Nav items defining -- array of objects
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" }
    ];

    return (
        <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? "bg-green-300" : "bg-transparent"}`}>
            <nav className="py-4 lg:px-4 px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className='text-2xl font-bold text-green-700 flex items-center gap-2'>
                    <FaAppStore className='inline-block' />EduSpark by Book Vault📖
                </Link>

                {/* Nav items for large devices */}
                <ul className=' md:flex space-x-12 hidden'>
                    {navItems.map(({ link, path }) => (
                        <li key={path}>
                            <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-green-700'>{link}</Link>
                        </li>
                    ))}
                </ul>

                {/* Toggle button for small devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {isMenuOpen ? <FaXmark className='h-5 w-5' /> : <FaBarsStaggered className='h-5 w-5' />}
                    </button>
                </div>
            </nav>
            
            {/* Mobile menu */}

            {isMenuOpen && (
                <div className='md:hidden px-4 py-7 bg-green-700'>
                    <ul className='space-y-4'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-white uppercase cursor-pointer hover:text-green-200'>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;
