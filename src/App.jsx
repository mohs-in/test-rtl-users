import React from 'react';

function App() {

  const [ formData, setFormData ] = React.useState({ name: '', email: '' });
  const [ submissions, setSubmissions ] = React.useState([]);

  const formRef = React.useRef(null);

  const handleSubmit = (e) =>  {
    e.preventDefault();

    setSubmissions( prevSubmission => [
      ...prevSubmission,
      { name: formData.name, email: formData.email }
    ])

    formRef.current.reset();

    setFormData({ name: '', email: ''});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData( ( prevData ) => ({
      ...prevData, 
      [name]: value
    }));
  };

  return (
    <>
    <div className='flex items-center justify-center flex-col'>
      <h2 className="font-bold font-Montserrat text-[#1f1f1f] text-2xl underline">Form for RTL practice</h2>
      <form ref={formRef} className="mt-20 text-xl" onSubmit={handleSubmit}>
        <label htmlFor="name" className="m-0">Name: </label> <br />
        <input 
          type="text" 
          id='name'
          name="name" 
          value={formData.name}
          minLength={3}
          maxLength={15}
          required
          className="mb-4 bg-indigo-100 rounded-lg text-lg px-4 py-2 text-blue-950 font-semibold" 
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email" className="">Email: </label> <br />
        <input 
          type="email"
          id="email" 
          name="email" 
          value={formData.email}
          className="bg-indigo-100 rounded-lg text-lg px-4 py-2 text-blue-950 font-semibold"
          required
          onChange={handleChange}
        />
        <button type="submit" className=" px-3 py-2 mt-4 block bg-blue-800 text-blue-50 rounded-lg ml-[30%] ">Submit</button>
      </form>
    </div>


    <div className='mt-12 flex flex-col'>
      <h2 className='font-semibold text-xl mt-12 mx-6 mb-4'>Submitted Data</h2>
      <hr className='bg-black w-full'/>
      <div className='grid grid-cols-3 px-4 gap-4 w-full font-semibold text-lg'>
        <div className='p-2'>Name</div>
        <div className='col-span-2 p-2'>Email</div>
      </div>
      <div className='bg-blue-100'>
        <hr className='bg-black w-full'/>
        {submissions.map((submission, index) => (
          <div key={index} className='grid grid-cols-3 px-4 gap-4 '>
            <div className='p-2'>{submission.name}</div>
            <div className='col-span-2 p-2'>{submission.email}</div>
          </div>
        ))}
        <hr className='bg-black w-full'/>
      </div>
    </div>
    </>
  )
}

export default App
