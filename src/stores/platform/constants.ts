export const PLATFORM_STATUS = {
  ENABLE: 'ENABLE',
  DISABLE: 'DISABLE',
} as const;

export const ALL_PLATFORM_STATUS = Object.values(PLATFORM_STATUS);

export const PLATFORM_STATUS_STRING = {
  [PLATFORM_STATUS.ENABLE]: '활성',
  [PLATFORM_STATUS.DISABLE]: '비활성',
};
