export interface Course {
  id: string;
  description: string;
}

export interface CPRReponse<T> {
  success: boolean,
  data: T
}