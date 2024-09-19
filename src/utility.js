import {
  differenceInDays,
  differenceInMonths,
  eachWeekOfInterval,
  eachMonthOfInterval,
  format,
} from "date-fns";

export function calculateCounts(startDate, endDate) {
  // Ensure startDate is before endDate
  if (startDate > endDate) {
    return {
      daily: 0,
      weekly: 0,
      months: 0,
    };
  }

  // Daily count
  const daily = differenceInDays(endDate, startDate) + 1; // Including both start and end dates

  // Weekly count
  const weekly = Math.ceil(daily / 7);

  // Monthly count
  const month = eachMonthOfInterval({ start: startDate, end: endDate });
  const monthly = month.length - 1;

  return {
    daily,
    weekly,
    months: monthly,
  };
}

export const categories = [
  {
    name: "Sport",
    id: 1,
  },
  {
    name: "SUV",
    id: 2,
  },
  {
    name: "Hatchback",
    id: 3,
  },
  {
    name: "Sedan",
    id: 4,
  },
  {
    name: "Coupe",
    id: 5,
  },
];

export const capacity = [
    {
        capacity: 2,
      id: 1,
    },
    {
        capacity: 4,
      id: 2,
    },
    {
        capacity: 6,
      id: 3,
    },
    {
      capacity: 6,
      id: 4,
    }
  ];


  export class ResponseModel {
    // constructor(responseType:){

    // }
     result
    constructor(data){
        this.result=data
    }
    status = 0;
    message = "";
}


