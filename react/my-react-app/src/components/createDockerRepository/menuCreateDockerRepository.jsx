import {useState} from 'react'

import System from '../common/system.jsx'
import BusinessUnit from '../common/businessUnit.jsx';
import ProjectName from '../common/projectName.jsx';
import UsersAndGroups from '../common/usersAndGroups.jsx';

import '../../styling/createDockerRepository/menuCreateDockerRepository.css'


function MenuCreateDockerRepository(){

    const [bu, setBu] = useState('');
    const [system, setSystem] = useState('');
    const [projectName, setProjectName] = useState('');

    return(
        <>
            <div>
                <h1>Create Docker Repository</h1>
            </div>
            <div id="create-docker-repository-options-container">
                <div id="col-container">
                    <div class="left-col">
                        <System setSystem={setSystem} systemDropdownIndex="create-docker-repository-system-dropdown"></System>
                        <BusinessUnit setBu={setBu} buDropdownIndex="create-docker-repository-bu-dropdown"></BusinessUnit>
                        <UsersAndGroups title={"Users:"}></UsersAndGroups>
                    </div>
                    <div class="right-col">
                        <ProjectName setProjectName={setProjectName} projectNameInput="create-docker-repository-project-name-input"></ProjectName>
                        <div>
                            <p id="specific-path-p">Specific path</p>
                            <input id="specific-path-input"></input>
                        </div>
                        <UsersAndGroups title={"Groups:"}></UsersAndGroups>
                    </div>

                </div>
                <button id="create-docker-repository-button">Create</button>
            </div>
        </>
    );
};

export default MenuCreateDockerRepository