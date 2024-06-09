import { browser } from "@wdio/globals";
//Якщо прибрати цей імпотр то не працює.

const URL = process.env.URL_PAGE || "";

export default class Page {
  open() {
    return browser.url(URL);
  }
}
