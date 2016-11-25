import EventEmitter from "events";

export default class Entity extends EventEmitter {
  constructor(props, defaultProps) {
    this.props = this._parseProps(props);

    Object.keys(defaultProps).forEach(key => {
      this.set(key, defaultProps[key], true);
    });
  }
  
  toJSON() {
    return this.props;
  }

  get(key) {
    return this.props[key];
  }

  set(key, value, silent = false) {
    if (this.props.hasOwnProperty(key)) {
      this.props[key] = value;

      if (!silent) {
        this.emit(`change:${key}`, value);
      }
    }

    return this;
  }
}
