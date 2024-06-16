import {useState, useEffect} from 'react'

import System from '../common/system.jsx'

import '../../styling/permissionDetails/menuPermissionDetails.css'


function MenuPermissionDetails(){

    const [system, setSystem] = useState('');


    return(
        <>
            <div>
                <h1>Permission Details</h1>
            </div>
            <div id="permission-details-options-container">
                <div id="col-containter">
                    <div class="left-col">
                        <System setSystem={setSystem} systemDropdownIndex="create-repository-system-dropdown"></System>
                        <div class="permission-details-repos-div" >
                            
                        </div>
                        <button id="permission-details-button">Load</button>

                    </div>
                    <div class="right-col">
                        <div class="permission-details-groups-div" >
                            
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default MenuPermissionDetails