import React , {Component} from "react";

class State extends Component {                                                 // It is used to create a class component
    constructor(){
        super();                                                                // It is used to call the constructor of the parent class
        this.state = {                                                          // It is used to initialize the state
            course : "React",                                                   // It is used to initialize the course
            count : 0                                                           // It is used to initialize the count
        }
    }
    render(){                                                                   // It is used to render the component
        let handleSub = () =>{ 
            this.setState(()=>{                                                 // It is used to update the state
                return (                                                        // It is used to return the updated state
                    this.state = {                                              // it is used to return the updated state
                        course : "Web Development",                             // It is used to update the course
                        count : this.state.count + 1                            // It is used to update the count
                    }
                )
            })
            console.log(this.state.count);                                      // It is used to print the count
        }
        return(                                                                 // It is used to return the component
            <>
            <h1>The Class is On : {this.state.course}</h1>                        {/* // It is used to display the course */}
            <button onClick={handleSub}>Subject <b>{this.state.count}</b></button>{/* // It is used to call the function on button click */}
            </>
        )
    }
}

export default State; 