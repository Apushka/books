import React from "react";
import Preloader from "../common/Preloader";
import styles from "./Book.module.css";
import imgPlug from "../../assets/no_cover_available.jpg";
import { ItemType } from "../../types/types";

export type MapPropsType = {
  book: ItemType;
  isFetching: boolean;
};

const Book: React.FC<MapPropsType> = ({ book, isFetching }) => {
  if (isFetching) {
    return <Preloader />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.book_container}>
        <div className={styles.cover_container}>
          <img
            src={
              book.volumeInfo?.imageLinks?.thumbnail
                ? book.volumeInfo.imageLinks?.thumbnail
                : imgPlug
            }
            alt="cover is not available"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.categories}>
            {book.volumeInfo?.categories?.map((category) => category)}
          </div>
          <div className={styles.title}>{book.volumeInfo?.title}</div>
          <div className={styles.authors}>
            {book.volumeInfo?.authors?.map((author) => author)}
          </div>
          {book.volumeInfo?.description && (
            <div className={styles.description}>
              {book.volumeInfo.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
