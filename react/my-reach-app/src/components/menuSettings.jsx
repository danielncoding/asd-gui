import '../styling/menuSettings.css'
import MenuCreateRepository from './createRepository/menuCreateRepository.jsx'

function MenuSettings(){

    return(
        <>
            <div id="menu-settings-div">
                <MenuCreateRepository></MenuCreateRepository>
            </div>
        </>
    );
}

export default MenuSettings