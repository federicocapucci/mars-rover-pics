/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import PhotoCard from '../components/PhotoCard'

const mockData = {
  id: 1,
  img_src: 'http://www.example.com',
  earth_date: '2020/01/01',
  rover: { name: 'curiosity' },
  camera: { full_name: 'camera' }
}

test('renders content', () => {
  const component = render(<PhotoCard data={mockData} />)
  component.getByText(`Photo ID ${mockData.id} by ${mockData.rover.name}`)
  component.getByText(`Taken with ${mockData.camera.full_name}`)
  component.getByText('Full Screen')
})
