import '../styling/menu.css'

function Menu(){

    return(
        <>  
            <div id="menu-div">
                <button id="create-repository">Create Repository</button><br/>
                <button id="create-docker-repository">Create Docker Repository</button><br/>
                <button id="create-permission">Create Permission</button><br/>
                <button id="permission-details">Permission Details</button><br/>
            </div>
        </>
    );
}

export default Menu