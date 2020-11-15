import React from "react";

const HomePage = ({ handleLogout }) => {
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

