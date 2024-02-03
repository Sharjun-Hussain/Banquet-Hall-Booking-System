import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Profile = () => {
let [count,setCount] = useState(0);

const handleClick = () =>{ 
    setCount(count + 1 );
    }


  return (
   <>
    <div>Click the Numeber</div>
    <Button onClick={handleClick}>
      Click
    </Button>
    <h1>
      You Clicked  {count}
    </h1>
    </>
  )
}

export default Profile;