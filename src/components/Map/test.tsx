import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    // Gera uma url que leva até o componente renderizado que está sendo testado.
    // screen.logTestingPlaygroundURL()

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Cabo',
      slug: 'cabo',
      location: {
        latitude: -8.286944,
        longitude: -35.035
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Recife',
      slug: 'recife',
      location: {
        latitude: -8.0642,
        longitude: -34.8782
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/cabo/i)).toBeInTheDocument()
    expect(screen.getByTitle(/recife/i)).toBeInTheDocument()
  })
})
