export const book = {
  fields: [
    {
      name: 'bookTitle',
      title: 'Book Title',
      type: 'string',
    },
    {
      name: 'slug',
      options: {
        source: 'bookTitle',
      },
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'authors',
      of: [{ type: 'string' }],
      title: 'Authors',
      type: 'array',
    },
    {
      name: 'description',
      of: [
        {
          type: 'block',
        },
      ],
      title: 'Description',
      type: 'array',
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
    },
    {
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
      name: 'cover',
      title: 'Cover',
      type: 'image',
    },
    {
      name: 'whereToBuy',
      of: [
        {
          to: [
            { type: 'link' }, // reference to 'link' schema
          ],
          type: 'reference',
        },
      ],
      title: 'Where to Buy',
      type: 'array',
    },
  ],
  name: 'book',
  title: 'Books',
  type: 'document',
};
