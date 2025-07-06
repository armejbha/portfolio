import React, { useState } from "react";
import Modal from "./Modal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "HobbyHub",
      description:
        "HobbyHub helps users discover, join, and manage local hobby communities like book clubs, hiking groups, and art circles.",
      features: [
        "🔐 Firebase Auth: Email/password login & Google login.",
        "🧑‍🤝‍🧑 Group creation, update, deletion, and join restrictions.",
        "🎨 TailwindCSS + DaisyUI design with theme toggle.",
        "⚙️ Protected Routes for group management.",
        "🎥 Lottie animations, CountUp stats.",
        "📢 Alerts with Toastify & SweetAlert.",
        "📦 MongoDB & Express.js integration.",
        "📱 Fully responsive across all devices.",
      ],
      techStack: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "DaisyUI",
        "React",
        "React Router",
        "Firebase",
        "MongoDB",
        "Express.js",
      ],
      issuesDuringDevelopment: [
        "Handling date-restricted joining logic.",
        "Maintaining auth across protected routes.",
        "UI consistency in dark/light modes.",
      ],
      futurePlans: [
        "💬 Add chat between group members.",
        "📅 Calendar event integration.",
        "👤 Profile picture & bio support.",
        "🔍 Advanced group filtering.",
      ],
      live: "https://hobby-hub9.web.app/",
      github: "https://github.com/armejbha/hobby-hub-client.git",
      img: "https://i.postimg.cc/0Qr0CV0Y/Screenshot-2025-06-30-065930.png",
    },
    {
      id: 2,
      name: "GoodNeighbor",
      description:
        "A full-stack volunteer management platform where users can post, join, and manage volunteer opportunities. It promotes community engagement and simplifies coordination with a modern user-friendly interface.",

      features: [
        "🔐 Email/Password & Google Authentication (Firebase)",
        "📝 Add, Update, Delete Volunteer Posts (CRUD)",
        "📬 'Be a Volunteer' with automatic count update",
        "🔎 Search & layout toggle (card/table)",
        "🌙 Dark/Light Theme Toggle",
        "📦 Responsive Design & Dynamic Route Titles",
        "🎉 SweetAlert2 & React Toastify for alerts",
        "🔄 JWT token verification for private routes",
      ],

      techStack: [
        "React",
        "TailwindCSS",
        "DaisyUI",
        "React Router",
        "Framer Motion",
        "Lottie",
        "Swiper",
        "Express.js",
        "MongoDB",
        "JWT",
        "Firebase Admin",
        "Firebase Auth (Email & Google)",
      ],

      issuesDuringDevelopment: [
        "Handling date-restricted volunteer join logic and automatic volunteer count update.",
        "Maintaining auth state and token validation across protected routes.",
        "Ensuring UI consistency between light and dark modes across all components.",
      ],

      futurePlans: [
        "💬 Add real-time messaging between volunteers and organizers.",
        "📅 Integrate calendar view for managing upcoming events.",
        "👤 Enhance user profile with editable bio and profile pictures.",
        "🔍 Implement advanced filtering and sorting options for posts.",
      ],
      live: "https://goodneighbor-1c1f4.web.app/",
      github: "https://github.com/armejbha/good-neighbor-client.git",
      img: "https://i.postimg.cc/9QrXCTbx/Screenshot-2025-06-30-071314.png",
    },
    {
      id: 3,
      name: "NetCafe",
      description:
        "NetCafe is a modern subscription-based internet service platform that enables users to browse, subscribe to, and manage monthly internet plans. It delivers a seamless user experience with protected access, plan details, and feedback alerts.",

      features: [
        "🔐 Firebase Authentication: Includes Email/Password login, Google Sign-In, and profile update (name & photo).",
        "🧭 Routing: Public routes like Home and protected routes like My Profile & My Subscription using React Router.",
        "🏠 Home Page: Includes Swiper banner, display of 6 subscription plans, and an expandable 'View More' feature.",
        "📦 Subscription Details: Each plan shows full details including price, speed, and benefits.",
        "✅ Route Protection: Authenticated access to profile and subscription pages only.",
        "🔔 Real-Time Feedback: Toast notifications for login, subscription success, and errors.",
      ],

      techStack: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "DaisyUI",
        "React",
        "React Router",
        "Firebase Authentication",
        "Swiper",
        "React Icons",
        "React Toastify",
      ],

      issuesDuringDevelopment: [
        "Dynamic access control across public and private routes with Firebase Auth.",
        "Ensuring responsive design worked well with nested components and Swiper slider.",
        "Maintaining styling consistency and color contrast across light/dark modes.",
      ],

      futurePlans: [
        "📨 Add email confirmation for new users.",
        "🧾 Monthly usage reports and analytics dashboard.",
        "🎯 Admin dashboard to manage subscription plans.",
        "📱 Progressive Web App (PWA) support for offline access.",
      ],

      live: "https://react-authentication-65e2a.web.app/",
      github: "https://github.com/armejbha/netcafe.git",
      img: "https://i.postimg.cc/RVqxHmth/Screenshot-2025-06-30-071612.png",
    },
  ];

  return (
    <div id="projects" className="max-w-[1300px] mx-auto my-24 px-4 md:px-0">
      <div className="text-center">
        <span className="text-[#ffc107] text-xl font-medium">My Work</span>
        <h3 className="text-4xl font-bold mt-2">PROJECTS</h3>
      </div>

      <div className="flex justify-center py-10">
        <div className="w-px h-10 bg-gray-600 opacity-30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-xl transition flex flex-col"
          >
            <div className="p-5">
              <img
                className="w-full h-[280px] rounded-xl object-cover"
                src={project.img}
                alt={project.name}
              />
            </div>
            <div className="p-5 grid grid-rows-[auto_1fr_auto] h-full">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-lg text-gray-600 mt-2">
                {project.description.slice(0, 90)}...
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full mt-4 bg-[#ffc107] text-black text-lg px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:cursor-pointer"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        ></Modal>
      )}
    </div>
  );
};

export default Projects;
