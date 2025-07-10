const API_ENDPOINT = "https://my-json-server.typicode.com/codebuds-fk/chat/chats"; 

export async function fetchChats() {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Error fetching chats: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("[API] fetchChats failed:", err.message);
    return [];
  }
}
