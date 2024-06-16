import '../styling/menuSettings.css'
import MenuCreateRepository from './createRepository/menuCreateRepository.jsx'
import MenuCreateDockerRepository from './createDockerRepository/menuCreateDockerRepository.jsx'
import MenuCreatePermission from './createPermission/menuCreatePermission.jsx'
import MenuPermissionDetails from './permissionDetails/menuPermissionDetails.jsx'


const MenuSettings = ({activeMenu}) => {

    return(
        <>
            <div class="menu-settings-div">
                {activeMenu === "create-repository" && 
                    <div id="menu-create-repository-div" >
                        <MenuCreateRepository></MenuCreateRepository>
                    </div>}

                {activeMenu === "create-docker-repository" && 
                    <div id="menu-create-docker-repository-div" >
                        <MenuCreateDockerRepository></MenuCreateDockerRepository>
                    </div>}
                {activeMenu === "create-permission" && 
                    <div id="menu-create-permission-div" >
                        <MenuCreatePermission></MenuCreatePermission>
                    </div>}
                {activeMenu === "permission-details" && 
                    <div id="menu-permission-details-div" >
                        <MenuPermissionDetails></MenuPermissionDetails>
                    </div>}
            </div>
        </>
    );
};

export default MenuSettings