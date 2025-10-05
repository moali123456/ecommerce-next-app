"use server";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();
    console.log("Server products:", data);

    // Return the array directly since that's what the API returns
    return Array.isArray(data.products) ? data.products : [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    // Return empty array on error to maintain consistent type
    return [];
  }
}
