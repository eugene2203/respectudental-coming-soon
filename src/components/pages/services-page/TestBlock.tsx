import React from "react";
import Link from "next/link";

export default function TestBlock() {
    return (
        <section className="ready-to-partner-section section-padding-small">
            <div className="container">
                <div className="ready-to-partner text-center mx-auto">
                    <h2 className="mb-4">Test Our Accuracy with a Complimentary Case</h2>
                    <p className="mb-4">
                        We are pleased to offer a complimentary monolithic zirconia crown for new partners.
                        Experience our marginal integrity, dense contacts, and natural anatomy firsthand.
                    </p>
                    <div className="flex gap-3 flex-col xl:flex-row justify-center">
                        <Link href={`/submit-case`} className="btn-main flex items-center justify-center">
                            Submit Test Case
                            <svg className="svg-icon ml-2">
                                <use xlinkHref="/images/sprite.svg#arrow-icon"></use>
                            </svg>
                        </Link>
                        <button className="btn-default flex items-center justify-center">
                            Download Price Booklet
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}