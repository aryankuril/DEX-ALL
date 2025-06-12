import React from "react";

const brandData = [
  {
    logo: "https://i.ibb.co/QYkb4Z4/manba-logo.png",
    name: "Manba Finance",
    totalPosts: 17,
    posts: 7,
    stories: 0,
    reels: 10,
    remainingPosts: 13,
    superApprovals: 3,
  },
    {
    logo: "https://i.ibb.co/QYkb4Z4/manba-logo.png",
    name: "Manba Finance",
    totalPosts: 17,
    posts: 7,
    stories: 0,
    reels: 10,
    remainingPosts: 13,
    superApprovals: 3,
  },
  {
    logo: "https://i.ibb.co/QYkb4Z4/manba-logo.png",
    name: "Manba Finance",
    totalPosts: 17,
    posts: 7,
    stories: 0,
    reels: 10,
    remainingPosts: 13,
    superApprovals: 3,
  },
  {
    logo: "https://i.ibb.co/QYkb4Z4/manba-logo.png",
    name: "Manba Finance",
    totalPosts: 17,
    posts: 7,
    stories: 0,
    reels: 10,
    remainingPosts: 13,
    superApprovals: 3,
  },
  {
    logo: "https://i.ibb.co/QYkb4Z4/manba-logo.png",
    name: "Manba Finance",
    totalPosts: 17,
    posts: 7,
    stories: 0,
    reels: 10,
    remainingPosts: 13,
    superApprovals: 3,
  },
  {
    logo: "https://i.ibb.co/QYkb4Z4/manba-logo.png",
    name: "Manba Finance",
    totalPosts: 17,
    posts: 7,
    stories: 0,
    reels: 10,
    remainingPosts: 13,
    superApprovals: 3,
  },
  {
    logo: "https://i.ibb.co/QYkb4Z4/manba-logo.png",
    name: "Manba Finance",
    totalPosts: 17,
    posts: 7,
    stories: 0,
    reels: 10,
    remainingPosts: 13,
    superApprovals: 3,
  }
];

const statsData = [
  {
    title: "Total Brand",
    value: 54,
    change: "+0.7% from last month",
    icon: "icon1.png",
  },
  {
    title: "Total User",
    value: 12,
    change: "+0.7% from last month",
    icon: "img/Group.svg",
  },
  {
    title: "Total Super Approved",
    value: 54,
    change: "+0.7% from last month",
    icon: "icon3.png",
  },
];

