import imgtest from '../assets/flamingos.jpg';

export default function App() {
  const articles = [
    {
      tag: 'Tag 1',
      title: 'Título do artigo 1',
      date: '01/01/2023',
      img: imgtest,
    },
    {
      tag: 'Tag 2',
      title: 'Título do artigo 2',
      date: '02/02/2023',
      img: imgtest,
    },
    {
      tag: 'Tag 3',
      title: 'Título do artigo 3',
      date: '03/03/2023',
      img: imgtest,
    },   
  ];

  return (
    <div className='grid grid-rows-1 grid-flow-rows py-10 gap-8'>
        <h1>Top Articles</h1>
        <div className='grid grid-cols-3 grid-flow-col gap-4'>
            {articles.map((article, i) => (
                <div key={i} className="overflow-hidden rounded">
                    <div className="overflow-hidden rounded-xl">
                        <a href="#">
                        <img
                            className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
                            src={article.img}
                            alt={`Imagem do artigo ${i + 1}`}
                        />
                        </a>
                    </div>
                    <div className="col-span-2 flex flex-col gap-2 pt-6 pb-6">
                        <div>
                        <button className="bg-red-600 rounded px-6 transition-all duration-500 ease-in-out hover:bg-slate-700">
                            {article.tag}
                        </button>
                        </div>
                        <h1 className="break-words font-bold text-2xl text-black">
                        <a href="#" className="transform transition-all duration-200 ease-in-out hover:underline underline-offset-0 hover:underline-offset-8">
                            {article.title}
                        </a>
                        </h1>
                        <div className="flex gap-2">
                        <div className="flex text-sm leading-tight gap-2 italic">
                            <p>{article.date}</p>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}