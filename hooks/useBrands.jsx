import { useQuery } from '@tanstack/react-query';
import fetchProducts from "../lib/fetchProducts"

const useBrands = (url) => {
  return useQuery({ queryKey: ["products",], queryFn: () => fetchProducts(url) })
};

export default useBrands;
