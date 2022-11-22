import React from "react";
import Card from "./Card";
//import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <div>Home</div>
      <Card image="ElPadrino" />

      {/* <div>
            {
                movies ? 
                movies.map(m => {
                    return (
                     <Card image={m.image} name={m.name} key={m.id} />
                    )
                })
                :
                <h1>Cargando...</h1>
            }
        </div> */}




      {/* <Link to="/home">
        <button>Ingresar</button>
      </Link> */}
    </div>
  );
};

export default Home;
