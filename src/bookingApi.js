// Inspired by 'alexismenest' capstone 'mockAPI' logic.
// fetchAPI accepts a JavaScript Date object.
// fetchAPI returns a list of randomly generated available times.
// The times are between 15:00 and 23:30.
// The list always begins with "--- Select a Time---"
// I found this useful for debugging.
//
// submitAPI always returns 'true'.

// Ensures consistent time formatting with leading zero for hours less than 10
const formatTime = (hour, minutes) =>
  `${hour.toString().padStart(2, "0")}:${minutes}`;

const seededGenerator = (date, hour) => {
  const m = 9;
  const d = date.getDate();
  const result = ((d + hour) % m) / 10;

  return result;
};

const fetchAPI = (date) => {
  let result = ["--- Select a Time ---"];

  for (let hour = 15; hour <= 23; hour++) {
    if (seededGenerator(date, hour) < 0.5) result.push(formatTime(hour, "00"));
    if (seededGenerator(date, hour + 7) < 0.5)
      result.push(formatTime(hour, "30"));
  }

  return result;
};

const submitAPI = (formData) => true;

const fakeAPI = {
  fetchAPI,
  submitAPI,
};

export default fakeAPI;
