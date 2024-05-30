import bcrypt from "bcryptjs";

const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash("1234", salt);

export const about = [
  {
    _id: "660247adb56a95c2c97fa68d",
    email: "admin@wellspace.com",
    password: hashPassword,
    title: "About Us",
    content: "WellSpace provides a safe and supportive environment for your mental wellness journey. Our team of experts is here to help you navigate through life's challenges and improve your mental health."
  }
];



