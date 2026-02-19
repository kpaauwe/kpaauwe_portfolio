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

            {/* WRTWC Wix site */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">We Run The World Coaching (Wix)</h3>
              <p className="text-gray-400 mb-4">
                Built an initial <i>no-code</i> website for WRTWC using Wix. Designed a site that enabled the
                owner to easily update content without technical knowledge while maintaining a clean and
                professional look.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Wix", "Agile Development"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Athlete Helper */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Athlete Helper Application</h3>
              <p className="text-gray-400 mb-4">
              This project implements a complete volleyball team management system built on four organized MongoDB collections, each supported by thorough JSON Schema validation. The backend includes twelve strategic indexes such as unique, compound, text, and partial indexes to maintain efficient queries and data accuracy. The system also makes extensive use of more than thirty six find queries that utilize logical, comparison, expression, and array operators, along with eight multi stage aggregation pipelines that carry out complex transformations. To enhance usability, the project incorporates text search capabilities and a Next.js frontend designed for clear and effective data visualization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "MongoDB", "Database Systems"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/kpaauwe/CSCI485_Project" className="text-green-400 hover:text-green-300 transition-colors">
                  View Github Repo
                </a>
              </div>
            </div>

               {/* Dungeon Crawler */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Crypt Crawler</h3>
              <p className="text-gray-400 mb-4">
              2D top down Dungeon Crawler game built using pygame from Python. School group project with 3 developers. Used API's to randomly generate map levels based on weather and included random facts imported and displayed during level switching
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Pygame", "Github", "Agile development"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/kmplit/csci331project" className="text-green-400 hover:text-green-300 transition-colors">
                  View Github Repo
                </a>
              </div>
            </div>

            {/* WRTWC React rebuild */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">We Run The World Coaching (React Rebuild)</h3>
              <p className="text-gray-400 mb-4">
                Rebuilt the WRTWC site with React, TailwindCSS, and GSAP for a modern, interactive experience.
                Implemented Stripe-powered payments for custom plans, a role-based member dashboard with
                authentication, and training tools with data stored in MongoDB. Integrated Cloudinary for media
                and collaborated closely with the client in an iterative feedback loop throughout the summer. Listened to member feedback through development and tailored the site to their needs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "GSAP", "Express", "Node.js", "MongoDB", "Stripe", "Cloudinary", "Agile Development", "Jira", "Vercel", "Render"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a target='_blank' href="https://weruntheworldcoaching.com" className="text-green-400 hover:text-green-300 transition-colors">
                  View Site
                </a>
              </div>
            </div>

            {/* Tower of Dave */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Tower of Dave</h3>
              <p className="text-gray-400 mb-4">
                A procedurally generated 2.5D tower-climbing platformer inspired by Jump King and Jetpack
                Joyride. Built core mechanics in C++ and extended features with Unreal Engine Blueprints.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Unreal Engine 5", "C++", "UE Blueprints", "Waterfall Development"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
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

            {/* Portfolio */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
              <p className="text-gray-400 mb-4">
                The site you're browsing right now! Features custom animations, a loading screen, and a
                <i> reveal-on-scroll </i> component for smooth transitions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "TailwindCSS", "EmailJS"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Workout Tracker */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Workout Tracker App</h3>
              <p className="text-gray-400 mb-4">
                A mobile app built with React Native (Expo) to track workouts and progress. Designed a clean UI
                and structured TypeScript components for scalability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native (Expo)", "TypeScript"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
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

            {/* TraderSync */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">TraderSync AI Coach</h3>
              <p className="text-gray-400 mb-4">
                Worked in a team of 3 to design and refine an AI-powered trading coach used by tens of thousands
                of traders. Built hierarchical logic flows and prompt strategies to interpret trading data,
                detect patterns, and deliver actionable feedback. Led development of the memory component to
                persist user-specific context across conversations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Prompt Engineering", "Logic Flows", "AI Systems", "User Feedback Integration"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://tradersync.com/features/" className="text-green-400 hover:text-green-300 transition-colors">
                  View Description
                </a>
              </div>
            </div>

            {/* Pacwest Database */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Pacwest Database Application</h3>
              <p className="text-gray-400 mb-4">
                C++ and Oracle SQL application for managing public information on the BC collegiate athletics
                league. Provided a text-based interface for querying and modifying the database with clean,
                maintainable code.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C++", "Oracle SQL", "Database Systems"].map((tech, key) => (
                  <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/kpaauwe/pacwest_dba" className="text-green-400 hover:text-green-300 transition-colors">
                  View Github Repo
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
