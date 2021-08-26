import React from 'react'


class ClassCounter extends React.Component {

    constructor() {
        super();
        this.state={number: 0}
    }

    resetToZero(){
        this.setState({number: this.state.number = 0 })
    }

    addFive(){
        this.setState({number: this.state.number + 5})
    }

    render() {
        return (
            <div className="d">
                <div className="body">
                    <h1 className="display">{this.state.number}</h1>
                    <div>
                        <button className='button' onClick={() => this.resetToZero()}>Rest</button>
                        <button className='button' onClick={() => this.addFive()}>Add 5</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassCounter
