import { isAxiosError } from 'axios';

export function formatApiError(error: Error) {
  let message = '';

  if (
    isAxiosError<{ message?: string }>(error) &&
    error.response?.data.message
  ) {
    message = error.response.data.message;
  } else {
    message = error.message;
  }

  return message;
}
