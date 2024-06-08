import {useState, useEffect} from 'react'

import NamingTemplates from './namingTemplates.jsx'
import System from '../common/system.jsx'
import BusinessUnit from '../common/businessUnit.jsx';
import PackageType from '../common/packageType.jsx';
import ProjectName from '../common/projectName.jsx';
import ThirdPartyCheckbox from './thirdPartyCheckbox.jsx';


import '../../styling/createRepository/menuCreateRepository.css'


function MenuCreateRepository(){
    const [bu, setBu] = useState('');
    const [system, setSystem] = useState('');
    const [packageType, setPackageType] = useState('');
    const [projectName, setProjectName] = useState('');
    const [isIncludeRemote, setIsIncludeRemote] = useState(false);

    return(
        <>
            <div>
                <h1>Create Repository</h1>
            </div>
            <div id="create-repository-options-container">
                <div>
                    <div id="left-col">
                        <System setSystem={setSystem}></System>
                        <BusinessUnit setBu={setBu}></BusinessUnit>
                        <div>
                            <p id="description-p">Description</p>
                            <input id="description-input"></input>
                        </div>
                        <ThirdPartyCheckbox setIsIncludeRemote={setIsIncludeRemote}></ThirdPartyCheckbox>
                    </div>
                    <div id="right-col">
                        <PackageType setPackageType={setPackageType}></PackageType>
                        <ProjectName setProjectName={setProjectName}></ProjectName>
                        <div id="remote-url-div" style={{ opacity: isIncludeRemote ? 100 : 0 }}>
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