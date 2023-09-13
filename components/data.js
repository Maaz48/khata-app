const appName = "HAMARI WEB";
/////////////////////////// HOME PAGE SCREEN NAMES   ///////////////////////
const homeItemsContent = [
  { id: 0, value: "رجسڑ" },
  { id: 1, value: "بیجک" },
  { id: 2, value: "جنرل بل" },
  { id: 3, value: "کھاتہ" },
  { id: 4, value: "ہاری تفصیل" },
  { id: 5, value: "ہاری جمع بنام" },
  { id: 6, value: "کھاتہ انڈیکس" },
];

////////////////// PRINT FORM FILED IN HOME PAGE SECTION ////////////
const formsFields = [
  [
    { id: 0, type: "date", value: "تاریخ" },
    { id: 1, type: "default", value: "ٹرک نمبر" },
    { id: 2, type: "default", value: "ٹوٹل نگ" },
    { id: 3, type: "default", value: "کرایہ ٹوٹل" },
    { id: 4, type: "default", value: "کمیشن" },
    { id: 5, type: "default", value: "کرایہ فی نگ" },
    { id: 6, type: "default", value: "مزدوری" },
    { id: 7, type: "default", value: "نقد/ ​​چنڈاہی" },
    { id: 8, type: "default", value: "ڈاک خرچہ" },
    {
      id: 9,
      type: "dropdown",
      value: "علاقہ",
      dropdownData: [
        {
          id: 0,
          name: " Malir",
        },
        {
          id: 1,
          name: "Gulshan",
        },
      ],
    },
    { id: 10, type: "default", value: "زمیندار کوڈ" },
    { id: 11, type: "default", value: "زمیندار نام" },
    { id: 12, type: "default", value: "مارکہ کوڈ" },
    { id: 13, type: "default", value: "مارکہ نام" },
    {
      id: 14,
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
    { id: 15, type: "default", value: "نگ" },
    { id: 16, type: "default", value: "وزن" },
    { id: 17, type: "default", value: "ریٹ" },
    { id: 18, type: "default", value: "رقم" },
    { id: 19, type: "default", value: "باردانہ" },
  ],
  [
    { id: 0, type: "date", value: " شروع تاریخ" },
    { id: 1, type: "date", value: "آخری تاریخ" },
    { id: 2, type: "numeric", value: "Merchant ID" },
    { id: 3, type: "numeric", value: "Farmer ID" },
    { id: 4, type: "default", value: "بدست" },
    { id: 5, type: "numeric", value: "Track Number" },
  ],
  [
    { id: 0, type: "date", value: "تاریخ" },
    { id: 1, type: "checkbox", value: "جمع جنرل بل" },
    { id: 2, type: "checkbox", value: "جنرل بل سب ایک ساتھ" },
    { id: 3, type: "numeric", value: "زمیندار کوڈ" },
    { id: 4, type: "default", value: "زمیندار نام" },
    { id: 5, type: "numeric", value: "ٹرک نمبر" },
  ],
  [
    { id: 0, type: "numeric", value: "زمیندار کوڈ" },
    { id: 1, type: "default", value: "زمیندار نام" },
    { id: 2, type: "date", value: " شروع تاریخ" },
    { id: 3, type: "date", value: "آخری تاریخ" },
    { id: 4, type: "default", value: "بدست" },
  ],
  [
    { id: 0, type: "numeric", value: "زمیندار کوڈ" },
    { id: 1, type: "default", value: "زمیندار نام" },
    { id: 2, type: "date", value: " شروع تاریخ" },
    { id: 3, type: "date", value: "آخری تاریخ" },
  ],
  [
    { id: 0, type: "numeric", value: "زمیندار کوڈ" },
    { id: 1, type: "default", value: "زمیندار نام" },
    { id: 2, type: "date", value: " شروع تاریخ" },
    { id: 3, type: "date", value: "آخری تاریخ" },
  ],
  [{ id: 0, type: "list" }],
];

/////////////////////// DRAWER ITEMS NAME SHOW /////////////
const sideBardItems = [
  {
    id: 0,
    name: "Add",
  },
  {
    id: 1,
    name: "Change",
  },
  {
    id: 2,
    name: "Balance",
  },
];
// {
//   id: 2,
//   name: "Advance Payment",
// },

////////////////////////// DRAWER SUB MENU SCREEN NAMES /////////////
const submenuScreens = [
  [
    { id: 0, name: "Add Merchant" },
    { id: 1, name: "Add Station" },
    { id: 2, name: "Add Careof" },
  ],
  [
    { id: 0, name: "Change Farmer" },
    { id: 1, name: "Rename Farmer" },
    { id: 2, name: "Change Item" },
  ],
  [
    { id: 0, name: "Total Balance" },
    { id: 1, name: "Area Balance" },
    { id: 2, name: "Area Balance New Style" },
    { id: 3, name: "Area Jins Report" },
    { id: 4, name: "Tot Kham-safi" },
    { id: 5, name: "Care of balance" },
    { id: 6, name: "Quick Balance" },
    { id: 7, name: "Roznamcha" },
    { id: 8, name: "Total Fard Details" },
  ],
];

////////////////////////////////////// DRAWER->SCREENS-> FORM FIELD DATA ////////////////////////
const drawerItemsForms = [
  [
    [
      { id: 0, type: "numeric", value: "زمیندار کوڈ" },
      { id: 1, type: "default", value: "زمیندار نام" },
      {
        id: 2,
        type: "dropdown",
        value: "علاقہ",
        dropdownData: [
          {
            id: 0,
            name: " Malir",
          },
          {
            id: 1,
            name: "Gulshan",
          },
        ],
      },
      { id: 3, type: "numeric", value: "معرفت کوڈ" },
      { id: 4, type: "default", value: "معرفت نام" },
    ],
    [{ id: 1, type: "default", value: "علاقہ" }],
    [
      { id: 0, type: "numeric", value: "معرفت کوڈ" },
      { id: 1, type: "default", value: "معرفت نام" },
      {
        id: 2,
        type: "dropdown",
        value: "علاقہ",
        dropdownData: [
          {
            id: 0,
            name: " Malir",
          },
          {
            id: 1,
            name: "Gulshan",
          },
        ],
      },
    ],
  ],
  [
    [
      { id: 0, type: "default", value: "Farmer Id" },
      { id: 1, type: "default", value: "Farmer Name" },
      { id: 2, type: "default", value: "Merchant Code" },
      { id: 3, type: "default", value: "Merchant Name" },
    ],
    [
      { id: 0, type: "default", value: "بزگر کوڈ" },
      { id: 1, type: "default", value: "بزگر نام" },
    ],
    [{ id: 0, type: "default", value: "جنس" }],
  ],
  [
    [
      { id: 0, type: "date", value: " شروع تاریخ" },
      { id: 1, type: "date", value: "آخری تاریخ" },
    ],
    [
      {
        id: 0,
        type: "dropdown",
        value: "علاقہ",
        dropdownData: [
          {
            id: 0,
            name: " Malir",
          },
          {
            id: 1,
            name: "Gulshan",
          },
        ],
      },
      { id: 3, type: "checkbox", id: 0, value: "سب علاقہ کا ایک ساتھ" },
      { id: 4, type: "date", value: " شروع تاریخ" },
      { id: 5, type: "date", value: "آخری تاریخ" },
    ],
    [
      {
        id: 0,
        type: "dropdown",
        value: "علاقہ",
        dropdownData: [
          {
            id: 0,
            name: " Malir",
          },
          {
            id: 1,
            name: "Gulshan",
          },
        ],
      },
      { id: 1, type: "checkbox", id: 0, value: "بنام رقم" },
      { id: 2, type: "checkbox", id: 1, value: "چکتہ حساب" },
      { id: 3, type: "checkbox", id: 2, value: "سب علاقہ کا ایک ساتھ" },
      { id: 4, type: "date", value: " شروع تاریخ" },
      { id: 5, type: "date", value: "آخری تاریخ" },
    ],
    [
      {
        id: 0,
        type: "dropdown",
        value: "علاقہ",
        dropdownData: [
          {
            id: 0,
            name: " Malir",
          },
          {
            id: 1,
            name: "Gulshan",
          },
        ],
      },
      {
        id: 1,
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
      { id: 2, type: "checkbox", id: 0, value: "سب علاقہ کا ایک ساتھ" },
      { id: 3, type: "date", value: " شروع تاریخ" },
      { id: 4, type: "date", value: "آخری تاریخ" },
    ],
    [
      {
        id: 0,
        type: "dropdown",
        value: "علاقہ",
        dropdownData: [
          {
            id: 0,
            name: " Malir",
          },
          {
            id: 1,
            name: "Gulshan",
          },
        ],
      },

      { id: 1, type: "checkbox", id: 0, value: "سب علاقہ کا ایک ساتھ" },
      { id: 2, type: "date", value: " شروع تاریخ" },
      { id: 3, type: "date", value: "آخری تاریخ" },
    ],
    /////////////////// LIST SHARE HO GI JIN KA BALANCE REMEANING HA /////////
    [{ id: 0, type: "default", value: "جنس" }],
    /////////////////// LIST SHARE HO GI JIN KA BALANCE REMEANING HA /////////
    [
      { id: 0, type: "default", value: "زمیندار کوڈ" },
      { id: 1, type: "default", value: "زمیندار نام" },
      { id: 2, type: "date", value: " شروع تاریخ" },
      { id: 3, type: "date", value: "آخری تاریخ" },
      { id: 4, type: "default", value: "بدست" },
    ],
    [{ id: 0, type: "date", value: "تاریخ" }],
    [
      { id: 0, type: "date", value: " تاریخ" },
      { id: 1, type: "checkbox", id: 0, value: "جمع جنرل بل" },
    ],
  ],
];

export {
  appName,
  homeItemsContent,
  formsFields,
  sideBardItems,
  submenuScreens,
  drawerItemsForms,
};
