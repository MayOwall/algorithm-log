const solution = (phone_number) =>
  phone_number.slice(-4).padStart(phone_number.length, "*");
