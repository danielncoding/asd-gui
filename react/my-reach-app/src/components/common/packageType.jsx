import '../../styling/common/common.css'

const PackageType = ({setPackageType}) => {

    const handleChange = (event) => {
        setPackageType(event.target.value)
    };

    return(
        <>
            <div>
                <p id="package-type-p">Package Type</p>
                <select id="package-type-dropdown" name="options" onChange={handleChange}>
                    <option value="" disabled selected>Select an option</option>
                    <option value="generic">generic</option>
                    <option value="nuget">nuget</option>
                    <option value="npm">npm</option>
                    <option value="pypi">pypi</option>
                </select>
            </div>
        </>
    );
};

export default PackageType