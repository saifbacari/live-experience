import React from 'react'
import { Link } from 'react-router-dom'
import { TextBannerImage, ContainerBanner, BannerContent, BannerSubtitle, SignInButton } from './Banner.styles'

function Banner() {
  return (
    <ContainerBanner>
      <BannerContent>
        <TextBannerImage>Vivez l'expérience live</TextBannerImage>
        <BannerSubtitle>
          Découvrez les meilleurs festivals et concerts en France.
          Une expérience musicale inoubliable vous attend.
        </BannerSubtitle>
        <Link to="/signin">
          <SignInButton>Rejoignez-nous</SignInButton>
        </Link>
      </BannerContent>
    </ContainerBanner>
  )
}

export default Banner    