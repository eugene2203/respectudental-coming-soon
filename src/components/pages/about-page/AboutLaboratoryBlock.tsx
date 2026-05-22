import React from "react";
import Image from "next/image";
import LogosBlock from "@/components/pages/main-page/LogosBlock";

export default function AboutLaboratoryBlock() {
    return (
        <section className="laboratory-info-section section-padding">
            <div className="container">
                <div className="laboratory-info flex flex-col xl:flex-row">
                    <div className="laboratory-info__text">
                        <div className="sticker-item dark mb-4">ABOUT THE LABORATORY</div>
                        <h2 className="section-title mb-3">Bridging global techniques with <span className="color-text">local standards</span></h2>
                        <p className="mb-3">
                            We began our journey as a small studio focused on aesthetics. Today,
                            Respect Dental Lab is a high-tech facility in Brooklyn, serving New York's
                            leading dental practices.
                        </p>
                        <p className="mb-3">
                            Our advantage lies in the details. We don't just "manufacture crowns";
                            we analyze each clinical case alongside the doctor to ensure the results
                            exceed the patient's expectations.
                        </p>
                        <LogosBlock/>
                        <div className="laboratory-info__side-text">
                            <h4 className="mb-4">Your success is <span className="color-text">OUR METRIC</span></h4>
                            <p className="mb-0">We focus on solutions that help grow your practice and ensure patient satisfaction.</p>
                        </div>
                    </div>
                    <div className="laboratory-info__img shrink-0">
                        <div className="laboratory-info__img-wrap relative mb-3">
                            <Image src="/images/about-page/laboratory-img-2.png"
                                   className="object-cover"
                                   alt="laboratory-img"
                                   fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}