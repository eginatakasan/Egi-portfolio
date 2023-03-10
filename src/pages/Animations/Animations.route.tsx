import React from 'react'
import { RouteObject } from 'react-router'
import AnimationsView from './Animations.page'

const AnimationsRoute: RouteObject = {
  path: '/animations',
  element: <AnimationsView />,
}

export default AnimationsRoute
