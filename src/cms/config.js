export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "akhilmulpurii/my-portfolio",
    base_url: "https://www.akhil.pro",
    auth_endpoint: "api/auth",
    branch: "main",
  },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      name: "home-page",
      label: "Home Page",
      files: [
        {
          label: "Landing Content",
          name: "home",
          file: "content/home.md",
          fields: [
            {
              label: "Content",
              name: "content",
              widget: "list",
              fields: [
                { label: "Heading", name: "heading", widget: "string" },
                { label: "Info", name: "info", widget: "string" },
                { label: "Color", name: "backgroundColor", widget: "color" },
                { label: "Image", name: "imageUrl", widget: "image" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "blog", // Used in routes, e.g., /admin/collections/blog
      label: "Blog", // Used in the UI
      folder: "content/blogs", // The path to the folder where the documents are stored
      create: true, // Allow users to create new documents in this collection
      slug: "{{slug}}", // Filename template, e.g., YYYY-MM-DD-title.md
      //# The fields for each document, usually in front matter
      fields: [
        { label: "Title", name: "title", widget: "string" },
        {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
          date_format: "DD.MM.YYYY",
          time_format: "HH:mm",
          format: "LLL",
        },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
};
