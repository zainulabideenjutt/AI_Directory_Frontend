import axiosInstance from './axios';

// Types based on the Django models
export interface Category {
  id: number;
  name: string;
  description: string | null;
}

export interface Hashtag {
  id: number;
  name: string;
  description: string | null;
}

export interface Type {
  id: number;
  name: string;
}

export interface Tool {
  id: number;
  name: string;
  image_url: string | null;
  logo_url: string | null;
  description: string;
  upvote_count: number;
  trend_count: number;
  rating: string;
  is_verified: boolean;
  url: string | null;
  rank_in_category: number;
  category: Category;
  type: Type;
  hashtags: Hashtag[];
  date_added: string;
  date_updated: string;
}

export interface SubscribePayload {
  email: string;
}

export interface SubscribeResponse {
  email: string;
  message: string;
}

export interface QueryParams {
  page?: number;
  page_size?: number;
  ordering?: string;
  search?: string;
  category?: number;
  type?: number;
  hashtag?: number;
}


// API service functions
export const fetchTools = async (params?: QueryParams) => {
  const response = await axiosInstance.get('api/tools', { params });
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axiosInstance.get('api/categories');
  return response.data;
};

export const fetchTypes = async () => {
  const response = await axiosInstance.get('api/types');
  return response.data;
};

export const fetchHashtags = async () => {
  const response = await axiosInstance.get('api/hashtags');
  return response.data;
};

export const fetchToolById = async (id: number) => {
  const response = await axiosInstance.get(`api/tools/${id}`);
  return response.data;
};

export const fetchToolsByCategory = async (categoryId: number, params?: QueryParams) => {
  const queryParams = { ...params, category: categoryId };
  const response = await axiosInstance.get('api/tools', { params: queryParams });
  return response.data;
};

export const fetchToolsByType = async (typeId: number, params?: QueryParams) => {
  const queryParams = { ...params, type: typeId };
  const response = await axiosInstance.get('api/tools', { params: queryParams });
  return response.data;
};

export const fetchToolsByHashtag = async (hashtagId: number, params?: QueryParams) => {
  const queryParams = { ...params, hashtag: hashtagId };
  const response = await axiosInstance.get('api/tools', { params: queryParams });
  return response.data;
};

export const searchTools = async (query: string, params?: QueryParams) => {
  const queryParams = { ...params, search: query };
  const response = await axiosInstance.get('api/tools', { params: queryParams });
  return response.data;
};

// In your API service file
export const subscribeUser = async (payload: SubscribePayload): Promise<SubscribeResponse> => {
  const response = await axiosInstance.post('/api/subscribe/', payload);
  return response.data;
};