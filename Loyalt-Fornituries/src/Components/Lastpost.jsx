import React, { useState } from 'react';

const articles = [
  { id: 1, title: "Artigo 1", content: "Conteúdo do Artigo 1" },
  { id: 2, title: "Artigo 2", content: "Conteúdo do Artigo 2" },
  { id: 3, title: "Artigo 3", content: "Conteúdo do Artigo 3" },
  { id: 4, title: "Artigo 4", content: "Conteúdo do Artigo 4" },
  { id: 5, title: "Artigo 5", content: "Conteúdo do Artigo 5" },
  { id: 6, title: "Artigo 6", content: "Conteúdo do Artigo 6" },
  // Adicione mais artigos conforme necessário
];

const ArticleList = () => {
  const [visibleArticles, setVisibleArticles] = useState(3); // Número de artigos visíveis inicialmente

  const showMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 3); // Mostra 3 artigos a mais ao clicar
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Artigos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.slice(0, visibleArticles).map((article) => (
          <div key={article.id} className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-700">{article.content}</p>
          </div>
        ))}
      </div>

      {visibleArticles < articles.length && (
        <div className="mt-6 text-center">
          <button
            onClick={showMoreArticles}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
