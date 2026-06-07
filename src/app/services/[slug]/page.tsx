import { Metadata } from "next";
import { notFound } from "next/navigation";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import SpecializationContent from "@/components/pages/services-page/SpecializationContent";
import { getSpecializationBySlug, getAllSpecializationSlugs, specializations } from "@/lib/specializations";


interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSpecializationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const spec = getSpecializationBySlug(slug);
    if (!spec) return {};

    return {
        title: `${spec.title} | Dental Lab Services | Respect U Dental Lab`,
        description: spec.text,
        keywords: ["dental lab", spec.title, "Brooklyn dental lab", "dental restorations"],
        openGraph: {
            title: `${spec.title} | Respect U Dental Lab`,
            description: spec.text,
            url: `https://respectudental.com/services/${spec.slug}`,
        },
        alternates: {
            canonical: `https://respectudental.com/services/${spec.slug}`,
        },
    };
}

export default async function SpecializationPage({ params }: Props) {
    const { slug } = await params;
    const spec = getSpecializationBySlug(slug);
    if (!spec) notFound();

    const otherSpecs = specializations.filter((s) => s.slug !== spec.slug);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://respectudental.com" },
            { "@type": "ListItem", position: 2, name: "Our Services", item: "https://respectudental.com/services" },
            {
                "@type": "ListItem",
                position: 3,
                name: spec.title,
                item: `https://respectudental.com/services/${spec.slug}`,
            },
        ],
    };

    return (
        <>
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BreadCrumbs
                parentPages={[{ link: "/services", cap: "Our Services" }]}
                page={spec.title}
            />
            <SpecializationContent specialization={spec} otherSpecializations={otherSpecs} />
        </>
    );
}