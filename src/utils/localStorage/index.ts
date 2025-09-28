import { AdminDetailResponse } from '@@stores/auth/types';
import { HotelSearchResponse } from '@@stores/book/types';
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

export const getHotelSearchInfo = (): HotelSearchResponse | null => {
  const hotel = get(STORAGE_KEYS.hotelSearchInfo);
  try {
    const parsedHotelSearchInfo = JSON.parse(hotel ?? '');
    return parsedHotelSearchInfo;
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

export const saveHotelSearchInfo = (info: HotelSearchResponse) => {
  localStorage.setItem(STORAGE_KEYS.hotelSearchInfo, JSON.stringify(info));
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

export const clearHotelSearchInfo = () => {
  remove(STORAGE_KEYS.hotelSearchInfo);
};
