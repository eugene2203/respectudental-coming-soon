export type SubmitCaseCheckboxOption = {
    value: string;
    label: string;
};

/** Universal tooth numbering (1–32) */
export const INVOLVED_TEETH_OPTIONS: SubmitCaseCheckboxOption[] = Array.from(
    { length: 32 },
    (_, index) => {
        const tooth = String(index + 1);
        return { value: tooth, label: tooth };
    }
);

/** Upper arch: teeth 1–16 (label above checkbox) */
export const INVOLVED_TEETH_UPPER_OPTIONS = INVOLVED_TEETH_OPTIONS.slice(0, 16);

/** Lower arch: teeth 17–32 (label below checkbox) */
export const INVOLVED_TEETH_LOWER_OPTIONS = INVOLVED_TEETH_OPTIONS.slice(16, 32);

/** Included items — adjust labels to match your Rx design */
export const INCLUDED_OPTIONS: SubmitCaseCheckboxOption[] = [
    { value: "digitalFile", label: "Digital file" },
    { value: "impression", label: "Impression" },
    { value: "biteRegistration", label: "Bite registration" },
    { value: "masterCast", label: "Master cast" },
    { value: "opposingCast", label: "Opposing cast" },
    { value: "studyModel", label: "Study model" },
];
