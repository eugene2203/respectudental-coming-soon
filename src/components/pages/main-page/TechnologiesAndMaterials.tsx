"use client"

import React, {useEffect, useMemo, useRef, useState} from "react";

interface AnalysisBarItem {
    title: string;
    shortTitle: string;
    number: string;
    color: string;
}

export default function TechnologiesAndMaterials() {
    const blockRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const analysisBar: AnalysisBarItem[] = [
        {title: 'Zirconia (Monolithic)', shortTitle: 'Zirconia', number: '1200', color: '#20B2AA'},
        {title: 'PFM (Metal Ceramic)', shortTitle: 'PFM', number: '800', color: '#228B22'},
        {title: 'IPS e.max', shortTitle: 'e.max', number: '400', color: '#64748B'}
    ];

    const maxValue = useMemo(() => {
        return Math.max(...analysisBar.map(item => Number(item.number)));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.8
            }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={blockRef} className="technologies-section">
            <div className="container">
                <div className="flex flex-col xl:flex-row items-center gap-8">
                    <div className="technologies-item">
                        <h2 className="section-title mb-4">Technologies and Materials</h2>
                        <p className="mb-3">
                            We rely on evidence-based dentistry and rigorous laboratory quality control.
                            The use of certified materials ensures long-lasting and predictable results for
                            your patients.
                        </p>
                        <div className="flex flex-col xl:flex-row gap-3 mb-8">
                            <button className="btn-main flex items-center justify-center">
                                Flexural Strength
                            </button>
                            <button className="btn-default">Aesthetics (Translucency)</button>
                        </div>
                        <div className="laboratory-info__left-text">
                            <h4 className="mb-4">Your success is <span className="color-text">OUR METRIC</span></h4>
                            <p className="mb-0">
                                Zirconia (zirconium dioxide): offers exceptional flexural strength of up
                                to 1,200 MPa. It is the ideal choice for the posterior teeth, patients with
                                bruxism, and long-span bridge restorations.
                            </p>
                        </div>
                    </div>
                    <div className="technologies-item">
                        <div className="technologies-analysis-wrap">
                            <h5>COMPARATIVE STRENGTH ANALYSIS (MPA)</h5>
                            <div className="technologies-analysis">
                                {analysisBar.map((item, i) => {
                                    const width = (Number(item.number) / maxValue) * 100;

                                    return (
                                        <div key={`technologies-analysis-${i}`} className="technologies-analysis__item flex items-center gap-3">
                                            <h6 className="shrink-0">
                                                <span className="hidden xl:inline">{item.title}</span>
                                                <span className="xl:hidden">{item.shortTitle}</span>
                                            </h6>
                                            <div className="technologies-analysis__item-bar-wrap">
                                                <div className="technologies-analysis__item-bar text-right"
                                                     style={{
                                                         background: item.color,
                                                         width: isVisible ? `${width}%` : '0%'
                                                     }}
                                                >
                                                    {item.number}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}