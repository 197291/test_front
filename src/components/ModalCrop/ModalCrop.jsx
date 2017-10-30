import React, {Component} from 'react';

import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import {Cropper} from 'react-image-cropper'

import PropTypes from 'prop-types';

const style = {
  maxWidth:"auto",
  maxHeight:"auto"
}

export default class ModalCrop extends Component{

  handleRequestClose = () => {
    this.props.handleRequestClose();
  }

  cancelLoadImage = () => {
    this.context.changeModalStep(1);
    this.context.clearPreviewSrc();
  }

  cropImage = () => {
    let imgCrop = this.refs.cropper.crop();
    this.context.setPreview(imgCrop)
  
  }

  onImgLoad = (e) => {
    
  }

  render(){
    let {previewSrc} = this.context;

    return(
            <Grid container className='load_image_modal'>
                <Grid item xs={12}><DialogTitle>Please, crop image</DialogTitle></Grid>
                <div
                 ref={ wrap => {this.wrap_preview = wrap}}
                 id='wrap_preview'>
                  <Cropper
                    className='cropper'
                    ref='cropper'
                    src={previewSrc}
                    style={style}
                    onImgLoad={this.onImgLoad}
                  />
                </div>

                <Grid item xs={12}>

                <Button
                 color="primary"
                 className='crop_btn'
                 onClick={this.cropImage}
                >
                  Crop
                </Button>
                <Button color="primary" className='save_btn'>
                  Save
                </Button>
                <Button
                color="primary"
                className='cancel_btn'
                onClick={this.cancelLoadImage}
                >
                  Cancel
                </Button>
                </Grid>
            </Grid>
    )
  }
}

ModalCrop.contextTypes = {
  previewSrc:PropTypes.string.isRequired,
  changeModalStep:PropTypes.func.isRequired,
  setPreview: PropTypes.func.isRequired,
  clearPreviewSrc:PropTypes.func.isRequired,
};
