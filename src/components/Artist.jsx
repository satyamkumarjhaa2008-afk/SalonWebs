import React from "react";
import "./Artist.css";

import artist1 from "../assets/artist1.jpg";
import artist2 from "../assets/artist2.jpg";
import artist3 from "../assets/artist3.jpg";

const Artist = () => {
  const artists = [
    {
      image: artist1,
      name: "Chloé Dubois",
      role: "Styling Specialist",
    },
    {
      image: artist2,
      name: "Lucian Valois",
      role: "Color Director",
    },
    {
      image: artist3,
      name: "Élise Riveaux",
      role: "Founder & Master Stylist",
    },
  ];

  return (
    <section className="artists-section">
      <div className="artists-header">
        <h2>Meet Our Artists</h2>

        <p>
          The visionary stylists behind Miroir Chic,
          <br />
          dedicated to the art of refined beauty.
        </p>
      </div>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />

            <h3>{artist.name}</h3>

            <span>{artist.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artist;