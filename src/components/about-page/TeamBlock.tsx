import React from "react";
import Image from "next/image";

export default function TeamBlock() {
    const teamCards = [
        {img: '/images/about-page/head-technical.png', name: 'Alexander R.', position: 'Head Technician / CDT'},
        {img: '/images/about-page/ceramic-specialist.png', name: 'Maria S.', position: 'Ceramic Specialist'},
        {img: '/images/about-page/CAD-CAM-designer.png', name: 'John D.', position: 'Elena V.'},
        {img: '/images/about-page/removable-department.png', name: 'CAD/CAM Designer', position: 'Removable Department'}
    ];

    return (
        <section className="team-section section-padding">
            <div className="container">
                <h2 className="section-title-center mb-8">Our Expert Team</h2>
                <p className="text-center mb-8">Our technicians undergo regular certification and training with global leaders in the dental industry.</p>
                <div className="team-cards flex gap-3 flex-wrap xl:flex-nowrap">
                    {teamCards.map((person, i) => {
                        return (
                            <div key={`team-person-${i}`} className="team-cards__item">
                                <div className="team-cards__item-img relative mb-4">
                                    <Image src={person.img}
                                           className="object-cover"
                                           alt={`${person.name} - photo`}
                                           fill
                                    />
                                </div>
                                <h6 className="mb-2">{person.name}</h6>
                                <p>{person.position}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}