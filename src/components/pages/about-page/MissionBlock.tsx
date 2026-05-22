import React from "react";

export default function MissionBlock() {
    const missionCards = [
        {icon: 'target-icon', title: 'Mission', text: 'To provide dental clinics with high-precision prosthetic solutions, improving patients\' quality of life through their smiles.'} ,
        {icon: 'target-icon', title: 'Reliability', text: 'We use only certified materials (Zirconia, IPS e.max) and guarantee the durability and biocompatibility of every restoration.'}  ,
        {icon: 'target-icon', title: 'Innovation', text: 'Continuous implementation of CAD/CAM technologies and 3D printing allows us to achieve a perfect fit every single time.'}
    ]

    return (
        <section className="about-mission-section section-padding">
            <div className="container">
                <h2 className="section-title-center mb-8">Our Mission & Values</h2>
                <div className="about-mission-cards flex flex-col xl:flex-row gap-3">
                    {missionCards.map((item, i) => {
                        return (
                            <div key={`about-mission-card-${i}`} className="about-mission-cards__item">
                                <svg className="svg-icon mb-4">
                                    <use xlinkHref={`/images/sprite.svg#${item.icon}`}></use>
                                </svg>
                                <h4 className="mb-3">{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}