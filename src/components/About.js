import React from "react";

const AboutScreenX = () => {
    const features = [
        {
            icon: "🔍",
            title: "Advanced Screening",
            description: "Discover hidden gems with precision filters and tailored search tools."
        },
        {
            icon: "📈",
            title: "Real-Time Insights",
            description: "Stay ahead with live updates on market trends and token performance."
        },
        {
            icon: "💎",
            title: "Exclusive Benefits",
            description: "Access premium features and rewards by holding $SCRX tokens."
        }
    ];

    return (
        <div style={{ backgroundColor: '#000', color: '#FFD700', padding: '3rem', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>What's Cerebrix About?</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#111',
                            border: '1px solid #FFD700',
                            borderRadius: '10px',
                            padding: '1.5rem',
                            textAlign: 'center',
                            width: '300px',
                            boxShadow: '0 4px 8px rgba(255, 215, 0, 0.2)'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{feature.title}</h2>
                        <p style={{ fontSize: '1rem', color: '#FFF' }}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutScreenX;
