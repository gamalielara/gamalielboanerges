import { Link } from 'react-router-dom';

const Landing = () => {
    return ( 
        <section className="landing-page w-full h-screen md:flex">
            <div className="md:w-1/3 md:h-full w-full h-1/2 flex justify-center items-center relative">
                <img src="/img/me.jpg" alt="Ara Gamaliel" class="w-full h-full object-cover" />
                <div className="block sm:hidden bg-gradient-to-t from-black h-8 w-full absolute -bottom-1"></div>
            </div>
            <div className="hello-continer md:w-2/3 w-full md:h-full flex justify-start items-center bg-black">
                <div className="hello-content md:pl-16 md:p-0 p-4">
                    <h3 className="md:text-3xl lg:text-5xl text-2xl text-gum-dark-red text-left font-semibold">Hello, I am</h3>
                    <h1 className="md:text-6xl lg:text-8xl text-5xl text-gum-dark-red text-left font-bold">Ara Gamaliel Boanerges</h1>
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
            </div>
        </section>
     );
}
 
export default Landing;