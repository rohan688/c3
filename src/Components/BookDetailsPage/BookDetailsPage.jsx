
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router";

export const BookDetailsPage = () => {
  
  const navigate= useNavigate()
const {id} = useParams()
const [db,setdb]=useState([])



useEffect(()=>{
axios.get(`http://localhost:8080/books/${id}`).then((res)=>{

  // console.log(res,"dbooksb")
setdb(res.data)

}).catch((err)=>{navigate("*")})
},[])

  
  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{db.title}</h2>
        <img className="image" src={db.img} alt="#" />
        <div className="author">{db.author}</div>
        <div className="description">{db.description}</div>
        <div className="price">{db.price}</div>
        <div className="section">{db.section}</div>
        <div className="isbnNumber">{db.isbnno}</div>
        <ul className="reviews">
          {[db.reviews]}
        </ul>
      </div>
    </>
  );
};
