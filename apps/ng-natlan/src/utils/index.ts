import { environment } from '../environments/environment.local';

export const natlanApiKey = () => environment.NATLAN_API_KEY;

export const natlanApiBase = () => environment.NATLAN_API_BASE;

export const natlanEndpoint = (action: string) =>
  `${environment.NATLAN_API_BASE}/documents:${action}`;
