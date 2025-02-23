export const PRODUCT_STATUS = {
  ENABLE: 'ENABLE',
  DISABLE: 'DISABLE',
} as const;

export const ALL_PRODUCT_STATUS = Object.values(PRODUCT_STATUS);

export const PRODUCT_STATUS_STRING = {
  [PRODUCT_STATUS.ENABLE]: '활성',
  [PRODUCT_STATUS.DISABLE]: '비활성',
};
