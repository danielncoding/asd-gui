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
                <div>
                    <div id="left-col">
                        <System setSystem={setSystem}></System>
                        <BusinessUnit setBu={setBu}></BusinessUnit>
                        <UsersAndGroups></UsersAndGroups>
                    </div>
                    <div id="right-col">
                        <ProjectName setProjectName={setProjectName}></ProjectName>
                        <div>
                            <p id="specific-path-p">Specific path</p>
                            <input id="specific-path-input"></input>
                        </div>
                    </div>

                </div>
                <button id="create-docker-repository-button">Create</button>
            </div>
        </>
    );
};

export default MenuCreateDockerRepository