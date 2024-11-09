export interface MenuCategoryNotionOriginal {
  categoryId: number;
  key: string;
  title: string;
  description: string;
  href: string;
  upperCategoryId: number | null;
  visible: boolean;
}
export interface MenuCategory extends MenuCategoryNotionOriginal {
  upperCategory?: MenuCategory | null;
}
