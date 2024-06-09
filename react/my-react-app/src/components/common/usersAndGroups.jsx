import {useState, useRef} from 'react'

import UserAndGroupItem from '../common/userAndGroupItem.jsx';


const UsersAndGroups = ({title}) => {

    const [userOrGroup, setUserOrGroup] = useState([]);
    const [userOrGroupName, setUserOrGroupName] = useState("");

    const addUserOrGroup = () => {
        if (userOrGroupName.trim()) {
            setUserOrGroup([...userOrGroup, userOrGroupName]);
        }
    };


    return(
        <>
            <div class="users-and-groups-div">
                <div class="users-and-groups-add-div">
                    <p class="users-and-groups-p" >{title}</p>
                    <input class="users-and-groups-input" onChange={(event) => setUserOrGroupName(event.target.value)}></input>
                    <button class="users-and-groups-add-button" onClick={addUserOrGroup}>+</button>
                </div>
                <div class="user-and-group-item-div" >
                    {userOrGroup.map((name, index) => (
                        <UserAndGroupItem key={index} name={name} title={title} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default UsersAndGroups