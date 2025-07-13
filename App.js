// {} is to give attributes to h1 tag
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
console.log(heading);
// props are children and attributes React.createElement is just an javascript object
// render method convert this object into h1 tag and put it up in code
const root = ReactDOM.createRoot(document.getElementById('root'));



{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
    ReactElement (object) => HTML(Browser understands)
</div> */}


// const parent = React.createElement("div",{id:'parent'},
//    React.createElement("div", { id: "child" }, 
//     React.createElement("h1", {}, "I am h1 tag")
//    ) 
// )

// const parent = React.createElement("div",{id:'parent'},
//    React.createElement("div", { id: "child" }, 
//     [React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")]
//    ) 
// )

const parent = React.createElement("div",{id:'parent'},
  [ React.createElement("div", { id: "child" }, 
    [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]
   ),
    React.createElement("div", { id: "child2" }, 
    [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]
   ) 
]
)
root.render(parent);


