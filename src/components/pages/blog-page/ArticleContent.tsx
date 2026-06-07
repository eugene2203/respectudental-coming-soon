import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface ArticleContentProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

export default function ArticleContent({ post, relatedPosts }: ArticleContentProps) {
    return (
        <article className="article-section section-padding">
            <div className="container">
                <div className="article__layout">

                    {/* ---- Main content ---- */}
                    <div className="article__main">
                        <div className="article__cover">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                                sizes="(max-width: 1280px) 100vw, 800px"
                            />
                        </div>
                        <div className="article__header">
                            <span className="sticker-item">{post.category}</span>
                            <h1 className="article__title">{post.title}</h1>
                            <div className="article__meta">
                                <span>{post.date}</span>
                                <span className="article__dot">·</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <div className="article__body">
                            <p className="article__intro">{post.content.intro}</p>

                            {post.content.sections.map((section, i) => (
                                <div key={i} className="article__section">
                                    <h2 className="article__section-heading">{section.heading}</h2>
                                    <p>{section.body}</p>
                                </div>
                            ))}

                            <div className="article__conclusion">
                                <p>{post.content.conclusion}</p>
                            </div>
                        </div>

                        <div className="article__cta">
                            <Link href="/contact" className="btn-main">
                                Get in Touch
                            </Link>
                            <Link href="/blog" className="btn-default">
                                Back to Blog
                            </Link>
                        </div>
                    </div>

                    {/* ---- Sidebar ---- */}
                    <aside className="article__sidebar">
                        <div className="article__sidebar-inner">
                            <h3 className="article__sidebar-title">More Articles</h3>
                            <div className="article__related">
                                {relatedPosts.map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={`/blog/${related.slug}`}
                                        className="article__related-item"
                                    >
                                        <div
                                            className="article__related-cover"
                                            style={{ backgroundColor: related.coverColor }}
                                        />
                                        <div className="article__related-info">
                      <span className="article__related-category">
                        {related.category}
                      </span>
                                            <span className="article__related-title">
                        {related.title}
                      </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </article>
    );
}