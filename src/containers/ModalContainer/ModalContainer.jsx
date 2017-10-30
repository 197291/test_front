import React, {Component} from 'react';
import { connect } from 'react-redux';
import ModalCrop from '../../components/ModalCrop/ModalCrop';
import ModalLoadImage from '../../components/ModalLoadImage/ModalLoadImage';
import Modal from '../../components/Modal/Modal';

import {changeModalStep, clearPreviewSrc, setPreview} from '../../actions/mainPage';

import PropTypes from 'prop-types';

class ModalContainer extends Component{
  constructor(props){
    super(props)
  }

  getChildContext() {
    return {
      setPreview: this.props.setPreview,
      changeModalStep: this.props.changeModalStep,
      user_id:this.props.user.user.user_id,
      // sendImage: this.props.sendImage,
      clearPreviewSrc:this.props.clearPreviewSrc,
      previewSrc:this.props.mainPage.previewSrc
    };
  }

  renderModalCrop = () => {
    return(
        <ModalCrop />
    )
  }
  renderModalLoadImage = () => {
    return(
        <ModalLoadImage />
    )
  }
  render(){
    let { mainPage } = this.props;

    return(
        <Modal
         changeModalStep={this.props.changeModalStep}
         handleRequestClose={this.props.handleRequestClose}
         sendImage={this.props.sendImage}
         setPreview={this.props.setPreview}
         previewSrc={mainPage.previewSrc}
         open={this.props.open}
         >
            { mainPage.modalStep === 1 ? this.renderModalLoadImage() : this.renderModalCrop() }
        </Modal> 

    )
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
      mainPage:state.mainPage,
      user:state.userSettings
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeModalStep: (data) => {
         dispatch(changeModalStep(data))
       },
       clearPreviewSrc: (data) => {
         dispatch(clearPreviewSrc(data))
       },
      // sendImage: (data) => {
      //     dispatch(sendImage(data))
      // },
      setPreview: (data) => {
        dispatch(setPreview(data))
      } 
    }
  }

  ModalContainer.childContextTypes = {
    setPreview: PropTypes.func.isRequired,
    previewSrc:PropTypes.string.isRequired,
    changeModalStep:PropTypes.func.isRequired,
    user_id:PropTypes.string.isRequired,
    clearPreviewSrc:PropTypes.func.isRequired,
    // sendImage:PropTypes.func.isRequired
  }

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)