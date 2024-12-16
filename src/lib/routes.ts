interface Route {
  link: string;
  name: string;
}

export const pageRoutes: Route[] = [
  { link: "/", name: "HomePage" },
  { link: "/about/", name: "About Me" },
  { link: "/blog/", name: "Blog" },
  { link: "/tags", name: "Tags Index" },
];
