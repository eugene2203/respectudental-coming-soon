'use client';

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
    {
        img: '/images/services-page/img-1.png',
        title: 'Crown & Bridge',
        slug: '/',
        text: 'Premium restorations using high-translucency zirconia and hand-layered porcelain for natural esthetics.',
        alt: 'Zirconia crown and bridge restoration example'
    },
    {
        img: '/images/services-page/img-2.png',
        title: 'Implant Restorations',
        slug: '/',
        text: 'Custom abutments and screw-retained solutions for all major implant systems with high precision fit.',
        alt: 'Custom dental implant abutment restoration'
    },
    {
        img: '/images/services-page/img-3.png',
        title: 'Digital Workflow',
        slug: '/',
        text: 'Seamless integration with 3Shape, iTero, and Medit scanners for faster turnaround and better accuracy.',
        alt: 'Digital dental workflow with 3Shape scanner'
    },
    {
        img: '/images/services-page/img-4.png',
        title: 'Removable Prosthetics',
        slug: '/',
        text: 'Durable dentures, partials, and Valplast solutions designed for maximum comfort and long-term stability.',
        alt: 'Removable partial denture prosthetic'
    },
    {
        img: '/images/services-page/img-5.png',
        title: 'Orthodontics',
        slug: '/',
        text: 'Custom clear aligner manufacturing and orthodontic appliances tailored to specific clinical treatment plans.',
        alt: 'Clear aligner orthodontic appliance'
    },
    {
        img: '/images/services-page/img-6.png',
        title: 'Custom Esthetics',
        slug: '/',
        text: 'Personalized shade matching and diagnostic wax-ups to ensure predictable results for complex cases.',
        alt: 'Custom shade matching for dental esthetics'
    },
];

export default function SpecializationsBlock() {
    const [isShown, setIsShown] = useState(false);
    return (
        <section className="specializations-section section-padding-small">
            <div className="container">
                <h2 className="section-title mb-3 text-center">Our Clinical Specializations</h2>
                <p className="mb-4 text-center">
                    We offer a comprehensive suite of dental lab services, focusing on high-precision esthetics
                    and long-term functional stability for every patient.
                </p>
                <div className={`expertise-wrap flex flex-col xl:flex-row gap-4 xl:flex-wrap relative ${isShown ? 'shown' : ''}`}>
                    {cards.map((item, i) => {
                        return (
                            <div key={`expertise-card-${i}`} className="expertise-card">
                                <div className="expertise-card__img relative">
                                    {/*<Link href={item.slug} className="fake-link-block"></Link>*/}
                                    <Image src={item.img}
                                           className="object-cover"
                                           alt={item.alt}
                                           fill
                                    />
                                </div>
                                <div className="p-4">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="mb-8">{item.text}</p>
                                    {/*<Link href={item.slug} className="inline-flex items-center justify-center">*/}
                                    {/*    Explore Technique*/}
                                    {/*    <svg className="svg-icon ml-2">*/}
                                    {/*        <use xlinkHref="/images/sprite.svg#arrow-icon"></use>*/}
                                    {/*    </svg>*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                        )
                    })}
                    <button type="button"
                            className={`show-all-btn ${!isShown ? 'absolute' : ''} flex items-center justify-center xl:hidden text-center`}
                            onClick={() => setIsShown(!isShown)}
                    >
                        {isShown ? 'Hide Specializations' : 'Show All Specializations'}
                        <svg className="svg-icon ml-2">
                            <use xlinkHref="/images/sprite.svg#arrow-right-icon"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}