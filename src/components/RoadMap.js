import React from "react";

const RoadMap = () => {
    const phases = [
        {
            phase: "Phase 1",
            description: [
                "Initial game design",
                "Fair Launch of $SCRX token on Pump.fun"
            ],
            icon: "🎮",
            highlights: "Be part of the initial design to shape the future!"
        },
        {
            phase: "Phase 2",
            description: [
                "Build community",
                "Reach $10M market cap"
            ],
            icon: "🌐",
            highlights: "Join a vibrant and growing community of pioneers."
        },
        {
            phase: "Phase 3",
            description: [
                "Add more games",
                "Reach $50M market cap"
            ],
            icon: "🎯",
            highlights: "Unlock new gaming experiences and bigger opportunities."
        },
        {
            phase: "Phase 4",
            description: [
                "Launch advanced features",
                "Reach $100M market cap"
            ],
            icon: "🚀",
            highlights: "Experience cutting-edge features driving exponential growth."
        }]

    return (
        <div style={{ color: '#fff', padding: '2rem', fontFamily: 'Arial, sans-serif', width: "-webkit-fill-available"}}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>RoadMap</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {phases.map((phase, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#2c2c2c',
                            borderRadius: '10px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.8rem' }}>{phase.icon}</span> {phase.phase}
                        </h3>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
                            {phase.description.map((item, idx) => (
                                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadMap;
