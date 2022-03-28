import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";

import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
 

  const Main = styled.div`
    
  `;

const navigate= useNavigate()
const {section} = useParams()

const [db,setdb]=useState([])
const [sale,setsale]=useState([])

console.log(sale,"bbvnbnml")
useEffect(()=>{
axios.get(`http://localhost:8080/books`).then((res)=>{

console.log(res.data,"data")
setdb(res.data)


// for(var i=0; i<db.length; i++){

//   if(db[i].section===section){
//     setsale(db[i])
//   }
  
//   }


})
},[])




  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
            <h2>Section</h2>
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {db.filter((el)=>{
          if(el.section==section){
            return true;
          }
          else{
            return false;
          }
        }).map((el,i)=>{
          return <div key={i}> <BookCard id={el.id} img={el.image} title={el.title} price={el.price}/></div>
        })
        }
      </Main>
    </>
  );
};
