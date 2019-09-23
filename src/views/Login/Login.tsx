import React from 'react'
import { Box, Card, CardContent, Typography, styled } from '@material-ui/core'
import useForm from 'react-hook-form'
import { LoginMutation, LoginInput } from 'mutations'
import { LoginForm } from './LoginForm'

const StyledCard = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create(['all'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  '&': {
    transform: ({ elevation }) => (elevation === 0 ? 'scale(1)' : 'scale(1.1)')
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
    <StyledCard elevation={loading ? 0 : 6}>
      <CardContent>
        <Typography variant='h5' component='h1' align='center'>
          <Box fontWeight='fontWeightBold' fontStyle='italic' color='grey.500'>
            Log in to access Dashboard
          </Box>
        </Typography>

        <LoginForm onSubmit={onSubmit} disabled={loading} register={register} />
      </CardContent>
    </StyledCard>
  )
}

export { Login }
