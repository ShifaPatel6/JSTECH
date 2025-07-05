import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const addToFavorites = (product) => {
    if (!favorites.find((p) => p.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };
  const RemoveFavorites = (productId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, RemoveFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
