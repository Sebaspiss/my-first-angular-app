
export const PRODUCT_STATUS = {
  TRADABLE: 'TRADABLE',
  SUSPENDED: 'SUSPENDED'
} as const;

export type ProductStatus = typeof PRODUCT_STATUS[keyof typeof PRODUCT_STATUS];