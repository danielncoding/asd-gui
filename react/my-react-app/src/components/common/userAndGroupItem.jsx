const UserAndGroupItem = ({key, name, title}) => {
    
    const itemNameId = title + "-item-name-" + key
    const itemPermissionDropdownId = title + "-permission-dropdown-" + key
    const itemDeleteButtonId = title + "-delete-button-" + key
    
    //TODO fix shit here

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
                <button id={itemDeleteButtonId} class="item-delete-button">X</button>
            </div>
        </>
    );
};

export default UserAndGroupItem