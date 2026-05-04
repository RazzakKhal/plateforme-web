export interface PageResponse<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort[];
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort[];
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  direction: 'ASC' | 'DESC';
  property: string;
  ignoreCase: boolean;
  nullHandling: 'NATIVE' | 'NULLS_FIRST' | 'NULLS_LAST';
  descending: boolean;
  ascending: boolean;
}
