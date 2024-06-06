import '../styling/menuCreateRepository.css'

function MenuCreateRepository(){

    return(
        <>
            <div>
                <h1>Create Repository</h1>
            </div>
            <div id="menu-options-container">
                <div id="system-and-pkg-type">
                    <div>
                        <p>System</p>
                        <input></input>
                    </div>
                    <div>
                        <p>Package Type</p>
                        <input></input>
                    </div>
                </div>
                <div id="bu-and-project-name">
                    <div>
                        <p>Business Unit</p>
                        <input></input>
                    </div>
                    <div>
                        <p>Project Name</p>
                        <input></input>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuCreateRepository