import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const PadyatraCard = () => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [note, setNote] = useState("");
    const [selectedGradient, setSelectedGradient] = useState("Peach");
    const cardRef = useRef(null);

    const gradients = {
        Peach: ["#fde0dc", "#fed7aa"],
        Sky: ["#e0f2fe", "#bae6fd"],
        Lavender: ["#ede9fe", "#ddd6fe"],
        Mint: ["#d1fae5", "#a7f3d0"],
        Sunshine: ["#fffacc", "#fef08a"],
        PinkBliss: ["#ffe4e6", "#fecdd3"],
        Serenity: ["#e0e7ff", "#c7d2fe"],
        Creamy: ["#fff7ed", "#ffedd5"],
        Lemon: ["#fef9c3", "#fef08a"],
        Ocean: ["#ccfbf1", "#99f6e4"],
        Fog: ["#f8fafc", "#e2e8f0"],
        Emerald: ["#e6f9f2", "#a7f6d1"],
        RoyalBlue: ["#ebf3ff", "#a7c7f9"],
        Amber: ["#fff8e1", "#ffe5b4"],
        Grape: ["#f3e8ff", "#c4b5fd"],
        TealTwist: ["#ddfbf7", "#9debe4"],
        Steel: ["#f5f7fa", "#d0d7e2"],
        Mocha: ["#f8f6f4", "#dbc9b6"],
        IndigoDream: ["#e8eaff", "#b4b4f8"],
        Forest: ["#effbe9", "#b6e7b0"],
        SunsetGold: ["#fffbe9", "#ffe9aa"]
    };

    const [color1, color2] = gradients[selectedGradient];
    const navigate = useNavigate();

    const downloadCard = async () => {
        if (!cardRef.current) return;
        try {
            const card = cardRef.current;
            const { width, height } = card.getBoundingClientRect();

            const canvas = await html2canvas(card, {
                useCORS: true,
                backgroundColor: null,
                scrollY: -window.scrollY,
                scale: 3,
                width,
                height
            });

            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "padyatra-card.png";
            link.click();
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (


        <div style={{
            minHeight: "100vh",
            minWidth: "700px",
            background: "linear-gradient(to bottom right, white, #ffe4e6)",
            padding: "1.5rem"
        }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    margin: "0 auto 1rem",
                    display: "block",
                    backgroundColor: "#fcd34d",
                    color: "#78350f",
                    fontWeight: "600",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "2px solid #facc15",
                    cursor: "pointer"
                }}
            >
                ⬅️ પાછા જાવ હોમ પેજ પર
            </button>
            <div style={{
                minWidth: "672px",
                margin: "0 auto",
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                padding: "1.5rem",
                marginBottom: "3rem",
                border: "1px solid #fecdd3"
            }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#be123c", textAlign: "center", marginBottom: "1rem" }}>
                    પદયાત્રા આમંત્રણ ઇનપુટ
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                    <input type="text" placeholder="મૂળ સ્થળ (જેમ કે: કળાલી મંદિર વડોદરા)" style={inputStyle} value={source} onChange={(e) => setSource(e.target.value)} />
                    <input type="text" placeholder="લક્ષ્ય સ્થળ (જેમ કે: પાદરા મંદિર)" style={inputStyle} value={destination} onChange={(e) => setDestination(e.target.value)} />
                    <input type="text" placeholder="તારીખ દાખલ કરો" style={inputStyle} value={date} onChange={(e) => setDate(e.target.value)} />
                    <input type="text" placeholder="સમય દાખલ કરો" style={inputStyle} value={time} onChange={(e) => setTime(e.target.value)} />
                    <input type="text" placeholder="નોંધ (ઓપ્શનલ)" style={{ ...inputStyle, gridColumn: "span 2" }} value={note} onChange={(e) => setNote(e.target.value)} />
                    <select style={{ ...inputStyle, fontWeight: "700", gridColumn: "span 2" }} value={selectedGradient} onChange={(e) => setSelectedGradient(e.target.value)}>
                        {Object.keys(gradients).map((key) => (<option key={key} value={key}>{key}</option>))}
                    </select>
                </div>

                <button onClick={downloadCard} style={buttonStyle}>ડાઉનલોડ કરો પદયાત્રા કાર્ડ</button>
            </div>

            <div
                ref={cardRef}
                style={{
                    backgroundImage: `linear-gradient(to bottom right, ${color1}, ${color2})`,
                    width: "640px",
                    margin: "0 auto",
                    padding: "1.5rem",
                    borderRadius: "1.5rem",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    border: "4px solid white",
                    textAlign: "center"
                }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "700", color: "#9f1239", marginBottom: "1.5rem" }}>🚶‍♂️ પદયાત્રા 🚶‍♀️</h1>

                <div style={{ backgroundColor: "rgba(255,255,255,0.7)", border: "2px dashed #fecdd3", borderRadius: "1rem", padding: "1.25rem", marginBottom: "1rem" }}>
                    <p style={{ fontSize: "1.7rem", color: "#9f1239", fontWeight: "700", whiteSpace: "pre-line" }}>
                        {(source || "મૂળ સ્થળ") + "\nથી\n" + (destination || "લક્ષ્ય સ્થળ")}
                    </p>
                    <div style={{ fontSize: "1.5rem", color: "#9f1239", fontWeight: "700", marginTop: "0.5rem" }}>
                        <p>તારીખ: {date || "તારીખ"}</p>
                        <p>સમય: {time || "સમય"}</p>
                    </div>
                    {note && (<p style={{ marginTop: "1rem", fontSize: "1.25rem", color: "#9f1239" }}><span style={{ fontWeight: "700" }}>નોંધ:</span> {note}</p>)}
                </div>

                <p style={{ fontSize: "1.45rem", fontWeight: "700", color: "#be123c", marginTop: "0.75rem", marginBottom: "1rem" }}>🙏🏻 જય સ્વામિનારાયણ 🙏🏻</p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "nowrap", gap: "0.25rem", marginTop: "1.5rem" }}>
                    <div style={imageWrapperStyle}>
                        <img src="/gurujiswami.png" alt="Guruji" style={imageStyle} />
                    </div>

                    <div style={{ marginTop: "-1.2rem" }}>
                        <p style={{ fontSize: "1.45rem", fontWeight: "700", color: "#be123c", margin: "0 0 0.5rem" }}>
                            🚩 પદયાત્રા કાર્યક્રમ 🚩
                        </p>
                        <p style={{
                            fontSize: "1rem", fontWeight: "700", color: "#881337",
                            textAlign: "center", flexShrink: 0, whiteSpace: "nowrap", margin: "0 1rem"
                        }}>
                            પ્રેરક: ૫.પૂ.સદ્.શ્રીજ્ઞાનજીવનદાસજી સ્વામી (કુંડળધામ)
                        </p>
                    </div>

                    <div style={imageWrapperStyle}>
                        <img src="/swaminarayan.png" alt="Swaminarayan" style={imageStyle} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    padding: "0.75rem",
    fontSize: "1.125rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    border: "2px solid #fecdd3",
    width: "100%",
    boxSizing: "border-box"
};

const buttonStyle = {
    marginTop: "1.5rem",
    width: "100%",
    backgroundColor: "#e11d48",
    color: "white",
    fontWeight: "600",
    padding: "0.5rem 0",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer"
};

const imageWrapperStyle = {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    border: "2px solid #be123c",
    overflow: "hidden",
    flexShrink: 0,
    position: "relative"
};

const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
};

export default PadyatraCard;
