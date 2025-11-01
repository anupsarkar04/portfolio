import React from 'react'
// import image from '../Photo/Anup.jpeg'


const ItemSlider = () => {
  return (
    <>
      <div className='mt-16 p-4'>
        <div className='grid place-items-center'>
          <h1 className='text-3xl font-bold text-neutral-800'>Technologies I Work With</h1>
          <div className='text-neutral-800/90'>
            <p className='text-sm'>I specialize in modern web technologies that enable me to </p>
            <p className='text-sm flex justify-center'>build fast, responsive, and scalable applications.</p>
          </div>
        </div>
        <div className='h-full w-full overflow-hidden relative'>
          <div className='relative mt-10'>
            <div className='auto-slide side_right flex whitespace-nowrap gap-10 slider-track'>
              <div className='h-24 bg-amber-200 w-24 rounded-full'>
          </div>
              <div className='h-24 bg-amber-200 w-24 rounded-full'>
          </div>
              <div className='h-24 bg-amber-200 w-24 rounded-full'>
          </div>
              <div className='h-24 bg-amber-200 w-24 rounded-full'>
          </div>
             
              <div className='h-24 bg-amber-200 w-24 rounded-full'>

          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemSlider