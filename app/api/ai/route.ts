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
    { variant_id: 26646, product_name: "Proctolyn 0.1 Mg/G + 10 Mg/G Rectal Cream 30 g Tube", description: "Stomach and intestine" },
    { variant_id: 26647, product_name: "Enterogermina 4 Billion/5 ml Oral Suspension 10 Vials", description: "Digestive health supplement, Intestine pain" },
  ],
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const products = STATIC_PHARMACY_DATA.products;

    console.log("USER INPUT:", message);

    let matchedIndexes: number[] = [];

    // =========================
    // 🔍 CLAUDE PRODUCT MATCH
    // =========================
    try {
      const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 200,
        messages: [
          {
            role: "user",
            content: `
You are a pharmacy AI classifier.

CRITICAL RULES:
- Return ONLY JSON
- NO explanation, NO markdown, NO text
- Format: [{"index":0},{"index":1}]
- Max 3 results
- If unsure return []

PRODUCTS:
${JSON.stringify(
  products.map((p, i) => ({
    index: i,
    name: p.product_name,
    description: p.description,
  })),
  null,
  2
)}

USER QUERY:
${message}
            `,
          },
        ],
      });

      const text =
        response.content
          .filter((c: any) => c.type === "text")
          .map((c: any) => c.text)
          .join("") || "";

      console.log("CLAUDE RAW:", text);

      // SAFE JSON PARSE
      try {
        const cleaned = text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        const parsed = JSON.parse(cleaned);

        matchedIndexes = parsed
          .map((x: any) => x.index)
          .filter((i: any) => typeof i === "number");
      } catch (e) {
        console.error("JSON PARSE FAILED:", e);
        matchedIndexes = [];
      }
    } catch (err) {
      console.error("CLAUDE FAILED:", err);
      matchedIndexes = [];
    }

    // =========================
    // 🧠 SMART FALLBACK
    // =========================
    if (!matchedIndexes.length) {
      const query = message.toLowerCase();

      const keywordsMap: Record<string, string[]> = {
        skin: ["cream", "skincare", "hand", "moistur"],
        stomach: ["proctolyn", "enterogermina", "digest", "stomach", "intestine"],
        dry: ["cream", "moistur", "hand"],
        pain: ["arnica", "gel"],
        fever: ["thermo", "temperature"],
        pressure: ["blood pressure", "monitor"],
        throat: ["n-acetil", "nac"],
        eye: ["eye", "ophthalm"],
      };

      matchedIndexes = products
        .map((p, i) => {
          const text =
            (p.product_name + " " + p.description).toLowerCase();

          const match = Object.entries(keywordsMap).some(([key, values]) =>
            query.includes(key) &&
            values.some((v) => text.includes(v))
          );

          return match ? i : -1;
        })
        .filter((i) => i !== -1)
        .slice(0, 3);
    }

    // =========================
    // 📦 FINAL PRODUCTS
    // =========================
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

    // =========================
    // 💬 CLAUDE MESSAGE (SAFE)
    // =========================
    let botText = "Here are some suggsetions based on your symptoms.";

    try {
      const messageResponse = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 120,
        messages: [
          {
            role: "user",
            content: `
You are a pharmacy assistant.

Write a short 1–2 sentence friendly message.

Rules:
- No markdown
- No bullet points
- Do not mention Claude
- Mention that products are shown below

User query: ${message}
            `,
          },
        ],
      });

      const text =
        messageResponse.content
          .filter((c: any) => c.type === "text")
          .map((c: any) => c.text)
          .join("") || "";

      if (text) botText = text;
    } catch (e) {
      console.error("MESSAGE CLAUDE FAILED:", e);
    }

    // =========================
    // ✅ RESPONSE
    // =========================
    return NextResponse.json({
      text: botText,
      products: finalProducts,
    });
  } catch (err) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      {
        products: [],
        text: "Server error occurred",
      },
      { status: 500 }
    );
  }
}