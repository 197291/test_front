import React, {Component} from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import UploadPreview from 'material-ui-upload/UploadPreview';

export default class Modal extends Component{
  constructor(props){
    super(props)
  }
  loadImage = (e) => {
    let file = this.fileinput.files[0];
    console.log(file)
    axios.post('http://localhost:4000/image/save-origin', {data:file})
  }
  handleRequestClose = () => {
    this.props.handleRequestClose();
  }
  render(){
    return(
      <Dialog onRequestClose={this.handleRequestClose} open={this.props.open} className='modal_image'>
        <DialogTitle>Please, load image</DialogTitle>
       <TextField
        inputRef={ input => {this.fileinput = input}}
        type='file'
        onChange={this.loadImage}
        />
      </Dialog>
    )
  }
}
