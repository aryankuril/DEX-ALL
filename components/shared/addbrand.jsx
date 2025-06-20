"use client"
import React, { useState, useRef, useEffect } from 'react';

const userData = [
  {
    name: "Niomi Shah",
    image: "https://i.imgur.com/MK3eW3As.jpg",
    greeting: "Welcome Back, Bloke!"
  }
];

const icons = [
  {
    platform: "instagram",
    src: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
  },
  {
    platform: "facebook",
    src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  },
  {
    platform: "threads",
    src: "https://cdn-icons-png.flaticon.com/512/11084/11084249.png",
  },
  {
    platform: "youtube",
    src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  },
];
const Addbrand = () => {
      // State to manage added brands
      const [brands, setBrands] = useState([]);
      // State to manage categories
      const [categories, setCategories] = useState(['Finance', 'Health', 'Sport', 'Fashion']);
  
      const [links, setLinks] = useState({
    instagram: '',
    facebook: '',
    threads: '',
    youtube: ''
  });
  
  const [showInputs, setShowInputs] = useState({
    instagram: false,
    facebook: false,
    threads: false,
    youtube: false,
  });
  
  
  const handleIconClick = (platform) => {
    if (links[platform]) {
      // If link exists, open it in a new tab
      window.open(links[platform], '_blank');
    } else {
      setShowInputs((prev) => ({
        ...prev,
        [platform]: true,
      })); 
      const input = document.getElementById(`${platform}-input`);
      if (input) {
        input.classList.remove("hidden");
        input.focus();
      }
    }
  };
  
  const handleKeyDown = (e, platform) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setShowInputs((prev) => ({
        ...prev,
        [platform]: false,
      }));
    }
  };
  
  
  
  const handleInputChange = (platform, value) => {
    setLinks(prevLinks => ({
      ...prevLinks,
      [platform]: value
    }));
  };
  
      const handleAddBrand = (e) => {
    e.preventDefault();
    if (brands.length < 5) {
      const fullBrand = {
        ...newBrand,
        socialLinks: { ...links }, // ✅ Save all links here
      };
  
      setBrands(prevState => [...prevState, fullBrand]);
  
      setNewBrand({
        logo: null,
        brandName: '',
        enterLink: '',
        category: '',
        assetLink: '',
        description: '',
        employee: ''
      });
  
      setLinks({
        instagram: '',
        facebook: '',
        threads: '',
        youtube: ''
      });
  
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } else {
      alert("You can add up to 5 brands only.");
    }
  };
  
  
      // State for new brand form inputs
      const [newBrand, setNewBrand] = useState({
          logo: null,
          brandName: '',
          enterLink: '',
          category: '',
          assetLink: '',
          description: '',
          employee: ''
      });
      // State for new category input
      const [newCategoryName, setNewCategoryName] = useState('');
      // Pro tips for display
      const proTips = [
          "The first few words should hook the audience, followed by a clear call-to-action or value message."
      ];
      // Ref for logo file input
      const fileInputRef = useRef(null);
  
      // Effect to handle disabling the form when 5 brands are added
      useEffect(() => {
          if (brands.length >= 5) {
              // Optionally show a message or visually disable the form elements
              console.log("Maximum 5 brands added. Form disabled.");
          }
      }, [brands]);
  
      // Handle change for brand form inputs
      const handleBrandChange = (e) => {
          const { name, value } = e.target;
          setNewBrand(prevState => ({ ...prevState, [name]: value }));
      };
  
      // Handle logo file selection
      const handleLogoUpload = (e) => {
          const file = e.target.files[0];
          if (file) {
              setNewBrand(prevState => ({ ...prevState, logo: URL.createObjectURL(file) }));
          }
      };
  
   
  
      // Handle resetting the brand form
      const handleResetBrandForm = () => {
          setNewBrand({
              logo: null,
              brandName: '',
              enterLink: '',
              category: '',
              assetLink: '',
              description: '',
              employee: ''
          });
          if (fileInputRef.current) {
              fileInputRef.current.value = '';
          }
      };
  
      // Handle adding a new category
      const handleAddCategory = () => {
          if (newCategoryName && !categories.includes(newCategoryName)) {
              setCategories(prevState => [...prevState, newCategoryName]);
              setNewCategoryName('');
          }
      };
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-yellow-100 to-orange-100 p-4 font-inter text-gray-800">

    {/* Header Section */}
  {/* <div className="w-full md:w-[1308px] h-auto md:h-[660px] mx-auto rounded-none md:rounded-[30px] bg-[yellow] font-['Inter'] gap-4 p-4 md:p-0"> */}
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

    {/* Main Content Area */}
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:p-4 p-0">


        {/* Left Column: Add Brand Section */}
