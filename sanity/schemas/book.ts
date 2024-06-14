export const book = {
  name: "book",
  title: "Books",
  type: "document",
  fields: [
    {
      name: "bookTitle",
      title: "Book Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "bookTitle",
      },
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        { type: "block", styles: [{ title: "Indented", value: "indented" }] },
      ],
    },
    {
      name: "publisher",
      title: "Publisher",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "color",
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "whereToBuy",
      title: "Where to Buy",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "link" }, // reference to 'link' schema
          ],
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};
