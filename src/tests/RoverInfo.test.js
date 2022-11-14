/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RoverInfo from '../components/RoverInfo'

const mockData = {
  name: 'Curiosity',
  status: 'Active',
  launch_date: '2008/10/01',
  landing_date: '2009/01/01'
}

test('renders content', () => {
  const component = render(<RoverInfo data={mockData} />)
  component.getByText(mockData.name, { exact: false })
  component.getByText(mockData.status, { exact: false })
  component.getByText(mockData.launch_date, { exact: false })
  component.getByText(mockData.landing_date, { exact: false })
})
