//* GET
export async function getRequests(endpoint: string) {
  const res = await fetch(endpoint, {
    credentials: "include",
  });
  if (!res.ok) throw Error("Failed to fetch");

  const data = await res.json();
  return data;
}

//* POST
// export async function insertMark(payload: { type: string }) {
export async function insertMark() {
  const res = await fetch(`${import.meta.env.VITE_BASE_API_URL}/marcador`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(payload),
  });

  const data = await res.json();
  return data;
}
