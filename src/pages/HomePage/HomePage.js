import React, { Fragment } from 'react'
import HomeCarousel from '~/components/HomeCarousel/HomeCarousel'
import HomeMovies from '~/components/HomeSliderMovies/HomeMovies'
import TabMovies from '~/components/TabMovies/TabMovies'

export default function HomePage() {
  return (
    <Fragment>
      <HomeCarousel />
      <HomeMovies />
      <TabMovies/>
    </Fragment>
  )
}
