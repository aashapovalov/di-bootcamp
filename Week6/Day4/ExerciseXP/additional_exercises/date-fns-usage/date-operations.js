import {addDays, format} from 'date-fns';

export function getNewDate() {
  const today = new Date();
  const newDate = addDays(today, 5);
  const strDate = format(newDate, 'yyyy/MM/dd');
  console.log(strDate);
}