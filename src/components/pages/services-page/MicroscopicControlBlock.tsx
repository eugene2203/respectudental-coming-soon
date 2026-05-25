import React from "react";

export default function MicroscopicControlBlock() {

    return (
        <section className="microscopic-control-section section-padding-small">
            <div className="container">
                <h2 className="section-title mb-3">Meticulous Precision Under Microscopic Control</h2>
                <p className="mb-3">
                    We offer a comprehensive suite of dental lab services, focusing on high-precision esthetics
                    and long-term functional stability for every patient.
                </p>
                <p className="mb-3">
                    Our laboratory operates in strict compliance with FDA regulations and New York State
                    dental lab guidelines. Each restoration is verified under high-power dental microscopes
                    before dispatch.
                </p>
                <div className="py-3 mb-4">
                    <div className="microscopic-control-icon-block flex gap-2 mb-8">
                        <div className="shrink-0">
                            <svg className="svg-icon">
                                <use xlinkHref="/images/sprite.svg#shield-icon"></use>
                            </svg>
                        </div>
                        <div>
                            <h5>FDA-Cleared Restorative Materials</h5>
                            <p>100% biocompatible zirconium discs and ceramic systems.</p>
                        </div>
                    </div>
                    <div className="microscopic-control-icon-block flex gap-2">
                        <div className="shrink-0">
                            <svg className="svg-icon">
                                <use xlinkHref="/images/sprite.svg#medal-icon"></use>
                            </svg>
                        </div>
                        <div>
                            <h5>CDT Certified Laboratory Technicians</h5>
                            <p>Quality control and fabrication supervised by US-accredited master technicians.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-2">
                    <div className="microscopic-control-quote-block xl:w-1/2">
                        <h4 className="mb-2">99.8%</h4>
                        <h5 className="mb-2">Clinical Success Rate</h5>
                        <p>
                            Advanced CAD/CAM workflows virtually eliminate fitting errors,
                            dramatically reducing seat-time and adjustments.
                        </p>
                    </div>
                    <div className="microscopic-control-quote-block xl:w-1/2">
                        <h4 className="mb-2">100%</h4>
                        <h5 className="mb-2">On-Time Delivery Guarantee</h5>
                        <p>
                            We respect your office schedule. Rest assured your case will arrive precisely
                            when promised for your patient's appointment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}