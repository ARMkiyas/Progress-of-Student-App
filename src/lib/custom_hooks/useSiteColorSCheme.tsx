import { useState, useEffect } from "react";

export default function useSiteColorSCheme() {
  const [siteColorScheme, setSiteColorScheme] = useState<string>("dark");

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    const colorScheme = htmlTag.getAttribute("data-bs-theme");
    setSiteColorScheme(colorScheme || "");

    // Create a new MutationObserver to listen for changes to the data-bs-theme attribute
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-bs-theme"
        ) {
          const newColorScheme = htmlTag.getAttribute("data-bs-theme");
          setSiteColorScheme(newColorScheme || "");
        }
      }
    });

    // Start observing the html tag for changes to the data-bs-theme attribute
    observer.observe(htmlTag, { attributes: true });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return siteColorScheme;
}
