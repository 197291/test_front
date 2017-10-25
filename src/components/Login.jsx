import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div id='login_form' className='wrap_login'>
            <form>
              <label htmlFor="username">
                Please, enter your name
                <input id='username' type='text' />
              </label>
              <label htmlFor="userpassword">
                Please, enter your password
                <input id='userpassword' type='password' />
              </label>
            </form>
      </div>
    )}

}


