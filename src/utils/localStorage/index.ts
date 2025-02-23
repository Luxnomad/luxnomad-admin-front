import { AdminDetailResponse } from '@@stores/auth/types';
import { STORAGE_KEYS } from '@@utils/localStorage/constants';

export const get = (name: string) => localStorage.getItem(name);

export const remove = (name: string) => localStorage.removeItem(name);

export const getAccessToken = () => get(STORAGE_KEYS.accessToken);

export const getMemberData = (): AdminDetailResponse | null => {
  const member = get(STORAGE_KEYS.memberData);
  try {
    const parsedMember = JSON.parse(member ?? '');
    return parsedMember;
  } catch {
    return null;
  }
};

export const set = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const saveToken = (accessToken: string) => {
  set(STORAGE_KEYS.accessToken, accessToken);
};

export const clearToken = () => {
  remove(STORAGE_KEYS.accessToken);
};

export const saveMemberData = (member: AdminDetailResponse) => {
  set(STORAGE_KEYS.memberData, JSON.stringify(member));
};

export const clearMemberData = () => {
  remove(STORAGE_KEYS.memberData);
};
