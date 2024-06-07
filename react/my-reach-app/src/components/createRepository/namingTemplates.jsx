import '../../styling/createRepository/namingTemplates.css'

function get_naming_convention(bu, packageType, projectName, addition){
    if(bu.length === 0 && projectName.length === 0 && packageType.length === 0){
        return("<businessUnit>_<projectName>_<packageType>" + addition);
    
    } else if(bu.length !== 0 && projectName.length === 0 && packageType.length === 0){
        return(bu + "_<projectName>_<packageType>" + addition);
    
    } else if(bu.length === 0 && projectName.length !== 0 && packageType.length === 0){
        return("<businessUnit>_" + projectName + "_<packageType>" + addition);
    
    } else if(bu.length === 0 && projectName.length === 0 && packageType.length !== 0){
        return("<businessUnit>_<projectName>_" + packageType + addition);
    
    } else if(bu.length !== 0 && projectName.length !== 0 && packageType.length === 0){
        return(bu + "_" + projectName + "_<packageType>" + addition);
    
    } else if(bu.length !== 0 && projectName.length === 0 && packageType.length !== 0){
        return(bu + "_<projectName>_" + packageType + addition);
    
    } else if(bu.length === 0 && projectName.length !== 0 && packageType.length !== 0){
        return("<businessUnit>_" + projectName + "_" + packageType + addition);
    
    } else{
        return(bu + "_" + projectName + "_" + packageType + addition);
    }
}


const NamingTemplates = ({bu, system, packageType, projectName}) => {
    
    return(
        <>
            <div id="name-templates">
                <div id="virtual-name-templates">
                    <button id="virtual-template-button">Copy</button>
                    <p id="virtual-name-p">Virtual name:</p>
                    <p id="virtual-name-template-p">{get_naming_convention(bu, projectName, packageType, "")}</p>
                </div>
                <div id="local-name-templates">
                    <button id="local-template-button">Copy</button>
                    <p id="local-name-p">Local name:</p>
                    <p id="local-name-template-p">{get_naming_convention(bu, projectName, packageType, "_"+system+"l")}</p>
                </div>
                <div id="remote-name-templates">
                    <button id="remote-template-button">Copy</button>
                    <p id="remote-name-p">Remote name:</p>
                    <p id="remote-name-template-p">{get_naming_convention(bu, projectName, packageType, "_"+system+"r")}</p>
                </div>
            </div>
        </>
    );
};

export default NamingTemplates