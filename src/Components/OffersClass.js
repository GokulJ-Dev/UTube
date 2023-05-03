import React from "react";

class OfferClass extends React.Component {

    constructor(props) {
        super(props); // research about this

        console.log("Constructor of class component");

        this.state = {    // maintain state variable
            count: 0,
            name: "count: ",
        }
    }

    componentDidMount() {  //runs after initial rendering
        console.log("Component DidMount");
    }

    componentDidUpdate() {
        console.log("Comp update", this.state.count);
    }

    componentWillUnmount() {
        console.log("Component Unmountedddd");
    }

    render() {
        const { title } = this.props;
        console.log("Render method class component");
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "yellow" }}>
                <h2>Offers</h2>
                <p>
                    {title} It is a class component
                    {" " + this.state.name + this.state.count}
                </p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>
                    Increase count
                </button>
            </div >
        )
    }




}

export default OfferClass;