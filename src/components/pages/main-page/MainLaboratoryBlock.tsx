import React from "react";
import Image from "next/image";
import LogosBlock from "./LogosBlock";

export default function MainLaboratoryBlock() {
    return (
        <section className="laboratory-info-section section-padding">
            <div className="container">
                <div className="laboratory-info flex flex-col-reverse xl:flex-row">
                    <div className="laboratory-info__img shrink-0">
                        <div className="laboratory-info__img-wrap relative mb-3">
                            <Image src="/images/main-page/laboratory-img_cleanup.png"
                                   className="object-cover"
                                   alt="CDT-accredited dental lab workspace in Brooklyn, NY"
                                   fill
                                   quality={65}
                            />
                        </div>
                        <div className="laboratory-info__side-text">
                            <h4 className="mb-4">Your success is <span className="color-text">OUR METRIC</span></h4>
                            <p className="mb-0">We focus on solutions that help grow your practice and ensure patient satisfaction.</p>
                        </div>
                    </div>
                    <div className="laboratory-info__text">
                        <div className="sticker-item dark mb-4">ABOUT THE LABORATORY</div>
                        <h2 className="section-title mb-3">Bridging global techniques with <span className="color-text">local standards</span></h2>
                        <p className="mb-3">
                            We are a team of technicians who combine international expertise with
                            US-based “CDT” accreditation. By bridging global techniques with rigorous
                            local standards, we deliver HIGH-QUALITY prosthetics and appliances crafted
                            exclusively from industry-leading materials. From CROWNS AND BRIDGES TO COMPLEX
                            DENTURES, we use only reputable, high-performance materials.
                        </p>
                        <p className="mb-3">
                            We don’t just provide restorations; <span className="font-bold">we improve your practice’s workflow.</span>
                            Whether you are clearing a small hurdle or embarking on a major project, we
                            simplify the process every step of the way.
                        </p>
                        <div className="laboratory-info__quote mb-3">
                            WE DON’T STOP WORKING UNTIL YOU AND YOUR PATIENTS ARE SATISFIED.
                        </div>
                        {/*<LogosBlock/>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}