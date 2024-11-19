import { apiClient } from '@/lib/api-client';

export async function changeTfaMethodService(method: string | null) {
  const res = await apiClient.patch<{ tfaLink: string }>('/auth/2fa/change', {
    method,
  });
  return res.data;
}
