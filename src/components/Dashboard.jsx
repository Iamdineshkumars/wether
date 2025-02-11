import React from 'react'

import pressure from '../assets/Icons/pressure.png'

import windy from '../assets/Icons/windy.png'
import humiditygif from '../assets/Icons/humiditygif.gif'
import sunrisegif from '../assets/Icons/sunrisegif.gif'
import sunsetgif from '../assets/Icons/sunsetgif.gif'
import windgif from '../assets/Icons/windgif.gif'
import UVgif from '../assets/Icons/UVgif.gif'
const Dashboard = ({data}) => {
    
   
  return (
    <div className='mt-16 lg:flex justify-center sm:flex sm:justify-center sm: mb-16 '>{/*This is main parent for Dashboard layout */}
      {
        data?.map((items)=>{ 
            const data1 = items.forecast.forecastday; {/* data1 variable is for the collecting  the data from data array */}
            const data2 = [data1[0]]; {/*this data2 variable is used in the child2 for setting the sunrise and sunset from the nested vaiable*/}
             const threeDaysforeCastData = data1.map((content)=>{return ( 
              
             
             [  content.date,
                content.day.condition.text,
                content.day.maxtemp_c,
                content.day.condition.icon])
              })

              
          const day1 = [threeDaysforeCastData[0]];
          const day2 = [threeDaysforeCastData[1]];
          const day3 = [threeDaysforeCastData[2]];
           console.log(day1)
            
            const hour = data2.map((hour)=>hour.hour)
            //console.log(hour[1])
          const oddHourData = hour.map((stage1)=>{  {/* in child4 i have arrange the houly data in odd hours. so i filterd the 24hours data by using filter higher order funciton */}
              return stage1.filter((stage2,index)=>{
                if(index%2 !== 0){
                   return stage2
                }
              })
             })
           // console.log(data);
          const nested_data =  oddHourData[0];
         // console.log(nested_data)
            return(
                
         <div key={items.id} className='  lg: w-[80%] p-8 lg:h-[560px] lg:grid grid-cols-4 grid-rows-2 gap-8 max-sm:flex-col max-sm:flex max-sm:justify-center  '>{/* this div tag is second main parent for the dashbord.in which the four child divs are arranged in grid cart */}


         <div className='border p-2 lg:w-[100%] col-span-2 rounded-2xl  max-sm: w-[135%] max-sm:h-[100%] shadow-xl shadow-neutral-600 opacity-80'>{/* child-1 , location */}
            <div className='p-4 lg:flex max-sm:flex-col '>
                <div className=''> {/* child-1 ,subchild-1 */}
                   <h1 className='lg:text-2xl font-bold lg:font-mono border-slate-600 border-b-2 '>Country:  {items.location.country} </h1>
                   <h1 className='lg:text-2xl font-bold lg:font-mono mt-2 border-slate-600 border-b-2'>Region: {items.location.region}</h1>
                   <h1 className='lg:text-2xl font-bold lg:font-mono mt-2 border-slate-600 border-b-2'>TimeZone: {items.location.tz_id}</h1>
                    <h1 className='lg:text-2xl font-bold lg:font-mono mt-2'>Time: {items.location.localtime}</h1>
                </div>
                <div className=' max-sm:mt-8 ml-4'>{/* child-1 ,subchild-2 */}
                      <div><h1 className='text-4xl font-bold max-sm:text-8xl'>{items.current.temp_c}c</h1></div>
                   <div><h1 className='lg: max-sm:text-2xl'>Feels like: {items.current.feelslike_c}c</h1></div>
            </div>
              </div>
            </div>
         {/*---------------------------------------child-1-end------------------------------------------*/}
         <div className='border p-2  col-span-2 rounded-2xl lg:w-[100%]  max-sm:w-[135%] max-sm:h-[500px] shadow-xl shadow-neutral-600 opacity-80'>{/*child-2 ,current data*/}
            <div className='flex flex-row items-center gap-4 max-sm:flex-col lg:mt-4 max-sm:gap-8'>
            <div className='w-32 lg:mt-[-30px]  '>{/* child-2 ,subchild-1 */}
                <div><img src={items.current.condition.icon} className='h-32 '/></div>
                <div className='pl-4'><h1 className='text-4xl font-bold font-mono'>{items.current.condition.text}</h1></div>
            </div>
            
  
             <div className='lg:w-48 max-sm:flex max-sm:gap-4 '>
               <div className='flex'>
                <div ><img src={sunrisegif} className='h-16 '/></div>
                <div className='ml-4 mt-2'><h3>Sunrise</h3>
                <h2 className='flex items-center'>{data2.map((element)=>{return (<div key={element.id}>{element.astro.sunrise}</div>)})}</h2>
                </div>
               </div>
               <div className='flex'>
               <div><img src={sunsetgif} className='h-16'/></div>
               <div className='ml-4 mt-2'><h3>Sunset</h3>
               <h2 >{data2.map((element)=>{return (<div key={element.id}>{element.astro.sunset}</div>)})}</h2>
               </div>
               </div>
              </div>
              <div className='p-2  h-[80%] w-[50%] grid grid-cols-2 lg:gap-4  max-sm:flex max-sm:justify-center max-sm:ml-2 max-sm:w-[100%]' >
                <div className='max-sm:mx-4 '><img src={humiditygif} className='h-8 '/><h2 className='font-bold'>{items.current.humidity}%</h2><h3>Humidity</h3></div>
                <div  className='max-sm:mr-4'><img src={windgif} className='h-8'/><h2 className='font-bold'>{items.current.wind_kph}</h2><h3>Wind speed</h3></div>
                <div  className='max-sm:mx-4'><img src={pressure} className='h-8'/><h2 className='font-bold'>{items.current.pressure_in}</h2><h3>Pressure</h3></div>
                <div  className='max-sm:mx-4'><img src={UVgif} className='h-8'/><h2 className='font-bold'>{items.current.uv}</h2><h3>UV</h3></div>
            </div>
             </div> 


            </div>
                 {/*---------------------------------------child-2-end------------------------------------------*/} 
                 <div className=' border p-2 w-[140%] rounded-2xl lg:h-[130%] col-span-1  max-sm:w-[135%] max-sm:h-46 shadow-xl shadow-neutral-600 '>{/* child3, theree days forecast */}
             <h1 className='text-2xl flex justify-center font-bold'>3 Days Forecast</h1>
              <div className='mt-8 flex-col justify-center'>
                    

                  <div className='flex  items-center content-end gap-2 border-slate-600 border-b-2 '>
                   <img src={day1[0][3]}/>
                   <h1 className='font-bold'>{day1[0][0]}</h1>/
                   <h2 className='font-bold'>{day1[0][1]}</h2>/
                   <h2 className='font-bold'>{day1[0][2]}c</h2>
                  </div>
                  <div className='flex items-center content-end gap-2 border-slate-600 border-b-2'>
                   <img src={day1[0][3]}/>
                   <h1 className='font-bold'>{day2[0][0]}</h1>/
                   <h2 className='font-bold'>{day2[0][1]}</h2>/
                   <h2 className='font-bold'>{day2[0][2]}c</h2>
                  </div>
                  <div className='flex items-center content-end gap-2 '>
                   <img src={day3[0][3]}/>
                   <h1 className='font-bold'>{day3[0][0]}</h1>/
                   <h2 className='font-bold'>{day3[0][1]}</h2>/
                   <h2 className='font-bold'>{day3[0][2]}c</h2>
                  </div>
                
                </div>

            </div>
            {/*---------------------------------------child-3-end------------------------------------------*/}
         <div className='lg:ml-[90px] lg:h-[230%] border p-2 col-span-3 w-[90%] rounded-2xl  max-sm:w-[135%] max-sm:h-[100%] shadow-xl shadow-neutral-600  '>{/*child-4 , houly fourcast data */}
         <h1 className='text-2xl flex justify-center font-bold '>Hourly Forecast</h1>
 
              <div className='p-4 flex flex-wrap gap-4 max-sm:flex-col '>
                {
                  nested_data.map((stage1)=>{
                    return <div key={stage1.id} className='lg:flex-col rounded-xl w-[100px] p-2 lg:shadow-2xl border border-slate-400 shadow-neutral-900 max-sm:border max-sm:border-slate-400 max-sm:shadow-xl max-sm:w-[100%] max-sm:flex  max-sm:items-center max-sm:py-4 shadow-gray-800'>
                      <h1 className='text-2xl font-bold'>{stage1.time.split(" ")[1]}</h1>
                      <img src={stage1.condition.icon}/>
                      <h1 className='font-bold pl-2 max-sm:p-2'>{stage1.temp_c}C</h1>
                      <div className='max-sm:block max-sm:ml-4'>
                      <img src={windy}  className='h-16'/>
                      <h1 className='font-bold lg:ml-2'>{stage1.wind_kph}kph</h1>
                      </div>
                      
                      </div>
                  })
                }
              
              </div>
            </div>
            {/*---------------------------------------child-4-end------------------------------------------*/}
       
            
     </div>)
          })
      }
   
    </div>
  )
}

export default Dashboard
