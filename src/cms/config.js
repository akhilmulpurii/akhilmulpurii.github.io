export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "akhilmulpurii/my-portfolio",
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
  ],
};
