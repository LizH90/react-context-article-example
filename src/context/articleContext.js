import React, { createContext, useReducer } from 'react';

import { reducer } from './reducer';
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [ articles, dispatch ] = useReducer( reducer, [
    { id: 1, title: "Post 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { id: 2, title: "Post 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]);

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;