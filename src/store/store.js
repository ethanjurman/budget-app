import React, { Component } from 'react';

let storeInstance;
let updateComponents;

export class Store {
  constructor() {
    if (!storeInstance) {
      this.store = {};
      this.subscriberUpdateFunctions = [];
      storeInstance = this;
    }

    return storeInstance;
  }

  subscribeFunction(component) {
    this.subscriberUpdateFunctions.push(component);
  }

  getStoreValue(key, fallback) {
    return this.store[key] || fallback;
  }

  setStore(key, value) {
    this.store = Object.assign({}, this.store, { [key]: value });
    this.subscriberUpdateFunctions.map(func => func());
    return this.store;
  }
}

storeInstance = new Store();
//
// export function connect(Component) {
//   const Connected = (props) => {
//     return (
//       <Component
//         store={storeInstance}
//         {...props}
//       />
//     );
//   };
//
//   Connected.displayName = `Connected(${Component.name})`;
//
//   storeInstance.subscribe(Connected);
//
//   return Connected;
// }
//
// updateComponents = (Component) => {
//   return connect(Component);
// };

export function connect(WrappedComponent) {
  class StoreWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = { updateVersion: 0 };
      storeInstance.subscribeFunction(this.updateItem.bind(this));
    }
    updateItem() {
      this.setState({ updateVersion: this.state.updateVersion + 1 });
    }

    render() {
      return (
        <WrappedComponent
          store={storeInstance}
          {...this.props}
        />
      );
    }
  }

  return StoreWrapper;
}
