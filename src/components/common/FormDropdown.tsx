'use client'

import React, { useEffect, useRef, useState, type ReactNode } from 'react'

export type FormDropdownOption = {
    name: string
    value: string
}

type FormDropdownProps = {
    items: FormDropdownOption[]
    onChange?: (item: FormDropdownOption) => void
    children: ReactNode
    className?: string
}

export default function FormDropdown({
    items,
    onChange,
    children,
    className,
}: FormDropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    const handleSelect = (item: FormDropdownOption) => {
        onChange?.(item)
        setIsOpen(false)
    }

    return (
        <div ref={rootRef} className={`form-dropdown relative ${className}`}>
            <div className="form-dropdown__trigger relative"
                 onClick={() => setIsOpen((prev) => !prev)}
                 role="button"
                 tabIndex={0}
                 aria-expanded={isOpen}
                 onKeyDown={(event) => {
                     if (event.key === 'Enter' || event.key === ' ') {
                         event.preventDefault()
                         setIsOpen((prev) => !prev)
                     }
                 }}
            >
                {children}
                <svg className={`dropdown-icon svg-icon absolute ${isOpen ? 'opened' : ''}`}>
                    <use xlinkHref="/images/sprite.svg#arrow-right-icon" />
                </svg>
            </div>

            {isOpen && (
                <ul className="form-dropdown__list" role="listbox">
                    {items.map((item) => (
                        <li key={item.value} role="option">
                            <button type="button"
                                    className="form-dropdown__item text-left"
                                    onClick={() => handleSelect(item)}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
