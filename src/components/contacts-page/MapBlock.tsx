import React from "react";

export default function MapBlock() {
    return (
        <section className="map-section section-padding-small">
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-4 items-center">
                    <div className="xl:w-1/2">
                        <h2 className="section-title mb-3">Located in the Heart of Brooklyn</h2>
                        <p className="mb-4">
                            Our central location allows us to coordinate seamless local delivery operations.
                            We provide scheduled pick-up and delivery services twice a day for our local partners.
                        </p>
                        <div className="laboratory-info__side-text mb-4">
                            <h4 className="mb-4"><span className="color-text">100%</span></h4>
                            <p className="mb-0 font-bold">Free courier delivery throughout Brooklyn</p>
                        </div>
                        <div className="laboratory-info__side-text">
                            <h4 className="mb-4"><span className="color-text">2 Hours</span></h4>
                            <p className="mb-0 font-bold">Average local courier dispatch & pick-up response</p>
                        </div>
                    </div>
                    <div className="map-wrap w-full xl:w-1/2">
                        <iframe
                            src="https://www.google.com/maps?q=1+Woodside+Ave+Brooklyn+NY+11223&output=embed"
                            width="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}