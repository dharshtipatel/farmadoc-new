import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY!,
});

const STATIC_PHARMACY_DATA = {
  vendor_id: 1653,
  vendor_name: "FAS Farmacia Scollo",
  products: [
    { variant_id: 26521, product_name: "Armolipid Plus 60Cpr", description: "Cholesterol support supplement" },
    { variant_id: 26627, product_name: "Personal Blood Pressure Monitor", description: "Measures blood pressure" },
    { variant_id: 26629, product_name: "Thermo fu Digital Thermometer", description: "Body temperature monitor" },
    { variant_id: 26631, product_name: "Farmauniti N-Acetilcis 14Stick", description: "NAC throat support supplement" },
    { variant_id: 26635, product_name: "Farmauniti Skincare cr Mani", description: "Hand cream for dry skin" },
    { variant_id: 26641, product_name: "Eyecare Oftalm Wipes Box", description: "Eye cleansing wipes" },
    { variant_id: 26645, product_name: "Arnica Gel 98% 500Ml", description: "Muscle pain relief gel" },
  ],
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const products = STATIC_PHARMACY_DATA.products;

    console.log("USER INPUT:", message);

    let matchedIndexes: number[] = [];

    try {
      // 👉 CALL CLAUDE
      const response = await client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 200,
        messages: [
          {
            role: "user",
            content: `
You are a pharmacy assistant.

Match the user query to product indexes.

RULES:
- Return ONLY JSON
- Format: [{"index":0},{"index":1}]
- Max 3 results
- Only valid indexes

PRODUCTS:
${JSON.stringify(products.map((p, i) => ({
  index: i,
  name: p.product_name,
  description: p.description,
})), null, 2)}

USER QUERY:
${message}
            `,
          },
        ],
      });

      const text = response.content
  .filter((c: any) => c.type === "text")
  .map((c: any) => c.text)
  .join("");

      console.log("CLAUDE RAW:", text);

      matchedIndexes = JSON.parse(text).map((x: any) => x.index);
    } catch (claudeError) {
      console.error("CLAUDE FAILED, USING FALLBACK:", claudeError);

      // 👉 FALLBACK LOCAL MATCHING (IMPORTANT)
      const query = message.toLowerCase();

      matchedIndexes = products
        .map((p, i) => {
          const text = (p.product_name + " " + p.description).toLowerCase();
          return text.includes(query) ? i : -1;
        })
        .filter((i) => i !== -1)
        .slice(0, 3);
    }

    // 👉 BUILD FINAL PRODUCTS
    const finalProducts = matchedIndexes
      .map((i) => products[i])
      .filter(Boolean)
      .map((p) => ({
        name: p.product_name,
        desc: p.description,
        image: "/images/medi1.png",
        price: "€--",
        stock: "In Stock",
        location: STATIC_PHARMACY_DATA.vendor_name,
        km: "Nearby",
      }));

    return NextResponse.json({
      products: finalProducts,
    });
  } catch (err) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      {
        products: [],
        message: "Server error",
      },
      { status: 500 }
    );
  }
}