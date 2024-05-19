// ! <<===============<< Transform JSX with Babel >>===============>>
const user = `cdpatra`;
const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", user); //& to use javascript value we have to use curly brackets

const root = ReactDOM.createRoot(document.querySelector(`#root`));
// root.render(h2);

const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container",
  style: {
    textAlign: `center`
  }
}, /*#__PURE__*/React.createElement("section", {
  className: "section"
}, /*#__PURE__*/React.createElement("p", null, "The library for web and native user interfaces"), /*#__PURE__*/React.createElement("img", {
  src: "https://placehold.co/500/teal/white",
  style: {
    width: `200px`,
    borderRadius: 10
  }
})), /*#__PURE__*/React.createElement("form", {
  style: {
    margin: `2rem`,
    border: `5px solid grey`,
    borderRadius: `10px`,
    padding: `1rem`
  }
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "Username "), /*#__PURE__*/React.createElement("input", {
  id: "username"
})));
console.log(container);
root.render(container);
// ! <| few javascript values that react does not show directly on web page|>
const values = /*#__PURE__*/React.createElement("h2", null, "JavaScript values that react does not show: ", undefined, ",", null, ",", true, ",", false, ".");
// root.render(values);
//# sourceMappingURL=script.js.map