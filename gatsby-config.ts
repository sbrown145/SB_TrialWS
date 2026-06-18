import type { GatsbyConfig } from "gatsby";

// Project-site subpath by default (e.g. https://jackbergin.github.io/portfolio/).
// The path segment is the GitHub repo name, so name the repo `portfolio` for a
// clean `/portfolio` URL. Override for other deploy targets:
//   PATH_PREFIX=""           → root/user-site (repo named <username>.github.io) or custom domain
//   PATH_PREFIX=/my-repo     → a project repo with a different name
// The prefix only applies when building with `--prefix-paths` (see package.json).
// See src/pages/routing/README.md for the full matrix.
const pathPrefix = process.env.PATH_PREFIX ?? "/portfolio";

const config: GatsbyConfig = {
  pathPrefix,
  siteMetadata: {
    title: `Jack Bergin Portfolio`,
    siteUrl:
      process.env.SITE_URL ??
      (process.env.NODE_ENV === "production"
        ? "https://jackbergin.github.io/portfolio"
        : "http://localhost:8000"),
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
};

export default config;
