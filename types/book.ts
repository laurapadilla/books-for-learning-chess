import { PortableTextBlock } from 'next-sanity';

type Link = {
  title: string;
  url: string;
};

type SanityColor = {
  _type: 'color';
  alpha: number;
  hex: string;
  hsl: { h: number; s: number; l: number; a: number };
  hsv: { h: number; s: number; v: number; a: number };
  rgb: { r: number; g: number; b: number; a: number };
};

export type Book = {
  _id: string;
  _createdAt: string;
  authors?: string[];
  bookTitle: string;
  color: SanityColor;
  cover?: string;
  description: PortableTextBlock[];
  publisher?: string;
  slug: string;
  url: string;
  whereToBuy?: Link[];
};
