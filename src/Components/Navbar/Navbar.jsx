import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router";

import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

const link=[
  {to:"/", title: "home"},
  {to:"/section/Mythology", title: "Mythology"},
  {to:"/section/Technology", title: "Technology"},
  {to:"/section/history", title: "history"},
]

export const Navbar = () => {

  
  

  return (
    <>
    
      <div className="navbar">
       {link.map((el)=>{
         
         return  <button>
      
           <Link key={el.to} style={{padding:"90px"}} to={el.to}>{el.title}</Link>
         </button>


         
       })}
      </div>
    </>
  );
};
