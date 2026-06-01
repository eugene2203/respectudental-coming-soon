import React from "react";
import {
    FieldErrors,
    FieldValues,
    Path,
    PathValue,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";

type CheckboxFieldValue<
    T extends FieldValues,
    TName extends Path<T>,
> = PathValue<T, TName> extends ReadonlyArray<infer Item>
    ? Item
    : PathValue<T, TName>;

interface FormCheckboxProps<
    T extends FieldValues,
    TName extends Path<T> = Path<T>,
> {
    id: TName;
    label: string;
    value?: CheckboxFieldValue<T, TName>;
    labelPosition?: "top" | "bottom";
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    isSubmitting?: boolean;
}

export default function FormCheckbox<
    T extends FieldValues,
    TName extends Path<T> = Path<T>,
>({
    id,
    label,
    value,
    labelPosition,
    register,
    errors,
    isSubmitting = false,
}: FormCheckboxProps<T, TName>) {
    const error = errors[id];
    const registerProps =
        value !== undefined
            ? register(id, { value } as RegisterOptions<T, TName>)
            : register(id);

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
