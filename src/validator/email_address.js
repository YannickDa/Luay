import Abstract from "./abstract";

export const INVALID_EMAIL = "invalid_email";

export default class EmailAddress extends Abstract {
  isValid(value) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(value)) {
      this.error(INVALID_EMAIL);
      return false;
    }

    return true;
  }
}
