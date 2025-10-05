"use server";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getCategories() {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const data = await res.json();
    console.log("Server Categories:", data);

    // Return the array directly since that's what the API returns
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    // Return empty array on error to maintain consistent type
    return [];
  }
}
