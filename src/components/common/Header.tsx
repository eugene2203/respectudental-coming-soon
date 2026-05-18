"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/types";

export default function Header() {
    const pathname = usePathname();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const menuList: MenuItem[] = [
        {name: 'About Us', link: '/about'},
        {name: 'Our Services', link: '/services'},
        {name: 'Contact Us', link: '/contact'},
    ]

    return (
        <header className={`header sticky ${showMobileMenu ? 'mobile-menu-opened' : ''}`}>
            <div className="mobile-mask" onClick={() => setShowMobileMenu(false)}></div>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="header-logo relative">
                        {pathname !== '/' &&
                            <Link href="/" className="fake-link-block"></Link>
                        }
                        <svg className="svg-icon">
                            <use xlinkHref="/images/sprite.svg#logo-icon"></use>
                        </svg>
                    </div>
                    <div className="header-menu">
                        <svg className="close-btn svg-icon xl:hidden pointer"
                             onClick={() => setShowMobileMenu(false)}
                        >
                            <use xlinkHref="/images/sprite.svg#close-icon"></use>
                        </svg>
                        <ul className="flex items-center list-none p-0">
                            {menuList.map((item, i) => {
                                return (
                                    <li key={`header-menu-${i}`}>
                                        <Link href={item.link} className="font-medium">{item.name}</Link>
                                    </li>
                                )
                            })}
                            <li>
                                <a href="tel:7182001532" className="font-bold" target="_blank">(718) 200-1532</a>
                            </li>
                            <li>
                                <button className="btn-main flex items-center xl:ml-4">
                                    Submit the Case
                                    <svg className="svg-icon ml-2">
                                        <use xlinkHref="/images/sprite.svg#arrow-icon"></use>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <svg className="burger-btn svg-icon xl:hidden pointer"
                         onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <use xlinkHref="/images/sprite.svg#burger-icon"></use>
                    </svg>
                </div>
            </div>
        </header>
    );
}