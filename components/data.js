const appName = "HAMARI WEB";
const homeItemsContent = [
  { id: 0, value: "امروزہ" },
  { id: 1, value: "نقدی" },
  { id: 2, value: "نقدی پرنٹ" },
  { id: 3, value: "امروزہ پرنٹ" },
  { id: 4, value: "امروزہ پرچی" },
  { id: 5, value: "وصولی پرنٹ" },
  { id: 6, value: "وصولی" },
  { id: 7, value: "ماشاخور امروزہ" },
  { id: 8, value: "ماشاخور وصولی" },
  { id: 9, value: "امروزہ تفصیل" },
  { id: 10, value: "وصولی تفصیل" },
];

const formsFields = [
  [
    { id: 0, type: "date", value: "تاریخ" },
    { id: 1, type: "default", value: "نگ" },
    { id: 2, type: "default", value: "ماشاخور کوڈ" },
    { id: 3, type: "default", value: "وزن" },
    { id: 4, type: "default", value: "ماشاخور نام" },
    { id: 5, type: "default", value: "باردانہ" },
    { id: 6, type: "default", value: "ریٹ" },
    { id: 7, type: "default", value: "خام بکری" },
    {
      id: 8,
      type: "dropdown",
      value: "جنس",
      dropdownData: [
        {
          id: 0,
          name: "مورومر",
        },
        {
          id: 1,
          name: "ومرصطھ",
        },
        {
          id: 2,
          name: "شغےدرل",
        },
        {
          id: 3,
          name: "دٹصھٹدصھ",
        },
      ],
    },
  ],
  [
    { id: 0, type: "numeric", value: "کوڈ" },
    { id: 1, type: "default", value: "ماشخور نام" },
    { id: 2, type: "default", value: "نگ" },
    { id: 3, type: "default", value: "خام بکری" },
    { id: 4, type: "default", value: "نقدی وصولی" },
    { id: 5, type: "default", value: "ٹوٹل بقایا" },
  ],
  [{ id: 0, type: "date", value: "تاریخ" }],
  [{ id: 0, type: "date", value: "تاریخ" }],
  [
    { id: 0, type: "numeric", value: "ماشاخور کوڈ " },
    { id: 1, type: "default", value: "ماشاخور نام" },
    { id: 2, type: "date", value: "تاریخ" },
  ],
  [
    { id: 0, type: "date", value: "تاریخ" },
    {
      id: 1,
      type: "dropdown",
      value: "وصولی کے لیے سیکشن منتخب کریں۔",
      dropdownData: [
        {
          id: 0,
          name: " ھدط",
        },
        {
          id: 1,
          name: " سابقہ اگراہی",
        },
      ],
    },
  ],
  [{ id: 0, type: "date", value: "تاریخ" }],
  [
    { id: 0, type: "numeric", value: "ماشاخور کوڈ " },
    { id: 1, type: "default", value: "ماشاخور نام" },
    { id: 2, type: "date", value: "شروع تاریخ " },
    { id: 3, type: "date", value: "آخری تاریخ" },
  ],
  [
    { id: 0, type: "numeric", value: "ماشاخور کوڈ " },
    { id: 1, type: "default", value: "ماشاخور نام" },
    { id: 2, type: "date", value: "شروع تاریخ " },
    { id: 3, type: "date", value: "آخری تاریخ" },
  ],
  [{ id: 0, type: "date", value: "تاریخ" }],
  [{ id: 0, type: "date", value: "تاریخ" }],
];

export { appName, homeItemsContent, formsFields };
