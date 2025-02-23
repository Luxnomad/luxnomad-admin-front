import { MemberListSearchResposne } from '@@stores/member/types';
import { Platform } from '@@stores/platform/types';
import { authenticatedRequest } from '@@utils/request';

export const searchPlatform = (keyword: string): Promise<Platform[]> =>
  authenticatedRequest
    .get(`/api/platform/list/search?keyword=${keyword}`)
    .then((v) => v.data)
    .catch(() => []);

export const searchMember = (keyword?: string, platformId?: string): Promise<MemberListSearchResposne[]> =>
  authenticatedRequest
    .get(`/api/member/list/search?keyword=${keyword}&platformId=${platformId}`)
    .then((v) => v.data)
    .catch(() => []);
