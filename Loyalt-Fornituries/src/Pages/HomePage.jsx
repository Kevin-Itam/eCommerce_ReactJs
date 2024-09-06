import Home_Grid from "../Components/GridHome"
import imgtest from '../assets/flamingos.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const articles = [
    {
      tag: 'Tag 1',
      title: 'Título do artigo 1',
      author: 'Autor 1',
      date: '01/01/2023',
      preview: 'Prévia do artigo 1...',
      img: imgtest,
    },
    {
      tag: 'Tag 2',
      title: 'Título do artigo 2',
      author: 'Autor 2',
      date: '02/02/2023',
      preview: 'Prévia do artigo 2...',
      img: imgtest,
    },
    {
      tag: 'Tag 3',
      title: 'Título do artigo 3',
      author: 'Autor 3',
      date: '03/03/2023',
      preview: 'Prévia do artigo 3...',
      img: imgtest,
    },
    {
      tag: 'Tag 4',
      title: 'Título do artigo 4',
      author: 'Autor 4',
      date: '03/03/2023',
      preview: 'Prévia do artigo 4...',
      img: imgtest,
    },
    
  ];

  return (
    <div>
      <Home_Grid/>
      <div className="grid grid-cols-3 grid-flow-col py-20 gap-8">
        <div className="grid grid-rows-[repeat(3, auto)] col-span-2 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 overflow-hidden rounded">
              <div className="overflow-hidden rounded-xl">
                <a href="#">
                  <img
                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
                    src={article.img}
                    alt={`Imagem do artigo ${i + 1}`}
                  />
                </a>
              </div>
              <div className="col-span-2 flex flex-col gap-6 pt-6 pb-6">
                <div>
                  <button className="bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700">
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
                    <FontAwesomeIcon icon={faUser} />
                    <p>{article.author}</p>
                  </div>
                  <div className="flex text-sm leading-tight gap-2 italic">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p>{article.date}</p>
                  </div>
                </div>
                <p className="text-base">{article.preview}</p>
                <div>
                  <a href="#" className="border-l-2 border-slate-600 p-2 transform transition-all duration-300 ease-in hover:bg-slate-600">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-rows-[repeat(3, 200px)] gap-8">
          <div className="bg-stone-500 rounded-xl w-full h-[400px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
              src={imgtest}
              alt="publi"
            />
          </div>
          <div className="bg-stone-500 rounded-xl w-full h-300 "></div>
          <div className="bg-stone-500 rounded-xl w-full h-400"></div>
        </div>
      </div>
    </div>
  );
}