import { createContext, useState, useContext, useEffect } from 'react';
import { ROUTES, TIME_ZONES, DATE_TIME_FORMAT, CLOCK_UPDATE } from '../lib/enums';
import moment from 'moment-timezone';
//Defines
const NavContex = createContext();

// React hook
const useNav = () => {
  const context = useContext(NavContex);
  if (!context) {
    throw new Error('Can not run without "navProvider"');
  }
  return context;
}

const timezoneOptions = Object
  .entries(TIME_ZONES)
  .map(([key, value], index) => ({ key: index, text: value.name, value: key }));


const NavigationProvider = (props) => {

  //states
  const [timeZone, setTimeZone] = useState(TIME_ZONES.ISRAEL.zone);
  const [nameZone, setTimeZoneName] = useState(TIME_ZONES.ISRAEL.name);
  const [currentTime, setTime] = useState(null);

  // Helpers

  const handleTimezoneChange = (key) => {
    setTimeZone(TIME_ZONES[key].zone);
    setTimeZoneName(TIME_ZONES[key].name);
  };

  // Logic 

  useEffect(() => {
    const intervalId = setInterval(() => setTime(moment().tz(timeZone).format(DATE_TIME_FORMAT)), CLOCK_UPDATE);
    return () => clearInterval(intervalId);
  }, [timeZone]);

    
  // Export
  const methods = {
    handleTimezoneChange,
  };



  return <NavContex.Provider value={{
    timeZone,
    nameZone,
    currentTime,
    methods,
    timezoneOptions,
  }} {...props} />
};

export { useNav, NavigationProvider };