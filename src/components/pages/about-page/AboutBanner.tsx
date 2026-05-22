import React from "react";
import Image from 'next/image';

export default function AboutBanner() {
    return (
        <section className="about-banner-section section-padding-small">
            <div className="container">
                <div className="main-banner xl:flex items-center justify-between relative">
                    <div className="main-banner__left">
                        <div className="sticker-item mb-4 xl:mb-3">Brooklyn, New York</div>
                        <h1 className="mb-4 xl:mb-0">Creating smiles built<br/> on <span className="color-text">precision</span> and trust</h1>
                        <p className="mb-4 xl:mb-3">
                            Respect Dental Lab is more than just a laboratory. It is a team of experts
                            dedicated to the art and science of digital dentistry. We combine international
                            expertise with the most rigorous US quality standards.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="main-banner__right relative">
                            <Image src="/images/about-page/about-banner.png"
                                   className="object-cover"
                                   alt="Banner"
                                   fill
                            />
                        </div>
                        <div className="years-of-experience flex items-center xl:block mt-4 xl:mt-0">
                            <div>15+</div>
                            <span>Years of experience in the dental industry</span>
                        </div>
                    </div>
                    <div className="banner-buttons xl:flex items-center mt-4 xl:mt-0 gap-3" style={{bottom: '100px'}}>
                        <div className="check-text flex items-center">
                            <svg className="svg-icon mr-2">
                                <use xlinkHref="/images/sprite.svg#check-icon"></use>
                            </svg>
                            <span>CDT Certification</span>
                        </div>
                        <div className="check-text flex items-center">
                            <svg className="svg-icon mr-2">
                                <use xlinkHref="/images/sprite.svg#check-icon"></use>
                            </svg>
                            <span>Digital Workflow</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}