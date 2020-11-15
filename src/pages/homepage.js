import React from "react";
import fire from "../firebase";
import { useHistory } from "react-router-dom";



const HomePage = () => {

    const history = useHistory();
  

    const handleLogout = () => {
        fire.auth().signOut();
        history.push("/") 
    };

    return (
        <section className="homePage">
            <nav>
                <h2>Welcome</h2>
                <h2> Hei </h2>
                <button onClick={handleLogout}>LogOut</button>
            </nav>
        </section>
    );
};

export default HomePage;

