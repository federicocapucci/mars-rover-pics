/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import CamCard from '../components/CamCard'

const cam = 'test camera'

test('renders content', () => {
  const component = render(<CamCard cam={cam} />)

  // Ways to test this happy path:
  // 1st way
  component.getByText(cam)

  // 2nd way
  expect(component.container).toHaveTextContent(cam)

  // 3rd way
  const el = component.getByText(cam)
  expect(el).toBeDefined()
})

test('clicking button calls event handler ONCE', () => {
  const mockHandler = jest.fn()
  const component = render(<CamCard cam={cam} filterPics={mockHandler} />)
  const button = component.getByText(cam)
  fireEvent.click(button)

  // 1st way
  expect(mockHandler.mock.calls).toHaveLength(1)

  // second call
  fireEvent.click(button)

  // 2nd way
  expect(mockHandler).toHaveBeenCalledTimes(2)
})
