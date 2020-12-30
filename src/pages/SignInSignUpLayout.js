import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const SignInSignUpLayout = () => (
  <div className='container-fluid'>
    <div className="row">
      <SignIn />
      <SignUp />
    </div>
  </div>
)

export default SignInSignUpLayout