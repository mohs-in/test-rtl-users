
export default function UserList({users}) {
    return ( 
        <div className='mt-12 flex flex-col'>
            <h2 className='font-semibold text-xl mt-12 mx-6 mb-4'>Submitted Data</h2>
            <hr className='bg-black w-full'/>
            <div className='grid grid-cols-3 px-4 gap-4 w-full font-semibold text-lg'>
                <div className='p-2'>Name</div>
                <div className='col-span-2 p-2'>Email</div>
            </div>
            <div className='bg-blue-100'>
                <hr className='bg-black w-full'/>
                {users.map((user, index) => (
                <div key={index} className='grid grid-cols-3 px-4 gap-4 '>
                    <div className='p-2'>{user.name}</div>
                    <div className='col-span-2 p-2'>{user.email}</div>
                </div>
                ))}
                <hr className='bg-black w-full'/>
            </div>
        </div>
    )
}