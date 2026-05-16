import React from "react";

export default function ReadyToPartnerBlock() {
    return (
        <section className="ready-to-partner-section">
            <div className="container">
                <div className="ready-to-partner text-center mx-auto">
                    <h2 className="mb-4">Ready to Partner With Us?</h2>
                    <p className="mb-4">Discover how our technology can help your practice reduce chair time and increase patient loyalty.</p>
                    <div className="flex gap-3 flex-col xl:flex-row justify-center">
                        <button className="btn-main flex items-center justify-center">
                            Become a Partner
                        </button>
                        <button className="btn-default flex items-center justify-center">
                            Download Price List
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}