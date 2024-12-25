import React from "react";

const WhitePaper = () => {
    return (
        <div style={{
            backgroundColor: '#f9f9f9',
            color: '#333',
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.8',
            maxWidth: '1000px',
            margin: '2rem auto',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Cerebrix Whitepaper</h1>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>Empowering smarter trading through cutting-edge technology and community-driven innovation.</p>
            </header>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>1. Introduction</h2>
                <p>Cerebrix is a revolutionary crypto screener app designed to simplify the trading experience for both beginners and advanced investors. With real-time data, customizable filters, and actionable insights, ScreenX bridges the gap between data and decision-making in the volatile cryptocurrency market.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>2. Key Features</h2>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                    <li><strong>Advanced Screening Tools:</strong> Find the most promising crypto assets with powerful search and filtering capabilities.</li>
                    <li><strong>Real-Time Data:</strong> Stay updated with live market trends and insights.</li>
                    <li><strong>Customizable Filters:</strong> Tailor your searches based on your trading strategy.</li>
                    <li><strong>Detailed Token Metrics:</strong> Access in-depth data for informed decision-making.</li>
                    <li><strong>Lightning-Fast Performance:</strong> Make decisions without delays.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>3. $SCRX Token Utility</h2>
                <p>The $CIX token is the backbone of the Cerebrix ecosystem. It enables users to:</p>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                    <li>Access premium app features.</li>
                    <li>Benefit from reduced transaction fees.</li>
                    <li>Earn rewards through staking and participation.</li>
                </ul>
                <p>By holding $SCRX, users actively contribute to the growth and sustainability of the platform.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>4. Roadmap</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <thead>
                    <tr style={{ backgroundColor: '#eee', textAlign: 'left' }}>
                        <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Phase</th>
                        <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Milestones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Phase 1</td>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Launch $SCRX token on Pump.fun and acquire initial users.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Phase 2</td>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Build community and introduce advanced trading tools.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Phase 3</td>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Expand app features and reach new markets.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Phase 4</td>
                        <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Launch premium services and achieve mass adoption.</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>5. Conclusion</h2>
                <p>Cerebrix is on a mission to revolutionize cryptocurrency trading by providing an innovative, user-friendly platform with a strong community at its core. Join us as we pave the way for smarter, more effective trading strategies powered by $SCRX.</p>
            </section>
        </div>
    );
};

export default WhitePaper;
