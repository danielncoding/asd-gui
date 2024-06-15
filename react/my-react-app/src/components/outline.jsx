import {useState} from 'react'

import Console from './console.jsx'
import Menu from './menu.jsx'
import MenuSettings from './menuSettings.jsx'
import '../styling/outline.css'

//TODO Left and right columns are not aligned.
//TODO Left and right column rename might be needed - add docker / permission somewhere to identify better

function Outline(){

    const [visibleMenu, setVisibleMenu] = useState("create-repository");
    const [consoleText, setConsoleText] = useState("test"); 
    //setConsoleText a react tutorial végén volt hogy több child-al beljebb meghívta ?useRef?

    return(
        <>  
            <div class="mainDiv">
                <div class="nonConsoleDiv">
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