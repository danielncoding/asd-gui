import {useState} from 'react'

import Console from './console.jsx'
import Menu from './menu.jsx'
import MenuSettings from './menuSettings.jsx'
import MenuCreateRepository from './createRepository/menuCreateRepository.jsx'
import '../styling/outline.css'

function Outline(){

    const [visibleMenu, setVisibleMenu] = useState("create-repository");
    const [consoleText, setConsoleText] = useState("test"); 
    //setConsoleText a react tutorial végén volt hogy több child-al beljebb meghívta

    return(
        <>  
            <div id="mainDiv">
                <div id="nonConsoleDiv">
                    <Menu setVisibleMenu={setVisibleMenu}></Menu>
                    <MenuSettings visibleMenu={visibleMenu}></MenuSettings>
                </div>
                <div>
                    <Console consoleText={consoleText}></Console>
                </div>
            </div>
        </>
    );
}


export default Outline