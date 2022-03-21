import axios from "axios";
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";


export const Home = () => {
  // get all books when user lands on the page
  const [list,setlist]=useState([]);


  useEffect(()=>{
    axios.get('http://localhost:8080/books').then((res)=>{
      setlist(res.data)
    
    })
  },[])
  // populate them as mentioned below

  const Main = styled.div`
  display:grid;
  grid-gap:30px;
  grid-template-columns:500px 500px 500px;
  border:1px solid black;
  
   

  `;

  return (
    <div className="homeContainer" style={{marginLeft:"80px"}}>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {list.map((el)=>{
          return <Link to={`/books/${el.id}`}>
            <div>
             <img style={{width:"300px",height:"400px"}} src={el.img} alt=""/>
            <h4>{el.title}</h4>
            <h3>{el.price}</h3>
            </div>

          </Link>

        })
        }
     </Main>
    </div>
  );
};
