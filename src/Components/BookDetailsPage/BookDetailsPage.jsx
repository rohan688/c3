import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const {id} =useParams();
  const navigate=useNavigate()
  const[books ,setbooks]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setbooks(res.data)
    }).catch((er)=>{
      navigate("*")
    })
  },[])

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{books.title}</h2>
        <img className="image" src={books.img} alt="#" />
        <div className="author">{books.author}</div>
        <div className="description">{books.description}</div>
        <div className="price">{books.price}</div>
        <div className="section">{books.section}</div>
        <div className="isbnNumber">{books.isbnNumber}</div>
        <ul className="reviews">
          <li>{books.reviews}</li>
        </ul>
      </div>
    </>
  );
};
