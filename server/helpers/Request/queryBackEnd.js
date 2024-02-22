import instanceBackEnd from '../RequestBackEnd';


const queryRecipeId = async id => {
  try {
    const { data } = await instanceBackEnd.get(`/recipes/${id}`);

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
  queryRecipeId,
  queryOwnRecipes,
  queryOwnRecipesDelete,
  queryAddFavorite,
  queryRemoveFavorite,
  queryAllFavorite,
  queryAddRecipe,
};

export default queryBackEnd;
