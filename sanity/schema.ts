import { type SchemaTypeDefinition } from 'sanity';
import { book, link, siteSettings } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [book, link, siteSettings],
};
