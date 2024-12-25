import React from "react";
import pump from "../assets/pump.png"

const LiveOnPumpFun = () => {
    const contractAddress = "soon";

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress);
        alert("Contract address copied to clipboard!");
    };

    return (
        <div style={{
            display: 'contents',
            backgroundColor: '#000',
            color: '#FFF',
            textAlign: 'center',
            padding: '3rem',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>LIVE ON PUMP.FUN</h1>
            <img src={pump} alt="Pill Icon" style={{ width: '100px', marginBottom: '1.5rem' }} />
            <button
                style={{
                    backgroundColor: '#FF0000',
                    color: '#FFF',
                    padding: '1rem 2rem',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    marginBottom: '2rem'
                }}
                onClick={() => window.open("https://x.com/Screenx_solana", "_blank")}
            >
                BUY $SCRX
            </button>

            <div style={{
                backgroundColor: '#111',
                borderRadius: '10px',
                padding: '1rem',
                display: 'inline-block',
                textAlign: 'left'
            }}>
                <p style={{ color: '#FFD700', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contract Address:</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <span style={{ color: '#FFF', wordBreak: 'break-word' }}>{contractAddress}</span>
                    <button
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#FFD700',
                            fontSize: '1.2rem'
                        }}
                        onClick={handleCopy}
                    >
                        📋
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LiveOnPumpFun;
