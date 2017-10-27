import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import Modal from '../../components/Modal/Modal';

import InputSearch from '../../components/InputSearch/InputSearch';
import MainAvatar from '../../components/MainAvatar/MainAvatar';

class MainPageContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
  }
  searchFriends = (e) => {
    console.log('search friends', e)
  }
  openModal= () =>{
    this.setState({
      open:!this.state.open
    })
  }
  handleRequestClose = () => {
    this.setState({
      open:!this.state.open
    })
  }
  render(){
    return(
      <div id='main_page'>
        <Grid container className='wrap_main_page'>
          <MainAvatar

           user_id={this.props.user.user.user_id}
           openModal={this.openModal} />
          <Grid item xs={8}>
            <InputSearch onClick={this.searchFriends}/>
          </Grid>
        </Grid>
        <Modal handleRequestClose={this.handleRequestClose} open={this.state.open}/>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    init:state.init,
    user:state.userSettings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // setUser: (data) => {
    //   dispatch(setUser(data))
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)
