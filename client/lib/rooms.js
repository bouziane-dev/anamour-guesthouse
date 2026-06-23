const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "http://localhost:5000";

const fetchJson = async (path) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Unable to load room data.");
  }

  return response.json();
};

export const getRooms = async () => {
  const data = await fetchJson("/api/rooms");
  return data?.rooms || [];
};

export const getRoom = async (id) => {
  const data = await fetchJson(`/api/rooms/${id}`);
  return data?.room || null;
};
