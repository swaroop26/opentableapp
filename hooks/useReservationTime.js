import {useState, useEffect, useContext} from "react";
import moment from 'moment';
import {Context} from "../context/ContextProvider";

const useReservationTime = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const { reservations} = useContext(Context);

  useEffect(() => {
    const startTime = moment().startOf('day').hours(15);
    const endTime = moment().startOf('day').hours(22);
    let nextSlot = startTime;
    const times = [];
    while (!nextSlot.isAfter(endTime)){
      times.push(nextSlot.format('hh:mm A'));
      nextSlot = nextSlot.add(15, 'minutes');
    }
    setTimeSlots(times)
  }, []);

  const addMinutes = (time, mins) =>
    moment(time, 'hh:mm A').add(mins, 'minutes').format('hh:mm A');

  const availableSlots = () => {
    const bookedSlots = reservations
      .map(res => res.reservationTime)
      .flatMap(time => {
        return [time, addMinutes(time, 15), addMinutes(time, 30), addMinutes(time, 45)]
      });
    return timeSlots.filter(time => !bookedSlots.some(booking => booking === time));
  }

  return {timeSlots, availableSlots, addMinutes};
};

export default useReservationTime;