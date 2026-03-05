export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number | string;
  description?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavigationState {
  isCollapsed: boolean;
  activeRoute: string;
}
