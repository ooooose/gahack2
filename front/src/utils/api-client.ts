import axiosBase, { AxiosInstance, AxiosResponse } from 'axios';
import { getAuth } from 'firebase/auth';

class ApiClient {
  axios: AxiosInstance;
  constructor() {
    this.axios = axiosBase.create({
      baseURL: process.env.REACT_APP_HOST,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Credentials': true,
      },
      responseType: 'json',
    });
  }

  async apiGet<T>(url: string, query = {}): Promise<AxiosResponse<T>> {
    return await this.axios.get<T>(`${url}`, { ...query });
  }

  async apiGetWithAuth<T>(url: string): Promise<AxiosResponse<T>> {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken();
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    return await this.axios.get<T>(`${url}`, config);
  }

  async apiPost<T>(url: string, body = {}): Promise<AxiosResponse<T>> {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken();
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    return await this.axios.post<T>(`${url}`, body, config);
  }

  async apiPut<T>(url: string, body = {}): Promise<AxiosResponse<T>> {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken();
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    return await this.axios.put<T>(`${url}`, body, config);
  }

  async apiDelete<T>(url: string, body = {}): Promise<AxiosResponse<T>> {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken();
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
      data: body,
    };
    return await this.axios.delete<T>(`${url}`, config);
  }

  async apiPostOrDelete<T>(
    url: string,
    isLiked: boolean,
    params: { picture_id: number },
  ): Promise<AxiosResponse<T>> {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken();
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    return await this.axios.request<T>({
      method: isLiked ? 'DELETE' : 'POST',
      url: url,
      headers: config.headers,
      data: params,
    });
  }
}

export const apiClient = new ApiClient();
