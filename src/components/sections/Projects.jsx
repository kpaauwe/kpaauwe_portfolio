import { RevealOnScroll } from '../RevealOnScroll'


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> We Run The World Coaching Website </h3>
                        <p className="text-gray-400 mb-4">
                        <i>No-code</i> website created for WRTWC using wix. Built for allowing the owner to quickly and easily manipulate their website without needing to know any coding
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Wix", "Agile Development"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://www.weruntheworldcoaching.com/" className="text-green-400 hover:text-green-300 transition-colors"> 
                                View Site 
                            </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> We Run The World Coaching Website Recreation</h3>
                        <p className="text-gray-400 mb-4">
                            Recreated website for WRTWC to eventually replace the original website, allowing for more interactivy and database integration.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Javascript", "HTML", "CSS", "TailwindCSS", "GSAP", "Node.js"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/kpaauwe/WRTC" className="text-green-400 hover:text-green-300 transition-colors"> 
                                View Github Repo 
                            </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Tower of Dave </h3>
                        <p className="text-gray-400 mb-4">
                            A procedurally generated, 2.5D tower climbing platformer inspired by Jump King and Jetpack Joyride.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Unreal Engine 5", "C++", "UE Blueprints", "Waterfall Development"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/kp4ws/tower-of-dave" className="text-green-400 hover:text-green-300 transition-colors"> 
                                View Github Repo
                            </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> My Portfolio </h3>
                        <p className="text-gray-400 mb-4">
                            The portfolio you're looking at right now! Designed animations and styling to add loading screen and "<i>reveal on scroll</i>" feature.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Vite", "Javascript", "TailwindCSS", "EmailJs"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Workout Tracker App </h3>
                        <p className="text-gray-400 mb-4">
                            React expo used to create a simple workout tracking app for tracking progress.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React Expo", "TypeScript"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/kpaauwe/workout-tracker" className="text-green-400 hover:text-green-300 transition-colors"> 
                                View Github Repo 
                            </a>
                        </div>
                    </div>



                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> TraderSync Chatbot </h3>
                        <p className="text-gray-400 mb-4">
                            Contributed to design and testing of prompt for a AI router agent to allow the chatbot to sort the user's request to the appropriate handler functions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Prompt Engineering", "Excel", "Unit Testing"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://tradersync.com/features/" className="text-green-400 hover:text-green-300 transition-colors"> 
                                View description
                            </a>
                        </div>
                    </div>


                </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}