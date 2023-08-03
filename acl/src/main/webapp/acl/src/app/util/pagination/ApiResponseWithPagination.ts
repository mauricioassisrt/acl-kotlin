// api-response-with-pagination.model.ts

export interface ApiResponseWithPagination<T> {
  currentPage: number;
  items: T[];
  totalItems: number;
  totalPages: number;
}
