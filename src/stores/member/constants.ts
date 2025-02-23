export const MEMBER_STATUS = {
  ENABLE: 'ENABLE',
  DISABLE: 'DISABLE',
} as const;

export const MEMBER_STATUS_STRING = {
  [MEMBER_STATUS.ENABLE]: '활성',
  [MEMBER_STATUS.DISABLE]: '비활성',
};
