"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialItem } from "@/types";

export default function Footer() {
    const pathname = usePathname();
    const socialList: SocialItem[] = [
        {icon: 'fb-icon', link: '/'},
        {icon: 'insta-icon', link: '/'},
        {icon: 'whatsapp-icon', link: '/'},
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="flex flex-col xl:flex-row justify-between">
                    <div className="footer-column mb-12 xl:mb-0">
                        <div className="footer-logo relative mb-8">
                            {pathname !== '/' &&
                                <Link href="/" className="fake-link-block"></Link>
                            }
                            <svg className="svg-icon">
                                <use xlinkHref="/images/sprite.svg#white-logo-icon"></use>
                            </svg>
                        </div>
                        <p className="mb-8">
                            We provide high-quality dental laboratory services to dentists in New York. Your partner in
                            creating perfect smiles.
                        </p>
                        <div className="social-block flex gap-4">
                            {socialList.map((item, i) => {
                                return (
                                    <a key={`social-link-${i}`} href={item.link} target="_blank">
                                        <svg className="svg-icon">
                                            <use xlinkHref={`/images/sprite.svg#${item.icon}`}></use>
                                        </svg>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="footer-column flex flex-col mb-12 xl:mb-0">
                        <h4>Contact Us</h4>
                        <a href="https://www.google.com/maps/search/?api=1&query=1+Woodside+Ave+Brooklyn+NY+11223"
                           target="_blank"
                        >
                            1 Woodside Ave, Brooklyn, NY 11223
                        </a>
                        <a href="tel:7182001532">(718) 200-1532</a>
                        <a href="mailto:contact@respectudental.com">contact@respectudental.com</a>
                    </div>
                    <div className="footer-column">
                        <h4>Working hours</h4>
                        <ul className="list-none p-0">
                            <li className="flex gap-4 mb-5">
                                <span className="font-medium">Mon–Fri:</span>
                                <time dateTime="10:00">10:00 AM</time>
                                –
                                <time dateTime="17:00">5:00 PM</time>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-medium">Sat–Sun:</span>
                                Closed
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright-wrapper flex flex-col-reverse xl:flex-row justify-center xl:justify-between">
                    <div className="text-center xl:text-left">
                        © {(new Date().getFullYear())} Respect U Dental Lab. All rights reserved.
                    </div>
                    <div className="flex items-center justify-center xl:justify-start gap-4 mb-4 xl:mb-0">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}