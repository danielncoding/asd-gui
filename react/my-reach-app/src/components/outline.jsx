import Console from './console.jsx'
import Menu from './menu.jsx'
import MenuSettings from './menuSettings.jsx'
import MenuCreateRepository from './createRepository/menuCreateRepository.jsx'
import '../styling/outline.css'

function Outline(){

    return(
        <>  
            <div id="mainDiv">
                <div id="nonConsoleDiv">
                    <Menu></Menu>
                    <MenuSettings></MenuSettings>
                </div>
                <div>
                    <Console></Console>
                </div>
            </div>
        </>
    );
}


export default Outline