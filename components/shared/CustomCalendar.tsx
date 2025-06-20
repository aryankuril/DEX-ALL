'use client';
import React, { useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './global.css'; // custom calendar overrides
import { format, parseISO } from 'date-fns';

interface EventItem {
  date: string;
  title: string;
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const CustomCalendar = () => {
    const [value, setValue] = useState<Date>(new Date());
    const [eventDate, setEventDate] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [events, setEvents] = useState<EventItem[]>([]);
  
    const handleAddEvent = () => {
      if (eventDate && eventTitle) {
        setEvents([...events, { date: eventDate, title: eventTitle }]);
        setEventDate('');
        setEventTitle('');
      }
    };
  
    const handleDelete = (index: number) => {
      const updated = [...events];
      updated.splice(index, 1);
      setEvents(updated);
    };
  
   const tileContent = ({ date }: { date: Date }) => {
    const formattedDate = format(date, 'yyyy-MM-dd'); // match input format
    const dayEvents = events.filter(e => e.date === formattedDate);
      return (
         <div className="mt-5">
        {dayEvents.map((e, i) => (
          <p key={i} className="text-[12px] px-1 py-[2px] rounded bg-blue-200 text-blue-700 font-medium">
            {e.title}
          </p>
        ))}
      </div>
      );
    };
  
   const handleCalendarChange = (newValue: any) => {
    if (newValue instanceof Date) {
      setValue(newValue);
  
      // Automatically set eventDate in 'yyyy-MM-dd' format
      const formatted = format(newValue, 'yyyy-MM-dd');
      setEventDate(formatted);
    }
  };
  
  
    const changeMonth = (month: string) => {
      const monthIndex = months.indexOf(month);
      const newDate = new Date(value);
      newDate.setMonth(monthIndex);
      setValue(newDate);
    };
  return (
    <div className="relative w-full min-h-screen bg-yellow-100 py-10 px-4 sm:px-12">
      {/* SVG Background — hidden on mobile, visible from sm (640px) upward */}
<div className="absolute top-0 left-0 w-full h-full z-0 hidden sm:block">
  <svg
    className="absolute top-5 -left-50 w-full max-h-[800px] h-full z-0"
    viewBox="0 0 1000 773"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M553.382 0H28.4491C12.7133 0 0 12.7563 0 28.4921V744.508C0 760.244 12.7564 773 28.4921 773H1000C1015.74 773 1028.49 760.244 1028.49 744.508V111.732C1028.49 95.7382 1015.34 82.8701 999.347 83.1723C946.081 84.1788 836.744 85.7995 818.094 82.5727C801.573 79.7142 786.402 44.101 778.099 20.5881C773.839 8.5239 762.667 0 749.872 0Z"
      fill="white"
      fillOpacity="0.79"
    />
  </svg>
</div>


      <div className="relative z-10 max-w-7xl mx-auto">
       <div className="flex flex-col lg:flex-row gap-8 w-full sm:px-2">

          {/* Calendar Section */}
          <div className="w-full lg:w-[1500px] lg:mr-[-300px]">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:ml-[-50px] w-full sm:w-[1000px]">

              <div className="flex flex-col justify-between items-left">
                <h2 className="text-2xl font-bold">Important Date</h2>
                <p className="text-sm text-gray-500">Looks like another milestone is on the way, let's mark the date!</p>
              </div>
              <div className="-mt-4 w-[180px] h-[50px] relative">
               <select
  className="w-full h-[40px] text-[16px] sm:h-full sm:text-[20px]   mt-5 sm:mt-1 text-center bg-black text-white rounded-full font-semibold hover:bg-gray-800 appearance-none"
  value={months[value.getMonth()]}
  onChange={(e) => changeMonth(e.target.value)}
>
  {months.map((month, index) => (
    <option value={month} key={month}>{month}</option>
  ))}
</select>

                <div className="absolute inset-y-0 mt-7 sm:mt-2 right-3 flex items-center pointer-events-none text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
              </div>
            </div>
           <div className="mt-10 w-full max-w-full sm:max-w-[1000px] sm:ml-[-45px]">

              <Calendar
                tileClassName={() => 'calendar-tile-border'} // add border to each tile
                showNeighboringMonth={true} // optional
                 showFixedNumberOfWeeks={true}
                onChange={handleCalendarChange}
                value={value}
                tileContent={tileContent}
                activeStartDate={new Date(value.getFullYear(), value.getMonth())}
              />
            </div>
          </div>

          {/* Right Panel - pushed further right */}
          <div className="w-full lg:w-90 mr-[-45px] lg:ml-auto flex flex-col -mt-3 gap-5">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <h3 className="font-semibold text-lg">Add Important Dates</h3>
              <input
                type="text"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text'
                }}
                value={eventDate}
                placeholder="Pick a date"
                
                onChange={(e) => setEventDate(e.target.value)}
                className="mt-2 w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Enter Title..."
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="mt-2 w-full border rounded px-3 py-2"
              />
              <button
                onClick={handleAddEvent}
                className="mt-4 w-[120px] bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-800"
              >
                Add Date
              </button>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md">
              <h3 className="font-semibold text-lg">Manage Dates</h3>
              <div className="mt-4 space-y-2 max-h-[300px] overflow-y-auto">
                {events.map((e, i) => (
                  <div key={i} className="flex justify-between items-start p-3 bg-gray-50 rounded shadow-sm">
                    <div>
                      <p className="font-medium text-sm">{format(new Date(e.date), 'MMMM dd, yyyy')}</p>
                      <p className="text-xs text-gray-600">{e.title}</p>
                    </div>
                    <button onClick={() => handleDelete(i)} className="text-red-500 mt-2 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clip-path="url(#clip0_1156_565)">
    <path d="M14.474 2.72302H11.08L10.9435 2.04802C10.7185 1.21452 9.96301 0.634519 9.09951 0.632019H5.89951C5.01451 0.638019 4.24801 1.24652 4.04201 2.10702L3.91851 2.72302H0.526009C0.0400093 2.72402 0.0325093 3.47102 0.526009 3.47302H12.7675C12.763 3.52952 12.063 11.5855 12.0215 12.8005C11.9895 13.742 11.3285 14.538 10.3885 14.6005C9.44501 14.6215 5.72101 14.6215 4.77751 14.6005C3.83751 14.538 3.17651 13.742 3.14451 12.8005C3.10301 11.5855 2.83651 9.26302 2.58651 5.88152C2.55951 5.44652 2.55851 5.23102 2.15251 5.21102C1.76001 5.26602 1.80301 5.63702 1.83851 5.93702C2.08851 9.32452 2.34551 11.6535 2.39701 12.853C2.45501 14.205 3.45351 15.3215 4.80601 15.353C5.69351 15.3735 9.47251 15.3735 10.36 15.353C11.7125 15.3215 12.711 14.205 12.769 12.853C12.8205 11.6535 13.521 3.55302 13.5235 3.47302H14.4735C14.964 3.47052 14.964 2.72502 14.474 2.72302ZM4.68301 2.72302L4.77301 2.26902C4.90151 1.75052 5.36551 1.38552 5.89951 1.38202H9.09951C9.61651 1.38102 10.0715 1.72252 10.215 2.21952L10.315 2.72302H4.68301Z" fill="#F34C4C"/>
    <path d="M6.08057 12.466C6.29407 12.468 6.46707 12.2855 6.45507 12.0725L6.14607 6.03053C6.11257 5.54703 5.37557 5.57553 5.39707 6.06853L5.70607 12.1105C5.71657 12.3095 5.88107 12.4655 6.08057 12.466Z" fill="#F34C4C"/>
    <path d="M9.29251 12.11L9.59951 6.06804C9.61051 5.86104 9.45101 5.68454 9.24401 5.67454C9.03901 5.66854 8.86551 5.82554 8.85051 6.03004L8.54351 12.072C8.52001 12.56 9.26501 12.6005 9.29251 12.11Z" fill="#F34C4C"/>
  </g>
  <defs>
    <clipPath id="clip0_1156_565">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCalendar