import bcrypt from "bcryptjs";

const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash("1234", salt);

export const bookings = [
  {
    _id: "6602483a0d2a3caa5dabb800",
    patientId: "660247adb56a95c2c97fa68b",
    doctorId: "660247adb56a95c2c97fa68c",
    date: "2024-06-01",
    time: "10:00",
    status: "confirmed",
    notes: "Initial consultation."
  },
  {
    _id: "6602486dd9dd3754be293f01",
    patientId: "660247adb56a95c2c97fa68b",
    doctorId: "660247adb56a95c2c97fa68d",
    date: "2024-06-02",
    time: "11:00",
    status: "confirmed",
    notes: "Follow-up session."
  }
];



