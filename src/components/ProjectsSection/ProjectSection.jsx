import ProjectCards from '../ProjectCards/ProjectCards'
import './ProjectSection.css'


const ProjectSection = () => {
    return (
        <section id='projects'>
            <div className="container">
                <div className='project_title'>
                    <h1 className='title'>
                        Featured <span>Projects</span>
                    </h1>
                    <p className='title_desc'>
                        Here are some of my recent projects. 
                        Each project was carefully crafted with 
                        attention to detail, performance, and user
                        experience.
                    </p>
                </div>

<div data-aos="flip-left">

               <ProjectCards />
</div>

            </div>
        </section>
    )
}

export default ProjectSection