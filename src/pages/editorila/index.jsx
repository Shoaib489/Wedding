import React, { useState } from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer';


const Editorial = () => {

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className='bg-[url("/images/woman.jpg")] bg-cover bg-center w-[100%] h-[100vh]'>

      </div>
      <div className='flex gap-3  mb-10  flex-wrap p-3 max-w-[1300px] m-auto'>
        <img src="/images/flowers.jpg" width={300} height="390px" alt="" />
        <img src="/images/wecouple.jpg" width={300} alt="" />
        <img src="/images/woman2.jpg" width={300} alt="" />
      </div>

      <Footer />



    </div>
  )

}

export default Editorial












// const Editorial = () => {
//   const [data, setData] = useState({ name: "" });
//   const [form, setForm] = useState([]);

//   const addData = () => {
//     setForm([...form, data]);
//     setData({ name: "" });

//   }
//   console.log(form)


{/* <input
        type="text"
        placeholder='type...'
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <button onClick={addData}>add</button>

      <ol>
        {form.map((value, index) => {

          return <div key={index}>
            <li>{value?.name}</li>
          </div>
        })}
      </ol> */}