'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';  
import links from '@data/PageLink/pageLink.json';
import Image from 'next/image';
import researchifyLogoPNG from "@media/Images/researchifyLogoPNG.png";
import './Header.css'

const Header = () => {
    const pathname = usePathname(); 

    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-teal-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <b className={pathname === link.href ? "underline" : ""}>{link.name}</b>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Image className='h-12 w-12' src={researchifyLogoPNG} alt="researchifyLogoPNG" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-7 px-1">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <b className={pathname === link.href ? "underline" : ""}><span className='button-hover'>{link.name}</span></b>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get Started</a>
            </div>
        </div>
    );
};

export default Header;
