// getRecommendations.js

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  },
  products = []
) => {
  try {
    const {
      selectedPreferences,
      selectedFeatures,
      selectedRecommendationType,
    } = formData;

    function calculateScore(product) {
      let score = 0;

      if (selectedPreferences?.length > 0) {
        score += selectedPreferences.filter((preference) =>
          product.preferences.includes(preference)
        ).length;
      }

      if (selectedFeatures?.length > 0) {
        score += selectedFeatures.filter((feature) =>
          product.features.includes(feature)
        ).length;
      }

      return score;
    }

    const productsWithScore = products.map((product) => ({
      ...product,
      score: calculateScore(product),
    }));

    let productsToReturn = [];

    if (selectedRecommendationType === 'SingleProduct') {
      const maxScore = Math.max(
        ...productsWithScore.map((product) => product.score)
      );

      const topProducts = productsWithScore.filter(
        (product) => product.score === maxScore
      );

      productsToReturn =
        topProducts.length > 0 ? [topProducts[topProducts.length - 1]] : [];
    } else {
      productsToReturn = productsWithScore
        .filter((product) => product.score > 0)
        .sort((a, b) => b.score - a.score);
    }

    return productsToReturn.map((product) => ({
      id: product.id,
      name: product.name,
    }));
  } catch (error) {
    console.error('Erro ao obter as recomendações:', error);
    throw error;
  }
};

const getRecommendationById = (id, products) => {
  try {
    const product = products.find((product) => product.id === id);

    if (!product) {
      throw new Error('Produto não encontrado');
    }

    return product;
  } catch (error) {
    console.error('Erro ao obter o produto:', error);
    throw error;
  }
};

const recommendationService = { getRecommendations, getRecommendationById };

export default recommendationService;
