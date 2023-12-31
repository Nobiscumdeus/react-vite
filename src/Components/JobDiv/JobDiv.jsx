import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

//Imported Images
//import logo1 from '../../assets/logo (1).png'

//ALl the Jobs will be stored in an array called Data
const Data=[
    {
        id:1,
        //image:logo1,
        title:'Resident Doctor',
        time:'Now',
        location:'Canada',
        desc:'We need a new resident in the Emergency Medicine Specialty ',
        hospital:'Novac Linux CO'
    },
    {
        id:2,
        //image:logo1,
        title:'Consultant in Orthopaedic Surgery',
        time:'Now',
        location:'Akure',
        desc:'We need a Consultant in the specialty of Orthopaedic Surgery ',
        hospital:'Alexander Brown Specialist Hospital'
    },
    {
        id:3,
        //image:logo1,
        title:'Senior Resident Doctor',
        time:'20hrs',
        location:'United States',
        desc:'We need a new resident in the Emergency Medicine Specialty ',
        hospital:'Novac Linux CO'
    },
    {
        id:4,
        //image:logo1,
        title:'Medical Intern',
        time:'14hrs',
        location:'Germany',
        desc:'We need a new resident in the Emergency Medicine Specialty ',
        hospital:'Novac Linux CO'
    }

]

const JobDiv=()=>{
    return(
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
           

            {
                Data.map(({id,time,title,location,desc,hospital})=>{
                    return(

                        <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                        <span className='flex justify-between items-center gap-4'>
                            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'> {title} </h1>
                            <span className='flex items-center text-[#ccc] gap-1'>
                                <BiTimeFive /> {time}
                            </span>
        
        
                        </span>
                        <h6 className='text-[#666]'> {location} </h6>
                        <p classname='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                           {desc}
                        </p>
                        <div className='company flex items-center gap-2'>
                         {/*}   <img src={logo1} alt='Compnay Logo' className='w-[10%]' /> */}
        
                            <span className='text-[14px] py-[1rem] block group-hover:text-white'> {hospital}</span>
                        </div>
                        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
        
                    </div>
                    )
                })
            }
            
        </div>
    )
}

export default JobDiv