<div
className="lg:col-span-2 overflow-y-auto p-4 rounded-3xl"
style={{
height: '90vh',
backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='818' height='685' viewBox='0 0 818 685' fill='none'><path d='M384.112 0.25291C542.665 1.92074 718.737 0.750957 788.051 0.22213C804.619 0.0957247 818 13.4315 818 30V655C818 671.569 804.569 685 788 685H30C13.4315 685 0 671.569 0 655V98.3169C0 81.5321 13.6442 68.0052 30.4269 68.2714C104.018 69.4385 287.366 71.8874 311.5 67.7589C330.282 64.5458 345.186 39.274 353.801 20.5291C359.294 8.57657 370.959 0.114545 384.112 0.25291Z' fill='white'/></svg>`)}")`,
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
// backgroundPosition: 'center',
backdropFilter: 'blur(8px)',
}}
>




<div className="w-full max-w-[2000px] pl-1 pr-0 md:px-6 mx-auto mt-[-22px] md:mt-0">
  <h2 className="text-3xl font-bold">Add Brand</h2>
  <p className="text-gray-600 mb-6">It seems like you've got another brand!</p>
</div>


            <form onSubmit={handleAddBrand} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Logo Upload Section */}
                <div className="col-span-1 flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-gray-300 p-6 w-full md:w-[430px] h-[220px] relative">

                    {newBrand.logo ? (
                        <img src={newBrand.logo} alt="Brand Logo" className="max-w-full max-h-full object-contain rounded-lg" />
                    ) : (
                        <>
                         <div className="col-span-1 flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-4  relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.9166 13.5833V20.0417C28.9166 26.5 26.3333 29.0833 19.8749 29.0833H12.1249C5.66659 29.0833 3.08325 26.5 3.08325 20.0417V12.2917C3.08325 5.83333 5.66659 3.25 12.1249 3.25H18.5833" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.125 14.875L14.7083 17.4583" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.9166 13.5833H23.7499C19.8749 13.5833 18.5833 12.2917 18.5833 8.41667V3.25L28.9166 13.5833Z" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1251 22.625V14.875L9.54175 17.4583" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </div>
                            <span className=" text-black-200 text-sm">Click to upload logo</span>
                            <span className="text-gray-400 text-xs mt-1">SVG, PNG, JPG up to 5MB</span>
                        </>
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleLogoUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept=".svg,.png,.jpg,.jpeg"
                        disabled={brands.length >= 5}
                    />
                </div>

                {/* Brand Name & Links */}
             <div className="flex-grow  space-y-4">


                    <div>
                        {/* <label htmlFor="brandName" className="-mt-5 block text-sm font-medium text-gray-700">Brand Name</label> */}
                        <input
                            type="text"
                            id="brandName"
                            name="brandName"
                            value={newBrand.brandName}
                            onChange={handleBrandChange}
                            className="  w-full border border-gray-300 rounded-md shadow-sm p-2  hover:border-yellow-500 transition-all duration-200 ease-in-out"
                            placeholder="Brand Name"
                            disabled={brands.length >= 5}
                        />
                    </div>
                    

                    
                    

                     <div>

                      {/* ICONS */}
<div className="flex items-center space-x-4 p-3 rounded-xl border border-gray-300 bg-white shadow-sm">
<span className="text-gray-400  whitespace-nowrap">Enter Social :</span>
{icons.map(({ platform, src }) => (
<img
key={platform}
src={src}
alt={platform}
placeholder ="blur"
onClick={() => handleIconClick(platform)}
className={`w-8 h-8 cursor-pointer rounded-full transition-opacity duration-300 ${
links[platform] ? "opacity-100" : "opacity-50"
}`}
/>
))}
</div>

{/* INPUTS */}
{icons.map(({ platform }) => (
showInputs[platform] && (
<input
key={platform}
type="text"
placeholder={`Enter ${platform.charAt(0).toUpperCase() + platform.slice(1)} Link`}
value={links[platform]}
onChange={(e) => handleInputChange(platform, e.target.value)}
onKeyDown={(e) => handleKeyDown(e, platform)}
className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm mt-2"
/>
)
))}



                        
                        
                        {/* <label htmlFor="enterLink" className="block text-sm font-medium text-gray-700">Enter Link:</label> */}
                        
                    </div>

                    <div>
                        {/* <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label> */}
                        <select
                            id="category"
                            name="category"
                            value={newBrand.category}
                            onChange={handleBrandChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:border-yellow-500 transition-all duration-200 ease-in-out"
                            disabled={brands.length >= 5}
                        >
                            <option value="">Category</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="assetLink" className="block text-sm font-medium text-gray-700">Enter Asset Link</label> */}
                        <input
                            type="text"
                            id="assetLink"
                            name="assetLink"
                            placeholder='Enter Asset Link'
                            value={newBrand.assetLink}
                            onChange={handleBrandChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  hover:border-yellow-500 transition-all duration-200 ease-in-out"
                            disabled={brands.length >= 5}
                        />
                    </div>
                </div>

                {/* Brand Description */}
                <div className="md:col-span-2">
                    {/* <label htmlFor="description" className="block text-sm font-medium text-gray-700">Brand Description</label> */}
                    <textarea
                        id="description"
                        name="description"
                        value={newBrand.description}
                        onChange={handleBrandChange}
                        placeholder='Brand Description'
                        rows="3"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:border-yellow-500 transition-all duration-200 ease-in-out"
                        disabled={brands.length >= 5}
                    ></textarea>
                </div>

                {/* Assigned Employee */}
                <div className="md:col-span-2">
                    {/* <label htmlFor="employee" className="block text-sm font-medium text-gray-700">Assigned Employee</label> */}
                    <select
                        id="employee"
                        name="employee"
                        value={newBrand.employee}
                        placeholder ='Assigned Employee'
                        onChange={handleBrandChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  hover:border-yellow-500 transition-all duration-200 ease-in-out"
                        disabled={brands.length >= 5}
                    >
                        <option value="">Select an Employee</option>
                        <option value="employee1">Employee One</option>
                        <option value="employee2">Employee Two</option>
                    </select>
                </div>

                {/* Form Action Buttons */}
                 <div className="md:col-span-2 flex justify-center space-x-4 mt-4"> {/* Center-align buttons */}
                    <button
                     style={{
background: 'var(--gra, linear-gradient(0deg, #313131 0%, #595959 100%))',
borderRadius: '30px',
padding: "10px 42px"
}}
                        type="submit"
                        className="px-6 py-3 bg-gray-800 text-white font-medium rounded-[30px] shadow-lg hover:bg-gray-900 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={brands.length >= 5}
                    >
                        Add Brand
                    </button>
                    <button

                   style={{
background: 'var(--yellow-grad, linear-gradient(191deg, #FFCD43 8.17%, #C69A22 89.53%))',
borderRadius: '30px',
padding: "10px 42px"
}}
                        type="button"
                        onClick={handleResetBrandForm}
                        className="px-6 py-3   text-white font-medium rounded-[30px] shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>

        {/* Right Column: Brands Added, All Category, Pro Tips */}
        <div
className="w-full lg:col-span-1 -mt-1 space-y-6 overflow-y-auto  rounded-3xl"

style={{
height: '90vh',
backgroundColor: 'transparent',
backdropFilter: 'blur(8px)',
}}
>
            {/* Brands Added Counter */}
            <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="relative w-55 h-20 top-5 overflow-hidden flex items-start justify-center">
{/* Background arc */}
<div className="w-44 h-50 rounded-full border-[40px] border-gray-200 absolute top-0 rotate-180"></div>

{/* Progress arc */}
<div
className="w-44 h-50 rounded-full border-[40px] border-green-500 absolute top-0 rotate-180"
style={{

clipPath: `inset(0 ${100 - (brands.length / 5) * 100}% 50% 0)`,
transform: 'rotate(180deg)',
}}
></div>

{/* Centered Progress Text */}
<div className="absolute top-13 text-2xl font-bold text-gray-800 z-10">
{brands.length}/5
</div>
</div>

<div className="mt-10 text-gray-600 text-lg">Brands added</div>

<div style={{ 

background:' var(--Radial, radial-gradient(55.54% 55.54% at 50% 44.46%, #303030 0%, #252525 100%))' 

}}  className="mt-4 flex  px-3 py-2 bg-black rounded-[10px]">

<button  className="px-3 py-2  text-white  text-sm font-medium">
Upgrade To
</button>
<button style={{ borderRadius: '10px',

background:' var(--green-grad, linear-gradient(196deg, #2CBE34 10.17%, #156319 89.14%))' }} 
className="px-3 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition duration-300">
Pro
</button>
</div>
</div>


           

            {/* All Category Section */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">All Category</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {categories.map(cat => (
                        <span key={cat} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full shadow-md">
                            {cat}
                        </span>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    
                    <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="flex-grow border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Category Name"
                    />
                    <button
                        type="button"
                        onClick={handleAddCategory}
                        className="p-2 text-gray-500 rounded-md bg-black hover:text-white-200 transition duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.707-4.707a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Pro Tips Section */}
            <div  style={{
borderRadius: '20px',
background: 'radial-gradient(51.37% 40.58% at 60.02% 58.19%, #303030 0%, #252525 100%)'
}}className="bg-gray-800 rounded-3xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
                <ul className="space-y-3">
                    {proTips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                            
                            <p className="text-sm  text-gray-300">{tip}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Addbrand