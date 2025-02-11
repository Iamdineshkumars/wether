import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dashboard from './Dashboard';
const InputField = () => {
    const [data,setData] = useState([]);{/*assigning the api response data to this use state at fetchData async function*/}
    const [city,setCity] = useState("");{/*query name*/}
 
   // const APIkey= '5e435233c4c84dd989c143446252001'
    const days = 3; {/*forecast days*/}
    
    const fetchData = async()=>{ {/*this asyncfunction is for fetching the query from The wether Api by passing the query by useState as city*/}
      
        try{
           const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=${days}`);
           console.log(response);
           setData([response.data])
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(data)
    
  return (
  <div>
      <section className='mt-8 flex justify-center gap-2'> {/*main section for input field*/}

<input type="text" placeholder='enter city name' onChange={(event)=>setCity(event.target.value)} 
className='border-red-950 text-black outline outline-offset-2 outline-2 lg:w-[30%] lg:text-2xl lg:h-9 sm:w-[20%] sm:text-sm rounded-sm'/>  {/* input field*/}

<button onClick={fetchData} className='border w-16 rounded outline outline-offset-1 outline-1 '>Search</button>

</section>
  <Dashboard data ={data} />{/* passing props to Dashboard.jsx component */}
  </div>
  )
}

export default InputField