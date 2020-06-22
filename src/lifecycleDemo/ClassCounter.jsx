import React, {Component} from 'react';
import Button from '../components/common/Button'

const print = (name) => {
    return null;
    console.log('------------------')
    console.log((name))
    console.log('------------------')
}

// const FakeComponent = () => <h1>{props.notExist}</h1>

class ClassCounter extends Component {
    constructor(props) {
        print('constructor');
        super(props);
        this.state = {
            count: 0,
            hasError: false
        }
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1})
    }

    handleSame = () => {
        this.setState({count: this.state.count})
    }

    //Super Rare/////////////////

    static getDerivedStateFromProps(props, state) {
        print('Get Derived State')
        return null;
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        return null;
    }
    
    ////////////////////////////////////


    componentDidMount() {
        print('Did mount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.count !== this.state.count) {
            print('SHOULD Update');
            return true;
        }
        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        print('DID Update')
    }
    
    componentWillUnmount() {
        print('Will Unmount')
    }
    
    // Error Boundaries ///////////////////

    componentDidCatch(error, info) {
        print('Did Catch')
        console.log('ERR', error);
        console.log('---------------')
        console.log('INFO', info);
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    
    /////////////////////////////////////

    render() {
        print('render');

        if (this.state.hasError) {
            return <h2>Error Ocurred</h2>
        }

        return(
            <div>
                <Button 
                    label="Increment"
                    classes="btn btn-dark m-2"
                    onClick={this.handleIncrement}
                />
                <Button 
                    label="Decrement"
                    classes="btn btn-dark m-2"
                    onClick={this.handleDecrement}
                />
                <Button 
                    label="Same"
                    classes="btn btn-dark m-2"
                    onClick={this.handleSame}
                />
                <h2>{this.state.count}</h2>
                {/* <FakeComponent /> */}
            </div>
        )
    }
}

export default ClassCounter;