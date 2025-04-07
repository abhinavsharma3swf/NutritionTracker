import {useState} from "react";
import * as React from "react";

type Gender = 'male' | 'female';

type UserInfo = {
    id: number |null,
    name: string,
    age: number,
    gender: Gender,
    height: number,
    weight: number
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e. target;
}

export const UserInfoCard = ()=> {
    const [formData, setFormData] = useState<UserInfo>({
        id: null,
        name: ' ',
        age: 0,
        gender: 'male',
        height: 0,
        weight: 0
    });


    function handleSubmit() {
        setFormData(formData);

    }

    return(
        <div role={"heading"} aria-label={'Enter your details'}>
            <form onClick={handleSubmit}>

                <h2> Enter Your Detail</h2>

                <div>
                    <label>Name:</label>
                    <input name='name' value={formData.name} onChange={handleChange}/>
                </div>
            </form>

        </div>
    )
}