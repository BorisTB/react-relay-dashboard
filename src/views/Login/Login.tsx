import React, { useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Typography
} from '@material-ui/core'
import { styled } from 'theme'
import { Form } from 'components'

const ControlWrapper = styled(TextField)`
  transition: all .150s ease;

  input {
    background: ${({ theme }) => theme.palette.background.paper};
    transition: all .250s ease;

    &:disabled {
      background: ${({ theme }) => theme.palette.action.disabledBackground};
    }
  }

  &:focus-within {
    box-shadow: ${({ theme }) => theme.shadows[8]};
    transform: scale(1.1);
    z-index: 1;
  }
`

const InputField: React.FC<any> = (props) => (
  <ControlWrapper variant='outlined' margin='dense' fullWidth {...props} />
)

const Login: React.FC = () => {
  const [sending, setSending] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Typography variant='h5' component='h1' align='center'>
        <Box fontWeight='fontWeightBold' fontStyle='italic' color='grey.500'>
          Log in to access Dashboard
        </Box>
      </Typography>

      <Form onSubmit={handleSubmit}>
        <fieldset disabled={sending}>
          <InputField disabled={sending} placeholder='user@example.com' />
          <InputField disabled={sending} type='password' placeholder='*******' />
        </fieldset>

        <Button disabled={sending} fullWidth onClick={() => { setSending(sending => !sending) }}>Click</Button>
      </Form>
    </>
  )
}

export default Login
