import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom right, #fdf2f8, #ffe4e6)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem"
        }}>
            <h1 style={{ fontSize: "2.5rem", color: "#be123c", fontWeight: "bold" }}>📜 આમંત્રણ કાર્ડ પસંદ કરો</h1>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
                <Card
                    title="🌸 રવિસભા કાર્ડ"
                    image="/ravisabha-preview.jpg"
                    onClick={() => navigate("/ravisabha")}
                />
                <Card
                    title="🚩 પદયાત્રા કાર્ડ"
                    image="/padyatra-preview.jpg"
                    onClick={() => navigate("/padyatra")}
                />
            </div>
        </div>
    );
};

const Card = ({ title, image, onClick }) => (
    <div onClick={onClick} style={{
        width: "300px",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "transform 0.3s",
        backgroundColor: "#fff"
    }}>
        <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div style={{ padding: "1rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.25rem", color: "#9f1239", fontWeight: "bold" }}>{title}</h3>
        </div>
    </div>
);

export default Home;
