import '../styling/menu.css'

const Menu = ({setVisibleMenu}) => {

    const handleChange = (event) => {
        setVisibleMenu(event.target.id);
    };

    return(
        <>  
            <div id="menu-div">
                <button id="create-repository" onClick={handleChange}>Create Repository</button><br/>
                <button id="create-docker-repository" onClick={handleChange}>Create Docker Repository</button><br/>
                <button id="create-permission" onClick={handleChange}>Create Permission</button><br/>
                <button id="permission-details" onClick={handleChange}>Permission Details</button><br/>
            </div>
        </>
    );
};

export default Menu