import { Metadata } from "next";
import { notFound } from "next/navigation";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import ArticleContent from "@/components/pages/blog-page/ArticleContent";
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blog";


interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Respect U Dental Lab Blog`,
        description: post.excerpt,
        keywords: ["dental lab", "dental restorations", post.category, "Brooklyn dental lab"],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://respectudental.com/blog/${post.slug}`,
        },
        alternates: {
            canonical: `https://respectudental.com/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) notFound();

    const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://respectudental.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://respectudental.com/blog" },
            {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://respectudental.com/blog/${post.slug}`,
            },
        ],
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Organization",
            "name": "Respect U Dental Lab"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Respect U Dental Lab",
            "url": "https://respectudental.com",
        },
        "logo": {                          // ← добавить
            "@type": "ImageObject",
            "url": "https://respectudental.com/images/logo-respectu-1200-630.pn"
        }
    };

    return (
        <>
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <BreadCrumbs
                parentPages={[{ link: "/blog", cap: "Blog" }]}
                page={post.title}
            />
            <ArticleContent post={post} relatedPosts={relatedPosts} />
        </>
    );
}