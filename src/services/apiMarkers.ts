//* GET
export async function getRequests(
  endpoint: string,
  params?: Record<string, string>,
) {
  const paramsQuery = new URLSearchParams(params);
  const urlWithParams = params
    ? `${endpoint}?${paramsQuery.toString()}`
    : endpoint;

  const res = await fetch(urlWithParams, {
    credentials: "include",
  });

  if (!res.ok) throw Error("Failed to fetch");
  if (res.status === 204) return null;

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
