import React, { Component } from 'react'

export class Ref01 extends Component {
    constructor(){
        super();

        this.state = {
            name: ''
        }

        this.textRef = React.createRef();

    }
    handleFocus = () => {
        this.textRef.current.focus();
        this.textRef.current.value = 'Tech2';
        this.setState({
            name: 'Tech2'
        })
    }  

  render() {

    console.log('re-render');

    return (
      <div style={{margin: '5%'}}>
        <input type={'text'} ref={this.textRef} placeholder={'Username...'}/>
        <button type={'button'} onClick={this.handleFocus}>Focus</button>
      </div>
    )
  }
}

export default Ref01