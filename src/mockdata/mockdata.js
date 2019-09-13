const headings = ["NAME", "ISSUED", "DUE", "AMOUNT", "STATUS"];

const invoices = [
  {
    client: "Esther Gladwell",
    issued: "Sep. 12, 2019",
    due: "Oct. 30, 2019",
    amount: 1400,
    status: "Pending",
    id: "I-4KKO84j-2k",
    selected: false
  },
  {
    client: "Malcolm Tanner",
    issued: "Jun. 22, 2019",
    due: "Jul. 30, 2019",
    amount: 2400,
    status: "Paid",
    id: "I-01kmJDJ2-9AK2",
    selected: false
  },
  {
    client: "Alexa Otander",
    issued: "Dec.20, 2018",
    due: "Feb. 28, 2019",
    amount: 1400,
    status: "Paid",
    id: "I-K069723j-xx-4n",
    selected: false
  },
  {
    client: "Joshua Temple",
    issued: "Mar. 9, 2019",
    due: "Apr. 30, 2019",
    amount: 1800,
    status: "Overdue",
    id: "I-ZNM-WI673",
    selected: false
  },
  {
    client: "Sara Stevenson",
    issued: "May. 11, 2019",
    due: "Aug. 1, 2019",
    amount: 1750,
    status: "Pending",
    id: "I-LSPEU8-22-sS9k",
    selected: false
  },
  {
    client: "Taylor Madison",
    issued: "Aug. 3, 2019",
    due: "Sep. 1, 2019",
    amount: 1900,
    status: "Overdue",
    id: "I-972k-K-QSHt-sl1",
    selected: false
  }
];

export { headings, invoices };
