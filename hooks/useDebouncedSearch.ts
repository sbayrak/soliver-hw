import { useCallback, useEffect, useState } from 'react';
import { Product } from '../types/state';
import { sleep } from '../helpers/util';
import { products } from '../data';

export const useDebouncedSearch = (value: string, ms = 200) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [searchedProducts, setSearchedProducts] = useState<
    Product[] | undefined
  >();
  const [loading, setLoading] = useState(true);

  const search = useCallback(async () => {
    try {
      await sleep(1500);
      const json = products;

      if (json && Object.keys(json || {}).length) {
        setSearchedProducts(json);
        setLoading(false);
      } else {
        setLoading(false);
        throw json;
      }
    } catch (error) {
      setLoading(false);
    }
  }, [debouncedValue]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);

    return () => {
      clearTimeout(timer);
    };
  }, [value, ms]);

  useEffect(() => {
    if (value) {
      search();
    } else {
      setSearchedProducts(undefined);
      setDebouncedValue('');
      setLoading(false);
    }
  }, [value, loading, searchedProducts?.length]);

  return { searchedProducts, loadingDebounced: loading };
};
