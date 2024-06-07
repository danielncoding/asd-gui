import '../../styling/common/common.css'


const BusinessUnit = ({setBu}) => {
    
    const handleChange = (event) => {
        setBu(event.target.value)
    };
    
    return(
        <>
            <div>
                <p id="bu-p">Business Unit</p>
                <select id="bu-dropdown" name="options" onChange={handleChange}>
                    <option value="" disabled selected>Select an option</option>
                    <option value="te_me">te_me</option>
                    <option value="di_ct">di_ct</option>
                    <option value="di_mi">di_mi</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </>
    );
};

export default BusinessUnit
