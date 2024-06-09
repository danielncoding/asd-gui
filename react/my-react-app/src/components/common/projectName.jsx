import '../../styling/common/common.css'

const ProjectName = ({setProjectName, projectNameDropdownIndex}) => {
    const handleChange = (event) => {
        setProjectName(event.target.value)
    };

    return(
        <>
            <div>
                <p class="project-name-p">Project Name</p>
                <input id={projectNameDropdownIndex} class="project-name-input" onChange={handleChange}></input>
            </div>
        </>
    );
};

export default ProjectName