import React from 'react'
import { Button, TextField } from '@material-ui/core'

export interface LoginFormProps {
  onSubmit: (
    e: React.SyntheticEvent<HTMLFormElement, Event>
  ) => void | Promise<void>
  disabled?: boolean
  register?: any
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  disabled,
  register
}) => (
  <form onSubmit={onSubmit} data-testid='login-form'>
    <fieldset disabled={disabled}>
      <TextField
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
      <TextField
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
