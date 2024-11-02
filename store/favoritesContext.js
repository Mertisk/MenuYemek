import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteFoodIds, setFavoriteFoodIds] = useState([]);

  function addFavorite(id) {
    setFavoriteFoodIds((current) => [...current, id]);
  }

  function removeFavorite(id) {
    setFavoriteFoodIds((current) => current.filter((foodId) => foodId !== id));
  }

  const value = {
    ids: favoriteFoodIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
