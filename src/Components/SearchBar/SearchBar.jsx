import React from 'react'
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'
import { BsHouseDoor} from 'react-icons/bs'
//import {CiLocation} from 'react-icons/ci'

const Search=()=>{
    return(
        <div className='searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form action="">
                <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className='flex gap-2 items-center'>
                    {/*imported react icons */}
                         <AiOutlineSearch className='text-[25px] icon'/>
                         <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Residency Job... ' />
                         <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />

                    </div>
                    <div className='flex gap-2 items-center'>
                    {/*imported react icons
                    <CiLocation className='text-[25px] icon'/> */}
                         
                         <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Hospital... ' />
                         <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />

                    </div>
                    <div className='flex gap-2 items-center'>
                    {/*imported react icons */}
                         <AiOutlineSearch className='text-[25px] icon'/>
                         <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Specialty... ' />
                         <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />

                    </div>
                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blueColor'> Search </button>

                </div>
            </form>
            <div className='secDiv flex items-center gap-10 justify-center'>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='relevance' className='text-[#808080] font-semibold'> Sort by: </label>
                    <select name='' id='relevance' className='bg-white rounded-[3px] mpx-4 py-1'>
                        <option value=''> Relevance </option>
                        <option value=''> Inclusive</option>
                        <option value=''> Starts With </option>
                        <option value=''> Contains </option>
                    </select>

                </div>

                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='type' className='text-[#808080] font-semibold'> Type</label>
                    <select name='' id='type' className='bg-white rounded-[3px] mpx-4 py-1'>
                        <option value=''> Contract basis</option>
                        <option value=''> Remote basis</option>
                        <option value=''> Part-time basis</option>
                        <option value=''> Full-time basis</option>
                    </select>

                </div>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='level' className='text-[#808080] font-semibold'> Level</label>
                    <select name='' id='level' className='bg-white rounded-[3px] mpx-4 py-1'>
                        <option value=''> Senior Doctor</option>
                        <option value=''> Consultant</option>
                        <option value=''> House Officer</option>
                        <option value=''> Professor</option>
                        <option value=''> Medical Student</option>
                    </select>

                </div>
                <span className='text-[#a1a1a1] cursor-pointer'> CLear All </span>








            </div>


        </div>
    )
}

export default Search 