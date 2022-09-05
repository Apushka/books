import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FormDataType } from "../../types/types";
import styles from "./Search.module.css";

type PropsType = {};
type DispatchPropsType = {
  getCatalog: (formData: FormDataType, startIndex: number) => void;
};

const Search: React.FC<PropsType & DispatchPropsType> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();
  let history = useHistory();
  const searchBooks = (formData: FormDataType) => {
    props.getCatalog(formData, 0);
    history.push("/catalog");
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(searchBooks)}>
          <h2>Search for books</h2>
          <div
            className={`${styles.search_field} ${
              errors.search ? styles.required : ""
            }`}
          >
            <input
              {...register("search", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
              type="text"
              placeholder="start searching..."
            />
            <label htmlFor="submit"></label>
            <button type="submit" id="submit" />
            {errors.search && (
              <div className={styles.error}>{errors.search.message}</div>
            )}
          </div>
          <div className={styles.settings_wrapper}>
            <span className={styles.category}>
              <label htmlFor="category">Categories</label>
              <select {...register("category")} defaultValue="all">
                <option>all</option>
                <option>art</option>
                <option>biography</option>
                <option>computers</option>
                <option>history</option>
                <option>medical</option>
                <option>poetry</option>
              </select>
            </span>

            <span className={styles.sorting}>
              <label htmlFor="sorting">Sorting by</label>
              <select {...register("sorting")} defaultValue="relevance">
                <option>relevance</option>
                <option>newest</option>
              </select>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
