import '../../styling/createRepository/thirdPartyCheckbox.css'


const ThirdPartyCheckbox = ({setIsIncludeRemote}) =>{

    const handleChange = (event) => {
        setIsIncludeRemote(event.target.checked)
    };


    return(
        <>
            <div>
                <label id="third-party-checkbox-label" for="third-party-checkbox">Include 3rd party remote</label>
                <input id="third-party-checkbox" type="checkbox" onChange={handleChange}></input>                      
            </div>
        </>
    );
};

export default ThirdPartyCheckbox