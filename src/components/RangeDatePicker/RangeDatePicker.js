import React, {useState, useRef, useEffect} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './RangeDatePicker.scss';
const Calendar = require('./img/calendar.png')



const RangeDatePicker = ({range}) => {
    const [dateRange, setDateRange] = useState(
      [
        new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * range)),
        new Date()
      ]
    );
    const [startDate, endDate] = dateRange;
    const datePickerRef = useRef(null)

    useEffect(() => {
      setDateRange(      
        [
          new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * range)),
          new Date()
        ]
      )
    },[range])
    
    return (
      <div className='date-picker'>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={false}
          dateFormat='dd.MM.yyyy'
          ref={datePickerRef}
        />
        <img 
          src={Calendar} 
          alt="calendar-pic" 
          onClick={() => datePickerRef.current.setFocus()}
        />
      </div>
    );
  };

export {RangeDatePicker}