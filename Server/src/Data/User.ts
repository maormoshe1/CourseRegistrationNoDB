import User from "../Types/User";

let user: User = {
  id: 1,
  firstName: "מאור",
  lastName: "משה",
  birthday: new Date("2000-05-15"),
  email: "maorha101@gmail.com",
  phoneNumber: "052-3393592",
  takenCourses: [
    {
      id: 1,
      name: "אינפי 1",
      dates: [new Date("2024-10-25")],
      info: "רק בשעות הבוקר",
    },
    {
      id: 5,
      name: "אלגו 1",
      dates: [new Date("2023-02-23")],
      info: "אין מידע",
    },
  ],
};

export default user;
