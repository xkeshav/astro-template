import type { LinkProps } from "@/models";

export const APP_NAME = "Template";

export const NavbarLinks: LinkProps[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    isActive: true
  },
  {
    name: "Dashboard",
    title: "Dashboard",
    path: "/dashboard",
    isActive: true
  },
  {
    name: "Blog",
    title: "Blogs",
    path: "/blog",
    isActive: true
  },
  {
    name: "Career",
    title: "Career",
    path: "/career",
    isActive: true
  }
];

export const FooterLinks: LinkProps[] = [
  {
    title: "privacy Policy",
    path: "/privacy",
    isActive: true
  },
  {
    title: "Terms and Condition",
    path: "/terms",
    isActive: true
  }
];
