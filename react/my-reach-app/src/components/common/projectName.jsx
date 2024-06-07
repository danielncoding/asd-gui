import '../../styling/common/common.css'

const ProjectName = ({setProjectName}) => {
    const handleChange = (event) => {
        setProjectName(event.target.value)
    };

    return(
        <>
            <div>
                <p id="project-name-p">Project Name</p>
                <input id="project-name-input" onChange={handleChange}></input>
            </div>
        </>
    );
};

export default ProjectName