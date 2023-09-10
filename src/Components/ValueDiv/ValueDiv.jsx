import React from 'react'

//Imported Images  ///
/**
 * import simple from '../..assets/simple.png etc, then use in image tag as <img src={simple} />
 */


const Value=()=>{
    return(
        <div className='mb-[4rem] mt-[6rem]'>
            <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'> The place for the most profound healthcare service </h1>
            <div className='grid gap-[10rem] grrid-cols-3 items-center'>
                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className=' p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src="" alt="an image" className='w-[70%]' />
                        </div>
                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        Patients are given the best adequate care that is obtainable, both home and abroad

                    </p>
                </div>
                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className=' p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src="" alt="an image" className='w-[70%]' />
                        </div>
                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                       We work on the basis of creating absolute trust in healthcare in our space

                    </p>
                </div>
                <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className=' p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src="" alt="an image" className='w-[70%]' />
                        </div>
                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                       We give the best of our service with the most up-to-date equipment 
                    </p>
                </div>


            </div>
            <div className='card mt-[2rem] fle justify-between bg-blueColor p-[5rem] rounded[10px]'>
                <div>
                    <h1 className='text-blueColor text-[30px] font-bold'> Ready to Switch a Career</h1>
                    <h2 className='text-textColor text-[25px] font-bold'> Let's get started</h2>
                    <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Value