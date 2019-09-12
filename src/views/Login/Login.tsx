import React from 'react'
import { Box, Button, TextField, Typography, styled } from '@material-ui/core'
import useForm from 'react-hook-form'
import { LoginMutation, LoginInput } from 'mutations'

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

const Login: React.FC = () => {
  const [login, { loading }] = LoginMutation.useMutation()
  const { handleSubmit, register } = useForm<LoginInput>()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login({
        variables: {
          data
        }
      })
    } catch (err) {
      console.error(err)
    }
  })

  return (
    <>
      <Typography variant='h5' component='h1' align='center'>
        <Box fontWeight='fontWeightBold' fontStyle='italic' color='grey.500'>
          Log in to access Dashboard
        </Box>
      </Typography>

      <form onSubmit={onSubmit}>
        <fieldset disabled={loading}>
          <ControlWrapper
            variant='outlined'
            margin='dense'
            fullWidth
            required
            disabled={loading}
            name='email'
            type='email'
            placeholder='user@example.com'
            inputRef={register}
          />
          <ControlWrapper
            variant='outlined'
            margin='dense'
            fullWidth
            required
            disabled={loading}
            name='password'
            type='password'
            placeholder='••••••••'
            inputRef={register}
          />
        </fieldset>

        <Button type='submit' disabled={loading} fullWidth>
          Click
        </Button>
      </form>
    </>
  )
}

export default Login
