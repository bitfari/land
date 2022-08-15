import React, { Component } from "react";
import MyRouter from "routers/index";

export default class App extends Component {
  state = {
    userData: null,
  };
 

  render() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <MyRouter />
    </div>
  );
}
}
