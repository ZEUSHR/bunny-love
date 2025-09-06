export default function App() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      minHeight: "100vh",       // full viewport height
      width: "100vw",           // full viewport width
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ffe6f0, #fff5e6)",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      <h1 style={{ color: "#ff4081", fontSize: "3rem" }}>🐰 My Aushi Babe, My Special One 🐰</h1>
      
      <p style={{ fontSize: "1.2rem", color: "#333", maxWidth: "600px", lineHeight: "1.6" }}>
        Aushi, you are the most special part of my life.  
        Every smile of yours makes my world brighter.  
        I’m so lucky that I got you. ❤️
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <img 
          src="https://i.ibb.co/gMwSLfRb/Photos-0-PLTx-XC6qb.jpg" 
          alt="Cute Bunny 1" 
          style={{ width: "250px", borderRadius: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }} 
        />
        <img 
          src="https://i.ibb.co/bjdCZb2z/Photos-WAh-Mpg-Ak5-N.jpg" 
          alt="Cute Bunny 2" 
          style={{ width: "250px", borderRadius: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }} 
        />
      </div>

      <h2 style={{ color: "#ff4081", marginTop: "40px", fontSize: "2rem" }}>Why you’re special to me 💕</h2>
      
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem", color: "#444", maxWidth: "500px", lineHeight: "1.6" }}>
        <li>🌸 You make me smile every day</li>
        <li>🌸 You care for me more than anyone else</li>
        <li>🌸 You’re my safe place, my happiness</li>
        <li>🌸 I’m lucky to call you mine</li>
      </ul>

      <p style={{ marginTop: "50px", fontSize: "1.5rem", fontWeight: "bold", color: "#ff4081" }}>
        Forever Yours ❤️
      </p>
    </div>
  );
}
