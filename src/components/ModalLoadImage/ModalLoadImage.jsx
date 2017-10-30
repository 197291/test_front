import React, {Component} from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CardMedia } from 'material-ui/Card';

import PropTypes from 'prop-types';
import {Cropper} from 'react-image-cropper'
// import Cropper from 'react-cropper';
// import './style.css';
const reader = new FileReader();

export default class ModalLoadImage extends Component{

  setSizes = (w, h) => {
    let w1 = 640,
        h1 = 480,
        index1 = 1.333333,
        index,
        arr = [];
    if(w > h){
      index = w / h;
      w = w > w1 ? w1 : w; // if width more than resolve we use w1
      index = w / index > h1 ? index1 : index; // if height more than resolve we use index1
      h = w / index;
      return arr = [w,h];
    } else if(h > w){
      index = h / w;
      h = h > h1 ? h1 : h; 
      index = h * index > w1 ? index1 : index; 
      w = h * index;
      return arr = [w,h];
    } else {
      return arr = [480,480]
    }
  }

  loadImage = (e) => {
    let file = this.fileinput.files[0],
        preview = this.wrap_preview, //wrap div for image
        _this = this;  

    reader.onload = function(e){

     _this.context.setPreview({
       src:e.target.result,
       user_id:_this.context.user_id
     });
      
    }

    reader.readAsDataURL(file);

   }

   onImgLoad = () => {
    let preview = this.wrap_preview,
        img = document.querySelector("#wrap_preview img"),
        width = this.context.naturalWidth,
        height = img.naturalHeight;
        // width = img.naturalWidth,
        // height = img.naturalHeight;
    preview.style.width = width;
    preview.style.height = height;
   }

  sendImage = () => {

    let file = this.fileinput.files[0],
        _this = this;
        
    reader.onload = function(e){
     _this.context.changeModalStep(2);
    }

    reader.readAsArrayBuffer(file);
  } 

  render(){
    let {previewSrc} = this.context;
   
    return(
            <Grid container className='load_image_modal'>
                <Grid item xs={12}><DialogTitle>Please, load image</DialogTitle></Grid>
                <div
                 ref={ wrap => {this.wrap_preview = wrap}}
                 id='wrap_preview'>
                <Cropper
                    className='cropper'
                    ref='cropper'
                    src={previewSrc}
               
                  />
                </div>
                <Grid item xs={12}>
                <TextField
                 inputRef={ input => {this.fileinput = input}}
                 type='file'
                 id='#avatar_input'
                 onChange={this.loadImage}
                 />
                <Button
                 color="primary"
                 onClick={this.sendImage}
                 className='next_btn'>
                 Next
                </Button>
                </Grid>
            </Grid>
    )
  }
}

ModalLoadImage.contextTypes = {
  setPreview: PropTypes.func.isRequired,
  previewSrc:PropTypes.string.isRequired,
  changeModalStep:PropTypes.func.isRequired,
  user_id:PropTypes.string.isRequired
};


