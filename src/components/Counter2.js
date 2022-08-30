import React, { Component } from 'react'

export class Counter2 extends Component {

 constructor(props){
    super(props);

    this.state = {
        count: 0
    }
 }

 handeUp = () => {
    // this.setState({
    //     count: this.state.count+1
    // })

    this.setState(prevState => {

        //Xử lý object state hiện tại trước khi update

        return {
            count: prevState.count+1
        };
    });
 }

  render() {

    const {count} = this.state;

    return (
        <>
            <h1>Count: {this.state.count}</h1>
            <button type={'button'} onClick={this.handeUp}>+</button>
        </>
    )
  }
}

export default Counter2