import { subDays, format } from 'date-fns'

const rta = subDays(new Date(1998, 1, 28), 10);
const rtaToString = format(rta, 'yyyy/MM/dd');
console.log(rtaToString);



