import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvents } from '../../services/redux/reducer/events/index';
const Events = () => {
    const dispatch = useDispatch();
    const [eventName, setEventName] = useState('');
    const [eventImage, setEventImage] = useState(null);
const createEvent=()=>{
    axios.post(`http://localhost:5000/events`,{eventName,eventImage})
    .then((events)=>{
        const createdEvent = events.data;
        dispatch(createEvents(createdEvent));
        console.log(events)
              // Reset form fields

        setEventName('');
      setEventImage(null);
    }).catch((err)=>{
        console.log(err)
    })
}
  return (
    <div>
<input className="form-control" type="text" placeholder="Default input"/>

<div className="mb-3">
  <label  className="form-label">Default file input example</label>
  <input className="form-control" type="file" id="formFile"/>
</div>

<button type="submit" className="btn btn-primary">Submit</button>


    </div>
  )
}

export default Events