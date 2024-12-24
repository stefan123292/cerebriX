import React from "react";
import { Link } from "react-router-dom";
import x from "../assets/twitter-x.png";
import tg from "../assets/telegram.png";
import pump from "../assets/pump.png";

const Community = () => {
    const links = [
        { to: "https://x.com/ScreenX_sol", src: x, alt: "ScreenX Logo" },
        { to: "https://x.com/ScreenX_sol", src: pump, alt: "Pump Logo" },
        { to: "https://t.me/screenX_Sol", src: tg, alt: "Telegram Logo" },
    ];

    return (
        <div style={{marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {links.map((link, index) => (
                <Link key={index} to={link.to}>
                    <img style={{ width: '60px', height: '60px', objectFit: 'contain' }} src={link.src} alt={link.alt} />
                </Link>
            ))}
        </div>
    );
};

export default Community;
