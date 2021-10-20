import { Link } from 'react-router-dom';
import './custom.css'

const Landing = () => {
    return ( 
        <section className="landing-page w-full h-screen">
            <div className="hello-continer w-full h-full flex justify-start items-center bg-black relative">
                <div className="hello-content md:pl-16 md:p-0 p-4 z-10">
                    <h3 className="lg:text-5xl md:text-3xl text-2xl text-gum-dark-red text-left font-semibold">Hello, I am</h3>
                    <h1 className="lg:text-7xl md:text-5xl text-4xl text-gum-dark-red text-left font-bold">Ara Gamaliel <br/> Boanerges</h1>
                    <h4 className="md:text-xl lg:text-3xl text-lg text-white mt-2 text-left">College Student</h4>
                    <div className="buttons flex gap-4 md:mt-8 sm:mt-4 mt-2">
                        <button className="transition-all bg-transparent border-white border-2 hover:border-0 hover:border-transparent hover:bg-gum-dark-red text-white p-2"><Link to="/projects">MY WORKS</Link></button>
                        <button className="transition-all bg-transparent border-white border-2 hover:border-0 hover:border-transparent hover:bg-gum-dark-red text-white p-2">ABOUT ME</button>
                    </div>
                    <div className="socmed absolute md:bottom-8 bottom-4 right-4 md:right-16">
                        <button className="text-2xl text-white mx-2"><i class="fab fa-instagram"></i></button>
                        <button className="text-2xl text-white mx-2"><i class="fab fa-linkedin"></i></button>
                        <button className="text-2xl text-white mx-2"><i class="fab fa-github"></i></button>
                        <button className="text-2xl text-white mx-2"><i class="fas fa-envelope-open-text"></i></button>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-screen">
                    <img src="img/me.jpg" alt="Ara Gamaliel Boanerges" className="object-cover w-full h-full opacity-75"/>
                </div>
            </div>
        </section>
     );
}
 
export default Landing;