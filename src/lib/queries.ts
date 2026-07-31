export const homepageQuery = `
*[_type == "homepage"][0]{
  seo,
  hero,
  statistics,
  solutions,
  process,
  successStories,
  trustedBrands,
  testimonial,
  whoWeWorkWith,
  faq,
  footer
}
`;
