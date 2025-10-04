import './Card.css'
import { LuGithub } from "react-icons/lu";
import { RiShareForwardBoxFill } from "react-icons/ri";

const Card = (props) => {
    const {
        project
    } = props

    return (
        <div className='project_card'>
            <img src={project.image} alt="" />
            <div className='project_text'>
                <div className='tags'>
                    {project.tags.map(tag => (
                        <div className="tag">
                            {tag}
                        </div>
                    ))}
                </div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className='project_links'>
                    <a target='_blank' href={project.demoUrl}>
                        <RiShareForwardBoxFill />
                    </a>
                    <a target='_blank' href={project.githubUrl}>
                        <LuGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card