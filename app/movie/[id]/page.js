import React from 'react'
import { notFound } from 'next/navigation'

import MovieContainer from '@/containers/movie'
import Movies from "@/mocks/movies.json"
import { resolve } from 'styled-jsx/css'

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function MoviePage({ params, searchParams }) {
  await delay(2000)
  const movieDetail = Movies.results.find(
    movie => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error("This is an error on the client")
  }

  return (
    <MovieContainer movie={movieDetail} />
  )
}

export default MoviePage