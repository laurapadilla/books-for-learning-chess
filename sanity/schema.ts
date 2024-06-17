import { type SchemaTypeDefinition } from 'sanity';
import { book, link } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [book, link],
};
