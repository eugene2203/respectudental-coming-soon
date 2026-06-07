import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    return (
        <section className="blog-list-section section-padding">
            <div className="container">
                <div className="blog-cards">
                    {posts.map((post) => (
                        <article key={post.slug} className="blog-card">
                            <div className="blog-card__cover">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                />
                                <span className="blog-card__category sticker-item dark">{post.category}</span>
                            </div>
                            <div className="blog-card__body">
                                <div className="blog-card__meta">
                                    <span>{post.date}</span>
                                    <span className="blog-card__dot">·</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="blog-card__title">{post.title}</h2>
                                <p className="blog-card__excerpt">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="blog-card__link btn-main"
                                >
                                    Read Article
                                </Link>
                            </div>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="fake-link-block"
                                aria-label={post.title}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}