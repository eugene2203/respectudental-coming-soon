import React from "react";

export default function BlogBanner() {
    return (
        <section className="blog-banner-section section-padding-small">
            <div className="container">
                <div className="blog-banner__inner">
                    <span className="sticker-item">Laboratory Insights</span>
                    <h1 className="blog-banner__title">
                        Expert Knowledge<br />From the Bench
                    </h1>
                    <p className="blog-banner__subtitle">
                        Practical articles on materials, technology, and best practices — written
                        by the technicians at Respect U Dental Lab for dental clinicians.
                    </p>
                </div>
            </div>
        </section>
    );
}