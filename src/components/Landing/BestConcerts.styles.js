import styled from "styled-components";

export const ConcertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const ConcertTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark-color);
  margin: 1.5rem 1.5rem 0.5rem;
  line-height: 1.2;
`;

export const ConcertDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: #666;
  margin: 0 1.5rem 1.5rem;
  line-height: 1.5;
  font-weight: 300;
`;

export const ConcertInfo = styled.div`
  padding: 1.5rem;
  background: var(--light-color);
  border-top: 1px solid #eee;
  margin-top: auto;
  
  p {
    font-family: 'Poppins', sans-serif;
    margin: 0.8rem 0;
    color: #555;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;