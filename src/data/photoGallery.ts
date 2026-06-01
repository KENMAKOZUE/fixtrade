export type PhotoCategory = 'Велосипеды' | 'Запчасти' | 'Аксессуары' | 'Инструменты';

export interface PhotoCardData {
  id: string;
  image: string;
  category: PhotoCategory;
  title: string;
  subtitle?: string;
  link?: string;
}

export const photoCategories: PhotoCategory[] = ['Велосипеды', 'Запчасти', 'Аксессуары', 'Инструменты'];

export const photoCardTemplates: PhotoCardData[] = [
  {
    id: 'photo-1',
    image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=700&q=80',
    category: 'Велосипеды',
    title: 'Гоночный шоссейник',
    subtitle: 'Пример фото товара для карточки',
    link: 'https://example.com/bike',
  },
  {
    id: 'photo-2',
    image: 'https://images.unsplash.com/photo-1533810747270-c5c6a4db8d5b?auto=format&fit=crop&w=700&q=80',
    category: 'Запчасти',
    title: 'Комплект карбоновых колес',
    subtitle: 'Фото категории запчастей',
    link: 'https://example.com/wheels',
  },
  {
    id: 'photo-3',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=80',
    category: 'Аксессуары',
    title: 'Шлем KASK Protone',
    subtitle: 'Аксессуар для безопасной езды',
    link: 'https://example.com/helmet',
  },
  {
    id: 'photo-4',
    image: 'https://images.unsplash.com/photo-1528834146331-4d50ac0b197a?auto=format&fit=crop&w=700&q=80',
    category: 'Инструменты',
    title: 'Набор ключей для ремонта',
    subtitle: 'Фото инструмента для ремонта велосипеда',
    link: 'https://example.com/tools',
  },
];
