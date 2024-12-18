import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const env = process.env.NODE_ENV;

  const start_url =
    env === "development"
      ? "http://localhost:3000"
      : "https://wellsphere.vercel.app";

  return {
    name: "WellSphere",
    short_name: "WSphere",
    start_url,
    display: "standalone",
    description:
      "WellSphere is a wellness app designed to improve your overall health. Achieve balance in life in your journey together with WellSphere!",
    lang: "English",
    dir: "auto",
    theme_color: "#693cf7",
    background_color: "#000000",
    orientation: "any",
    screenshots: [
      {
        src: "wellspheress1.png",
        type: "image/png",
        sizes: "540x720",
        form_factor: "narrow",
      },
      {
        src: "wellspheress1.png",
        type: "image/png",
        sizes: "540x720",
        form_factor: "narrow",
      },
      {
        src: "wellspheress1.png",
        type: "image/png",
        sizes: "540x720",
        form_factor: "narrow",
      },
      {
        src: "wellspheress2.png",
        type: "image/png",
        sizes: "1024x593",
        form_factor: "wide",
      },
      {
        src: "wellspheress2.png",
        type: "image/png",
        sizes: "1024x593",
        form_factor: "wide",
      },
      {
        src: "wellspheress2.png",
        type: "image/png",
        sizes: "1024x593",
        form_factor: "wide",
      },
    ],
    icons: [
      {
        src: "wellspherelogo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "wellspherelogo192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
    related_applications: [
      {
        platform: "windows",
        url: "The URL to your app in that app store",
      },
    ],
    prefer_related_applications: false,
    shortcuts: [
      {
        name: "WS",
        url: "/shortcut",
        description: "A description of the functionality of this shortcut",
      },
    ],
  };
}
