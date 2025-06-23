"use client";
import React, { useState, useEffect, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, BellIcon, XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'; // Using 24/outline for consistent icons
// import Image from 'next/image';

function App() {
  const maxUsers = 5;
  const [users, setUsers] = useState([
    {
      date: '14/06/25',
      name: 'Aryan Kuril',
      email: 'user1@example.com',
      role: 'SM Executive',
      status: 'Sent Invitation',
    },
    {
      date: '14/06/25',
      name: 'Yash Yerunkar',
      email: 'user2@example.com',
      role: 'SM Executive',
      status: 'Accepted',
    },
    // {
    //   date: '14/06/25',
    //   name: 'Janki',
    //   email: 'user3@example.com',
    //   role: 'SM Executive',
    //   status: 'Accepted',
    // },
    // {
    //   date: '14/06/25',
    //   name: 'Siddesh',
    //   email: 'user4@example.com',
    //   role: 'SM Executive',
    //   status: 'Accepted',
    // },
  ]);

  const [userLimitReached, setUserLimitReached] = useState(users.length >= maxUsers);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  const roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'SM Executive' },
    { id: 3, name: 'Editor' },
    { id: 4, name: 'Viewer' },
  ];
  const [selectedRole, setSelectedRole] = useState(roles[1]); // Default to SM Executive

  useEffect(() => {
    setUserLimitReached(users.length >= maxUsers);
  }, [users]);

const handleAddUser = (e) => {
  e.preventDefault();
  if (emailInput && nameInput && selectedRole && users.length < maxUsers) {
    const newUser = {
      date: new Date().toISOString(), // Raw date string
      email: emailInput,
      name: nameInput,
      role: selectedRole.name,
      status: 'Sent Invitation',
    };
    setUsers([...users, newUser]);
    setEmailInput('');
    setNameInput('');
    setSelectedRole(roles[1]);
  } else if (users.length >= maxUsers) {
    console.warn("Cannot add more users. Limit reached.");
  }
};


  const handleDeleteUser = (emailToDelete) => {
    setUsers(users.filter(user => user.email !== emailToDelete));
  };

  const handleSendInvitations = () => {
    // Logic to send invitations to users with 'Sent Invitation' or 'Pending' status
    // For this example, we'll just update their status to 'Pending' if 'Sent Invitation'
    setUsers(users.map(user =>
      user.status === 'Sent Invitation' ? { ...user, status: 'Pending' } : user
    ));
    alert('Invitations sent to eligible users!');
  };

const handleStatusClick = (email) => {
  setUsers(prevUsers =>
    prevUsers.map(user =>
      user.email === email && user.status === 'Sent Invitation'
        ? { ...user, status: 'Pending', date: new Date().toISOString() }
        : user
    )
  );
};

const getRelativeTime = (dateString) => {
  const now = new Date();
  const createdAt = new Date(dateString);
  const diffMs = now - createdAt;

  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHrs / 24);
  const diffWeeks = Math.floor(diffDays / 7);

  if (diffHrs < 1) return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`;
  if (diffHrs < 24) return `${diffHrs} hour${diffHrs !== 1 ? "s" : ""} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  return `${diffWeeks} week${diffWeeks !== 1 ? "s" : ""} ago`;
};




  // State for alert banner visibility
  const [showAlertBanner, setShowAlertBanner] = useState(true); // Initially visible if limit reached

  const currentUserCount = users.length;
  const percentage = (currentUserCount / maxUsers) * 100;

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col items-center">
  <div className="w-full max-w-7xl mx-auto rounded-none sm:rounded-[20px] shadow-xl p-3 py-10 sm:p-6 bg-[#FFF8D6] space-y-6">




        {/* Header Section */}
        <div className="flex justify-between items-center py-4 h-[20px]">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Welcome Back, Bloke!</h1>
            <p className="text-gray-500">Niomi Shah</p>
          </div>
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
            <button className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-md transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 1a1 1 0 100-2h-4a1 1 0 100 2h4z" clipRule="evenodd" />
              </svg>
              Quick Tour
            </button>
            <img
              src="https://via.placeholder.com/40" // Replace with actual user image if available
              alt="User Avatar"
              className="h-10 w-10 rounded-full object-cover border-2 border-purple-500"
            />
          </div>
        </div>

       

        {/* Add User Card & User Progress Card Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Add User Card (Left Side) */}
         <div className="relative w-full items-center ml-1 lg:ml-15  ">

   {/* Add User Card & User Progress Card Section */}
