import '../styling/menu.css'

const Menu = ({switchMenu}) => {


    return(
        <>  
            <div class="menu-div">
                <button id="create-repository" onClick={() => switchMenu("create-repository")}>Create Repository</button><br/>
                <button id="create-docker-repository" onClick={() => switchMenu("create-docker-repository")}>Create Docker Repository</button><br/>
                <button id="create-permission" onClick={() => switchMenu("create-permission")}>Create Permission</button><br/>
                <button id="permission-details" onClick={() => switchMenu("permission-details")}>Permission Details</button><br/>
            </div>
        </>
    );
};

export default Menu