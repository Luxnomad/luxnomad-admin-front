import { PLATFORM_STATUS } from '@@stores/platform/constants';
import { asType } from '@@types/common';

export type PlatformStatus = asType<typeof PLATFORM_STATUS>;

export interface PlatformBaseResponse {
  id: string;
  name: string;
  ownerName: string;
  companyName: string;
  companyTel: string;
  registrationNumber: string;
  corporationRegistrationNumber: string;
  companyAddress: string;
  companyEmail: string;
  status: PlatformStatus;
  createDatetime: Date;
}

export interface PlatformListResponse extends PlatformBaseResponse {}

// ListResponse와 구성은 같지만 추후에 확장성을 고려하여 분리
export interface PlatformDetailResponse extends PlatformBaseResponse {}

export interface Platform {
  platformId: string;
  platformName: string;
  ownerName: string;
  companyName: string;
  companyTel: string;
  registrationNumber: string;
  corporationRegistrationNumber: string;
  companyAddress: string;
  companyEmail: string;
  createdAt: Date;
}

export interface PlatformCreateRequest {
  id: string;
  name: string;
  ownerName: string;
  companyName: string;
  companyTel: string;
  registrationNumber: string;
  corporationRegistrationNumber?: string;
  companyAddress: string;
  companyEmail?: string;
}

export interface PlatformEditRequest {
  id: string;
  name: string;
  ownerName: string;
  companyName: string;
  companyTel: string;
  registrationNumber: string;
  corporationRegistrationNumber?: string;
  companyAddress: string;
  companyEmail?: string;
  status: PlatformStatus;
}
