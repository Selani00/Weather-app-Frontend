import React from 'react'
import { useSelector } from 'react-redux'
import { signoutSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { FaMoon,FaSun } from "react-icons/fa";
import { toggleTheme } from '../redux/theme/themeSlice';


const Header = () => {
    const { theme } = useSelector((state) => state.theme);

    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = async() => {
        try{
            const response = await fetch('http://localhost:4000/api/auth/signout',{
                method : "POST"
            });

            if(!response.ok){
                console.log('error signing out')
            }else{  
                dispatch(signoutSuccess())
                navigate('/')

            }


        }catch(err){
            console.log(err)
        }

    }
  return (
    <div>
        <h1>Hi, {currentUser.username}</h1>

        <button onClick={handleSignOut}>Signout</button>
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={() => dispatch(toggleTheme())}>
          {theme ==='light'?<FaMoon />:<FaSun />}
        </Button>

      
    </div>
  )
}

export default Header
