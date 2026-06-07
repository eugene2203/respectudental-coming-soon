import React from "react";
import Image from 'next/image';
import Link from "next/link";

export default function MainBanner() {
    return (
        <section className="main-banner-section">
            <div className="container">
                <div className="main-banner xl:flex items-center justify-between relative">
                    <div className="main-banner__left">
                        <div className="sticker-item mb-4 xl:mb-3">Brooklyn, New York</div>
                        <h1 className="mb-4 xl:mb-0">High-quality dental laboratory services for dental clinics in Brooklyn, NY</h1>
                        <p className="mb-4 xl:mb-3">
                            Innovative leadership, cutting-edge technology, and dedicated professionals. From simple
                            restorations to the most complex clinical cases.
                        </p>
                    </div>
                    <div className="main-banner__right relative">
                        <Image src="/images/main-page/main-image.png"
                               className="object-cover"
                               alt="Dental lab technician crafting zirconia crown in Brooklyn"
                               priority
                               fill
                        />
                    </div>
                    <div className="banner-buttons xl:flex items-center mt-4 xl:mt-0 gap-3" style={{bottom: '70px'}}>
                        <Link href={`/submit-case`} className="btn-main flex items-center justify-center">
                            Submit the Case
                            <svg className="svg-icon ml-2">
                                <use xlinkHref="/images/sprite.svg#arrow-icon"></use>
                            </svg>
                        </Link>
                        <Link href={`/services`} className="btn-default flex items-center justify-center">
                            Our Services
                            <svg className="svg-icon ml-2">
                                <use xlinkHref="/images/sprite.svg#arrow-icon"></use>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}