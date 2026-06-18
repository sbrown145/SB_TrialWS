import fs from "fs";
import path from "path";

/**
 * GitHub Pages serves 404.html for unknown paths. Copying index.html ensures
 * deep links and refreshes load the Gatsby app; the client router then renders
 * src/pages/404.tsx for routes that do not exist.
 *
 * This works for both deploy targets: on a project site GitHub serves the file
 * at <username>.github.io/<repo>/404.html, and on a root/user-site at
 * <username>.github.io/404.html. The build output always lands in public/404.html
 * regardless of pathPrefix, so no path-specific handling is needed here.
 */
export const onPostBuild = (): void => {
  const publicDir = path.join(__dirname, "public");
  const indexPath = path.join(publicDir, "index.html");
  const notFoundPath = path.join(publicDir, "404.html");

  if (!fs.existsSync(indexPath)) {
    throw new Error(
      "gatsby-node onPostBuild: index.html not found — build may have failed."
    );
  }

  fs.copyFileSync(indexPath, notFoundPath);
};
