CREATE DATABASE livexperience;

\c livexperience;

CREATE TABLE concerts (
    id SERIAL PRIMARY KEY,
    artist VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    place VARCHAR(255) NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO concerts (artist, date, location, place, image_url, description) VALUES
    ('Mia Koden', '2025-03-12', 'Paris', 'Elysée Montmartre', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', 'Une soirée électro sous les étoiles'),
    ('Arlo Parks', '2025-04-20', 'Lyon', 'Le Transbordeur', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', 'Festival de printemps en plein cœur de la ville'),
    ('James Blake', '2025-05-03', 'Marseille', 'Dock des Suds', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80', 'Une nuit magique au bord de la Méditerranée'),
    ('Zola', '2025-06-15', 'Bordeaux', 'Rock School Barbey', 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80', 'Festival urbain dans la cité du vin'),
    ('Oumou Sangaré', '2025-06-22', 'Toulouse', 'Le Bikini', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80', 'World music sous le ciel toulousain'),
    ('Dinos', '2025-06-30', 'Paris', 'Zénith', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', 'Grand festival hip-hop en plein air'); 