import React from "react";

const Modal = ({ selectedProject, setSelectedProject }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
        <div className="bg-[#121212] max-w-2xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            {selectedProject.name}
          </h2>

          <h3 className="text-lg font-semibold text-[#ffc107] mb-2">
            🔧 Features
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {selectedProject.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <h3 className="mt-4 font-semibold text-[#ffc107]">🛠 Tech Stack</h3>
          <p className="text-gray-300">
            {selectedProject.techStack.join(", ")}
          </p>

          <h3 className="mt-4 font-semibold text-[#ffc107]">🐞 Challenges</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {selectedProject.issuesDuringDevelopment.map((issue, idx) => (
              <li key={idx}>{issue}</li>
            ))}
          </ul>

          <h3 className="mt-4 font-semibold text-[#ffc107]">🚀 Future Plans</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {selectedProject.futurePlans.map((plan, idx) => (
              <li key={idx}>{plan}</li>
            ))}
          </ul>

          <div className="flex gap-6 mt-6">
            <a
              href={selectedProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              🔗 Live Site
            </a>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              💻 GitHub Repo
            </a>
          </div>

          <div className="text-right mt-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="px-4 py-2 border border-gray-500 text-gray-300 rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
