import React from 'react';

export default function UserList({users}) {
    return ( 
        <div className='mt-12 flex flex-col'>
            <h2 className='font-semibold text-xl mt-12 mx-6 mb-4'>Submitted Data</h2>
            <hr className='bg-black w-full'/>
            <table>
                <thead className='font-semibold text-lg'>
                    <tr className='grid grid-cols-3 px-4 gap-4 '>    
                        <td className='p-2'>Name</td>
                        <td className='col-span-2 p-2'>Email</td>
                    </tr>
                </thead>
                <tbody className='bg-blue-100' data-testid='users'>
                    {users.map((user, index) => (
                    <tr key={index} className='grid grid-cols-3 px-4 gap-4 '>
                        <td className='p-2'>{user.name}</td>
                        <td className='col-span-2 p-2'>{user.email}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}