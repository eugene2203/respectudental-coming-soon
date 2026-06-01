import React from "react";

type ContactInfoItem = {
    id: number;
    title: string;
    icon: string;
    link: string | null;
    text1: string;
    text2: string;
};

export default function ContactInfo() {
    const contactInfo: ContactInfoItem[] = [
        {
            id: 1,
            title: 'Laboratory Address',
            icon: 'address-marker',
            link: 'https://www.google.com/maps/place/1+Woodside+Ave,+Brooklyn,+NY+11223',
            text1: '1 Woodside Ave, Brooklyn, NY 11223',
            text2: 'View on map',
        },
        {
            id: 2,
            title: 'Phone Number',
            icon: 'phone',
            link: 'tel:7182001532',
            text1: `(718) 200-1532`,
            text2: `Direct laboratory line for clinics and clinicians`
        },
        {
            id: 3,
            title: 'Email Address',
            icon: 'email',
            link: 'mailto:contact@respectdental.com',
            text1: `contact@respectdental.com`,
            text2: `For general inquiries, case files, and pricing`
        },
        {
            id: 4,
            title: 'Operating Hours',
            icon: 'clock',
            link: null,
            text1: `Monday — Friday: 10:00am – 5:00pm`,
            text2: `Saturday — Sunday: Closed`
        }
    ];

    return (
        <div className="contact-info-block shrink-0 mb-3 xl:mb-0">
            <h3 className="pb-4 mb-3">Contact Information</h3>
            <div className="contact-info-block-items">
                {contactInfo.map((item, i) => {
                    return (
                        <div key={`contact-info-${i}`} className="contact-info-block__item relative mb-3 xl:mb-16">
                            {item.link &&
                                <a href={item.link}
                                   className="fake-link-block"
                                   target="_blank"
                                ></a>
                            }
                            <div className="flex items-start gap-3">
                                <div className="contact-info-block__item-icon shrink-0">
                                    <svg className="svg-icon">
                                        <use xlinkHref={`/images/sprite.svg#${item.icon}-icon`}></use>
                                    </svg>
                                </div>
                                <div className="contact-info-block__item-text">
                                    <h4 className="mb-2">{item.title}</h4>
                                    <div>
                                        <p className="mb-2">{item.text1}</p>
                                        {item.id === 1 ?
                                            <button className="flex items-center mt-1">
                                                {item.text2}
                                                <svg className="svg-icon shrink-0 ml-1">
                                                    <use xlinkHref="/images/sprite.svg#arrow-right-icon"></use>
                                                </svg>
                                            </button>
                                        :
                                            <span>{item.text2}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}