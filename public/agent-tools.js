const modelContext = navigator.modelContext;

if (modelContext?.registerTool) {
  modelContext.registerTool({
    name: "terrafert_public_pages",
    description: "List Terra Fert public website pages and their URLs.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    execute: async () => ({
      pages: [
        { title: "Home", url: "https://terrafert.com/" },
        { title: "Products", url: "https://terrafert.com/shop" },
        { title: "How to order", url: "https://terrafert.com/how" },
        { title: "Field trials", url: "https://terrafert.com/tests" },
        { title: "About", url: "https://terrafert.com/about" },
        { title: "Contact", url: "https://terrafert.com/contact" },
        { title: "Terms", url: "https://terrafert.com/terms" },
        { title: "Privacy", url: "https://terrafert.com/privacy" },
      ],
    }),
  });

  modelContext.registerTool({
    name: "terrafert_ordering_information",
    description: "Explain how customers order products from Terra Fert.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    execute: async () => ({
      ordering:
        "Browse the product catalog, add products to the cart if needed, and send the order through WhatsApp. Quantity, price, and pickup details are confirmed in the conversation.",
      contactEmail: "contact@terrafert.com",
      contactUrl: "https://terrafert.com/contact",
    }),
  });
}
