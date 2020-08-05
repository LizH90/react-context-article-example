import React, { createContext, useState } from 'react';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [ articles, setArticles ] = useState([
    { id: 1, title: "Post 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { id: 2, title: "Post 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]);

  const saveArticle = article => {
    const newArticle = {
      id: Math.random(),
      title: article.title,
      body: article.body,
    };
    setArticles([...articles, newArticle ])
  };

  return (
    <ArticleContext.Provider value={{ articles, saveArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;