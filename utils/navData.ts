export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  external?: boolean;
  children?: NavItem[];
  visibleOn?: "mobile" | "desktop" | "all";
  action?: () => void;
}

// Example navbar data
export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    visibleOn: "all",
  },
  {
    label: "Features",
    href: "/features",
    visibleOn: "all",
  },
  {
    label: "About",
    href: "/about",
    visibleOn: "all",
  },
  {
    label: "Docs",
    href: "https://docs.example.com",
    external: true,
    visibleOn: "desktop",
  },
  {
    label: "More",
    visibleOn: "all",
    children: [
      {
        label: "Team",
        href: "/team",
      },
      {
        label: "Careers",
        href: "/careers",
      },
    ],
  },
  {
    label: "Login",
    action: () => {
      console.log("Login clicked");
    },
    visibleOn: "mobile",
  },
];
