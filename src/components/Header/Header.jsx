import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.container)}>
        <div className={classnames(styles.header__block)}>
          <Link to="/">
            <h2 className={classnames(styles.header__logo)}>Магазин</h2>
          </Link>
          <Link to="/cart">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 22.25C8.82843 22.25 9.5 21.5784 9.5 20.75C9.5 19.9216 8.82843 19.25 8 19.25C7.17157 19.25 6.5 19.9216 6.5 20.75C6.5 21.5784 7.17157 22.25 8 22.25Z"
                fill="white"
              />
              <path
                d="M17.75 22.25C18.5784 22.25 19.25 21.5784 19.25 20.75C19.25 19.9216 18.5784 19.25 17.75 19.25C16.9216 19.25 16.25 19.9216 16.25 20.75C16.25 21.5784 16.9216 22.25 17.75 22.25Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.82467 2.75C3.15067 2.74976 3.46788 2.85572 3.72828 3.05187C3.9888 3.24811 4.17826 3.52391 4.26796 3.8375L5.02927 6.5H21.2844C21.5197 6.5 21.7414 6.61047 21.8831 6.79835C22.0249 6.98624 22.0702 7.22975 22.0055 7.45604L19.5314 16.1153C19.5313 16.1159 19.5311 16.1164 19.531 16.1169C19.3981 16.5888 19.114 17.0041 18.7224 17.2991C18.3309 17.594 17.8536 17.7523 17.3636 17.75H8.38639C7.89637 17.7523 7.41907 17.594 7.02762 17.2991C6.63606 17.0042 6.35205 16.589 6.21909 16.1172C6.21891 16.1165 6.21874 16.1159 6.21857 16.1153L2.82579 4.25L1.25 4.25C0.835786 4.25 0.5 3.91421 0.5 3.5C0.5 3.08579 0.835786 2.75 1.25 2.75H2.82467ZM5.45818 8L7.66172 15.7063L7.66268 15.7097C7.70656 15.8659 7.80051 16.0034 7.93011 16.101C8.05971 16.1986 8.21777 16.251 8.38002 16.25L8.38437 16.25H17.3656L17.37 16.25C17.5322 16.251 17.6903 16.1986 17.8199 16.101C17.9495 16.0034 18.0434 15.8659 18.0873 15.7097L18.0882 15.7065L20.2901 8H5.45818Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};
