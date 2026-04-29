const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL in env");
}

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: HeadersInit;
};

export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", body, headers } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
  let errorMessage = `Error: ${res.status}`;

  try {
    const errorData = await res.json();

    errorMessage =
      errorData?.message ||
      errorData?.error ||
      errorMessage;
  } catch {
    const text = await res.text();
    if (text) errorMessage = text;
  }

  throw new Error(errorMessage);
}

  return res.json();
}
