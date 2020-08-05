import React, { useState, useContext } from 'react';
import { ArticleContext } from '../context/articleContext';

const AddArticle = () => {
  const { dispatch } = useContext(ArticleContext);

  const [ article, setArticle ] = useState();
  
  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }

  const addNewArticle = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ARTICLE", article });
    e.target.title.value = "";
    e.target.body.value = "";
  };
  return (
    <form onSubmit={ addNewArticle }>
      <input
        type='text'
        id='title'
        placeholder='Title'
        onChange={ handleArticleData }
      />
      <input 
        type='text'
        id='body'
        placeholder='Body'
        onChange={ handleArticleData }
      />
      <button>Add Article</button>
    </form>
  );
};

export default AddArticle;