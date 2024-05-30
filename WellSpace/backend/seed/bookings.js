import bcrypt from "bcryptjs";

const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash("1234", salt);

export const bookings = [
  {
    _id: "6602483a0d2a3caa5dabb800",
    name:"test",
    email:"test@gmail.com",
    patientId: "660247adb56a95c2c97fa68b",
    doctorId: "660247adb56a95c2c97fa68c",
    preferredDate: "2024-06-01",
    preferredTime: "10:00",
    service: "confirmed",
    notes: "Initial consultation."
  },
  {
    _id: "6602486dd9dd3754be293f01",
    name:"test1",
    email:"test1@gmail.com",
    patientId: "660247adb56a95c2c97fa68b",
    doctorId: "660247adb56a95c2c97fa68d",
    preferredDate: "2024-06-02",
    preferredTime: "11:00",
    service: "confirmed",
    notes: "Follow-up session."
  }
];



