//* GET
export async function getRequests(
  endpoint: string,
  params?: Record<string, string>,
) {
  const url = new URL(endpoint);
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );
  }

  const res = await fetch(url.toString(), {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  if (res.status === 204) return null;

  const data = await res.json();
  return data;
}

//* POST
// export async function insertMark(payload: { type: string }) {
export async function insertMark(params: Record<string, string>) {
  const url = new URL(
    `${import.meta.env.VITE_BASE_API_URL}/marcador/codeEmployee`,
  );

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );
  }

  const res = await fetch(String(url), {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(payload),
  });

  const data = await res.json();
  return data;
}
