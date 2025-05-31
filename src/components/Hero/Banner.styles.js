import styled from "styled-components";

export const ContainerBanner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 900px;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const TextBannerImage = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ff6b6b, #ffd93d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const BannerSubtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.4;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const SignInButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    background: linear-gradient(45deg, #ff5252, #ff6b6b);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;