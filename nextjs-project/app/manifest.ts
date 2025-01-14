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
        src: "android/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "android/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
    prefer_related_applications: false,
  };
}
