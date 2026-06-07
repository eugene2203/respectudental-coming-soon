import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AreasOfExpertiseBlock() {
    const cards = [
        {
            img: '/images/main-page/teeth-img-1.png',
            title: 'CROWN & BRIDGE DEPARTMENT',
            slug: '/services',
            text: 'Highly aesthetic crowns and bridges. We use zirconia, IPS e.max and metal-ceramic for a perfect fit along the edges.'
        },
        {
            img: '/images/main-page/teeth-img-2.png',
            title: 'REMOVABLE DEPARTMENT',
            slug: '/services',
            text: 'Customized implant solutions. Screw-retained crowns and custom abutments that ensure a perfect emergence profile.'
        },
    ];

    return (
        <section className="expertise-section">
            <div className="container">
                <h2 className="section-title mb-3">Our Areas of Expertise</h2>
                <p className="mb-8">We offer a full range of dental laboratory services, specializing in high-precision aesthetics and functionality.</p>
                <div className="expertise-wrap flex flex-col xl:flex-row gap-4">
                    {cards.map((item, i) => {
                        return (
                            <div key={`expertise-card-${i}`} className="expertise-card">
                                <div className="expertise-card__img relative">
                                    <Link href={item.slug} className="fake-link-block"></Link>
                                    <Image src={item.img}
                                           className="object-cover"
                                           alt="expertise-card"
                                           fill
                                    />
                                </div>
                                <div className="p-4">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="mb-8">{item.text}</p>
                                    {/*<Link href={item.slug} className="inline-flex items-center justify-center">*/}
                                    {/*    Learn more*/}
                                    {/*    <svg className="svg-icon ml-2">*/}
                                    {/*        <use xlinkHref="/images/sprite.svg#arrow-icon"></use>*/}
                                    {/*    </svg>*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}