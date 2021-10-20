import { BrowserRouter, Link } from "react-router-dom";

const Projects = () => {
    return (  
        // <BrowserRouter basename="/projects">
            <section className="my-projects text-white w-full h-auto absolute p-4 bg-black">
                <div className="my-projects-container">
                    <h1 className="text-5xl lg:text-7xl text-gum-dark-red font-bold">My Projects</h1>
                    <div className="projects flex flex-wrap w-full justify-center align-middle mt-4">

                        <div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg">
                            <img src="img/works/folklorevermore-chess.jpg" alt="the folklorevermore chess" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                <h3 className="text-xl mt-2">The folklorevermore Chess</h3>
                                <h4 className="md:text-xs text-sm">
                                    a chess game created using HTML, CSS and JavaScript (OOP, DOM Modifications, etc). Some features might not work, such as en passant move. 
                                    I honestly do not know why I named this game as 'folkloreveremore', but I think it is to show the authenticity and to show that I really 
                                    built and developed this game from scratch. created by Ara Gamaliel.
                                </h4>
                                <div className="categories flex flex-wrap w-full justify-center my-2">
                                    <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">CSS</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">JavaScript</span>
                                </div>
                                <div className="links flex justify-center mt-2">
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="#" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="#" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                                </div>
                            </div>
                        </div>

                        <div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg">
                            <img src="img/works/toDo.jpeg" alt="the toDo app" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                <h3 className="text-xl mt-2">toDo App</h3>
                                <h4 className="md:text-xs text-sm">
                                A to-do-list application created using React Js. The user can add to do, add them in certain categories, 
                                mark them as completed/uncompleted and the user can also add new customized categories.
                                </h4>
                                <div className="categories flex flex-wrap w-full justify-center my-2">
                                    <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">CSS</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">ReactJS</span>
                                </div>
                                <div className="links flex justify-center mt-2">
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://github.com/gamalielara/react-to-do-list" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://gamalielara.github.io/react-to-do-list/" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                                </div>
                            </div>
                        </div>

                        <div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg">
                            <img src="img/works/libshelf.jpg" alt="the toDo app" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                <h3 className="text-xl mt-2">libSHELF App</h3>
                                <h4 className="md:text-xs text-sm">
                                A simple CRUD application to register and store our books, rate them and give them our short and full review. 
                                Right now the visitor can only view the website without changing the any data in the website. Created with PHP native.
                                </h4>
                                <div className="categories flex flex-wrap w-full justify-center my-2">
                                    <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">Bootstrap CSS</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">JavaScript</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">Chart.Js</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">PHP Native</span>
                                </div>
                                <div className="links flex justify-center mt-2">
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://github.com/gamalielara/libSHELF-app" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="http://libshelf.infinityfreeapp.com/" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg">
                            <img src="img/works/gumrindelwald.jpg" alt="the toDo app" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                
                            <h3 className="text-xl mt-2">gumrindelwald</h3>
                            <h4 className="md:text-xs text-sm">
                                A blog template created using Tailwindcss and Vanila Javascript. 
                            </h4>
                            <div className="categories flex flex-wrap w-full justify-center my-2">
                                <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                <span className="bg-black m-2 p-2 rounded text-xs">Tailwindcss</span>
                                <span className="bg-black m-2 p-2 rounded text-xs">JavaScript</span>
                            </div>
                            <div className="links flex justify-center mt-2">
                                <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://github.com/gamalielara/gumrindelwald" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://gumrindelwald.netlify.app/" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        // </BrowserRouter>
    );
}
 
export default Projects;