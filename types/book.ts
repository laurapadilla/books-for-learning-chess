import { ColorSchemaType } from "@sanity/color-input";
import { PortableTextBlock } from "next-sanity";

type Link = {
  title: string;
  url: string;
};

export type Book = {
  _id: string;
  _createdAt: string;
  authors?: string[];
  bookTitle: string;
  color: ColorSchemaType;
  cover?: string;
  description: PortableTextBlock[];
  publisher?: string;
  slug: string;
  url: string;
  whereToBuy: Link[];
};
