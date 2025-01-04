export const calculateTimeUntilBirthday = (birthDate: Date) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // Create this year's birthday date
  const thisYearBirthday = new Date(
    currentYear,
    birthDate.getMonth(),
    birthDate.getDate()
  );
  
  // If this year's birthday has passed, use next year's birthday
  if (thisYearBirthday < now) {
    thisYearBirthday.setFullYear(currentYear + 1);
  }
  
  const isToday = 
    now.getDate() === birthDate.getDate() && 
    now.getMonth() === birthDate.getMonth();
  
  const diff = thisYearBirthday.getTime() - now.getTime();
  
  // Convert time difference to days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return {
    timeUntilBirthday: { days, hours, minutes, seconds },
    isToday,
  };
};