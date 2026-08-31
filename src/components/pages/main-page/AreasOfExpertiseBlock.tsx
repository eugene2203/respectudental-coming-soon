import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AreasOfExpertiseBlock() {
    const cards = [
        {
            img: '/images/main-page/crown_and_bridge_1.webp',
            title: 'CROWN & BRIDGE DEPARTMENT',
            slug: '/services',
            text: 'Highly aesthetic crowns and bridges. We use zirconia, IPS e.max and metal-ceramic for a perfect fit along the edges.Customized implant solutions. Screw-retained crowns and custom abutments that ensure a perfect emergence profile.',
            alt: 'Zirconia dental crown and bridge restorations'
        },
        {
            img: '/images/main-page/removable_1.webp',
            title: 'REMOVABLE DEPARTMENT',
            slug: '/services',
            text: '',
            alt: 'Custom removable dental prosthetics and dentures'
        },
    ];

    return (
        <section className="expertise-section">
            <div className="container">
                <h2 className="section-title mb-3">Our Areas of Expertise</h2>
                <p className="mb-8">We offer a full range of dental laboratory services, specializing in high-precision aesthetics and functionality.</p>
                <div className="expertise-wrap flex flex-col xl:flex-row gap-4 mb-8">
                    {cards.map((item, i) => {
                        return (
                            <div key={`expertise-card-${i}`} className="expertise-card">
                                <div className="expertise-card__img relative">
                                    <Link href={item.slug} className="fake-link-block" aria-label={item.title}></Link>
                                    <Image src={item.img}
                                           className="object-cover"
                                           alt={item.alt}
                                           fill
                                    />
                                </div>
                                <div className="p-4">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="mb-8">{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className="mb-4 font-bold">Questions you may get from your dentist</p>
                <p className="mb-4">Your dentist will be fabricating your new set of dentures with meticulous attention to detail
                    and the information you can provide is essential to this process. Some of the questions he or she may ask are
                    shown below. You may want to consider them before going into the surgery to the dentist.</p>
                <ul style={{ listStyleType: "auto", marginLeft: "3em", "paddingTop": "1em", paddingBottom: "1em" }}>
                    <li>What are the problems with your present dentures?</li>
                    <li>What improvements would you like, if possible?</li>
                    <li>Are you happy with the size, colour, shape and position of your teeth?</li>
                    <li>Can you speak clearly with your current set?</li>
                    <li>What do you like about your present dentures?</li>
                </ul>
                <p className="mb-4">People often look best when teeth of a similar size and shape to their original teeth are chosen.
                    If you have a photograph showing them, then bring it with you since it will help with the choice.</p>
                <p className="mb-4"><strong>Note:</strong> Sometimes it helps to have a friend or member of your family present when the final set-up
                    of the teeth in wax is checked to make sure that the appearance is just right. Discuss this with your dentist.
                    At this stage teeth can easily be repositioned, afterwards they can’t.</p>
            </div>
        </section>
    );
}