import { current } from "@reduxjs/toolkit";

//get dates
const getCurrentYear = () => {
  return new Date().getFullYear();
};
const getCurrentMonth = () => {
  const currentMonth = new Date().getMonth() + 1;
  if (currentMonth < 10) {
    return `0${currentMonth}`;
  }
  return currentMonth;
};
const getCurrentDay = () => {
  const currentDay = new Date().getDate();
  if (currentDay < 10) {
    return `0${currentDay}`;
  }
  return currentDay;
};

const year = getCurrentYear();
const month = getCurrentMonth();
const day = getCurrentDay();

export const todayDate = `${year}-${month}-${day}`;
