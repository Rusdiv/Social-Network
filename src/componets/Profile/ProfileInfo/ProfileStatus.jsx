import React, { Component } from 'react'

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status:e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps , prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ?  <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/> : null}
        {!this.state.editMode ?  
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
        </div> 
        : null}
        
      </div>
    )
  }
}
