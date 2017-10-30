import React, {Component} from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';

export default class Modal extends Component{

  handleRequestClose = () => {
    this.props.handleRequestClose();
  }

  render(){
    return(
      <Dialog onRequestClose={this.handleRequestClose} open={this.props.open} className='modal_image'>
        { this.props.children }
      </Dialog>
    )
  }
}
