export default function App(){
    return(
        <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
            {/* Logo e descrição */}
            <div className="">
                <img src="#" alt="LOGO" className="w-20 h-auto" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            
            {/* Quick links */}
            <div className="">
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <ul>
                <li><a href="#" className="text-blue-500 hover:underline">Link 1</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Link 2</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Link 3</a></li>
                </ul>
            </div>
            
            {/* Redes Sociais */}
            <div className="">
                <h3 className="font-semibold mb-2">Redes Sociais</h3>
                <ul className="flex space-x-4">
                <li><a href="#"><img src="link-to-facebook-icon" alt="Facebook" /></a></li>
                <li><a href="#"><img src="link-to-twitter-icon" alt="Twitter" /></a></li>
                <li><a href="#"><img src="link-to-instagram-icon" alt="Instagram" /></a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}