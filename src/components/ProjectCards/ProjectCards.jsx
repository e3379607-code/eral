import './ProjectCards.css'
import Card from '../UI/Card/Card'


const projects = [
  {
    id: 1,
    title: "Movie App",
    description: "A beautiful movie app using React, CSS and TMDB.",
    image: "/projects/movie.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://movieaapppsps.netlify.app/",
    githubUrl: "https://github.com/e3379607-code/Movie-App/tree/main/movieapp",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "A project that is ready to create its own agenda or schedule",
    image: "/projects/todo.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://todoapppa.netlify.app/",
    githubUrl: "https://github.com/e3379607-code/todoapp",
  },
  {
    id: 3,
    title: "My project",
    description:
      "A project where you can get information about me.",
    image: "/projects/my_project.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://myporjectct.netlify.app/",
    githubUrl: "https://github.com/e3379607-code/My-project/blob/main/index.html",
  },
];


const ProjectCards = () => {
    return (
        <div className="project_cards">
          {projects.map(el => (
              <Card project={el} />
          ))}
        </div>
    )
}

export default ProjectCards