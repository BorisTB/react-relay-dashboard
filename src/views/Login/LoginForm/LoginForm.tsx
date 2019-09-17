import React from 'react'
import { Button, TextField, styled } from '@material-ui/core'

const ControlWrapper = styled(TextField)(({ theme }) => ({
  transition: 'all 150ms ease',
  '& input': {
    background: theme.palette.background.paper,
    transition: 'all 250ms ease',
    '&:disabled': {
      background: theme.palette.action.disabledBackground
    }
  },
  '&:focus-within': {
    boxShadow: theme.shadows[8],
    transform: 'scale(1.1)',
    zIndex: 1
  }
}))

export interface LoginFormProps {
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement, Event>) => void | Promise<void>
  disabled?: boolean
  register?: any
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, disabled, register }) => (
  <form onSubmit={onSubmit} data-testid='login-form'>
    <fieldset disabled={disabled}>
      <ControlWrapper
        variant='outlined'
        margin='dense'
        fullWidth
        required
        disabled={disabled}
        label='Email'
        id='email'
        name='email'
        type='email'
        placeholder='user@example.com'
        inputRef={register}
        autoFocus
      />
      <ControlWrapper
        variant='outlined'
        margin='dense'
        fullWidth
        required
        disabled={disabled}
        label='Password'
        id='password'
        name='password'
        type='password'
        placeholder='••••••••'
        inputRef={register}
      />
    </fieldset>

    <Button type='submit' disabled={disabled} fullWidth>
      Log In
    </Button>
  </form>
)

export { LoginForm }
