export const STEPS_LABEL = [
  "Tell us more about you",
  "Verify your company",
  "Upload company logo",
  "You're all set. Ready?",
];

export const EMAIL_REGEX = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

export const MINMUM_LENGTH = {
  minLength: {
    value: 6,
    message: "phone should be more than 6 number",
  },
};
export const PHONE_VALIDATION = {
  ...MINMUM_LENGTH,
  maxLength: {
    value: 14,
    message: "phone should be less than 14 number",
  },
};
export const LANG_DATA = [
  { value: "ar", key: "Arabic" },
  { value: "en", key: "English" },
];

export const STEP_ONE_FIELDS = [
  "user_full_name",
  "user_email",
  "user_nationality",
  "user_phone",
  "user_password",
  "user_password_confirmation",
  "user_phoneuser_nationality",
];
export const STEP_TWO_FIELDS = [
  "company_name",
  "company_address",
  "company_business_email",
  "company_country_id",
  "company_city_id",
  "company_phone_code",
  "company_phone",
  "company_extra_data_code",
  "company_extra_data",
];

export const COUNTRY_DATA = [
  { value: "1", key: "Egypt" },
  { value: "2", key: "Morocco" },
  { value: "3", key: "Algeria" },
  { value: "4", key: "Tunisia" },
  { value: "5", key: "Jordan" },
];

export const CITY_DATA = {
  1: [
    { value: "6", key: "Cairo" },
    { value: "7", key: "Giza" },
    { value: "8", key: "Qalyubia" },
    { value: "9", key: "ALEX" },
    { value: "10", key: "Luxor" },
  ],
  2: [
    { value: "11", key: "Meknes" },
    { value: "12", key: "Asilah" },
    { value: "13", key: "Essaouira" },
    { value: "14", key: "Chefchaouen" },
    { value: "15", key: "Rabat" },
  ],
  3: [
    { value: "16", key: "Oran" },
    { value: "17", key: "Blida" },
    { value: "18", key: "Batna" },
  ],
  4: [
    { value: "19", key: "Sfax" },
    { value: "20", key: "Bizerte" },
    { value: "21", key: "Sousse" },
  ],
  5: [
    { value: "22", key: "Amman" },
    { value: "23", key: "Zarqa" },
  ],
};
