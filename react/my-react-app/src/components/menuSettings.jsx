import '../styling/menuSettings.css'
import MenuCreateRepository from './createRepository/menuCreateRepository.jsx'
import MenuCreateDockerRepository from './createDockerRepository/menuCreateDockerRepository.jsx'
import MenuCreatePermission from './createPermission/menuCreatePermission.jsx'
import MenuPermissionDetails from './permissionDetails/menuPermissionDetails.jsx'


const MenuSettings = ({visibleMenu}) => {

    return(
        <>
            <div class="menu-settings-div">
                <div id="menu-create-repository-div" style={{ opacity: visibleMenu==="create-repository" ? 100 : 0 }}>
                    <MenuCreateRepository></MenuCreateRepository>
                </div>
                <div id="menu-create-docker-repository-div" style={{ opacity: visibleMenu==="create-docker-repository" ? 100 : 0 }}>
                    <MenuCreateDockerRepository></MenuCreateDockerRepository>
                </div>
                <div id="menu-create-permission-div" style={{ opacity: visibleMenu==="create-permission" ? 100 : 0 }}>
                    <MenuCreatePermission></MenuCreatePermission>
                </div>
                <div id="menu-permission-details-div" style={{ opacity: visibleMenu==="permission-details" ? 100 : 0 }}>
                    <MenuPermissionDetails></MenuPermissionDetails>
                </div>
            </div>
        </>
    );
};

export default MenuSettings