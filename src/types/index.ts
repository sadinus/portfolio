export const section = "section";

export enum NavItemName {
  home = "Home",
  portfolio = "Portfolio",
  experience = "Experience",
  contact = "Contact"
}

export type Sections = {
  [NavItemName.home]: number;
  [NavItemName.portfolio]: number;
  [NavItemName.experience]: number;
  [NavItemName.contact]: number;
};

export type NavState = {
  activeNavItem: NavItemName;
  currentSection: NavItemName;
};

export type RootAppState = {
  navigation: NavState;
};
