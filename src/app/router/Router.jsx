import { createBrowserRouter } from 'react-router'
import MainLayout from '../lauouts/mainLayout/MainLayout'
import HomePage from '../../pages/home/ui/HomePage'
import MoviesPage from '../../pages/movies/ui/MoviesPage'
import ActorsPage from '../../pages/actors/ui/ActorsPage'
import DirectorsPage from '../../pages/directors/ui/DirectorsPage'
import StudiosPage from '../../pages/studios/ui/StudiosPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/movies',
        element: <MoviesPage />
      },
      {
        path: '/actors',
        element: <ActorsPage />
      },
      {
        path: '/directors',
        element: <DirectorsPage />
      },
      {
        path: '/studios',
        element: <StudiosPage />
      }
    ]
  }
])
