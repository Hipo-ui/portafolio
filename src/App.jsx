import profile from './assets/profile.png'
import html from './assets/html.svg'
import css from './assets/css.svg'
import js from './assets/js.svg'
import bootstrap from './assets/bootstrap.svg'
import tailwind from './assets/tailwind.svg'
import react from './assets/react.svg'
import figma from './assets/figma.svg'
import java from './assets/java.svg'
import springboot from './assets/springboot.svg'
import mysql from './assets/mysql.svg'
import git from './assets/git.svg'

import deliveryApp from './assets/deliveryApp.png'
import sitioWebInformatica from './assets/sitioWebInformatica.png'
import sitioWebEcoturismo from './assets/sitioWebEcoturismo.png'

function App() {
  return (
    <main className='main-section'>

        <section className="section bg-[url('/waves.svg')] bg-no-repeat bg-cover">
            <div className='section-content flex-col-reverse lg:flex-row'>
                <div className='content-center flex-col gap-6 w-full lg:w-1/2'>
                    <div className='content-center flex-col gap-4'>
                        <h1 className='title'>Hipólito Javier Domínguez Hernández</h1>
                        <h2 className='subtitle'>Diseñador UX/UI - Desarrollador Web Front End</h2>  
                    </div> 
                    <hr className='line-divisor' />
                    <p className='description'>Profesional en informática con habilidades y gusto por el desarrollo y diseño de sitios web y aplicaciones web. Además con conocimientos en usabilidad y en la creación de interfaces gráficas de usuario.</p> 
                    <div className='flex flex-col justify-center items-center gap-4 lg:flex-row lg:gap-8'>
                        <span className='pill-contact'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="pill-contact_icon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"/></svg>
                            <span>hipolitojavierdominguez@gmail.com</span>
                        </span>
                        <a href='https://www.linkedin.com/in/hipo-ui/' target='_blank' className='pill-contact'>
                            <svg width="512" height="512" viewBox="0 0 512 512" className="pill-contact_icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.61C32 461.91 49.85 480 70.28 480H444.06C464.6 480 480 461.79 480 441.61V66.89C480.12 46.7 464.6 32 444.17 32ZM170.87 405.43H106.69V205.88H170.87V405.43ZM141 175.54H140.54C120 175.54 106.7 160.25 106.7 141.11C106.7 121.62 120.35 106.69 141.35 106.69C162.35 106.69 175.2 121.51 175.66 141.11C175.65 160.25 162.35 175.54 141 175.54ZM405.43 405.43H341.25V296.32C341.25 270.18 331.91 252.32 308.69 252.32C290.95 252.32 280.45 264.32 275.78 276.01C274.03 280.21 273.56 285.93 273.56 291.77V405.43H209.38V205.88H273.56V233.65C282.9 220.35 297.49 201.21 331.44 201.21C373.57 201.21 405.44 228.98 405.44 288.85L405.43 405.43Z" stroke="currentColor" strokeWidth="32"/>
                            </svg>
                            <span>hipo-ui</span>
                        </a>
                    </div>
                </div>
                <div className='content-center w-full lg:w-1/2'>
                    <div className='bg-profile'>
                        <img src={profile} className="img-profile" alt="Foto de perfil de Hipólito Javier" />
                    </div>
                </div>
            </div>
        </section>


        <section className='section'>
            <div>
                <header className='title pb-8'>Mis trabajos</header>
                <div className='grid-projects'>

                    <article className='card-project'>
                        <img src={deliveryApp} alt="" className='card-project_img'/>
                        <div className="card-project_body">
                            <header className="card-project_title">App de entrega de comida</header>
                            <p className="card-project_description">Diseño de un prototipo de alta fidelidad de una aplicación móvil para la entrega de comida.</p>
                            <div className="card-project_details">
                                <p className="card-project_details_label">Herramientas utlizadas:</p>
                                <img src={figma} alt="Ícono de Figma" className="card-project_details_icon" />
                            </div>                          
                        </div>     
                        <div className='card-project_footer'>                            
                            <a href="https://www.figma.com/file/UrAVyyfuUZsclNsUFIxSom/Food-Delivery-App?node-id=0%3A1&t=z9wx0Bl9CrrYWAbk-1" target="_blank" className="card-project_button">Ver trabajo</a>                             
                        </div>                  
                    </article>

                    <article className='card-project'>
                        <img src={sitioWebInformatica} alt="" className='card-project_img'/>
                        <div className="card-project_body">
                            <header className="card-project_title">Sitio web de Informática</header>
                            <p className="card-project_description">Diseño de un prototipo de alta fidelidad de un sitio web resposivo para la carrera de la Licenciatura en Informática de la UNSIJ.</p>
                            <div className="card-project_details">
                                <p className="card-project_details_label">Herramientas utlizadas:</p>
                                <img src={html} alt="Ícono de HTML" className="card-project_details_icon" />
                                <img src={css} alt="Ícono de CSS" className="card-project_details_icon" />
                                <img src={js} alt="Ícono de JS" className="card-project_details_icon" />
                                <img src={tailwind} alt="Ícono de TailwindCSS" className="card-project_details_icon" />
                            </div>                       
                        </div>
                        <div className='card-project_footer'>                            
                            <a href="https://hipo-ui.github.io/Prototipo-Informatica-UNSIJ/" target="_blank" className="card-project_button">Ver trabajo</a>                             
                        </div>                     
                    </article>

                    <article className='card-project'>
                        <img src={sitioWebEcoturismo} alt="" className='card-project_img'/>
                        <div className="card-project_body">
                            <header className="card-project_title">Sitio web de ecoturismo</header>
                            <p className="card-project_description">Diseño de un prototipo de alta fidelidad de un sitio web resposivo de ecoturismo realizado como práctica.</p>
                            <div className="card-project_details">
                                <p className="card-project_details_label">Herramientas utlizadas:</p>
                                <img src={html} alt="Ícono de HTML" className="card-project_details_icon" />
                                <img src={css} alt="Ícono de CSS" className="card-project_details_icon" />
                                <img src={bootstrap} alt="Ícono de Bootstrap" className="card-project_details_icon" />
                            </div>                         
                        </div> 
                        <div className='card-project_footer'>                            
                            <a href="https://hipo-ui.github.io/prototipo-ecoturismo/info-cabana.html" target="_blank" className="card-project_button">Ver trabajo</a>                             
                        </div>                       
                    </article>

                </div>
            </div>

        </section>


        <section className='section'>
            <div>
                <header className='title pb-8'>Mis conocimientos</header>
                <div className='section-content'>
                    
                    <div className='card-tech'>
                        <h2 className='card-tech_header'>Técnicos</h2>
                        <div className='grid-tech'>

                            <div className='card-tech_item'>
                                <img src={html} alt="logo de HTML" className='card-tech_item_img'/>
                                <span className='card-tech_item_title'>HTML</span>
                            </div>

                            <div className='card-tech_item'>
                                <img src={css} alt="logo de CSS" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>CSS</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={js} alt="logo de JavaScript" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>JavaScript</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={bootstrap} alt="logo de Bootstrap" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>Bootstrap</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={tailwind} alt="logo de TailwindCSS" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>TailwindCSS</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={react} alt="logo de React" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>React</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={figma} alt="logo de Figma" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>Figma</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={java} alt="logo de Java" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>Java</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={springboot} alt="logo de Springboot" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>Springboot</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={mysql} alt="logo de MySQL" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>MySQL</p>
                            </div>

                            <div className='card-tech_item'>
                                <img src={git} alt="logo de Git" className='card-tech_item_img'/>
                                <p className='card-tech_item_title'>Git</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-know">
                        <h2 className='card-know_header'>En UX/UI</h2>
                        <ul className='card-know_list'>
                            <li className='card-know_item_title'>
                                Maquetación móvil y web
                            </li>
                            <li className='card-know_item_title'>
                                Diseño Centrado en el Usuario
                            </li>
                            <li className='card-know_item_title'>
                                Investigación con usuarios
                            </li>
                            <li className='card-know_item_title'>
                                Arquitectura de la Información
                            </li>
                            <li className='card-know_item_title'>
                                Wireframes
                            </li>
                            <li className='card-know_item_title'>
                                Mockups
                            </li>
                            <li className='card-know_item_title'>
                                Prototipado
                            </li>
                            <li className='card-know_item_title'>
                                Evaluaciones de usabilidad
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </section>

    </main>
  )
}

export default App
