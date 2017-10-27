import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

export default class InputSearch extends Component{
constructor(props){
  super(props);
    this.state = {
      searchInput:''
    }
}
  onChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onClick = (e) => {
    this.props.onClick(this.state.searchInput)
  }

  render(){
    return <Grid item xs={12}>
                <TextField
                label="Go search friends!!"
                placeholder="Placeholder"
                className='search_input'
                name='searchInput'
                margin="normal"
                onChange={this.onChange}
                value={this.state.searchInput}
                />
                <Button onClick={this.onClick} raised color="primary" className='btn_search'>
                  Search
                </Button>
            </Grid>
  }
}
