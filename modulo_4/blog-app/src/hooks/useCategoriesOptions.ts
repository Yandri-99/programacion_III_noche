import { useEffect, useState } from "react";
import { getCategories } from "../service/categories.service";
import type { CategoryDto } from "../service/categories.service";

export function useCategoriesOptions() {
  const [options, setOptions] = useState<CategoryDto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getCategories({ page: 1, limit: 200, sort: "name", order: "ASC" });
        setOptions(res.items);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { options, loading };
}