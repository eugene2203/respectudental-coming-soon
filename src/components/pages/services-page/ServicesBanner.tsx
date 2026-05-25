import React from "react";
import Image from 'next/image';

export default function ServicesBanner() {
    return (
        <section className="services-banner about-banner-section section-padding-small">
            <div className="container">
                <div className="main-banner xl:flex items-center justify-between relative">
                    <div className="main-banner__left">
                        <div className="sticker-item mb-4 xl:mb-3">Solutions Portfolio</div>
                        <h1 className="mb-4 xl:mb-0">Next-Generation High-Precision Prosthetic Restorations</h1>
                        <p className="mb-4 xl:mb-3">
                            We combine advanced German 5-axis CAD/CAM milling, certified premium materials,
                            and multi-tier microscopic quality control. Our absolute commitment is to deliver
                            perfect marginal integrity, reliable turnaround times, and flawless aesthetics
                            for your patients.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="main-banner__right relative">
                            <Image src="/images/services-page/services-banner.png"
                                   className="object-cover"
                                   alt="Banner"
                                   fill
                            />
                        </div>
                        <div className="years-of-experience xl:block mt-4 xl:mt-0">
                            <div>{'< 5.0 μm'}</div>
                            <span>Micron-level precision minimizing chairside occlusal adjustments.</span>
                        </div>
                    </div>
                    <div className="banner-buttons xl:flex items-center mt-4 xl:mt-0 gap-3" style={{bottom: '35px'}}>
                        <div className="btn-black flex items-center">
                            <svg className="svg-icon mr-2">
                                <use xlinkHref="/images/sprite.svg#download-icon"></use>
                            </svg>
                            <span> Download Price List (PDF)</span>
                        </div>
                        <div className="btn-default flex items-center">
                            <span>Contact the Lab</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}