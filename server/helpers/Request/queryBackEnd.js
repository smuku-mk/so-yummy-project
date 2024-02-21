import instanceBackEnd from '../RequestBackEnd';

const queryRecipeMinePage = async quantity => {
  try {
    const { data } = await instanceBacEnd.get(
      `/recipes/main-page?query=${quantity}`
    );
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryRecipeCategory = async category => {
  try {
    const { data } = await instanceBackEnd.get(`/recipes/category/${category}`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryRecipeId = async id => {
  try {
    const { data } = await instanceBackEnd.get(`/recipes/${id}`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const querySubscribe = async email => {
  try {
    const { data } = await instanceBackEnd.post(`/subscribe`, { email });
    console.log(data);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryOwnRecipes = async () => {
  try {
    const { data } = await instanceBackEnd.get(`/ownRecipes`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryOwnRecipesDelete = async id => {
  try {
    const { data } = await instanceBackEnd.get(`/ownRecipes/${id}`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryCategoryList = async () => {
  try {
    const { data } = await instanceBackEnd.get('/recipes/category-list');
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryAllIngredients = async () => {
  try {
    const { data } = await instanceBackEnd.get('/ingredients/list');
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryPopular = async query => {
  try {
    const { data } = await instanceBackEnd.get(`/popular-recipe?query=${query}`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryAddFavorite = async id => {
  try {
    const data = await instanceBackEnd.patch(`/favorite/add`, id);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryRemoveFavorite = async id => {
  try {
    const data = await instanceBackEnd.patch(`/favorite/remove`, id);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};


const queryAllFavorite = async () => {
  try {
    const { data } = await instanceBackEnd.get(`/favorite`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const querySearch = async (type, query, limit = 6, page = 1) => {
  try {
    const { data } = await instanceBackEnd.get(
      `/search?page=${page}&limit=${limit}&query=${query}&type=${type}`
    );
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryShoppingList = async () => {
  try {
    const { data } = await instanceBackEnd.get(`/shopping-list`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryAddShoppingList = async list => {
  try {
    const { data } = await instanceBackEnd.patch(`/shopping-list/add`, list);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryRemoveShoppingList = async idIng => {
  try {
    const { data } = await instanceBackEnd.patch(`/shopping-list/remove`, idIng);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryAddRecipe = async data => {
  try {
    const add = await instanceBackEnd.post('/ownRecipes', data, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    return add.status;
  } catch (err) {
    console.log(err.response.data.message);
    return err.response.data.message;
  }
};

const queryBackEnd = {
  queryRecipeMinePage,
  queryRecipeCategory,
  queryRecipeId,

  querySubscribe,

  queryOwnRecipes,
  queryOwnRecipesDelete,

  queryCategoryList,

  querySearch,

  queryAllIngredients,
  queryPopular,

  queryAddFavorite,
  queryRemoveFavorite,
  queryAllFavorite,

  queryShoppingList,
  queryAddShoppingList,
  queryRemoveShoppingList,

  queryAddRecipe,
};

export default queryBackEnd;
