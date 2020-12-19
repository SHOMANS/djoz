import disco1 from "./assets/blog-1.jpg";
import disco2 from "./assets/blog-2.jpg";
import disco3 from "./assets/blog-3.jpg";
import disco4 from "./assets/blog-4.jpg";
import disco5 from "./assets/blog-5.jpg";
import disco6 from "./assets/blog-6.jpg";

const data = [
  {
    id: "1",
    imgSrc: disco1,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "2",
    imgSrc: disco2,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "3",
    imgSrc: disco3,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "4",
    imgSrc: disco4,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "5",
    imgSrc: disco5,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "6",
    imgSrc: disco6,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "1",
    imgSrc: disco1,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "2",
    imgSrc: disco2,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "3",
    imgSrc: disco3,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "4",
    imgSrc: disco4,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "5",
    imgSrc: disco5,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "6",
    imgSrc: disco6,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "1",
    imgSrc: disco5,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "2",
    imgSrc: disco3,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "3",
    imgSrc: disco2,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "4",
    imgSrc: disco1,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "5",
    imgSrc: disco2,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "6",
    imgSrc: disco4,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "1",
    imgSrc: disco5,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "2",
    imgSrc: disco6,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
  {
    id: "3",
    imgSrc: disco2,
    imgAlt: "",
    span: "MUSIC FESTIVAL",
    description: "World Music Festival | Free Events & Concerts in Chicago",
    by: "ERNA O’CONNER",
    date: "Dec 17, 2019",
  },
];

const elimentsCount = 6;

export const pages = Math.ceil(data.length / elimentsCount);

export const pagesArray = [];

for (let i = 1; i <= pages; i++) {
  pagesArray[i - 1] = i;
}

export const pagesData = [];

for (let i = 0; i < pages; i++) {
  pagesData[i] = data.slice(
    i * elimentsCount,
    i * elimentsCount + elimentsCount
  );
}
