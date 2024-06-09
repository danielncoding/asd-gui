import '../../styling/common/common.css'

const PackageType = ({setPackageType, packageTypeDropdownIndex}) => {

    const handleChange = (event) => {
        setPackageType(event.target.value)
    };

    return(
        <>
            <div>
                <p class="package-type-p">Package Type</p>
                <select id={packageTypeDropdownIndex} class="package-type-dropdown" name="options" onChange={handleChange}>
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