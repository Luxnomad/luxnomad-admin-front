import { PlatformCreateForm, PlatformEditForm } from '@@pages/Platform/types';
import { PlatformCreateRequest, PlatformEditRequest } from '@@stores/platform/types';

export const sanitizePlatformCreateForm = (form: PlatformCreateForm): PlatformCreateRequest => ({
  id: form.id,
  name: form.name,
  ownerName: form.ownerName,
  companyName: form.companyName,
  companyTel: form.companyTel,
  registrationNumber: form.registrationNumber,
  corporationRegistrationNumber: form.corporationRegistrationNumber,
  companyAddress: form.companyAddress,
  companyEmail: form.companyEmail,
});

export const sanitizePlatformEditForm = (form: PlatformEditForm): PlatformEditRequest => ({
  id: form.id,
  name: form.name,
  ownerName: form.ownerName,
  companyName: form.companyName,
  companyTel: form.companyTel,
  registrationNumber: form.registrationNumber,
  corporationRegistrationNumber: form.corporationRegistrationNumber,
  companyAddress: form.companyAddress,
  companyEmail: form.companyEmail,
  status: form.status,
});
