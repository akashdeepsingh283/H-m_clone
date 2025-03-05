import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const styles = {
        aboutSection: {
            backgroundColor: '#fff',
            padding: '60px 20px',
            fontFamily: `'Poppins', sans-serif`,
            color: '#333',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px',
        },
        h1: {
            textAlign: 'center',
            fontSize: '42px',
            color: '#111',
            marginBottom: '20px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            background: 'linear-gradient(to right, #ff7f50, #ff416c)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
        },
        introText: {
            textAlign: 'center',
            fontSize: '20px',
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '40px',
        },
        aboutImage: {
            display: 'block',
            margin: '20px auto',
            maxWidth: '80%',
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
        },
        aboutImageHover: {
            transform: 'scale(1.05)',
        },
        h2: {
            fontSize: '32px',
            color: '#222',
            marginTop: '50px',
            textAlign: 'center',
        },
        ul: {
            listStyleType: 'none',
            paddingLeft: '0',
            marginTop: '30px',
            textAlign: 'center',
        },
        li: {
            fontSize: '18px',
            color: '#444',
            marginBottom: '15px',
            paddingLeft: '20px',
            position: 'relative',
            display: 'inline-block',
            width: 'calc(50% - 20px)',
            textAlign: 'left',
        },
        liBefore: {
            content: '"✔"',
            color: '#ff7f50',
            position: 'absolute',
            left: '0',
        },
        p: {
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.8',
            margin: '20px 0',
            textAlign: 'justify',
        },
        strong: {
            color: '#ff7f50',
        },
        button: {
            backgroundColor: '#ff416c',
            color: '#fff',
            padding: '12px 30px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'block',
            margin: '40px auto',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#ff7f50',
        },
    };

    return (
        <div style={styles.aboutSection}>
            <div style={styles.container}>
                <h1 style={styles.h1}>About H&M</h1>
                <p style={styles.introText}>
                    Welcome to <strong style={styles.strong}>H&M</strong>—where fashion meets forward-thinking style. We provide the latest fashion 
                    trends, blending chic designs with sustainability. Shop the most sought-after collections and join the movement of eco-conscious fashionistas!
                </p>
                <img
                    src={'https://image.hm.com/content/dam/global_campaigns/season_00/ladies/6030-diwali/6030-DIWALI-WOMEN-3x2-1-hm-festive-capsule-w.jpg?imwidth=1536'}
                    alt="H&M Fashion"
                    style={styles.aboutImage}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <p style={styles.p}>
                    Founded in [Year], H&M has been at the forefront of bringing modern, affordable fashion to every wardrobe. Our collections cater to 
                    everyone, from trendsetters to minimalists, ensuring a perfect fit for every occasion. More than just clothes, we offer a statement—a 
                    way to express who you are without saying a word.
                </p>
                <img
                    src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/ds50a/DS50A-3x2-1.jpg?imwidth=1536"
                    alt="Sustainable Fashion at H&M"
                    style={styles.aboutImage}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <p style={styles.p}>
                    Sustainability is at the heart of everything we do. From sourcing eco-friendly materials to reducing our carbon footprint, H&M is committed 
                    to ensuring that your style choices positively impact the world. Whether you're looking for casual everyday wear or something that 
                    stands out in the crowd, H&M has you covered.
                </p>
                <h2 style={styles.h2}>Why Choose Us?</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}>Exclusive Collections</li>
                    <li style={styles.li}>Worldwide Shipping</li>
                    <li style={styles.li}>100% Sustainable Materials</li>
                    <li style={styles.li}>24/7 Customer Support</li>
                    <li style={styles.li}>Hassle-free Returns</li>
                    <li style={styles.li}>Affordable Luxury</li>
                </ul>
                <Link to='/' style={{textDecoration:'none'}}>
                <button 
                    style={styles.button}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff7f50')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff416c')}
                >
                    Shop Now
                </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
