export const replaceLocale = (url: string, locale: string) => {
  const urlObj = new URL(url);

  // Split the pathname into segments
  const segments = urlObj.pathname.split("/").filter(Boolean);

  // Replace the first segment if it's a locale
  if (segments.length > 0 && /^[a-z]{2}$/.test(segments[0] ?? "")) {
    segments[0] = locale;
  } else {
    // Otherwise, insert the locale at the beginning
    segments.unshift(locale);
  }

  // Rebuild the pathname
  urlObj.pathname = "/" + segments.join("/");

  return urlObj.toString();
};
