import { Metadata } from "next";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import SubmitCaseForm from "@/components/forms/SubmitCaseForm";

export const metadata: Metadata = {
  title: "Submit the Case -> | Respect U Dental Lab - Brooklyn, NY | (718) 200-1532",
  description: "",
  keywords: [""],
  openGraph: {
    title: "Submit the Case Respect U Dental Lab | Brooklyn, NY",
    description: "",
    url: "https://respectudental.com/submit-case",
  },
};

export default function SubmitCasePage() {

    return (
        <>
            <BreadCrumbs page={'Submit the Case'}/>
            <section className="section-padding-small">
                <div className="container">
                    <div className="submit-case-cap">
                        <h1>Order a Prosthetic Rx</h1>
                        <p>
                            Use the form below to submit your case details quickly and accurately.
                            This prescription form helps us craft high-quality dental restorations tailored
                            to your patient's needs. Simply fill out the necessary information, select your
                            preferred materials and specifications, and submit your order. Our team at Ceramic
                            Arts Dental is committed to precision and excellence in every case we handle.
                        </p>
                    </div>
                </div>
            </section>
            <SubmitCaseForm/>
        </>
    )
}