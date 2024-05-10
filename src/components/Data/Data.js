// Sidebar imports
import {UilEstate, UilUsersAlt, UilDollarSign} from "@iconscout/react-unicons";


// Sidebar Data
export const SidebarData =[
    {
        icon: UilEstate,
        heading: "Dashboard",
        path: "/"
    },
    {
        icon: UilUsersAlt,
        heading: "Enseignants",
        path: "/Enseignant"
      },
];

export  const CardsData = [
{
      title:"Prestation totale",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    png:  UilDollarSign,
    value:"",


},
{
    title:"Prestation minimale",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
  },
  png: UilDollarSign,
  value:"",


},
{
    title:"Prestation maximale",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
  },
  png:  UilDollarSign,
  value:"",


},
];

export const AddCardData =[
  
]





