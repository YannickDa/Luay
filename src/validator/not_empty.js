import Abstract from "./abstract";

export const EMPTY = "is_empty";

export default class NotEmpty extends Abstract {
  isValid(value) {
    if (!value || typeof value === "undefined" || value === null || value === "") {
      this.error(EMPTY);
      return false;
    }

    return true;
  }
}
