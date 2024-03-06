import * as React from "react";

export interface Props {
    children?: React.ReactNode
}

export interface State {
    count: number;
    name: string;
}

export default class Signin extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount(): void {
        console.log('in mount');
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevState.count !== this.state.count) {
            console.log('component was changed - count changed');
        }
    }

    updateCount() {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
        })
    }

    render() {
        return (<div>
            <div>{ this.state.count }</div>
            <button onClick={() => this.updateCount()}>count</button>
        </div>
           
        )
    }
}
