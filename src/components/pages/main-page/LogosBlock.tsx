import React from "react";

export default function LogosBlock() {
    const logos = [
        'formlabs-icon', '3shape-logo-icon', 'lvocal-icon', 'amann-icon'
    ]

    return (
        <div className="laboratory-info__logos">
            {/*<h5 className="mb-2">Some Title Here</h5>*/}
            <div className="flex flex-wrap xl:flex-nowrap gap-8 justify-center md:justify-start">
                {logos.map((logoIcon, i) => {
                    return (
                        <div key={`logo-laboratory-${i}`} className="logo-wrap relative">
                            <svg className="svg-icon">
                                <use xlinkHref={`/images/sprite.svg#${logoIcon}`}></use>
                            </svg>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}