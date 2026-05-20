"use client";

import React, {useState} from "react";

type DepartmentTab = {
    id: number;
    shortTitle: string;
    title: string;
    lead: string;
    phone: string;
    email: string;
    coreCompetencies: string[];
};

export default function ReachOutTabsBlock() {
    const [activeTab, setActiveTab] = useState<number>(1);
    const tabsData: DepartmentTab[] = [
        {
            id: 1,
            shortTitle: 'Crown & Bridge',
            title: 'Crown & Bridge Department',
            lead: 'Alexander R. (Head Technician)',
            phone: '(718) 200-1532',
            email: 'crown.dept@respectdental.com',
            coreCompetencies: ['CAD/CAM Design', 'Rush Case Management', 'Zirconia Restorations & Materials'],
        },
        {
            id: 2,
            shortTitle: 'Removable Department',
            title: 'Removable Department',
            lead: 'Alexander R. (Head Technician)',
            phone: '(718) 200-1532',
            email: 'crown.dept@respectdental.com',
            coreCompetencies: ['CAD/CAM Design', 'Rush Case Management', 'Zirconia Restorations & Materials'],
        },
        {
            id: 3,
            shortTitle: 'Billing & Logistics',
            title: 'Billing & Logistics Department',
            lead: 'Alexander R. (Head Technician)',
            phone: '(718) 200-1532',
            email: 'crown.dept@respectdental.com',
            coreCompetencies: [],
        }
    ]

    return (
        <section className="section-padding-small">
            <div className="container">
                <div className="text-center">
                    <div className="sticker-item dark mb-3">Direct Support</div>
                </div>
                <div>
                    <h2 className="section-title text-center mb-3">Reach Out to Our Specialties Directly</h2>
                    <p className="text-center mb-4">Switch between the tabs to contact specific technicians and departments. </p>
                    <div className="tabs">
                        <ul className="tab-switcher flex items-center xl:justify-center gap-3 mb-4">
                            {tabsData.map((tabItem, i) => {
                                return (
                                    <li key={`contact-tab-switcher-${i}`}
                                        className={`tab-switcher__item ${activeTab === tabItem.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tabItem.id)}
                                    >
                                        {tabItem.shortTitle}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="tab-content">
                            {tabsData.map((tabContent, i) => {
                                return (
                                    <div key={`contact-tab-content-${i}`}
                                         className={`tab-content__item ${activeTab === tabContent.id ? 'active' : ''}`}
                                    >
                                        <div className="tab-content__item-wrap">
                                            <div className="tab-content__item-title mb-2">
                                                <h4 className="mb-2">{tabContent.title}</h4>
                                                <p className="mb-3">Department Lead: {tabContent.lead}</p>
                                            </div>
                                            <div className="tab-content__item-contact flex flex-col xl:flex-row gap-4 mb-2">
                                                <div>
                                                    <h5 className="mb-2">Direct Phone</h5>
                                                    <a href={`tel:${tabContent.phone}`}>{tabContent.phone}</a>
                                                </div>
                                                <div>
                                                    <h5 className="mb-2">Direct Phone</h5>
                                                    <a href={`mailto:${tabContent.email}`}>{tabContent.email}</a>
                                                </div>
                                            </div>
                                            {tabContent.coreCompetencies.length > 0 &&
                                                <div className="tab-content__item-competencies flex flex-col xl:flex-row items-center justify-center gap-2">
                                                    <span>Core Competencies:</span>
                                                    {tabContent.coreCompetencies.map((item, j) => {
                                                        return (
                                                            <div key={`contact-tab-competencies-${i}-${j}`} className="flex items-center gap-2">
                                                                <svg className="svg-icon">
                                                                    <use xlinkHref="/images/sprite.svg#shield-icon"></use>
                                                                </svg>
                                                                <strong>{item}</strong>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}