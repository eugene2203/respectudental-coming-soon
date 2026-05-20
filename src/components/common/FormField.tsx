import React from "react";
import {
    FieldErrors,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    id: Path<T>;
    label: string;
    type?: string;
    placeholder?: string;
    as?: 'input' | 'textarea';
    rows?: number;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    isSubmitting?: boolean;
    readOnly?: boolean;
}

export default function FormField<T extends FieldValues>({
     id,
     label,
     placeholder,
     type = 'text',
     as = 'input',
     rows = 5,
     register,
     errors,
     isSubmitting = false,
     readOnly = false
}: FormFieldProps<T>) {
    const error = errors[id];

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>

            <div className="relative">
                {as === "textarea" ? (
                    <textarea
                        id={id}
                        rows={rows}
                        {...register(id)}
                        className={error ? 'error' : ''}
                        disabled={isSubmitting}
                        readOnly={readOnly}
                    />
                ) : (
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        {...register(id)}
                        className={error ? 'error' : ''}
                        disabled={isSubmitting}
                        readOnly={readOnly}
                    />
                )}

                {error && (
                    <svg className="error-icon svg-icon">
                        <use xlinkHref="/images/sprite.svg#error-icon" />
                    </svg>
                )}
            </div>

            {error && (
                <span className="error-message">
                    {error.message as string}
                </span>
            )}
        </div>
    );
}