import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            backgroundColor: '#201f1f',
            color: '#FFD700',
            padding: '2rem 1rem',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #222',
            width: '-webkit-fill-available'

        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>ScreenX</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link to="https://t.me/screenX_Sol" style={{ textDecoration: 'none', color: '#FFD700' }}>Telegram</Link>
                <Link to="https://x.com/ScreenX_sol" style={{ textDecoration: 'none', color: '#FFD700' }}>Twitter</Link>
                <Link to="https://x.com/ScreenX_sol" style={{ textDecoration: 'none', color: '#FFD700' }}>Pump.fun</Link>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
                &copy; {currentYear} ScreenX. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
