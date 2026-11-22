export type Patient = {
  id: string;
  name: string;
  gender: "male" | "female";
  age: string;
  img: string;
  birthdate?: string;
  contact?: string;
  emergencyContact?: string;
  insurance?: string;
  labResults?: string[];
};
