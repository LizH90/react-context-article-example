import React from 'react';

import ArticleProvider from './context/articleContext';
import AddArticle from './components/AddArticle';
import Articles from './containers/Articles';

function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
}

export default App;
