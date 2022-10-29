import React, { useState } from "react";
import {PARTY_SIZE} from "../constants/ReservationConstants";

export const Context = React.createContext();

const ContextProvider = props => {
  const [partySize, setPartySize] = useState(0);
  const [reservationTime, setReservationTime] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestNotes, setGuestNotes] = useState("");
  const [reservations, serReservations] = useState([]);
  const [stage, setStage] = useState(PARTY_SIZE);

  const reservationContest = {
    partySize,
    setPartySize,
    reservationTime,
    setReservationTime,
    guestName,
    setGuestName,
    guestNotes,
    setGuestNotes,
    reservations,
    serReservations,
    stage,
    setStage
  }

  return (
    <Context.Provider
      value={reservationContest}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;