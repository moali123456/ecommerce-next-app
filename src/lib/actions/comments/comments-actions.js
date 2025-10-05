"use server";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getComments() {
  try {
    const res = await fetch(`${BASE_URL}/comments`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch comments: ${res.status}`);
    }

    const data = await res.json();
    console.log("Server comments:", data);

    // Return the array directly since that's what the API returns
    return Array.isArray(data.comments) ? data.comments : [];
  } catch (error) {
    console.error("Failed to fetch comments:", error);
    // Return empty array on error to maintain consistent type
    return [];
  }
}
