import { useState, useEffect, useCallback } from 'react';

export const useSuggestion = <T>(fetcher: (keyword: string) => Promise<T[]>) => {
  const [keyword, setKeyword] = useState<string>('');
  const [options, setOptions] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchOptions = useCallback(
    async (searchKeyword: string) => {
      if (!searchKeyword.trim()) {
        setOptions([]);
        return;
      }

      setLoading(true);
      try {
        const results = await fetcher(searchKeyword);
        setOptions(Array.isArray(results) ? results : []);
      } catch (error) {
        console.error('Search Error:', error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    },
    [fetcher]
  );

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchOptions(keyword);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [keyword, searchOptions]);

  return {
    inputValue: keyword,
    setInputValue: setKeyword,
    options,
    loading,
  };
};
