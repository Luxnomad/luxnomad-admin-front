export const ADMIN_MEMBER_TYPE = {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
} as const;

export const ADMIN_MEMBER_TYPE_STRING = {
  [ADMIN_MEMBER_TYPE.ADMIN]: 'Admin',
  [ADMIN_MEMBER_TYPE.CLIENT]: 'Client',
};

export const ADMIN_MEMBER_TYPE_OPTIONS = [
  {
    value: ADMIN_MEMBER_TYPE.ADMIN,
    label: ADMIN_MEMBER_TYPE_STRING[ADMIN_MEMBER_TYPE.ADMIN],
  },
  {
    value: ADMIN_MEMBER_TYPE.CLIENT,
    label: ADMIN_MEMBER_TYPE_STRING[ADMIN_MEMBER_TYPE.CLIENT],
  },
];
