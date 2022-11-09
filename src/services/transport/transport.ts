export function transport<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, options).then((response) => response.json() as T);
}
