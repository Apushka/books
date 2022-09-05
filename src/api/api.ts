import { FormDataType, ItemType } from "./../types/types";
import axios from "axios";

export type GetCatalogResponseType = {
  kind: string;
  totalItems: number;
  items: Array<ItemType>;
};

export const booksAPI = {
  getCatalog(
    { category, search, sorting }: FormDataType,
    startIndex: number,
    maxResults: number
  ) {
    return axios
      .get<GetCatalogResponseType>(
        `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${
          category === "all" ? "" : category
        }&orderBy=${sorting}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyC1IPy_Wayo3fgI14j-i2FAqEkAbRq9jQU`,
        {
          // headers: {
          //   "API-KEY": "AIzaSyC1IPy_Wayo3fgI14j-i2FAqEkAbRq9jQU",
          // },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  getBook(volumeId: string) {
    return axios
      .get<ItemType>(
        `https://www.googleapis.com/books/v1/volumes/${volumeId}&key=AIzaSyC1IPy_Wayo3fgI14j-i2FAqEkAbRq9jQU`,
        {
          // headers: {
          //   "API-KEY": "AIzaSyC1IPy_Wayo3fgI14j-i2FAqEkAbRq9jQU",
          // },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
};