const BrandDetails = () => {
  return (
    <div className="w-[1308px] h-[660px] mx-auto rounded-[30px] bg-[yellow] font-['Inter']">
      <div className="flex items-start gap-5 mb-5">
        <div className="flex flex-col mt-[46px] mb-[19px] ml-3">
          <h1 className="text-2xl font-bold text-black font-['Satoshi'] mb-[19px] ml-6 capitalize">
            Brand Details
          </h1>
          <div className="flex gap-1.5">
            <div className="flex items-center gap-2.5 bg-[#fefdf9] rounded-full px-5 py-3 w-[234px] h-[39px] shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M11.0835 3.95831H15.8335" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.0835 6.33331H13.4585" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.6252 9.10415C16.6252 13.2604 13.2606 16.625 9.10433 16.625C4.94808 16.625 1.5835 13.2604 1.5835 9.10415C1.5835 4.9479 4.94808 1.58331 9.10433 1.58331" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.4168 17.4166L15.8335 15.8333" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input type="text" placeholder="Search" className="w-[200px] border-none outline-none text-base text-[#BDBDBD] bg-transparent font-['Satoshi'] placeholder-[#BDBDBD]" />
            </div>

            <button className="flex items-center justify-center gap-2 bg-black text-white border-none px-5 py-2.5 rounded-[30px] text-sm font-medium cursor-pointer w-[99px] h-[39px] font-['Satoshi']">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M12.6018 2.5154L10.2583 0.171855C10.1455 0.0590038 9.9927 0 9.84375 0C9.6953 0 9.54176 0.0592382 9.42923 0.171855L7.08569 2.5154C6.85685 2.74423 6.85685 3.11522 7.08569 3.34403C7.31453 3.57283 7.68554 3.57286 7.91435 3.34403L9.25782 2.00053V14.4141C9.25782 14.7377 9.52014 15 9.84375 15C10.1674 15 10.4297 14.7377 10.4297 14.4141V2.00053L11.7732 3.34403C12.002 3.57283 12.373 3.57286 12.6018 3.34403C12.8307 3.11522 12.8307 2.7442 12.6018 2.5154Z" fill="white"/>
                <path d="M7.08567 11.656L5.74218 12.9995V0.585997C5.74218 0.262385 5.47985 6.10352e-05 5.15624 6.10352e-05C4.83263 6.10352e-05 4.5703 0.262385 4.5703 0.585997V12.9995L3.22684 11.656C2.998 11.4272 2.62699 11.4272 2.39818 11.656C2.16937 11.8849 2.16934 12.2559 2.39818 12.4847L4.74193 14.8284C4.84827 14.9348 4.9993 15 5.15627 15C5.30407 15 5.4582 14.9408 5.57061 14.8284L7.91436 12.4847C8.1432 12.2558 8.1432 11.8848 7.91436 11.656C7.68552 11.4272 7.31448 11.4272 7.08567 11.656Z" fill="white"/>
              </svg>
              Sort
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white border-none px-5 py-2.5 rounded-[30px] text-sm font-medium cursor-pointer w-[99px] h-[39px] font-['Satoshi']">
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

        <div className="flex gap-3.5 flex-wrap mt-5">
          {statsData.map((stat, idx) => (
            <div key={idx} className="bg-white/70 rounded-[20px] p-5 w-[250px] h-[133px] relative shadow-sm">
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

      <div className="rounded-[20px] bg-white  w-[1308px] h-[480px] flex-shrink-0 flex flex-col overflow-hidden">
        <div className="grid grid-cols-[2fr_4fr_1fr_1fr_1fr] items-center p-5 text-base font-bold text-center font-['Satoshi'] bg-white border-b border-[#E0E0E0] text-[#1D1D1B]">
          <p>Brand</p>
          <p>Progress & Content</p>
          <p>Extra Posts</p>
          <p>Super Approvals</p>
          <p>Action</p>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          {brandData.map((brand, index) => (
            <div key={index} className="grid grid-cols-[2fr_4fr_1fr_1fr_1fr] items-center p-5 text-sm font-['Satoshi'] text-[#1D1D1B] border-b border-gray-200 rounded-[20px] ">
              <div className="flex items-center gap-2.5">
                <img src={brand.logo} alt="brand-logo" className="w-10 h-10 rounded-[10px]" />
                <div>
                  <p className="font-semibold mb-0.5">{brand.name}</p>
                  <p className="text-xs text-gray-500">{brand.totalPosts} Total Posts</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-700">
                  Posts : {brand.posts}/10, Stories : {brand.stories}/10, Reels : {brand.reels}/10
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width: `${((brand.posts + brand.reels + brand.stories) / 30) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-700">Remaining Posts : {brand.remainingPosts}</p>
              </div>
              <div className="text-center">-</div>
              <div className="text-center">
                {brand.superApprovals.toString().padStart(2, "0")}
              </div>
              <button className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.911 6.72769C13.786 6.5566 10.8059 2.53845 6.99993 2.53845C3.19392 2.53845 0.213774 6.5566 0.08884 6.72752C-0.0296133 6.88984 -0.0296133 7.10998 0.08884 7.27229C0.213774 7.44338 3.19392 11.4615 6.99993 11.4615C10.8059 11.4615 13.786 7.44336 13.911 7.27243C14.0296 7.11015 14.0296 6.88984 13.911 6.72769ZM6.99993 10.5385C4.1964 10.5385 1.76824 7.87153 1.04946 6.99968C1.76731 6.12705 4.19038 3.46152 6.99993 3.46152C9.80333 3.46152 12.2313 6.12798 12.9504 7.0003C12.2326 7.8729 9.80948 10.5385 6.99993 10.5385Z" fill="white"/>
                    <path d="M6.99971 4.23071C5.47278 4.23071 4.23047 5.47302 4.23047 6.99996C4.23047 8.52689 5.47278 9.7692 6.99971 9.7692C8.52665 9.7692 9.76896 8.52689 9.76896 6.99996C9.76896 5.47302 8.52665 4.23071 6.99971 4.23071ZM6.99971 8.8461C5.9817 8.8461 5.15357 8.01794 5.15357 6.99996C5.15357 5.98197 5.98173 5.15381 6.99971 5.15381C8.01769 5.15381 8.84586 5.98197 8.84586 6.99996C8.84586 8.01794 8.01772 8.8461 6.99971 8.8461Z" fill="white"/>
                  </svg>
                </span>
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      <div  className="relative float-right text-white text-base font-semibold h-[100px] border-none cursor-pointer -mt-[8.1%] z-[400] rounded-tl-[40px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="115" viewBox="0 0 263 108" fill="none">
          <path d="M263 0V80.9011C263 95.8677 247.093 108 227.471 108H0V107.991C19.104 107.733 34.4676 95.8547 34.4676 81.2299V53.5459C34.4676 38.7613 50.1819 26.7776 69.5635 26.7776H227.889C247.283 26.7776 262.998 14.7827 262.998 0L263 0Z" fill="yellow"/>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="208" height="108" viewBox="0 0 1080 582" fill="none">
  <path d="M1080 0V491.94C1080 541.39 1039.91 581.48 990.46 581.48H0V581.43C78.45 580.04 141.54 516.09 141.54 437.35V288.3C141.54 208.7 206.07 144.18 285.66 144.18H935.82C1015.46 144.18 1079.99 79.6 1079.99 0.01L1080 0Z" fill="yellow"/>
</svg> */}
        <button className="absolute w-35 top-18 left-1/2 transform -translate-x-11.5 -translate-y-1/2 bg-black text-white px-3 py-3 rounded-full text-sm font-medium">
          Add Brand
        </button>
      </div>
    </div>
  );
};

export default BrandDetails;
