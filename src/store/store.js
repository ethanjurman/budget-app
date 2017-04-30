import React, { Component } from 'react';

let storeInstance;

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

  setStoreValue(key, value) {
    this.store = Object.assign({}, this.store, { [key]: value });
    this.subscriberUpdateFunctions.map(func => func());
    return this.store;
  }
}

storeInstance = new Store();

export function connect(WrappedComponent) {
  class StoreWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      storeInstance.subscribeFunction(this.updateItem.bind(this));
    }
    updateItem() {
      this.setState({});
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
