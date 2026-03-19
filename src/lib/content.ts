import { blogPosts, caseStudies, services } from "@/data/site-content";

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCaseBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
