import './projectitem.css'

const ProjectItem = props => {
    const {projectDetails} = props
    const {title, imageURL, description} = projectDetails
    
    return(
        <>
        <li className="project-card">
            <img src={imageURL} className="project-img" alt={title} />
            <div className="project-details-container">
                <h1 className="project-heading">{title}</h1>
                <p className="project-description">{description}</p>
            </div>
        </li>
        </>
    )
}
export default ProjectItem