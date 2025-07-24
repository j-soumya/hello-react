// const About = () => {
//     return(<div>
//         <h1>About Page</h1>
//     </div>)
// }

import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{

     constructor(props){
        super(props)
        console.log("Parent Constructor");
    } 

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }

    render(){
        console.log("Parent Render");
        return(<div>
             <h1>About Class Component</h1>
             <UserClass name={"First"} location={"First Class"} />
              <UserClass name={"Second"} location={"Second Class"} />
        </div>)
    }
}

export default About;
// Parent Constructor
//  Parent Render
// First Child Constructor
// First Child Render
// Second Child Constructor
// Second Child Render
// DOM UPDATED - IN SINGLE BATCH
// First Child Component Did Mount
// Second Child Component Did Mount
//  Parent Component Did Mount