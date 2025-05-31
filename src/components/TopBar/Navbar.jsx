import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { NavbarWrapper, Links, LinkGroup, LinkLogo, Link } from './Navbar.styles';

function Navbar() {
  const location = useLocation();

  return (
    <NavbarWrapper>
      <Links>
        <LinkLogo>
          <RouterLink to="/">
            LiveXperience
          </RouterLink>
        </LinkLogo>
        <LinkGroup>
          <Link as={RouterLink} to="/concerts" className={location.pathname === '/concerts' ? 'active' : ''}>
            Concerts
          </Link>
          <Link as={RouterLink} to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/signin" className={location.pathname === '/signin' ? 'active' : ''}>
            Sign in
          </Link>
        </LinkGroup>
      </Links>
    </NavbarWrapper>
  )
}

export default Navbar