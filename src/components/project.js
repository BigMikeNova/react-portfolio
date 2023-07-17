import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      deployedLink: 'https://project1.com',
      githubLink: 'https://github.com/project1'
    },
    {
      title: 'Project 2',
      image: 'project2.jpg',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/project2'
    },
    {
      title: 'Project 3',
      image: 'project3.jpg',
      deployedLink: 'https://project3.com',
      githubLink: 'https://github.com/project3'
    }
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <div className="flex justify-between">
                <a href={project.deployedLink} className="text-blue-500 hover:text-blue-700">Deployed App</a>
                <a href={project.githubLink} className="text-blue-500 hover:text-blue-700">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
