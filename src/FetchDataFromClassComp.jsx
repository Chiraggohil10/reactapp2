import React, { Component } from "react";

class FetchDataFromClassComp extends Component {
    constructor() {
        super();
        this.state = {
            data: [] // empty array to store data from fetch
        };
    }

    async componentDidMount() {  // lifecycle method call immediately call after component is mounted. mounted means component is rendered
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.setState({ data });
    }

    render() {
        return (
            <>
                {
                    this.state.data.map((x) => {
                        return (
                            <React.Fragment key={x.id}>
                                <p><b>Email:</b> {x.email}</p>
                                <p><b>Username:</b> {x.username}</p>
                                <p>Name: <strong><i>{x.name}</i></strong></p>
                                <hr />
                            </React.Fragment>
                        );
                    })
                }
            </>
        );
    }
}
export default FetchDataFromClassComp;