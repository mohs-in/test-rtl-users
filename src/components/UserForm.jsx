import React from 'react';

export default function UserForm( { onUserAdd } ) {
    const [ formData, setFormData ] = React.useState({ name: '', email: '' });

    const formRef = React.useRef(null);

    const handleSubmit = (e) =>  {
        e.preventDefault();

        onUserAdd(formData);

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
    );
}