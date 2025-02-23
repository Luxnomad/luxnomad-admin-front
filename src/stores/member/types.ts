import { MEMBER_STATUS } from '@@stores/member/constants';
import { asType } from '@@types/common';

export type MemberStatus = asType<typeof MEMBER_STATUS>;

export interface MemberBaseResponse {
  code: string;
  id: string;
  name: string;
  email: string;
  status: MemberStatus;
  tel: string;
  createDatetime: string;
  platformName: string;
}

export interface MemberListResponse extends MemberBaseResponse {}

export interface MemberDetailResponse extends MemberBaseResponse {
  platformId: string;
}

export interface MemberListSearchResposne {
  memberCode: string;
  memberId: string;
  memberName: string;
  platformName: string;
}

export interface MemberCreateRequest {
  id: string;
  name: string;
  tel: string;
  email: string;
  password: string;
  platformId: string;
}

export interface MemberEditRequest {
  code: string;
  email: string;
  tel: string;
  status: MemberStatus;
}
