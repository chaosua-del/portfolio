import { apiClient } from '@/lib/api-client';

export async function getExchangeRatesService() {
  const res = await apiClient.get<Record<string, number>>(
    '/assets/exchange-rates',
  );
  return res.data;
}
