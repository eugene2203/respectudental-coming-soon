import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Specialization } from "@/lib/specializations";

interface Props {
    specialization: Specialization;
    otherSpecializations: Specialization[];
}

export default function SpecializationContent({ specialization, otherSpecializations }: Props) {
    return (
        <article className="spec-content-section section-padding">
            <div className="container">
                <div className="spec-content__layout">

                    {/* ---- Main content ---- */}
                    <div className="spec-content__main">

                        <div className="spec-content__cover">
                            <Image
                                src={specialization.img}
                                alt={specialization.alt}
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                                sizes="(max-width: 1280px) 100vw, 800px"
                            />
                        </div>

                        <div className="spec-content__header">
                            <span className="sticker-item">Clinical Specialization</span>
                            <h1 className="spec-content__title">{specialization.title}</h1>
                        </div>

                        <div className="spec-content__body">
                            <p className="spec-content__intro">{specialization.content.intro}</p>

                            {specialization.content.sections.map((section, i) => (
                                <div key={i} className="spec-content__section">
                                    <h2 className="spec-content__section-heading">{section.heading}</h2>
                                    <p>{section.body}</p>
                                </div>
                            ))}

                            <div className="spec-content__clinical-note">
                                <span className="spec-content__clinical-note-label">Clinical Note</span>
                                <p>{specialization.content.clinicalNote}</p>
                            </div>
                        </div>

                        <div className="spec-content__cta">
                            <Link href="/contact" className="btn-main">Request a Consultation</Link>
                            <Link href="/services" className="btn-default">All Services</Link>
                        </div>

                    </div>

                    {/* ---- Sidebar ---- */}
                    <aside className="spec-content__sidebar">
                        <div className="spec-content__sidebar-inner">
                            <h3 className="spec-content__sidebar-title">Other Specializations</h3>
                            <div className="spec-other">
                                {otherSpecializations.map((spec) => (
                                    <Link key={spec.slug} href={`/services/${spec.slug}`} className="spec-other__item">
                                        <div className="spec-other__img-wrap">
                                            <Image
                                                src={spec.img}
                                                alt={spec.alt}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                sizes="80px"
                                            />
                                        </div>
                                        <div className="spec-other__info">
                                            <span className="spec-other__title">{spec.title}</span>
                                            <span className="spec-other__text">{spec.text}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </article>
    );
}