import { useCallback, useEffect, useState } from 'react';
import { Product } from '../types/state';
import { useFocusEffect } from '@react-navigation/native';
import { sleep } from '../helpers/util';
import { products as productsData } from '../data';

const key = 'products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const fetchData = useCallback(async (signal?: AbortSignal) => {
    try {
      setLoading(true);

      await sleep(1500);

      const response = productsData;

      if (response && response.length) {
        setProducts(response);
        setLoading(false);
      } else {
        throw response;
      }
    } catch (err) {
      console.warn(`${key} Error `, err);
      setLoading(false);
      setError(err);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      fetchData(signal);

      return () => {
        controller.abort();
      };
    }, [])
  );

  return { products, loading, error, refetch: fetchData };
};
