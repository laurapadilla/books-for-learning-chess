export const siteSettings = {
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navLinks',
      of: [{ type: 'link' }],
      title: 'Nav Links',
      type: 'array',
    },
  ],
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
};
