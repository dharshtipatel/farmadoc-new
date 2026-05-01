type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: HeadersInit;
};

function getBaseUrl() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL in env");
  }

  return baseUrl;
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", body, headers } = options;
  const baseUrl = getBaseUrl();

  const res = await fetch(`${baseUrl}${endpoint}`, {
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
