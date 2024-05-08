/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
const filterer = (car) => {
  //   const type = params.driver_type;
  const datetime = `${params.pickup_date}T${params.pickup_time}:00`;
  const totalPassenger = params.total_passenger;

  //   const isTypeMatch = car.type === type;
  const isDateTimeValid = new Date(datetime) > new Date(car.availableAt);
  const isPassengerCapacityValid = car.capacity >= totalPassenger;

  //   return isTypeMatch && isDateTimeValid && isPassengerCapacityValid;
  return isPassengerCapacityValid;
};

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init(filterer).then(app.run);
