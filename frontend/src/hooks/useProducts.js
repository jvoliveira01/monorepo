import { useEffect, useState } from 'react';
import getProducts from '../services/product.service';
import { useToast } from '../contexts/toast';
import { usePreferences } from '../contexts/preferences';

const useProducts = () => {
  const { addToast } = useToast();
  const { t } = usePreferences();
  const [preferences, setPreferences] = useState([]);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        const allPreferences = [];
        const allFeatures = [];

        setProducts(products);

        products.forEach((product) => {
          const productPreferences = product.preferences
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allPreferences.push(...productPreferences);

          const productFeatures = product.features
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allFeatures.push(...productFeatures);
        });

        setPreferences(allPreferences);
        setFeatures(allFeatures);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
        addToast(t('errorFetchingProductsList'), 'error');
      }
    };

    fetchData();
  }, [addToast, t]);

  return { preferences, features, products };
};

export default useProducts;
