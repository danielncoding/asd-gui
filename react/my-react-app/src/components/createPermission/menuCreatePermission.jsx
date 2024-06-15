import {useState} from 'react'

import System from '../common/system.jsx'
import UsersAndGroups from '../common/usersAndGroups.jsx';

import '../../styling/createPermission/menuCreatePermission.css'

function MenuCreatePermission(){
    
    const [system, setSystem] = useState("");


    return(
        <>
            <div>
                <h1>Create Permission</h1>
            </div>
            <div id="create-permission-options-container">
                <div id="col-container">
                    <div class="left-col">
                        <System setSystem={setSystem} systemDropdownIndex="create-docker-repository-system-dropdown"></System>
                        <div>
                            <p class="permission-name-p">Project Name</p>
                            <input class="permission-name-input" ></input>
                        </div>
                        <div>
                            <label id="check-token-label" for="check-token-checkbox">Check access token</label>
                            <input id="check-token-checkbox" type="checkbox" ></input>   
                            <label id="build-pattern-label" for="build-pattern-checkbox">Set build include pattern</label>
                            <input id="build-pattern-checkbox" type="checkbox" ></input>                    
                        </div>
                        
                        <UsersAndGroups title={"Users:"}></UsersAndGroups>
                    </div>
                    <div class="right-col">

                        <UsersAndGroups title={"Groups:"}></UsersAndGroups>
                    </div>

                </div>
                <button id="create-permission-button">Create</button>
            </div>
        </>
    );
};

export default MenuCreatePermission