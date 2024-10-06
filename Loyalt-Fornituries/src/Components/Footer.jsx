import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin , faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function App(){
    return(
        <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
            {/* Logo e descrição */}
            <div className="flex flex-col gap-14">
                <img src={logo} alt="LOGO" className="w-60 h-auto" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            
            {/* Quick links */}
            <div className="">
                <h3 className="flex flex-col items-center font-semibold mb-2">Quick Links</h3>
                <ul className=" flex flex-col items-center justify-center gap-6 py-16">
                <li><a href="#" className="text-blue-500 hover:underline">Contact</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">About</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Blog</a></li>
                </ul>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex flex-col gap-6">
                <h3 className="font-semibold mb-2">Redes Sociais</h3>
                <ul className="grid grid-cols-2 gap-4">
                <li className="group border border-slate-600 rounded py-4 px-10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                    <a className="flex flex-col gap-4 items-center transition-colors duration-300 group-hover:text-gray-400" href="#">
                        <FontAwesomeIcon icon={faGithub} size='2x'/><p className='text-white'>GitHub</p></a></li>
                <li className="group border border-slate-600 rounded py-4 px-10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                    <a className="flex flex-col gap-4 items-center transition-colors duration-300 group-hover:text-blue-500" href="#">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/><p className='text-white'>Linkdin</p></a></li>
                <li className="group border border-slate-600 rounded col-span-2 py-5 px-10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                    <a className="flex flex-col gap-4 justify-center items-center transition-colors duration-300 group-hover:text-green-500" href="#">
                        <FontAwesomeIcon icon={faWhatsapp} size='2x'/><p className='text-white'>Instagram</p></a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}