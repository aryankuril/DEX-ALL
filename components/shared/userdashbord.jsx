"use client";
import React, { useState } from "react";
// import { FaFilter, FaSort } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const userData = [
    {
      name: "Niomi Shah",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      greeting: "Welcome Back, Bloke!"
    }
  ];
  
  const initialUsers = [
    {
      name: "yash",
      email: "aryankuril@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Aryan Kuril",
      email: "aryankuril@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "dainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "bainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
    {
      name: "Jainisha Shah",
      email: "jainisha@bb.com",
      role: "Editor",
      brand: "Ric Rac",
      status: "Verified",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      action: "View",
    },
  
    // ... rest of the users array
  ];
  
  const statsData = [
  
    {
      title: "Total User",
      value: 12,
      change: "+0.7% from last month",
      icon: "img/Group.svg",
    },
    {
      title: "Top Performer of The Month",
      value: "Aryan Kuril",
      change: "+0.7% from last month",
      icon: "icon3.png",
    },
  ];

const userdashbord = () => {
    const [users, setUsers] = useState(initialUsers);
    const [sortOrder, setSortOrder] = useState('asc');
  
    const handleSort = () => {
      const sortedUsers = [...users].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      
      setUsers(sortedUsers);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
  return (
    <div className="w-full md:w-[1308px] h-auto md:h-[660px] mx-auto rounded-none md:rounded-[30px] bg-[yellow] font-['Inter'] gap-4 p-4 md:p-0">
    {/* Mobile Header */}
    <div className="flex flex-col md:hidden mb-6">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={userData[0].image}
          alt={userData[0].name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <button className="bg-[#904cf0] text-white px-6 py-2 rounded-full font-medium text-sm">
          ▶ Quick Tour
        </button>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-semibold text-gray-900">{userData[0].greeting}</h1>
        <p className="text-sm text-gray-600">{userData[0].name}</p>
      </div>
    </div>

    {/* Desktop Header */}
    <div className="hidden md:flex justify-between items-center mb-6 px-8 py-4">
      <div>
        {userData.map((user, index) => (
          <div key={index}>
            <h1 className="text-xl font-semibold text-gray-900">{user.greeting}</h1>
            <p className="text-sm text-gray-600">{user.name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
          <g clip-path="url(#clip0_487_836)">
            <path d="M18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z" fill="url(#paint0_linear_487_836)"/>
            <path d="M9.50604 15.2605H8.2273C7.87421 15.2605 7.58789 14.9742 7.58789 14.6211C7.58789 14.268 7.87413 13.9817 8.2273 13.9817H9.50604C9.85913 13.9817 10.1454 14.2679 10.1454 14.6211C10.1454 14.9742 9.85913 15.2605 9.50604 15.2605ZM28.7727 13.9817H27.494C27.1409 13.9817 26.8546 14.268 26.8546 14.6211C26.8546 14.9742 27.1408 15.2605 27.494 15.2605H28.7727C29.1258 15.2605 29.4121 14.9743 29.4121 14.6211C29.4121 14.268 29.1259 13.9817 28.7727 13.9817ZM25.741 10.4651C25.9176 10.7709 26.3086 10.8757 26.6144 10.6991L27.7219 10.0597C28.0277 9.88312 28.1325 9.49209 27.9559 9.18626C27.7793 8.88043 27.3883 8.77565 27.0825 8.95227L25.975 9.59167C25.6692 9.76829 25.5644 10.1593 25.741 10.4651ZM10.3856 18.5431L9.27811 19.1825C8.97228 19.359 8.8675 19.7501 9.04412 20.0559C9.22066 20.3617 9.61169 20.4665 9.91752 20.2899L11.025 19.6505C11.3308 19.4739 11.4356 19.0829 11.259 18.7771C11.0824 18.4712 10.6914 18.3665 10.3856 18.5431ZM11.025 9.59167L9.91759 8.95227C9.61176 8.77572 9.22073 8.88051 9.04419 9.18626C8.86764 9.49209 8.97243 9.88312 9.27818 10.0597L10.3856 10.6991C10.6914 10.8756 11.0824 10.7708 11.259 10.4651C11.4355 10.1593 11.3308 9.76829 11.025 9.59167ZM27.7218 19.1824L26.6144 18.543C26.3086 18.3665 25.9176 18.4712 25.741 18.777C25.5645 19.0828 25.6693 19.4739 25.975 19.6504L27.0824 20.2898C27.3882 20.4663 27.7793 20.3616 27.9558 20.0558C28.1324 19.7501 28.0276 19.3589 27.7218 19.1824ZM16.3687 28.7727C16.3687 29.1258 16.655 29.4121 17.0081 29.4121H19.9919C20.345 29.4121 20.6313 29.1259 20.6313 28.7727V28.1333H16.3688V28.7727H16.3687ZM14.8768 26.2152C14.8768 26.5683 15.1631 26.8546 15.5162 26.8546H21.4838C21.8369 26.8546 22.1232 26.5684 22.1232 26.2152V23.9987H14.8768V26.2152ZM18.5 7.58789C14.6219 7.58789 11.4668 10.7429 11.4668 14.6211C11.4668 16.5058 12.2035 18.2758 13.5411 19.6052C14.4025 20.4613 14.8768 21.5493 14.8768 22.669V22.72H17.8606V16.8762C16.8778 16.5971 16.1556 15.6922 16.1556 14.6211C16.1556 13.3285 17.2072 12.2768 18.4999 12.2768C19.7926 12.2768 20.8443 13.3285 20.8443 14.6211C20.8443 15.6922 20.1221 16.5971 19.1393 16.8762V22.72H22.123V22.669C22.123 21.5493 22.5974 20.4613 23.4587 19.6052C24.7964 18.2758 25.533 16.5058 25.533 14.6211C25.5332 10.7429 22.3781 7.58789 18.5 7.58789ZM19.5656 14.6211C19.5656 14.0335 19.0876 13.5554 18.5 13.5554C17.9124 13.5554 17.4344 14.0335 17.4344 14.6211C17.4344 15.2087 17.9124 15.6867 18.5 15.6867C19.0876 15.6867 19.5656 15.2087 19.5656 14.6211Z" fill="url(#paint1_radial_487_836)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_487_836" x1="11.2285" y1="7.45776" x2="37.922" y2="59.0443" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EBEBEB"/>
              <stop offset="1" stop-color="#FFD54F"/>
            </linearGradient>
            <radialGradient id="paint1_radial_487_836" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.5 17.2911) rotate(90) scale(12.121)">
              <stop stop-color="#303030"/>
              <stop offset="1" stop-color="#252525"/>
            </radialGradient>
            <clipPath id="clip0_487_836">
              <rect width="37" height="37" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
          <path d="M22.0514 19.0271C20.3504 17.5894 19.375 15.4879 19.375 13.2615V10.125C19.375 6.16612 16.4342 2.889 12.625 2.34V1.125C12.625 0.502875 12.121 0 11.5 0C10.879 0 10.375 0.502875 10.375 1.125V2.34C6.56462 2.889 3.625 6.16612 3.625 10.125V13.2615C3.625 15.4879 2.64963 17.5894 0.9385 19.0361C0.500875 19.4107 0.25 19.9552 0.25 20.5312C0.25 21.6169 1.13313 22.5 2.21875 22.5H20.7812C21.8669 22.5 22.75 21.6169 22.75 20.5312C22.75 19.9552 22.4991 19.4107 22.0514 19.0271Z" fill="url(#paint0_radial_487_842)"/>
          <path d="M11.4999 27C13.5373 27 15.2417 25.5476 15.6332 23.625H7.3667C7.7582 25.5476 9.46257 27 11.4999 27Z" fill="url(#paint1_radial_487_842)"/>
          <defs>
            <radialGradient id="paint0_radial_487_842" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5 10.0037) rotate(90) scale(12.4963)">
              <stop stop-color="#303030"/>
              <stop offset="1" stop-color="#252525"/>
            </radialGradient>
            <radialGradient id="paint1_radial_487_842" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.4999 25.1256) rotate(90) scale(1.87445 4.59115)">
              <stop stop-color="#303030"/>
              <stop offset="1" stop-color="#252525"/>
            </radialGradient>
          </defs>
        </svg>
        <button className="bg-[#904cf0] text-white px-10 py-2 rounded-full font-medium text-sm">
          ▶ Quick Tour
        </button>
        {userData.map((user, index) => (
          <img
            key={index}
            src={user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ))}
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-start gap-5 mb-5">
      {/* Stats Cards - Now before Manage All User on mobile */}
      <div className="flex gap-3.5 flex-wrap w-full md:hidden">
        {statsData.map((stat, idx) => (
          <div key={idx} className="bg-white/70 rounded-[20px] p-5 w-full md:w-[400px] h-[133px] relative shadow-sm">
            <p className="font-['Satoshi'] text-base font-medium capitalize mb-4">{stat.title}</p>
            <h2 className="text-2xl font-bold text-black">{stat.value}</h2>
            <p className="text-sm text-green-600 mt-2">{stat.change}</p>
            <div className="absolute top-4 right-4 w-[38px] h-[37px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                <path d="M18.8486 37C29.0659 37 37.3486 28.7173 37.3486 18.5C37.3486 8.28273 29.0659 0 18.8486 0C8.63136 0 0.348633 8.28273 0.348633 18.5C0.348633 28.7173 8.63136 37 18.8486 37Z" fill="url(#paint0_linear_391_752)"/>
                <path d="M18.3464 20.3625L18.9956 21.2325L17.9102 21.2186C17.6997 21.2159 17.5015 21.3169 17.38 21.4887L16.7532 22.375L16.431 21.3384C16.3685 21.1374 16.2111 20.9801 16.0102 20.9177L14.9737 20.5954L15.8599 19.9687C16.0318 19.8472 16.1328 19.6489 16.1301 19.4385L16.1162 18.353L16.9861 19.0023C17.1548 19.1282 17.3745 19.1629 17.5738 19.0953L18.6018 18.7467L18.2532 19.7747C18.1857 19.974 18.2205 20.1939 18.3464 20.3625ZM24.5087 13.7441L27.5653 10.6875L28.9347 16.1653C29.2055 17.2484 28.8833 18.4117 28.0938 19.2012L18.5685 28.7265C17.6544 29.6406 16.1671 29.6406 15.253 28.7265L8.62209 22.0956C7.708 21.1815 7.708 19.6942 8.62209 18.7801L18.1474 9.25479C18.9369 8.46536 20.1002 8.14313 21.1834 8.41383L26.6611 9.78327L23.6045 12.8399C22.9839 12.577 22.2392 12.6981 21.7333 13.204C21.0675 13.8699 21.0675 14.9495 21.7333 15.6153C22.3992 16.2812 23.4787 16.2812 24.1446 15.6153C24.6505 15.1095 24.7716 14.3648 24.5087 13.7441ZM20.7952 21.5059L19.5722 19.8671L20.2289 17.9305C20.3991 17.4286 19.9199 16.9495 19.4181 17.1197L17.4815 17.7763L15.8427 16.5533C15.4179 16.2364 14.8142 16.544 14.8209 17.0739L14.847 19.1186L13.1776 20.2994C12.7449 20.6054 12.8509 21.2747 13.3569 21.4321L15.3096 22.0391L15.9167 23.9918C16.074 24.4978 16.7433 24.6039 17.0493 24.1711L18.2299 22.5016L20.2746 22.5277C20.8046 22.5344 21.1122 21.9306 20.7952 21.5059ZM29.5735 7.77515C29.3238 7.52547 28.919 7.52547 28.6693 7.77515L26.6611 9.78327L27.0123 9.87114C27.2414 9.92845 27.4203 10.1073 27.4776 10.3364L27.5653 10.6875L29.5736 8.67941C29.8232 8.42973 29.8232 8.0249 29.5735 7.77515Z" fill="url(#paint1_radial_391_752)"/>
                <defs>
                  <linearGradient id="paint0_linear_391_752" x1="11.5771" y1="7.45776" x2="38.2706" y2="59.0443" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EBEBEB"/>
                    <stop offset="1" stopColor="#FFD54F"/>
                  </linearGradient>
                  <radialGradient id="paint1_radial_391_752" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8486 17.2911) rotate(90) scale(12.121 12.121)">
                    <stop stopColor="#303030"/>
                    <stop offset="1" stopColor="#252525"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-[46px] mb-[19px] ml-0 md:ml-3 w-full md:w-auto">
        <h1 className="text-2xl font-bold text-black font-['Satoshi'] mb-[19px] ml-2 md:ml-6 capitalize">
          Manage All User
        </h1>
        <div className="flex flex-col md:flex-row gap-1.5">
          <div className="flex items-center gap-2.5 bg-[#fefdf9] rounded-full px-5 py-3 w-full md:w-[234px] h-[39px] shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M11.0835 3.95831H15.8335" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.0835 6.33331H13.4585" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.6252 9.10415C16.6252 13.2604 13.2606 16.625 9.10433 16.625C4.94808 16.625 1.5835 13.2604 1.5835 9.10415C1.5835 4.9479 4.94808 1.58331 9.10433 1.58331" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.4168 17.4166L15.8335 15.8333" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" placeholder="Search" className="w-full md:w-[200px] border-none outline-none text-base text-[#BDBDBD] bg-transparent font-['Satoshi'] placeholder-[#BDBDBD]" />
          </div>

          <div className="flex gap-2 mt-2 md:mt-0">
            <button 
              onClick={handleSort}
              className="flex items-center justify-center gap-2 bg-black text-white border-none px-5 py-2.5 rounded-[30px] text-sm font-medium cursor-pointer w-full md:w-[99px] h-[39px] font-['Satoshi']"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M12.6018 2.5154L10.2583 0.171855C10.1455 0.0590038 9.9927 0 9.84375 0C9.6953 0 9.54176 0.0592382 9.42923 0.171855L7.08569 2.5154C6.85685 2.74423 6.85685 3.11522 7.08569 3.34403C7.31453 3.57283 7.68554 3.57286 7.91435 3.34403L9.25782 2.00053V14.4141C9.25782 14.7377 9.52014 15 9.84375 15C10.1674 15 10.4297 14.7377 10.4297 14.4141V2.00053L11.7732 3.34403C12.002 3.57283 12.373 3.57286 12.6018 3.34403C12.8307 3.11522 12.8307 2.7442 12.6018 2.5154Z" fill="white"/>
                <path d="M7.08567 11.656L5.74218 12.9995V0.585997C5.74218 0.262385 5.47985 6.10352e-05 5.15624 6.10352e-05C4.83263 6.10352e-05 4.5703 0.262385 4.5703 0.585997V12.9995L3.22684 11.656C2.998 11.4272 2.62699 11.4272 2.39818 11.656C2.16937 11.8849 2.16934 12.2559 2.39818 12.4847L4.74193 14.8284C4.84827 14.9348 4.9993 15 5.15627 15C5.30407 15 5.4582 14.9408 5.57061 14.8284L7.91436 12.4847C8.1432 12.2558 8.1432 11.8848 7.91436 11.656C7.68552 11.4272 7.31448 11.4272 7.08567 11.656Z" fill="white"/>
              </svg>
              Sort
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white border-none px-5 py-2.5 rounded-[30px] text-sm font-medium cursor-pointer w-full md:w-[99px] h-[39px] font-['Satoshi']">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M14.4141 2.22656H8.67188C8.34826 2.22656 8.08594 2.48889 8.08594 2.8125C8.08594 3.13611 8.34826 3.39844 8.67188 3.39844H14.4141C14.7377 3.39844 15 3.13611 15 2.8125C15 2.48889 14.7377 2.22656 14.4141 2.22656Z" fill="white"/>
                <path d="M14.4141 6.91406H13.8445C13.6027 6.23209 12.9514 5.74219 12.1875 5.74219H9.84375C9.07989 5.74219 8.42862 6.23209 8.18672 6.91406H0.585938C0.262324 6.91406 0 7.17639 0 7.5C0 7.82361 0.262324 8.08594 0.585938 8.08594H8.18672C8.42859 8.76791 9.07989 9.25781 9.84375 9.25781H12.1875C12.9514 9.25781 13.6026 8.76791 13.8445 8.08594H14.4141C14.7377 8.08594 15 7.82361 15 7.5C15 7.17639 14.7377 6.91406 14.4141 6.91406ZM12.1875 8.08594H9.84375C9.52066 8.08594 9.25781 7.82309 9.25781 7.5C9.25781 7.17691 9.52066 6.91406 9.84375 6.91406H12.1875C12.5106 6.91406 12.7734 7.17691 12.7734 7.5C12.7734 7.82309 12.5106 8.08594 12.1875 8.08594Z" fill="white"/>
                <path d="M14.4141 11.6016H9.15703C8.91516 10.9196 8.26386 10.4297 7.5 10.4297H5.15625C4.39239 10.4297 3.74112 10.9196 3.49922 11.6016H0.585938C0.262324 11.6016 0 11.8639 0 12.1875C0 12.5111 0.262324 12.7734 0.585938 12.7734H3.49922C3.74109 13.4554 4.39239 13.9453 5.15625 13.9453H7.5C8.26386 13.9453 8.91513 13.4554 9.15703 12.7734H14.4141C14.7377 12.7734 15 12.5111 15 12.1875C15 11.8639 14.7377 11.6016 14.4141 11.6016ZM7.5 12.7734H5.15625C4.83316 12.7734 4.57031 12.5106 4.57031 12.1875C4.57031 11.8644 4.83316 11.6016 5.15625 11.6016H7.5C7.82309 11.6016 8.08594 11.8644 8.08594 12.1875C8.08594 12.5106 7.82309 12.7734 7.5 12.7734Z" fill="white"/>
                <path d="M1.15547 2.22656H0.585938C0.262324 2.22656 0 2.48889 0 2.8125C0 3.13611 0.262324 3.39844 0.585938 3.39844H1.15547C1.39734 4.08041 2.04864 4.57031 2.8125 4.57031H5.15625C6.12551 4.57031 6.91406 3.78176 6.91406 2.8125C6.91406 1.84324 6.12551 1.05469 5.15625 1.05469H2.8125C2.04864 1.05469 1.39737 1.54459 1.15547 2.22656ZM5.74219 2.8125C5.74219 3.13559 5.47934 3.39844 5.15625 3.39844H2.8125C2.48941 3.39844 2.22656 3.13559 2.22656 2.8125C2.22656 2.48941 2.48941 2.22656 2.8125 2.22656H5.15625C5.47934 2.22656 5.74219 2.48941 5.74219 2.8125Z" fill="white"/>
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards - Desktop */}
      <div className="hidden md:flex gap-3.5 flex-wrap mt-5 w-full">
        {statsData.map((stat, idx) => (
          <div key={idx} className="bg-white/70 rounded-[20px] p-5 w-full md:w-[400px] h-[133px] relative shadow-sm">
            <p className="font-['Satoshi'] text-base font-medium capitalize mb-4">{stat.title}</p>
            <h2 className="text-2xl font-bold text-black">{stat.value}</h2>
            <p className="text-sm text-green-600 mt-2">{stat.change}</p>
            <div className="absolute top-4 right-4 w-[38px] h-[37px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                <path d="M18.8486 37C29.0659 37 37.3486 28.7173 37.3486 18.5C37.3486 8.28273 29.0659 0 18.8486 0C8.63136 0 0.348633 8.28273 0.348633 18.5C0.348633 28.7173 8.63136 37 18.8486 37Z" fill="url(#paint0_linear_391_752)"/>
                <path d="M18.3464 20.3625L18.9956 21.2325L17.9102 21.2186C17.6997 21.2159 17.5015 21.3169 17.38 21.4887L16.7532 22.375L16.431 21.3384C16.3685 21.1374 16.2111 20.9801 16.0102 20.9177L14.9737 20.5954L15.8599 19.9687C16.0318 19.8472 16.1328 19.6489 16.1301 19.4385L16.1162 18.353L16.9861 19.0023C17.1548 19.1282 17.3745 19.1629 17.5738 19.0953L18.6018 18.7467L18.2532 19.7747C18.1857 19.974 18.2205 20.1939 18.3464 20.3625ZM24.5087 13.7441L27.5653 10.6875L28.9347 16.1653C29.2055 17.2484 28.8833 18.4117 28.0938 19.2012L18.5685 28.7265C17.6544 29.6406 16.1671 29.6406 15.253 28.7265L8.62209 22.0956C7.708 21.1815 7.708 19.6942 8.62209 18.7801L18.1474 9.25479C18.9369 8.46536 20.1002 8.14313 21.1834 8.41383L26.6611 9.78327L23.6045 12.8399C22.9839 12.577 22.2392 12.6981 21.7333 13.204C21.0675 13.8699 21.0675 14.9495 21.7333 15.6153C22.3992 16.2812 23.4787 16.2812 24.1446 15.6153C24.6505 15.1095 24.7716 14.3648 24.5087 13.7441ZM20.7952 21.5059L19.5722 19.8671L20.2289 17.9305C20.3991 17.4286 19.9199 16.9495 19.4181 17.1197L17.4815 17.7763L15.8427 16.5533C15.4179 16.2364 14.8142 16.544 14.8209 17.0739L14.847 19.1186L13.1776 20.2994C12.7449 20.6054 12.8509 21.2747 13.3569 21.4321L15.3096 22.0391L15.9167 23.9918C16.074 24.4978 16.7433 24.6039 17.0493 24.1711L18.2299 22.5016L20.2746 22.5277C20.8046 22.5344 21.1122 21.9306 20.7952 21.5059ZM29.5735 7.77515C29.3238 7.52547 28.919 7.52547 28.6693 7.77515L26.6611 9.78327L27.0123 9.87114C27.2414 9.92845 27.4203 10.1073 27.4776 10.3364L27.5653 10.6875L29.5736 8.67941C29.8232 8.42973 29.8232 8.0249 29.5735 7.77515Z" fill="url(#paint1_radial_391_752)"/>
                <defs>
                  <linearGradient id="paint0_linear_391_752" x1="11.5771" y1="7.45776" x2="38.2706" y2="59.0443" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EBEBEB"/>
                    <stop offset="1" stopColor="#FFD54F"/>
                  </linearGradient>
                  <radialGradient id="paint1_radial_391_752" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8486 17.2911) rotate(90) scale(12.121 12.121)">
                    <stop stopColor="#303030"/>
                    <stop offset="1" stopColor="#252525"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="overflow-x-auto w-full md:w-[1308px] h-auto md:h-[708px] bg-white rounded-[22px] shadow p-4 md:p-7 flex flex-col relative">
      <table className="w-full text-left text-[15px] font-['Inter']">
        <thead className="border-b text-[#888]">
          <tr>
            <th className="py-3 px-3 font-semibold">Name</th>
            <th className="py-3 px-16 md:px-1 font-semibold">Email</th>
            <th className="py-3 px-16 md:px-2 font-semibold">Role</th>
            <th className="py-3 px-16 md:px-2 font-semibold">Assigned Brands</th>
            <th className="py-3 px-16 md:px-2 font-semibold">Status</th>
            <th className="py-3 px-16 md:px-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="border-b last:border-0 hover:bg-[#F8F8F8] transition">
              <td className="py-3 px-3 flex items-center gap-2 min-w-[50px]">
                <img src={user.image} alt={user.name} className="w-8 h-8 rounded-[5px] object-cover" />
                <span className="font-medium text-[#222]">{user.name}</span>
              </td>
              <td className="py-3 px-16 md:px-1 min-w-[80px] text-[#444]">{user.email}</td>
              <td className="py-3 px-16 md:px-2 min-w-[80px] text-[#444]">{user.role}</td>
              <td className="py-3 px-16 md:px-2 flex items-center gap-2">
                <svg width="62" height="34" viewBox="0 0 62 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                  <rect width="24" height="24" rx="37" fill="#C06A6A"/>
                  <rect x="14" width="24" height="24" rx="37" fill="#F34C4C"/>
                  <rect x="28" width="24" height="24" rx="37" fill="#FFCA3C"/>
                </svg>
                <td className="font-medium min-w-[50px] text-[#222]">{user.brand}</td>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="hidden md:block">
                  <mask id="mask0_489_337" maskType="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <path d="M0 0H20V20H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_489_337)">
                    <path
                      d="M14.7695 17.8906C13.378 18.7335 11.7457 19.2188 10 19.2188C4.90863 19.2188 0.78125 15.0914 0.78125 10C0.78125 4.90859 4.90863 0.78125 10 0.78125C15.0914 0.78125 19.2188 4.90859 19.2188 10C19.2188 11.8932 18.635 13.6532 17.6562 15.1172"
                      fill="black"
                    />
                  </g>
                  <path
                    d="M10 6.48364V13.5149"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.48438 9.99927H13.5156"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </td>
              <td className="py-3 px-16 md:px-2 min-w-[100px]">
                <span className="flex items-center gap-1 text-green-500 font-semibold">
                  <FiCheckCircle className="inline-block" />
                  {user.status}
                </span>
              </td>
              <td className="py-3 px-16 md:px-2 min-w-[60px]">
                <BsThreeDotsVertical className="text-[#888] cursor-pointer text-[20px]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Add New User Button */}
    <div className="relative md:hidden text-white text-base font-semibold h-[100px] border-none cursor-pointer mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="250" height="115" viewBox="0 0 263 108" fill="none">
        <path d="M263 0V80.9011C263 95.8677 247.093 108 227.471 108H0V107.991C19.104 107.733 34.4676 95.8547 34.4676 81.2299V53.5459C34.4676 38.7613 50.1819 26.7776 69.5635 26.7776H227.889C247.283 26.7776 262.998 14.7827 262.998 0L263 0Z" fill="yellow"/>
      </svg>
      <button className="absolute w-35 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-3 py-3 rounded-full text-sm font-medium">
        Add New User
      </button>
    </div>

    {/* Desktop Add New User Button */}
    <div className="relative float-right text-white text-base font-semibold h-[100px] border-none cursor-pointer -mt-[8.1%] z-[400] rounded-tl-[40px] hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="250" height="115" viewBox="0 0 263 108" fill="none">
        <path d="M263 0V80.9011C263 95.8677 247.093 108 227.471 108H0V107.991C19.104 107.733 34.4676 95.8547 34.4676 81.2299V53.5459C34.4676 38.7613 50.1819 26.7776 69.5635 26.7776H227.889C247.283 26.7776 262.998 14.7827 262.998 0L263 0Z" fill="yellow"/>
      </svg>
      <button className="absolute w-35 top-18 left-1/2 transform -translate-x-11.5 -translate-y-1/2 bg-black text-white px-3 py-3 rounded-full text-sm font-medium">
        Add New User
      </button>
    </div>
  </div>
  )
}

export default userdashbord