import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoProps = {
  title: string;
  description: string;
  schema?: Record<string, unknown>;
};

const getOrCreateMeta = (name: string, property: boolean) => {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.append(element);
  }
  return element;
};

const Seo = ({ title, description, schema }: SeoProps) => {
  const { pathname } = useLocation();
  const schemaJson = schema ? JSON.stringify(schema) : "";

  useEffect(() => {
    const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonicalUrl = `https://terrafert.com${canonicalPath}`;
    document.title = title;

    const descriptionMeta = getOrCreateMeta("description", false);
    descriptionMeta.content = description;
    getOrCreateMeta("og:title", true).content = title;
    getOrCreateMeta("og:description", true).content = description;
    getOrCreateMeta("og:url", true).content = canonicalUrl;

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaScript = document.head.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    );
    if (!schemaScript) return;

    const structuredData = JSON.parse(schemaScript.textContent || "{}") as {
      "@graph"?: Record<string, unknown>[];
    };
    const graph = (structuredData["@graph"] ?? []).filter(
      (node) => node["@type"] !== "WebPage",
    );
    const contentSchema = schemaJson
      ? (JSON.parse(schemaJson) as Record<string, unknown>)
      : undefined;
    const contentId = `${canonicalUrl}#main`;

    graph.push({
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { "@id": "https://terrafert.com/#website" },
      inLanguage: "ar",
      ...(contentSchema ? { mainEntity: { "@id": contentId } } : {}),
    });

    if (contentSchema) {
      graph.push({ ...contentSchema, "@id": contentId });
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [description, pathname, schemaJson, title]);

  return null;
};

export default Seo;
