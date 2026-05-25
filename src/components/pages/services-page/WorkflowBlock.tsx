import React from "react";

const items = [
    {
        title: 'Digital Scan or Impression',
        text: 'Submit STL files instantly via our portal, or dispatch our complimentary courier service to collect physical silicone impressions.'
    },
    {
        title: 'CAD Design & Modeling',
        text: 'Our 3D designers analyze scan data in Exocad or 3Shape, meticulously sculpting parameters for perfect marginal seals and anatomy.'
    },
    {
        title: 'Precision Milling & Sintering',
        text: 'Restorations are milled using advanced German 5-axis CNC systems or 3D printed with micron-level tolerances under computerized control.'
    },
    {
        title: 'Glazing & Express Delivery',
        text: 'Master ceramists hand-apply individual shades and glaze. The restoration is fully sanitized and hand-delivered straight to your clinic.'
    }
];

export default function WorkflowBlock() {

    return (
        <section className="section-padding-small">
            <div className="container">
                <div className="text-center">
                    <div className="sticker-item dark mb-3">How We Partner</div>
                </div>
                <h2 className="section-title mb-3 text-center">Digital-to-Hand Seamless Workflow</h2>
                <p className="mb-4 text-center">
                    Integrating advanced dental laboratory logistics directly into your clinical practice,
                    from first scan to final cementation.
                </p>
                <div className="workflow-items flex flex-col xl:flex-row gap-3">
                    {items.map((item, i) => {
                        return (
                            <div key={`workflow-item-${i}`} className="workflow-items__item text-center">
                                <h4 className="mb-2">0{i + 1}</h4>
                                <h5 className="mb-2">{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}