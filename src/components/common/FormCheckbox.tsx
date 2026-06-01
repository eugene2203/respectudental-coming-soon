import React from "react";
import {
    FieldErrors,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

interface FormCheckboxProps<T extends FieldValues> {
    id: Path<T>;
    label: string;
    value?: string;
    labelPosition?: "top" | "bottom";
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    isSubmitting?: boolean;
}

export default function FormCheckbox<T extends FieldValues>({
    id,
    label,
    value,
    labelPosition,
    register,
    errors,
    isSubmitting = false,
}: FormCheckboxProps<T>) {
    const error = errors[id];
    const registerProps =
        value !== undefined ? register(id, { value }) : register(id);

    const labelClassName = [
        "form-checkbox__label",
        labelPosition === "top" && "form-checkbox__label--top",
        labelPosition === "bottom" && "form-checkbox__label--bottom",
    ]
        .filter(Boolean)
        .join(" ");

    const labelText = <span className="form-checkbox__text">{label}</span>;
    const checkbox = (
        <input
            type="checkbox"
            {...registerProps}
            className={error ? "error" : ""}
            disabled={isSubmitting}
        />
    );

    return (
        <div className="form-checkbox">
            <label className={labelClassName}>
                {labelPosition === "top" && (
                    <>
                        {labelText}
                        {checkbox}
                    </>
                )}
                {labelPosition === "bottom" && (
                    <>
                        {checkbox}
                        {labelText}
                    </>
                )}
                {!labelPosition && (
                    <>
                        {checkbox}
                        {labelText}
                    </>
                )}
            </label>
        </div>
    );
}
