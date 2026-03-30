import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import {
  fetchBlogPosts,
  formatBlogDate,
  getBlogExcerpt,
  getBlogImages,
  getBlogReadTime,
} from "@/lib/blogApi";

const BlogsPage = () => {
  const { data: blogPosts = [], isLoading, isError, error } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const otherPosts = featuredPost ? blogPosts.filter((post) => post._id !== featuredPost._id) : [];
  const categories = Array.from(new Set(blogPosts.map((post) => post.category).filter(Boolean)));

  return (
    <div className="min-h-screen ocean-section relative overflow-hidden">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-10 overflow-hidden rounded-[2rem] border border-primary/15 bg-[radial-gradient(circle_at_top_left,hsl(187_80%_48%/.18),transparent_34%),radial-gradient(circle_at_bottom_right,hsl(170_70%_45%/.14),transparent_36%)] px-5 py-8 md:px-8 md:py-10"
          >
            <div className="absolute -right-16 top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                  Turtle Nest Journal
                </p>
                <h1 className="font-heading text-3xl font-bold leading-tight md:text-6xl">
                  Stories, skills, and reef notes from <span className="gradient-text">Lakshadweep</span>
                </h1>
                <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-foreground/65 md:text-lg">
                  Live posts from your website account, designed as an editorial journal with
                  dynamic featured stories, categories, and article cards.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="glass-card rounded-2xl p-4">
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">Posts</p>
                  <p className="mt-2 font-heading text-2xl font-bold">{blogPosts.length} Live Articles</p>
                </div>
                <div className="glass-card rounded-2xl p-4">
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">Source</p>
                  <p className="mt-2 font-heading text-2xl font-bold">Colaber posts API</p>
                </div>
              </div>
            </div>
          </motion.section>

          {isLoading ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-[28rem] animate-pulse rounded-[1.75rem] border border-primary/15 bg-background/25" />
              ))}
            </div>
          ) : isError ? (
            <div className="glass-card rounded-[2rem] p-6 text-center">
              <h2 className="font-heading text-2xl font-bold">Unable to load blog posts</h2>
              <p className="mt-3 font-body text-sm text-foreground/68">
                {error instanceof Error ? error.message : "Please try again in a moment."}
              </p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="glass-card rounded-[2rem] p-6 text-center">
              <h2 className="font-heading text-2xl font-bold">No blog posts available</h2>
              <p className="mt-3 font-body text-sm text-foreground/68">
                New stories will appear here as soon as they are published.
              </p>
            </div>
          ) : (
            <>
              {featuredPost && (
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="mb-10 grid gap-8 lg:grid-cols-[1.5fr_0.7fr]"
                >
                  <Link
                    to={`/blogs/${featuredPost.slug}`}
                    className="group overflow-hidden rounded-[2rem] border border-primary/20 bg-background/35 shadow-[0_24px_80px_hsl(187_80%_48%/0.08)] backdrop-blur-md"
                  >
                    <div className="relative h-72 overflow-hidden md:h-[28rem]">
                      <img
                        src={getBlogImages(featuredPost)[0] || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      <div className="absolute left-5 top-5 inline-flex rounded-full border border-primary/30 bg-background/80 px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                        {featuredPost.featuredTitle || "Featured Story"}
                      </div>
                      <div className="absolute inset-x-5 bottom-5">
                        <p className="font-body text-xs uppercase tracking-[0.2em] text-foreground/60">
                          {featuredPost.category || "Uncategorized"}
                        </p>
                        <h2 className="mt-3 max-w-3xl font-heading text-2xl font-bold leading-tight md:text-4xl">
                          {featuredPost.title}
                        </h2>
                      </div>
                    </div>

                    <div className="grid gap-6 p-5 md:grid-cols-[1fr_auto] md:p-6">
                      <div>
                        <p className="font-body text-sm leading-relaxed text-foreground/68 md:text-base">
                          {getBlogExcerpt(featuredPost.content, 220)}
                        </p>
                        {featuredPost.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {featuredPost.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 font-body text-[11px] uppercase tracking-[0.14em] text-foreground/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-between gap-4">
                        <div className="text-left md:text-right">
                          <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">
                            {formatBlogDate(featuredPost.createdAt)}
                          </p>
                          <p className="mt-2 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary">
                            <Clock3 size={14} />
                            {getBlogReadTime(featuredPost.content)}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-all group-hover:gap-3">
                          Read article <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="glass-card rounded-[2rem] p-5 md:p-6">
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                      Categories
                    </p>
                    <div className="mt-5 space-y-3">
                      {categories.map((category, index) => (
                        <div
                          key={category}
                          className="flex items-center justify-between rounded-2xl border border-primary/12 bg-background/20 px-4 py-3"
                        >
                          <span className="font-heading text-lg font-semibold">{category}</span>
                          <span className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-dashed border-primary/25 bg-primary/8 p-4">
                      <p className="font-body text-sm leading-relaxed text-foreground/68">
                        This page updates automatically from the posts API tied to your website
                        account ID.
                      </p>
                    </div>
                  </div>
                </motion.section>
              )}

              <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {otherPosts.map((post, index) => (
                  <motion.article
                    key={post._id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.06 }}
                    className="group h-full"
                  >
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/15 bg-background/35 shadow-[0_18px_50px_hsl(187_80%_48%/0.06)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_hsl(187_80%_48%/0.14)]"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={getBlogImages(post)[0] || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/82 px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
                          <Tag size={12} />
                          {post.category || "Uncategorized"}
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center justify-between gap-3 font-body text-xs uppercase tracking-[0.16em] text-foreground/45">
                          <span>{formatBlogDate(post.createdAt)}</span>
                          <span>{getBlogReadTime(post.content)}</span>
                        </div>
                        <h2 className="font-heading text-2xl font-bold leading-tight transition-colors group-hover:text-primary">
                          {post.title}
                        </h2>
                        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-foreground/68">
                          {getBlogExcerpt(post.content)}
                        </p>
                        {post.tags.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-border/40 px-3 py-1 font-body text-[11px] uppercase tracking-[0.14em] text-foreground/55"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <span className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-all group-hover:gap-3">
                          Open post <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default BlogsPage;
