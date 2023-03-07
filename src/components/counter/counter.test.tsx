import { screen, render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import Counter from './counter'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toBeInTheDocument()

    const btn = screen.getByRole('button', { name: /increment/i })
    expect(btn).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const counter = screen.getByRole('heading')
    expect(counter).toHaveTextContent('0')
  })

  test('renders a count of 1 after click', async () => {
    UserEvent.setup()
    render(<Counter />)
    const btn = screen.getByRole('button', { name: /increment/i })
    const counter = screen.getByRole('heading')

    await UserEvent.click(btn)
    expect(counter).toHaveTextContent('1')
  })
  test('renders a count of 2 after clicking twice', async () => {
    UserEvent.setup()
    render(<Counter />)
    const btn = screen.getByRole('button', { name: /increment/i })
    const counter = screen.getByRole('heading')

    await UserEvent.click(btn)
    await UserEvent.click(btn)
    expect(counter).toHaveTextContent('2')
  })

  test('renders a count of 10 after clicking set btn', async () => {
    UserEvent.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    await UserEvent.type(amountInput, '10')

    expect(amountInput).toHaveValue(10)

    const setBtn = screen.getByRole('button', { name: /set/i })

    await UserEvent.click(setBtn)

    const counterText = screen.getByRole('heading')
    expect(counterText).toHaveTextContent('10')
  })

  test('elements are focused in right order', async () => {
    UserEvent.setup()
    render(<Counter />)

    const amountInput = screen.getByRole('spinbutton')
    const setBtn = screen.getByRole('button', { name: /set/i })
    const increment = screen.getByRole('button', { name: /increment/i })

    await UserEvent.tab()
    expect(increment).toHaveFocus()
    await UserEvent.tab()
    expect(amountInput).toHaveFocus()
    await UserEvent.tab()
    expect(setBtn).toHaveFocus()
  })
})
