import { Link } from "react-router-dom";
import styled from "styled-components"
export const Navbar = () => {
  return (
    <>
      <div className="navbar"
       style={{
    
       }}>
      <Link to={"/"}><button >Home</button></Link>
      <Link to={"/books/history"}><button>history</button></Link>
      <Link to={"/books/mystery"}><button>Technology</button></Link>
      <Link to={"/books/mythology"}><button>Mythology</button></Link>
      
      
      </div>
    </>
  );
};
