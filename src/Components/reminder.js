import React, {useState} from 'react';
import '../index.css';
import logo from '../Reminders-icon.png';
import {  useDispatch, useSelector } from 'react-redux';
import { addReminder, removeReminder, clearReminders } from '../redux/reminderSlice';
import moment from 'moment';


function Reminder() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");


  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.reminders.items)

  return (
    <div className='App'>
        <img src={logo} />
        <div className='reminder-title'>
            <h2>What Should U Do ?</h2>
        </div>
        <input
        className='form-control'
        type='text'
        value={text}
        placeholder='Enter What U Think...?'
        onChange={(e) => setText(e.target.value)}
        />
        <input 
        className='form-control'
        type='datetime-local'
        value={date}
        placeholder='Enter Date...'
        onChange={(e) => setDate(e.target.value)}
        />
        <button
        className='btn btn-primary btn-block form-control'
        onClick={() => {
            dispatch(addReminder({id:reminders.length +1, text,date}))
            setText("")
            setDate("")
        }}
        >
            Add Reminder
        </button>
        <ul className='list-group'>
            {
              reminders.map((reminder) => {
                return(
                  <li key={reminder.id} className='list-group-item'>
                    <div>{reminder.text}</div>
                    <div>{moment(new Date(reminder.date)).fromNow()}</div>
                    <div className="closeIcon btn btn-danger" onClick={() => {dispatch(removeReminder(reminder.id))}}>X</div>
                  </li>
                )
              })
            }
          </ul>
        <button
        className='btn btn-danger btn-block form-control'
        onClick={() => dispatch(clearReminders())}
        >
            Clear Reminder
        </button>
  </div>
  );
}

export default Reminder;
