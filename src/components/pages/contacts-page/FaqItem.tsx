"use client";

import React, {useEffect, useRef, useState} from "react";

type FaqItemProps = {
    title: string;
    text: string;
};

export default function FaqItem({ title, text }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className={`faq-block__item mb-4 ${isOpen ? 'opened' : ''}`}
             onClick={() => setIsOpen((prev) => !prev)}
        >
            <div className="faq-block__item-title flex justify-between items-center">
                <h4>{title}</h4>
                <div className="faq-block__item-arrow ml-3 flex items-center justify-center p-2">
                    <svg className="svg-icon">
                        <use xlinkHref="/images/sprite.svg#arrow-right-icon"></use>
                    </svg>
                </div>
            </div>
            <div ref={contentRef} className="faq-block__item-text" style={{ maxHeight }}>
                <div className="pt-3" dangerouslySetInnerHTML={{__html:text}}></div>
            </div>
        </div>
    );
}
