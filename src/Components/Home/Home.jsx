import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";


export const Home = () => {
  
const [db,setdb]=useState([])

console.log(db,"db")

useEffect(()=>{
axios.get("http://localhost:8080/books").then(({data})=>{


setdb(data)

})
},[])



  const Main = styled.div`
display: grid;
grid-gap: 30px;
grid-template-columns:300px 300px 300px;

  `;

  return (

    

    <div className="homeContainer">

     
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          SortAndFilterButtons
        }
      />

      <Main className="mainContainer">
        {db.map((el)=>{
       return <BookCard id={el.id} img={el.img} title={el.title} price={el.price}/>
        })}
      </Main>
    </div>
  );
};
