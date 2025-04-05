import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailJs from 'emailjs-com'
import linkedInLogo from '../../assets/linkedInLogo.png'
import githubLogo from '../../assets/githubLogo.png'


export const Contact = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
})
    const handleSubmit = (e) => {
        e.preventDefault ();
        emailJs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({name: "", email: "", message: "" });
            })
            .catch(() => alert("Something Went Wrong. Please Try Again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center"> Send me a message </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                required 
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/50"
                                placeholder="Name..."
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                required 
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/50"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                        </div>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="message" 
                                name="message"
                                required 
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/50"
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                        </div>

                        <button type="submit" className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>

                <div>
                <div className="flex justify-center space-x-4 mt-10">
                    <a href="https://www.linkedin.com/in/kieran-paauwe/" className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10">
                         <img src={linkedInLogo} alt='profile picture'
                                             className='w-10 h-10 rounded-full'/>
                    </a>
                    <a href=" https://github.com/kpaauwe"
                        className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10">
                         <img src={githubLogo} alt='profile picture'
                                             className='w-10 h-10 rounded-full'/>
                    </a>
                </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}