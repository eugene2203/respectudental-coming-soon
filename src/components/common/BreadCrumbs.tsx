import React from "react";
import Link from "next/link";
import {BreadCrumbsProps} from "@/types";

export default function BreadCrumbs({parentPages, page}: BreadCrumbsProps) {
    return (
        <section className="breadcrumbs-section">
            <div className="container">
                <ul className="breadcrumbs flex items-center">
                    {/* Home */}
                    <li className="breadcrumbs__item">
                        <Link href="/">
                            <svg className="svg-icon home-icon shrink-0 mr-2">
                                <use xlinkHref="/images/sprite.svg#home-icon"></use>
                            </svg>
                        </Link>
                    </li>

                    {/* Parent pages */}
                    {parentPages && parentPages.map((parentPage, index) => (
                        <li key={`parent-link-${index}`} className="breadcrumbs__item flex items-center">
                            <svg className="svg-icon shrink-0 mr-2">
                                <use xlinkHref="/images/sprite.svg#arrow-right-icon"></use>
                            </svg>
                            <Link href={parentPage.link} className="flex items-center">
                                {parentPage.cap}
                            </Link>
                        </li>
                    ))}

                    {/* Current page */}
                    <li className="breadcrumbs__item flex items-center">
                        <svg className="svg-icon shrink-0 mr-2">
                            <use xlinkHref="/images/sprite.svg#arrow-right-icon"></use>
                        </svg>
                        {page}
                    </li>
                </ul>
            </div>
        </section>
    );
}