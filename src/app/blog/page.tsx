import { Metadata } from "next";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import BlogBanner from "@/components/pages/blog-page/BlogBanner";
import BlogList from "@/components/pages/blog-page/BlogList";
import { blogPosts } from "@/lib/blog";


export const metadata: Metadata = {
    title: "Dental Lab Blog | Expert Insights from Respect U Dental Lab",
    description:
        "Stay up to date with the latest news, materials, and techniques in dental laboratory science. Articles for dentists by the team at Respect U Dental Lab in Brooklyn, NY.",
    keywords: [
        "dental lab blog",
        "dental restorations tips",
        "zirconia crowns",
        "CAD/CAM dentistry",
        "dental technology Brooklyn",
    ],
    openGraph: {
        title: "Dental Lab Blog | Respect U Dental Lab",
        description:
            "Expert insights on dental materials, technology, and laboratory best practices from Brooklyn's premier dental lab.",
        url: "https://respectudental.com/blog",
    },
    alternates: {
        canonical: "https://respectudental.com/blog",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://respectudental.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://respectudental.com/blog" },
    ],
};

export default function BlogPage() {
    return (
        <>
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BreadCrumbs page="Blog" />
            <BlogBanner />
            <BlogList posts={blogPosts} />
        </>
    );
}