import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import {
  fetchBlogPosts,
  formatBlogDate,
  getBlogImages,
  getBlogParagraphs,
  getBlogReadTime,
} from "@/lib/blogApi";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const { data: blogPosts = [], isLoading, isError, error } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  const post = blogPosts.find((item) => item.slug === slug);

  if (isLoading) {
    return (
      <div className="min-h-screen ocean-section relative overflow-hidden">
        <Bubbles />
        <Navbar />
        <main className="pt-24 pb-20 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="h-[24rem] animate-pulse rounded-[2rem] border border-primary/15 bg-background/25" />
          </div>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen ocean-section flex items-center justify-center px-4">
        <div className="glass-card max-w-xl rounded-[2rem] p-6 text-center">
          <h1 className="font-heading text-3xl font-bold">Unable to load this blog post</h1>
          <p className="mt-3 font-body text-sm text-foreground/68">
            {error instanceof Error ? error.message : "Please try again in a moment."}
          </p>
          <Link to="/blogs" className="mt-5 inline-block font-body text-primary">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen ocean-section flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blogs" className="font-body text-primary">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const postImages = getBlogImages(post);
  const paragraphs = getBlogParagraphs(post.content);

  return (
    <div className="min-h-screen ocean-section relative overflow-hidden">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/blogs"
            className="mb-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2rem] border border-primary/18 bg-background/35 shadow-[0_28px_90px_hsl(187_80%_48%/0.08)] backdrop-blur-md"
          >
            <div className="relative h-[23rem] overflow-hidden md:h-[34rem]">
              <img src={postImages[0] || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
                <div className="inline-flex rounded-full border border-primary/30 bg-background/80 px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                  {post.category || "Uncategorized"}
                </div>
                <h1 className="mt-4 max-w-4xl font-heading text-3xl font-bold leading-tight md:text-6xl">
                  {post.title}
                </h1>
                <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-foreground/72 md:text-lg">
                  {post.metaTitle || paragraphs[0] || "Read the full story from Turtle Nest."}
                </p>
              </div>
            </div>
          </motion.section>

          <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.55fr]">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="glass-card rounded-[2rem] p-5 md:p-8"
            >
              <div className="flex flex-wrap gap-3 border-b border-border/25 pb-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-background/25 px-4 py-2 font-body text-sm text-foreground/70">
                  <CalendarDays size={16} className="text-primary" />
                  {formatBlogDate(post.createdAt)}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-background/25 px-4 py-2 font-body text-sm text-foreground/70">
                  <Clock3 size={16} className="text-primary" />
                  {getBlogReadTime(post.content)}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-background/25 px-4 py-2 font-body text-sm text-foreground/70">
                  <Tag size={16} className="text-primary" />
                  {post.category || "Uncategorized"}
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <section>
                  <h2 className="font-heading text-2xl font-bold md:text-3xl">Post Content</h2>
                  <div className="mt-4 space-y-4">
                    {paragraphs.map((paragraph, index) => (
                      <p
                        key={`${post._id}-${index}`}
                        className="font-body text-sm leading-7 text-foreground/72 md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              </div>
            </motion.article>

            <div className="space-y-6">
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-[2rem] p-5 md:p-6"
              >
                <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  Post Details
                </p>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="font-body text-[11px] uppercase tracking-[0.18em] text-foreground/45">Title</p>
                    <p className="mt-2 font-heading text-xl font-bold">{post.title}</p>
                  </div>
                  <div>
                    <p className="font-body text-[11px] uppercase tracking-[0.18em] text-foreground/45">Category</p>
                    <p className="mt-2 font-body text-sm text-foreground/72">{post.category || "Uncategorized"}</p>
                  </div>
                  <div>
                    <p className="font-body text-[11px] uppercase tracking-[0.18em] text-foreground/45">Tags</p>
                    {post.tags.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 font-body text-[11px] uppercase tracking-[0.14em] text-foreground/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 font-body text-sm text-foreground/55">No tags added for this post.</p>
                    )}
                  </div>
                </div>
              </motion.aside>

              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="glass-card rounded-[2rem] p-5 md:p-6"
              >
                <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  Image Gallery
                </p>
                {postImages.length > 0 ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {postImages.map((image, index) => (
                      <div key={image} className="overflow-hidden rounded-2xl border border-primary/14">
                        <img
                          src={image}
                          alt={`${post.title} gallery image ${index + 1}`}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 font-body text-sm text-foreground/55">No gallery images available.</p>
                )}
              </motion.aside>
            </div>
          </section>

          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Related <span className="gradient-text">Posts</span>
              </h2>
              <Link to="/blogs" className="font-body text-sm font-semibold text-primary">
                View all blogs
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost._id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.06 }}
                >
                  <Link
                    to={`/blogs/${relatedPost.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/15 bg-background/35 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_hsl(187_80%_48%/0.12)]"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={getBlogImages(relatedPost)[0] || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">
                        {relatedPost.category || "Uncategorized"}
                      </p>
                      <h3 className="mt-3 font-heading text-2xl font-bold leading-tight group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-foreground/68">
                        {relatedPost.metaTitle || getBlogParagraphs(relatedPost.content)[0] || "Read more about this story."}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-all group-hover:gap-3">
                        Read next <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default BlogDetailsPage;
