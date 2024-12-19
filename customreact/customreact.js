function custRender(reactElem, container) {
  const domElem = document.createElement(reactElem.type);
  domElem.innerHTML = reactElem.child;

  for (const pr in reactElem.props) {
    if (pr == "child") continue;
    domElem.setAttribute(pr, reactElem.props[pr]);
  }
  container.appendChild(domElem);

  //   const domElem = document.createElement(reactElem.type);
  //   domElem.innerHTML = reactElem.child;
  //   domElem.setAttribute("href", reactElem.props.href);
  //   domElem.setAttribute("target", reactElem.props.target);
  //   container.appendChild(domElem);
}

const reactElem = {
  type: "a",
  props: {
    href: "https;//google.com",
    target: "_blank",
  },
  child: "click me to visit google",
};

const mainContainer = document.getElementById("root");

custRender(reactElem, mainContainer);
