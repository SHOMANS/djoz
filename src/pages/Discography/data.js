import disco1 from "./Assets/disco-1.jpg";
import disco2 from "./Assets/disco-2.jpg";
import disco3 from "./Assets/disco-3.jpg";
import disco4 from "./Assets/disco-4.jpg";
import disco5 from "./Assets/disco-5.jpg";
import disco6 from "./Assets/disco-6.jpg";

const data = [
  {
    id: "1",
    imgSrc: disco1,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "2",
    imgSrc: disco2,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "3",
    imgSrc: disco3,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "4",
    imgSrc: disco4,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "5",
    imgSrc: disco5,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "6",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "7",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "8",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "9",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "10",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "11",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "12",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "13",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "14",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "15",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "16",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "17",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "18",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "19",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
  {
    id: "20",
    imgSrc: disco6,
    imgAlt: "",
    appRef: "",
    googlrRef: "",
    cost: "$ 52.00",
    description: "EDM PARTY ELECTRO HOUSE",
  },
];

export const pages = Math.ceil(data.length / 6);

export const pagesArray = [];

for (let i = 1; i <= pages; i++) {
  pagesArray[i - 1] = i;
}

export const pagesData = [];

for (let i = 0; i < pages; i++) {
  pagesData[i] = data.slice(i * 6, i * 6 + 6);
}
