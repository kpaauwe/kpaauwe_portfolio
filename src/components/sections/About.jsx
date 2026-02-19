import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
    const frontendSkills = [
        "React",
        "Next.js", 
        "TailwindCSS", 
        "GSAP",
        "Javascript", 
        "HTML", 
        "CSS"
    ];
    
    const backendSkills = [
        "Node.js",
        "Express",
        "MongoDB",
        "Oracle SQL",
        "C/C++",
        "Lisp",
        "Python"
    ];
    
    const toolsAndPlatforms = [
        "GitHub",
        "GitLab",
        "Visual Studio Code",
        "Jira",
        "Portkey",
        "EmailJS",
        "Stripe"
    ];
    
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
        About Me
        </h2>
        
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-6 text-justify">
        Highly motivated and detail-oriented third-year Computer Science student (B.Sc).
        Eager to apply my programming skills and passion for creating user-friendly and visually appealing web experiences with usability in mind. 
        Dedicated to contributing to a dynamic team and gaining practical experience in the field.                        
        </p>
        
        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Frontend</h3>
        <div className="flex flex-wrap gap-2">
        {frontendSkills.map((tech, key) => (
            <span
            key={key}
            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            {tech}
            </span>
        ))}
        </div>
        </div>
        
        {/* Backend */}
        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Backend</h3>
        <div className="flex flex-wrap gap-2">
        {backendSkills.map((tech, key) => (
            <span
            key={key}
            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            {tech}
            </span>
        ))}
        </div>
        </div>
        
        {/* Tools & Platforms */}
        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
        <div className="flex flex-wrap gap-2">
        {toolsAndPlatforms.map((tech, key) => (
            <span
            key={key}
            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            {tech}
            </span>
        ))}
        </div>
        </div>
        </div>
        </div>
        
        {/* Education & Work Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Education</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
        <strong>B.Sc in Computer Science</strong> - Vancouver Island University (2022-2026)
        </li>
        <li>
        Honour Roll Student with a current GPA of 3.8
        </li>
        <li>
        Relevant Coursework: Data Structures, Web Programming, Database Systems, HCI and UI/UX, Networks
        </li>
        </ul>
        </div>
        
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
        <div className="space-y-4 text-gray-300">
        <div>
        <h4 className="font-semibold">Web Development for We Run The World Coaching (2025)</h4>
        <p>
        Recontracted by WRTWC to rebuild and modernize their website using React, TailwindCSS, and GSAP. 
        Implemented a secure membership dashboard with authentication and role-based access, integrated Stripe 
        for custom plan purchases, and migrated all blog content to the new platform. Enhanced usability and 
        site performance while maintaining close collaboration with the client throughout the project.
        </p>
        </div>
        <h4 className="font-semibold">AI Developer Intern at TraderSync (2025)</h4>
        <p>
        Collaborated in a 3-person team to develop an AI coaching system used by tens of thousands of traders. 
        Designed hierarchical logic flows and prompt strategies to improve the AI's ability to interpret trading 
        data, identify user patterns, and provide actionable insights. Led projects such as the memory component, 
        directing senior developers and ensuring the tool could retain and apply user-specific context across 
        conversations. Incorporated user feedback into rapid iterations to optimize accuracy and reliability.
        </p>
        
        <div>
        <h4 className="font-semibold">Web Development for We Run The World Coaching (2022)</h4>
        <p>
        Contracted by WRTWC to design their website. Implemented <i>no-code</i> version using wix to allow the owner to make their own edits as the running club grew.
        </p>
        </div>
        
        <div>
        <h4 className="font-semibold">Line Coach at Earl's Kitchen and Bar (2020-2024)</h4>
        <p>
        Managed high-pressure environments, ensuring the highest quality products and services.
        Trained and mentored new employees.
        </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </RevealOnScroll>
        </section>
    )
}
