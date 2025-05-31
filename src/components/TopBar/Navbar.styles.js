// components/Topbar/Navbar.styles.js
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background: linear-gradient(to right, #2d3436, #636e72);
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Link = styled.li`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &.active {
    background: var(--primary-color);
    color: white;
  }
`;

export const LinkLogo = styled.li`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;