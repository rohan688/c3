import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const SortAndFilterButtons = ({ handleSort }) => {

  const [db,setdb]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/books").then(({data})=>{
    
    
    setdb(data)
    
    })
    },[])



  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */

        <>
                <button className="sortByTitleAsc"onClick={(()=>{
          return (setdb([...db.sort((a,b)=>a.title-b.title)]))
        })}>ascending</button>
          <button  className="sortByTitleDesc" onClick={(()=>{
          return (setdb([...db.sort((a,b)=>b.title-a.title)]))
        })}>descending</button>
          <button  className="sortByPriceAsc" onClick={(()=>{
          return (setdb([...db.sort((a,b)=>a.price-b.price)]))
        })}>ascen name</button>
            <button  className="sortByPriceDesc" onClick={(()=>{
          return (setdb([...db.sort((a,b)=>b.price-a.price)]))
        })}>ascen name</button>
        
        </>


      }
    </div>
  );
};
