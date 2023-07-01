import { CPRReponse } from "@/models/models"

const BASE_URL = 'http://localhost:8080/'

async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(`${BASE_URL}${path}`, config)
  const response = await fetch(request)

  if (!response.ok) {
    console.error(JSON.stringify({ status: response.status, message: response.statusText }))
  }
  // may error if there is no body, return empty array
  const res: CPRReponse<T> = await response.json().catch(() => ({ 'success': false, 'data': [] }))
  return res.data
}

async function _get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'get', ...config }
  return await http<T>(path, init)
}

async function _post<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  const init = { method: 'post', body: JSON.stringify(body), ...config }
  return await http<U>(path, init)
}

async function _put<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  const init = { method: 'put', body: JSON.stringify(body), ...config }
  return await http<U>(path, init)
}

async function _patch<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  const init = { method: 'patch', body: JSON.stringify(body), ...config }
  return await http<U>(path, init)
}

async function _delete<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  const init = { method: 'delete', body: JSON.stringify(body), ...config }
  return await http<U>(path, init)
}

export const api = {
  get: _get,
  post: _post,
  put: _put,
  patch: _patch,
  delete: _delete
}