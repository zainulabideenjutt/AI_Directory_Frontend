import { useQuery } from '@tanstack/react-query';
import {
  fetchTools,
  fetchCategories,
  fetchTypes,
  fetchHashtags,
  fetchToolById,
  fetchToolsByCategory,
  fetchToolsByType,
  fetchToolsByHashtag,
  searchTools,
  // Interfaces are used as type annotations in the code
  Tool,
  Category,
  Type,
  Hashtag
} from '@/api/services';

// Hook for fetching all tools with optional pagination and filtering
interface FilterParams {
  [key: string]: string | number | boolean | undefined;
}

export const useTools = (page = 1, pageSize = 10, filters?: FilterParams) => {
  const params = {
    page,
    page_size: pageSize,
    ...filters
  };
  
  return useQuery({
    queryKey: ['tools', params],
    queryFn: () => fetchTools(params),
  });
};

// Hook for fetching featured tools (top rated or trending)
export const useFeaturedTools = (limit = 4) => {
  return useQuery({
    queryKey: ['featuredTools', limit],
    queryFn: async () => {
      const data = await fetchTools();
      return data.slice(0, limit);
    },
  });
};

// Hook for fetching all categories
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

// Hook for fetching limited categories (for homepage)
export const useLimitedCategories = (limit = 8) => {
  return useQuery({
    queryKey: ['limitedCategories', limit],
    queryFn: async () => {
      const data = await fetchCategories();
      // Check if the response has a results property (paginated response)
      if (data.results) {
        return data.results.slice(0, limit);
      }
      // If it's an array directly
      return data.slice(0, limit);
    },
  });
};

// Hook for fetching all types
export const useTypes = () => {
  return useQuery({
    queryKey: ['types'],
    queryFn: fetchTypes,
  });
};

// Hook for fetching all hashtags
export const useHashtags = () => {
  return useQuery({
    queryKey: ['hashtags'],
    queryFn: fetchHashtags,
  });
};

// Hook for fetching a single tool by ID
export const useTool = (id: number) => {
  return useQuery({
    queryKey: ['tool', id],
    queryFn: () => fetchToolById(id),
    enabled: !!id,
  });
};

// Hook for fetching tools by category
export const useToolsByCategory = (categoryId: number, page = 1, pageSize = 10, filters?: FilterParams) => {
  const params = {
    page,
    page_size: pageSize,
    ...filters
  };
  
  return useQuery({
    queryKey: ['toolsByCategory', categoryId, params],
    queryFn: () => fetchToolsByCategory(categoryId, params),
    enabled: !!categoryId,
  });
};

// Hook for fetching tools by type
export const useToolsByType = (typeId: number, page = 1, pageSize = 10, filters?: FilterParams) => {
  const params = {
    page,
    page_size: pageSize,
    ...filters
  };
  
  return useQuery({
    queryKey: ['toolsByType', typeId, params],
    queryFn: () => fetchToolsByType(typeId, params),
    enabled: !!typeId,
  });
};

// Hook for fetching tools by hashtag
export const useToolsByHashtag = (hashtagId: number, page = 1, pageSize = 10, filters?: FilterParams) => {
  const params = {
    page,
    page_size: pageSize,
    ...filters
  };
  
  return useQuery({
    queryKey: ['toolsByHashtag', hashtagId, params],
    queryFn: () => fetchToolsByHashtag(hashtagId, params),
    enabled: !!hashtagId,
  });
};

// Hook for searching tools
export const useSearchTools = (query: string, page = 1, pageSize = 10, filters?: FilterParams) => {
  const params = {
    page,
    page_size: pageSize,
    ...filters
  };
  
  return useQuery({
    queryKey: ['searchTools', query, params],
    queryFn: () => searchTools(query, params),
    enabled: !!query,
  });
};