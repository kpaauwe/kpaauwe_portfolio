/*
 Extract content from About, Projects, Experience sections
- Structure into semantic chunks (e.g., per project, per skill category, per experience)
- Each chunk: `{ id, category, content, metadata }`
*/

export const knowledgeChunks = [
  {
    "id": "hero_intro",
    "category": "about",
    "content": "Hello, I'm Kieran Paauwe. I am a student full-stack developer with a drive for creating clean and efficient products with modern technology.",
    "metadata": { "section": "home", "type": "intro" }
  },
  {
    "id": "about_summary",
    "category": "about",
    "content": "Highly motivated and detail-oriented fourth-year Computer Science student (B.Sc). Eager to apply my programming skills and passion for creating user-friendly and visually appealing web experiences with usability in mind. Dedicated to contributing to a dynamic team and gaining practical experience in the field.",
    "metadata": { "section": "about", "type": "summary" }
  },
  {
    "id": "skills_frontend",
    "category": "skills",
    "content": "Frontend technologies include React, Next.js, TailwindCSS, GSAP, JavaScript, HTML, and CSS.",
    "metadata": { "section": "about", "type": "frontend" }
  },
  {
    "id": "skills_backend",
    "category": "skills",
    "content": "Backend technologies include Node.js, Express, MongoDB, Oracle SQL, C/C++, Lisp, and Python.",
    "metadata": { "section": "about", "type": "backend" }
  },
  {
    "id": "skills_tools",
    "category": "skills",
    "content": "Tools and platforms include GitHub, GitLab, Visual Studio Code, Jira, Portkey, EmailJS, and Stripe.",
    "metadata": { "section": "about", "type": "tools" }
  },
  {
    "id": "education",
    "category": "education",
    "content": "B.Sc in Computer Science at Vancouver Island University (2022-2026). Honour Roll Student with a GPA of 3.8. Relevant coursework includes Data Structures, Web Programming, Database Systems, HCI and UI/UX, and Networks.",
    "metadata": { "section": "about", "type": "education" }
  },
  {
    "id": "work_wrwtc_2025",
    "category": "experience",
    "content": "Web Development for We Run The World Coaching (2025). Rebuilt and modernized the website using React, TailwindCSS, and GSAP. Implemented a secure membership dashboard with authentication and role-based access, integrated Stripe payments, and migrated blog content. Improved usability and performance while collaborating closely with the client.",
    "metadata": { "section": "experience", "type": "work" }
  },
  {
    "id": "work_tradersync",
    "category": "experience",
    "content": "AI Developer Intern at TraderSync (2025). Worked in a 3-person team to build an AI coaching system used by tens of thousands of traders. Designed logic flows and prompt strategies to interpret trading data and provide insights. Led development of the memory component and coordinated with senior developers. Iterated based on user feedback to improve reliability.",
    "metadata": { "section": "experience", "type": "work" }
  },
  {
    "id": "work_wrwtc_2022",
    "category": "experience",
    "content": "Web Development for We Run The World Coaching (2022). Built the original website using Wix, enabling the owner to easily manage and update content without technical knowledge.",
    "metadata": { "section": "experience", "type": "work" }
  },
  {
    "id": "work_earls",
    "category": "experience",
    "content": "Line Coach at Earl's Kitchen and Bar (2020-2024). Managed high-pressure environments, ensured quality service, and trained and mentored new employees.",
    "metadata": { "section": "experience", "type": "work" }
  },
  {
    "id": "project_wrwtc_wix",
    "category": "projects",
    "content": "We Run The World Coaching (Wix). Built an initial no-code website using Wix, allowing easy content updates while maintaining a clean and professional design.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_athlete_helper",
    "category": "projects",
    "content": "Athlete Helper Application. A full volleyball team management system using MongoDB with JSON schema validation, advanced indexing, complex queries, and aggregation pipelines. Includes text search and a Next.js frontend for data visualization.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_crypt_crawler",
    "category": "projects",
    "content": "Crypt Crawler. A 2D dungeon crawler built with Python and Pygame. Features procedural generation using APIs and dynamic content such as weather-based levels and random facts.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_wrwtc_rebuild",
    "category": "projects",
    "content": "We Run The World Coaching (React Rebuild). Rebuilt the platform with React, TailwindCSS, and GSAP. Added Stripe payments, authentication, a role-based dashboard, MongoDB storage, and Cloudinary integration. Developed iteratively with user feedback.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_tower_of_dave",
    "category": "projects",
    "content": "Tower of Dave. A procedurally generated 2.5D tower-climbing platformer inspired by Jump King and Jetpack Joyride. Built with C++ and Unreal Engine Blueprints.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_portfolio",
    "category": "projects",
    "content": "My Portfolio. A React-based site featuring custom animations, a loading screen, and smooth reveal-on-scroll transitions.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_workout_app",
    "category": "projects",
    "content": "Workout Tracker App. A mobile app built with React Native (Expo) to track workouts and progress, featuring a clean UI and scalable TypeScript architecture.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_tradersync_ai",
    "category": "projects",
    "content": "TraderSync AI Coach. Built an AI-powered trading coach in a team of three. Designed prompt strategies and logic flows to analyze trading data, detect patterns, and provide feedback. Led development of memory systems for persistent user context.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "project_pacwest_db",
    "category": "projects",
    "content": "Pacwest Database Application. A C++ and Oracle SQL system for managing collegiate athletics data with a text-based interface for querying and updating information.",
    "metadata": { "section": "projects", "type": "project" }
  },
  {
    "id": "contact_prompt",
    "category": "contact",
    "content": "Send me a message.",
    "metadata": { "section": "contact", "type": "cta" }
  }
];
