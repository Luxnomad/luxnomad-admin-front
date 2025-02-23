import { PlatformStatus } from '@@stores/platform/types';
import { PageQuery } from '@@utils/request/types';

export interface PlatformListQuery extends PageQuery {
  id?: string;
  name?: string;
  ownerName?: string;
  regNumber?: string;
  status?: PlatformStatus;
}

export interface PlatformCreateForm {
  id: string;
  name: string;
  ownerName: string;
  companyName: string;
  companyTel: string;
  registrationNumber: string;
  corporationRegistrationNumber?: string;
  companyAddress: string;
  companyEmail: string;
}

export interface PlatformEditForm {
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
}
