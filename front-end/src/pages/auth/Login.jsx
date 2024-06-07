import React,{useState} from 'react'
import { Link , useNavigate} from "react-router-dom";



const Login = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      }

      const handleClick = async (e) => {
        e.preventDefault();
        
        if (formData.email === "" || formData.password === "") {
          alert("All fields are required");
        } 
        try{
          const response = await fetch("http://localhost:4000/api/auth/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          
          const data = await response.json();
          //to get the login details
          console.log(data);
    
          if(response.ok){
            // alert("login success")
            navigate('/weather')
            
            
    
          }
        }catch(err){
          console.log(err);
        }
    
      }

  return (
    <div className='min-h-screen'>
        <h1>logig form</h1>
        <div>
            <p>email</p>
            <input type="email" id="email" onChange={handleChange}/>    
        </div>   

        <div>
            <p>password</p>
            <input type="password" id="password" onChange={handleChange}/></div>

            <div>
              <button onClick={handleClick}>Login</button>
              
            </div>
            <a href='/registration'>go to Reg</a>
      
    </div>
  )
}

export default Login
