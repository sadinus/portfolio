export const section = "section";

export enum NavItemName {
  home = "Home",
  portfolio = "Portfolio",
  experience = "Experience",
  contact = "Contact"
}

export type NavState = {
  activeNavItem: NavItemName;
  currentSection: NavItemName;
};

export type RootAppState = {
  navigation: NavState;
};
