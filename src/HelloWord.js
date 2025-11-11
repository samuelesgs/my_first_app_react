/*import { Component } from "react";

 class HelloWord  extends Component{
    render() {
        return (
            <div>
                Hello Word!!!
            </div>
        );
    }
}

export default HelloWord; */

const HelloWord = (props) => {
    return <h1>Hello {props.name}!!!</h1>;
}

export default HelloWord;