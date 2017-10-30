import React, {Component} from 'react';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';

import {Cropper} from 'react-image-cropper'
// import no_image from './no_image.png';
import no_image from './photo_2017-08-18_09-04-33.jpg';
import axios from 'axios'

export default class MainAvatar extends Component{
  constructor(props){
    super(props);
    this.state ={
      src:no_image
    }
  }
  crop = () => {
  const _this = this;
    let src = this.refs.cropper.crop();
    
    axios.post('http:///localhost:4000/image/crop',{
      data:{
        src,
        user_id:this.props.user_id
      }
    }

    ).then( res => {
      console.log(res)
      this.setState({
        src:res.data.src
      })
    })

  }

  loadImage = () => {
    this.props.openModal()
  }

  onChange = (val) => {
      const file = document.querySelector('#avatar_input').files[0];


  }

render(){
  return(
    <Grid item xs={4}>
      <aside>
        <div className='wrap_card'>
          <Cropper className='crop_image' onChange={this.onChange} src={this.props.src} ref="cropper"/>
        </div>
            <Button onClick={this.loadImage} raised color='default'>
              Load/Update an image
            </Button>
            <Button onClick={this.crop} raised color='default'>
             Crop
            </Button>
      </aside>
    </Grid>
  )
}
}
