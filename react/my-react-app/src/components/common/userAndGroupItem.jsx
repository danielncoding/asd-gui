import {useEffect} from 'react'

const UserAndGroupItem = ({k, name, title, removeUserOrGroup}) => {
    
    const itemNameId = title + "-item-name-" + k
    const itemPermissionDropdownId = title + "-permission-dropdown-" + k
    const itemDeleteButtonId = title + "-delete-button-" + k
    


    return(
        <>
            <div class="item-div">
                <p id={itemNameId} class="item-name-p">{name}</p>
                <select id={itemPermissionDropdownId} class="item-permission-dropdown" name="options" >
                        <option value="" disabled selected>Select an option</option>
                        <option value="read">Read</option>
                        <option value="annotate">Annotate</option>
                        <option value="deploy/cache">Deploy/Cache</option>
                        <option value="delete/overwrite">Delete/Overwrite</option>
                        <option value="manage">Manage</option>
                </select>
                <button id={itemDeleteButtonId} onClick={() => removeUserOrGroup(name)} class="item-delete-button">X</button>
            </div>
        </>
    );
};

export default UserAndGroupItem