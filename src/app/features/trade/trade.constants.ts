
export const PRODUCT_STATUS = {
  NEGOZIABILE: 'NEGOZIABILE',
  SOSPESO: 'SOSPESO'
} as const;

export type ProductStatus = typeof PRODUCT_STATUS[keyof typeof PRODUCT_STATUS];