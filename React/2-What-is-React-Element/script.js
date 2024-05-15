// ! <<================<< React Element >>================>>
const h2 = React.createElement(`h2`, { className: `subheading` }, `Hello React`);

const root = ReactDOM.createRoot(document.querySelector(`#root`));
root.render(h2);

const container = React.createElement(`div`, { className: `container`, id: `container` }, [
   // >> whenever we pass array of children we have to pass a key attribute
   React.createElement(`section`, { className: `section`, key: 1 }, [
      React.createElement(`p`, { key: 1 }, `The library for web and native user interfaces`),

      // & in react to apply style to an element we have to pass object in the style;
      React.createElement(`img`, {
         key: 2,
         src: `https://placehold.co/500/teal/white`,
         style: { width: `200px`, borderRadius: 10 },
      }),
   ]),

   React.createElement(
      `form`,
      { key: 2, style: { margin: `2rem`, border: `5px solid grey`, borderRadius: 10, padding: `1rem` } },
      [
         React.createElement(`label`, { key: 1, htmlFor: `username` }, `Username `),
         React.createElement(`input`, { key: 2, id: `username` }),
      ]
   ),
]);

root.render(container);
