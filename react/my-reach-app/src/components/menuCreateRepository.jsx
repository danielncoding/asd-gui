import '../styling/menuCreateRepository.css'

function MenuCreateRepository(){

    return(
        <>
            <div>
                <h1>Create Repository</h1>
            </div>
            <div id="menu-options-container">
                <div>
                    <div id="left-col">
                        <div>
                            <p id="system-p">System</p>
                            <select id="system-dropdown" name="options">
                                <option value="for">for</option>
                                <option value="blr">blr</option>
                                <option value="us-e">us-e</option>
                                <option value="dev">dev</option>
                                <option value="blr-dev">blr-dev</option>
                                <option value="q-system">q-system</option>
                            </select>
                        </div>
                        <div>
                            <p id="bu-p">Business Unit</p>
                            <select id="bu-dropdown" name="options">
                                <option value="te_me">te_me</option>
                                <option value="di_ct">di_ct</option>
                                <option value="di_mi">di_mi</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <p id="description-p">Description</p>
                            <input id="description-input"></input>
                        </div>
                        <div>
                            <label for="third-party-checkbox">Include 3rd party remote</label>
                            <input id="third-party-checkbox" type="checkbox"></input>                      
                        </div>
                    </div>
                    <div id="right-col">
                        <div>
                            <p id="package-type-p">Package Type</p>
                            <select id="package-type-dropdown" name="options">
                                <option value="generic">generic</option>
                                <option value="nuget">nuget</option>
                                <option value="npm">npm</option>
                                <option value="pypi">pypi</option>
                            </select>
                        </div>
                        <div>
                            <p id="project-name-p">Project Name</p>
                            <input id="project-name-input"></input>
                        </div>
                        <div>
                            <p id="remote-url-p">3rd party remote URL</p>
                            <input id="remote-url"></input>
                        </div>
                    </div>
                </div>
                <div id="name-templates">
                    <div id="virtual-name-templates">
                        <button id="virtual-template-button">Copy</button>
                        <p id="virtual-name-p">Virtual name:</p>
                        <p id="virtual-name-template-p">test</p>
                    </div>
                    <div id="local-name-templates">
                        <button id="local-template-button">Copy</button>
                        <p id="local-name-p">Local name:</p>
                        <p id="local-name-template-p">test</p>
                    </div>
                    <div id="remote-name-templates">
                        <button id="remote-template-button">Copy</button>
                        <p id="remote-name-p">Remote name:</p>
                        <p id="remote-name-template-p">test</p>
                    </div>
                    <br/>
                </div>
                <button id="create-repository-button">Create</button>
            </div>
        </>
    );
}

export default MenuCreateRepository