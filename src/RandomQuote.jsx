    import React, { useState } from 'react';

    function RandomQuote() {
    const [quote, setQuote] = useState('');

    const fetchQuote = () => {
        fetch('https://api.quotable.io/random') // API providing random quotes
        .then(response => response.json())
        .then(data => setQuote(data.content))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={fetchQuote}>Get Random Quote</button>
        <p style={{ marginTop: '20px' }}>{quote}</p>
        </div>
    );
    }

    export default RandomQuote;
