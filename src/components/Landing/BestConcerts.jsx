import React, { useState, useEffect } from 'react'
import { ConcertGrid, Card, Picture, ConcertTitle, ConcertDescription, ConcertInfo } from './BestConcerts.styles'

function BestConcerts() {
    const [concerts, setConcerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConcerts = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/concerts');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des concerts');
                }
                const data = await response.json();
                setConcerts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchConcerts();
    }, []);

    if (loading) return <div>Chargement des concerts...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
        <section>
            <h2>Concerts populaires en ce moment</h2>
            <ConcertGrid className="concerts-grid">
                {concerts.map((concert) => (
                    <Card className="concert-card" key={concert.id}>
                        <Picture src={concert.image_url} />
                        <ConcertTitle>{concert.artist}</ConcertTitle>
                        <ConcertDescription>{concert.description}</ConcertDescription>
                        <ConcertInfo>
                            <p>📅 {new Date(concert.date).toLocaleDateString()}</p>
                            <p>📍 {concert.location}</p>
                            <p>🎵 {concert.place}</p>
                        </ConcertInfo>
                    </Card>
                ))}
            </ConcertGrid>
        </section>
    )
}

export default BestConcerts