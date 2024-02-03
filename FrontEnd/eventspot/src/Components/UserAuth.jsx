import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export const Register = () => {

    const history = useHistory();


    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Password, setPassword] = useState('');
    const [Password2, setPassword2] = useState('');
    const [HallName, setHallName] = useState('');
    const [Capacity, setCapacity] = useState('');
    const [amenities, setAmenities] = useState([]);

    const HandleCheck = (event) => {

        const { value, checked } = event.target


        if (checked) {
            setAmenities(e => [...e, value])


        }
        else (
            setAmenities(e => {
                return [...e.filter(ev => ev !== value)]
            })
        )

    }
    console.log(amenities);

    const SubmitHandler = async (e) => {
        e.preventDefault();

        await axios.post("/api/user/auth/signup", JSON.stringify({ FirstName, LastName, Email, Mobile, Password, Password2, HallName, Capacity, amenities }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data.message);
        })
            .catch(error => {
                console.log(error);
            });

        history.push('/');
    }





    return (
        <div className='form' >
            <div>
                <h1>List Your Halls</h1>
            </div>
            <form onSubmit={SubmitHandler} method="POST" >
                <div className='p1'>
                    <div className='form-item'>
                        <label  htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="FirstName" placeholder='Enter First Name' value={FirstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div className='form-item'>
                        <label  htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" name="LastName" placeholder='Enter First Name' value={LastName} onChange={(e) => setLastName(e.target.value)} ></input>
                    </div>

                </div>
                <div className='p2'>
                    <div className='form-item'>
                        <label  htmlFor="email">Email:</label>
                        <input type="email" id="email" name="Email" placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className='form-item'>
                        <label  htmlFor="Mobile">Mobile:</label>
                        <input type="text" id="Mobile" name="Mobile" placeholder='Enter Mobile No' value={Mobile} onChange={(e) => setMobile(e.target.value)} required></input>
                    </div>
                </div>
                <div className='p3'>
                    <div className='form-item'>
                        <label  htmlFor="password">Password:</label>
                        <input type="password" id="password" name="Password" placeholder='Enter Password' value={Password} onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <div className='form-item'>
                        <label  htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="Password2" placeholder='Re-Type Your Password' value={Password2} onChange={(e) => setPassword2(e.target.value)} required></input>
                    </div>
                </div>
                <div className='p4'>
                    <div className='form-item'>
                        <label  htmlFor="HallName">HallName:</label>
                        <input type="text" id="HallName" name="HallName" placeholder='Enter Your Hall Location' value={HallName} onChange={(e) => setHallName(e.target.value)} required ></input>
                    </div>
                    <div className='form-item'>
                        <label  htmlFor="capacity">capacity:</label>
                        <input type="text" id="capacity" name="Capacity" placeholder='Enter The Hall Capacity' value={Capacity} onChange={(e) => setCapacity(e.target.value)} required
                        ></input>
                    </div>
                </div>
                <div className='p5'>

                    <div className='p51'>
                        <label> <input type="checkbox" id="amenities1" name="amenities" value="Parking facilities" onChange={HandleCheck}></input>Parking facilities</label>
                        <label> <input type="checkbox" id="amenities2" name="amenities" value="Tables and chairs" onChange={HandleCheck}></input>Tables and chairs</label>
                        
                    </div>
                

                </div>
                <div className=' p6'>
                    <label  htmlFor="images">images:</label>
                    <input type="file" id="image" name="Images" multiple></input>
                </div >
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}


export const login = () => {
    return (
        <div>
            <form action="/auth/user/signup" method="post">

                <label  htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                <label  htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}