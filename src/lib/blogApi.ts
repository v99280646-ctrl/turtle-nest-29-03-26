export type ApiBlogMedia = {
  url: string;
  type: string;
  name: string;
};

export type ApiBlogPost = {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  media: ApiBlogMedia[];
  slug: string;
  metaTitle?: string;
  featured?: boolean;
  featuredTitle?: string;
  createdAt: string;
  updatedAt: string;
};

type BlogPostsResponse = {
  success: boolean;
  message: string;
  total: number;
  currentPage: number;
  totalPages: number;
  posts: ApiBlogPost[];
};

const BLOG_POSTS_URL =
  "https://backbin.colaber.in/business_website/class_room/customer/posts/get_event_posts?accountTypeId=69ca65924aad3b7292db9360&page=1";

export const formatBlogDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const getBlogImages = (post: ApiBlogPost) =>
  post.media.filter((item) => item.type === "image").map((item) => item.url);

export const getBlogReadTime = (content: string) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min read`;
};

export const getBlogExcerpt = (content: string, maxLength = 160) => {
  const normalized = content.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).trimEnd()}...`;
};

export const getBlogParagraphs = (content: string) =>
  content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);

export const fetchBlogPosts = async () => {
  const response = await fetch(BLOG_POSTS_URL);

  if (!response.ok) {
    throw new Error("Unable to load blog posts right now.");
  }

  const data = (await response.json()) as BlogPostsResponse;

  if (!data.success) {
    throw new Error(data.message || "Unable to load blog posts right now.");
  }

  return data.posts;
};