<div className="relative flex justify-center flex-col lg:flex-row gap-6">
  {/* SVG Background - visible only on large screens */}
  <div className="relative -ml-25 hidden lg:block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="818"
      height="222"
      viewBox="0 0 818 222"
      fill="none"
    >
      <path
        d="M340.874 1.40809C504.512 1.84761 711.607 0.630611 788.15 0.169212C804.718 0.0693404 818 13.4315 818 30V192C818 208.569 804.569 222 788 222H30C13.4315 222 0 208.569 0 192V115.206C0 98.5574 13.547 85.0908 30.1956 85.1873C96.7006 85.5727 251.809 86.3135 275.5 85C294.166 83.9651 304.256 52.4382 309.252 28.3861C312.41 13.1829 325.346 1.36638 340.874 1.40809Z"
        fill="white"
        fillOpacity="0.79"
      />
    </svg>
  </div>

  {/* Content Section */}
  <div className="relative z-10 mt-8 lg:-ml-205 w-full">
    <h2 className="text-xl font-semibold text-gray-800  ">Add User</h2>
    <p className="text-gray-500 text-sm mb-4">You're one step closer to creating magic!</p>

    <form
      onSubmit={handleAddUser}
      className="flex flex-col  mt-1 lg:mt-15  sm:flex-row flex-wrap gap-4 items-end  w-full sm:w-[750px] "
    >
      {/* Name Input */}
      <div className="w-full sm:w-45 mt-2">
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="w-full px-2 sm:mb-10 py-2 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
          disabled={userLimitReached}
        />
      </div>

      {/* Email Input */}
      <div className="w-full sm:w-50 mt-2">
        <label htmlFor="email" className="sr-only">Email Id</label>
        <input
          type="email"
          id="email"
          placeholder="Email Id"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="w-full px-2 sm:mb-10 py-2 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
          disabled={userLimitReached}
        />
      </div>

      {/* Role Dropdown */}
      <div className="w-full sm:w-45 relative z-50 sm:mb-10">
        <Listbox value={selectedRole} onChange={setSelectedRole} disabled={userLimitReached}>
          {({ open }) => (
            <>
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-2 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm sm:leading-6">
                <span className="block truncate">{selectedRole.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {roles.map((role) => (
                    <Listbox.Option
                      key={role.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-8 pr-4 ${active ? 'bg-purple-100 text-purple-900' : 'text-gray-900'}`
                      }
                      value={role}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                            {role.name}
                          </span>
                          {selected && (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-1.5 ${active ? 'text-purple-600' : 'text-purple-600'}`}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`px-8 py-2 rounded-[20px] font-medium transition duration-200 mb-10 ${
          userLimitReached || !emailInput || !nameInput || !selectedRole.name
            ? 'bg-black text-white cursor-not-allowed'
            : 'bg-black text-white'
        }`}
        disabled={userLimitReached || !emailInput || !nameInput || !selectedRole.name}
      >
        Add User
      </button>
    </form>
  </div>
</div>


          </div>


          {/* User Progress Card (Right Side) */}
        

           <div className="bg-white rounded-3xl    flex flex-col items-center justify-center text-center relative overflow-hidden">
  {/* SVG + Progress Fill */}
  <div className="relative w-[530px] h-[150px] mt-2 sm:mt-5 overflow-hidden flex items-center justify-center">
<div className=" -mt-3">
 <svg
  viewBox="0 0 300 180"
  xmlns="http://www.w3.org/2000/svg"
  className="w-[400px] h-[150px]"
>
  {/* Background Arc */}
  <path
    d="M20,160 A130,130 0 0,1 280,160"
    fill="none"
    stroke="#E5E5E5"
     strokeWidth="35"
  />

  {/* Filled Arc */}
  <path
    d="M20,160 A130,130 0 0,1 280,160"
    fill="none"
    stroke="#22c55e"
     strokeWidth="35"
    strokeDasharray="440"
    strokeDashoffset={440 * (1 - percentage / 100)}
    strokeLinecap="round"
    style={{
      transition: 'stroke-dashoffset 0.5s ease-in-out',
    }}
  />
</svg>


</div>
 {/* Centered Text */}
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-20%] text-4xl font-bold text-gray-800 z-20">
       {currentUserCount}/{maxUsers}
    </div>
  </div>

  {/* Subtext */}
  <div className="mt-6 sm:-mt-10 text-gray-600 text-lg">Users added</div>
  <div
    style={{
      background:
        'radial-gradient(55.54% 55.54% at 50% 44.46%, #303030 0%, #252525 100%)',
    }}
    className="mt-2 mb-2 flex px-3 py-2  bg-black rounded-[10px]"
  >
    <button className="px-3 py-2   text-white text-sm font-medium">
      Upgrade To
    </button>
    <button
      style={{
        borderRadius: '10px',
        background:
          'linear-gradient(196deg, #2CBE34 10.17%, #156319 89.14%)',
      }}
      className="px-3 py-2 text-white text-sm font-medium hover:bg-green-600 transition duration-300"
    >
      Pro
    </button>

  </div>
             </div>
                </div>
        
        {/* User Table (Bottom Section) */}
<div className="relative w-full overflow-hidden"> 

  {/* Actual content over background */}
  <div className="relative z-10 mr-0.8 mt-2">
    
    {/* White rounded background wrapper */}
    <div className="bg-white h-[320px] rounded-3xl shadow-md ">

      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-5 ">
      <div className="flex flex-col justify-between items-start mt-5">
  <h2 className="text-lg lg:text-xl font-semibold text-gray-800">
    Review User Details
  </h2>
  <p className="text-xs sm:text-sm text-gray-500">
    You're one step closer to creating magic!
  </p>
</div>



     <div className="relative mt-5 flex justify-center items-center w-fit">
  
  {/* Background Image Behind Button */}
  {/* <img 
    src="/Asset.svg" 
    alt="Button Background" 
    className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
  /> */}
  {/* <Image src="/Assett.svg" alt="Asset" width={200} height={200} /> */}

  {/* Actual Button */}
  <button
    onClick={handleSendInvitations}
    className="relative z-10 flex justify-center items-center gap-2 rounded-full font-semibold text-white transition-all duration-300 cursor-pointer shadow-md 
    px-6 py-2 text-sm
    sm:px-12 sm:py-2.5 sm:text-base"
    style={{
      background: "linear-gradient(191deg, #FFCD43 8.17%, #C69A22 89.53%)",
    }}
  >
    Send Invitation
  </button>
</div>


      </div>

      {/* Table Section */}
      <div className="text-gray-500 mb-4">
        <div className="max-h-[260px] overflow-y-auto w-full rounded-[20px]">
          <table className="min-w-full divide-y divide-gray-200 text-gray-800">
            <thead className="bg-[#f3f4f6] sticky top-0 z-10">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">SR NO.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
                <th className="px-15 py-3 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
                <th className="px-15 py-3 text-left text-xs font-semibold uppercase tracking-wider">Roles</th>
                <th className="px-8 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-8 py-4 whitespace-nowrap text-sm">{index + 1}</td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
                  <td className="px-8 py-4 whitespace-nowrap text-sm">{user.role}</td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.status === 'Sent Invitation' && (
                      <button
                        onClick={() => handleStatusClick(user.email)}
                        className="px-3 py-1 text-xs leading-5 font-semibold rounded-full"
                        style={{
                          background: "linear-gradient(191deg, #FFCD43 8.17%, #C69A22 89.53%)",
                          color: "#fff",
                        }}
                      >
                        Sent Invitation
                      </button>
                    )}
                    {user.status === 'Pending' && (
                      <div className="flex flex-col items-start">
                        <span
                          className="px-3 py-1 text-xs leading-5 font-semibold rounded-full text-gray-800"
                          style={{
                            background: "linear-gradient(0deg, #C0C0C0 0%, #E3E3E3 100%)",
                          }}
                        >
                          Pending
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          {getRelativeTime(user.date)}
                        </span>
                      </div>
                    )}
                    {user.status === 'Accepted' && (
                      <span
                        className="px-3 py-1 text-xs leading-5 font-semibold rounded-full text-white"
                        style={{
                          background: "linear-gradient(196deg, #2CBE34 10.17%, #156319 89.14%)",
                        }}
                      >
                        Accepted
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {user.status !== 'Accepted' ? (
                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    ) : (
                      <TrashIcon className="h-5 w-5 text-gray-300 cursor-not-allowed" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div> {/* End white box */}

  </div>
</div>









      
      </div>
    </div>
  );
}

export default App;