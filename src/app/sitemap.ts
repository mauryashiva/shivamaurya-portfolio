import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shivamaurya.in",
      lastModified: new Date(),
    },
  ];
}
