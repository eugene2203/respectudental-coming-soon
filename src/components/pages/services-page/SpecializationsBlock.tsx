'use client';

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { specializations } from "@/lib/specializations";

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
                    {specializations.map((item, i) => {
                        return (
                            <div key={`expertise-card-${i}`} className="expertise-card">
                                <div className="expertise-card__img relative">
                                    <Link href={`/services/${item.slug}`} className="fake-link-block" aria-label={item.title}></Link>
                                    <Image src={item.img}
                                           alt={item.alt}
                                           fill
                                           style={{ objectFit: "cover" }}
                                           sizes="(max-width: 1280px) 100vw, 32vw"
                                    />
                                </div>
                                <div className="p-4">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="mb-8">{item.text}</p>
                                    <Link href={`/services/${item.slug}`} className="inline-flex items-center justify-center">
                                        Explore Technique
                                        <svg className="svg-icon ml-2">
                                            <use xlinkHref="/images/sprite.svg#arrow-icon"></use>
                                        </svg>
                                    </Link>
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