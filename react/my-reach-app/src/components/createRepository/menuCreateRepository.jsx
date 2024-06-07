import {useState} from 'react'

import NamingTemplates from './namingTemplates.jsx'
import System from '../common/system.jsx'
import BusinessUnit from '../common/businessUnit.jsx';
import PackageType from '../common/packageType.jsx';
import ProjectName from '../common/projectName.jsx';


import '../../styling/createRepository/menuCreateRepository.css'



function MenuCreateRepository(){
    const [bu, setBu] = useState('');
    const [system, setSystem] = useState('');
    const [packageType, setPackageType] = useState('');
    const [projectName, setProjectName] = useState('');

    return(
        <>
            <div>
                <h1>Create Repository</h1>
            </div>
            <div id="menu-options-container">
                <div>
                    <div id="left-col">
                        <System setSystem={setSystem}></System>
                        <BusinessUnit setBu={setBu}></BusinessUnit>
                        <div>
                            <p id="description-p">Description</p>
                            <input id="description-input"></input>
                        </div>
                        <div>
                            <label for="third-party-checkbox">Include 3rd party remote</label>
                            <input id="third-party-checkbox" type="checkbox"></input>                      
                        </div>
                    </div>
                    <div id="right-col">
                        <PackageType setPackageType={setPackageType}></PackageType>
                        <ProjectName setProjectName={setProjectName}></ProjectName>
                        <div>
                            <p id="remote-url-p">3rd party remote URL</p>
                            <input id="remote-url"></input>
                        </div>
                    </div>
                </div>
                <NamingTemplates bu={bu} system={system} packageType={packageType} projectName={projectName}></NamingTemplates>
                <button id="create-repository-button">Create</button>
            </div>
        </>
    );
}

export default MenuCreateRepository