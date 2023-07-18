import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Beer Traveler',
      image: 'images/beer-traveler.jpg',
      deployedLink: 'https://jkrieger6.github.io/beer-traveler/',
      githubLink: 'https://github.com/jkrieger6/beer-traveler'
    },
    {
      title: 'The Recipe Drawer',
      image: 'images/foodbg.png',
      deployedLink: 'https://the-recipe-drawer.herokuapp.com/',
      githubLink: 'https://github.com/BigMikeNova/the-recipe-drawer'
    },
    {
      title: 'CSS CheatSheet',
      image: 'images/HTML CSS.webp',
      deployedLink: 'https://bigmikenova.github.io/CSS-Snippet-Cheatsheet/',
      githubLink: 'https://github.com/BigMikeNova/CSS-Snippet-Cheatsheet'
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
