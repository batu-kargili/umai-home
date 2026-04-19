export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type BlogCategory =
  | "All"
  | "Engineering"
  | "Security"
  | "Compliance"
  | "Product"
  | "Changelog";
