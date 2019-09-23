import React from 'react'
import { render } from 'utils/test-utils'
import { fireEvent } from '@testing-library/react'

import { LoginForm, LoginFormProps } from './LoginForm'

const LOGIN_FORM_TESTID = 'login-form'
const EMAIL_LABEL = /^Email/
const PASSWORD_LABEL = /^Password/
const SUBMIT_LABEL = 'Log In'

const renderLoginForm = (props: Partial<LoginFormProps> = {}) => {
  const defaultProps: LoginFormProps = {
    onSubmit: () => {}
  }

  return render(<LoginForm {...defaultProps} {...props} />)
}

describe('<LoginForm />', () => {
  test('displays form with empty fields for email and password', () => {
    const { getByTestId } = renderLoginForm()
    const loginForm = getByTestId(LOGIN_FORM_TESTID)

    expect(loginForm).toHaveFormValues({
      email: '',
      password: ''
    })
  })

  test('renders with enabled fields by default', () => {
    const { getByLabelText } = renderLoginForm()
    const emailInput = getByLabelText(EMAIL_LABEL)
    const passwordInput = getByLabelText(PASSWORD_LABEL)

    expect(emailInput).not.toBeDisabled()
    expect(passwordInput).not.toBeDisabled()
  })

  test('contains submit button', () => {
    const { getByText, getByTestId } = renderLoginForm()
    const loginForm = getByTestId(LOGIN_FORM_TESTID)
    const submitButton = getByText(SUBMIT_LABEL)

    expect(loginForm).toContainElement(submitButton)
  })

  test('renders with focused email field', () => {
    const { getByLabelText } = renderLoginForm()
    const emailInput = getByLabelText(EMAIL_LABEL)

    expect(emailInput).toHaveFocus()
  })

  test('renders with email and password fields required', () => {
    const { getByLabelText } = renderLoginForm()
    const emailInput = getByLabelText(EMAIL_LABEL)
    const passwordInput = getByLabelText(PASSWORD_LABEL)

    expect(emailInput).toBeRequired()
    expect(passwordInput).toBeRequired()
  })

  test('allows entering an email', async () => {
    const { findByTestId, getByLabelText } = renderLoginForm()
    const loginForm = await findByTestId(LOGIN_FORM_TESTID)
    const emailInput = getByLabelText(EMAIL_LABEL)

    fireEvent.change(emailInput, { target: { value: 'random test text' } })

    expect(loginForm).toHaveFormValues({
      email: 'random test text',
      password: ''
    })
  })

  test('allows entering a password', async () => {
    const { findByTestId, getByLabelText } = renderLoginForm()
    const loginForm = await findByTestId(LOGIN_FORM_TESTID)
    const passwordInput = getByLabelText(PASSWORD_LABEL)

    fireEvent.change(passwordInput, { target: { value: 'random test text' } })

    expect(loginForm).toHaveFormValues({
      email: '',
      password: 'random test text'
    })
  })

  test('disables fields and button', () => {
    const { getByLabelText, getByText } = renderLoginForm({ disabled: true })
    const emailInput = getByLabelText(EMAIL_LABEL)
    const passwordInput = getByLabelText(PASSWORD_LABEL)
    const submitButton = getByText(SUBMIT_LABEL)

    expect(emailInput).toBeDisabled()
    expect(passwordInput).toBeDisabled()
    expect(submitButton).toBeDisabled()
  })
})
