
export default function App(){
    const text = "Inscreva-se para receber as atualizações sobre novos conteúdos.";
    const firstpart = text.split("sobre")[0];
    const secondpart = text.split("sobre")[1];

    return(
        <div className="bg-slate-900 flex flex-row container mx-auto px-6 py-20 gap-8">
            <span className="text-xl text-wrap">{firstpart}<br />sobre{secondpart}</span>
            <div className="bg-slate-500 flex">
                <input className="outline-none px-5 py-3 " type="email" name="email" id="" placeholder="Digite seu E-mail" />
                <input type="submit" value="Subscribe" />
            </div>
        </div>
    )
};