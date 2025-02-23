import { useMemo } from 'react';

import qs from 'qs';
import { useLocation } from 'react-router-dom';

const useSearch = <Query extends object>() => {
  const location = useLocation();

  const search = useMemo(() => {
    return qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }) as Query;
  }, [location.search]);

  return search;
};

export default useSearch;
