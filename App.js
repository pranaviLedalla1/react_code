// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc"},
//     "Hello World from Pranavi"
// );

// console.log(heading); //Prints object as output in console


const parent = React.createElement( "div", {id: "parent"}, [
    React.createElement("div", {id: "child1"},[
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ])
])
console.log(parent); //Creats nested tags insted of object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);