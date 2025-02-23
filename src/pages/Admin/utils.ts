import { UpsertAdminForm } from '@@pages/Admin/types';
import { AdminCreateRequest } from '@@stores/admin/types';

export const sanitizeAdminForm = (form: UpsertAdminForm): AdminCreateRequest => ({
  email: form.email,
  name: form.name,
  password: form.password,
  type: form.type,
  authTypes: form.permission,
  platformId: form.platformId,
});
