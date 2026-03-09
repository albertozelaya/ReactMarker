//* GET HISTORY MARKS

export async function getRequests(endpoint: string) {
  const res = await fetch(endpoint, {
    credentials: "include",
  });
  if (!res.ok) throw Error("Failed to fetch");

  const data = await res.json();
  return data;
}
