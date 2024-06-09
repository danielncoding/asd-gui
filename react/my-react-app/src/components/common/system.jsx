import '../../styling/common/common.css'

const System = ({setSystem, systemDropdownIndex}) => {
    const handleChange = (event) => {
        setSystem(event.target.value)
    };

    return(
        <>
            <div>
                <p class="system-p">System</p>
                <select id={systemDropdownIndex} class="system-dropdown" name="options" onChange={handleChange}>
                    <option value="" disabled selected>Select an option</option>
                    <option value="for">for</option>
                    <option value="blr">blr</option>
                    <option value="us-e">us-e</option>
                    <option value="dev">dev</option>
                    <option value="blr-dev">blr-dev</option>
                    <option value="q-system">q-system</option>
                </select>
            </div>
        </>
    );
};

export default System