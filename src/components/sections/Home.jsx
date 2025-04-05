import { RevealOnScroll } from '../RevealOnScroll'
import profilepic from '../../assets/profilepic.png'

export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
            <img src={profilepic} alt='profile picture'
                     className='w-100 h-100 rounded-full mb-15 mt-15 mx-auto'/>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    Hello, I'm Kieran Paauwe
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I am a student full-stack developer with a drive for creating <b>clean</b> and <b>efficient</b> products with modern technology  
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Projects
                    </a>
                    <a href="#contact"
                        className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
    )
}
