import React from "react";
import styles from "./styles.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import { GiEarthAmerica } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
export function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.mobileDiv}>
        <div className={styles.top}>
          <div className={styles.leftDiv}>
            <span>
              <HiLocationMarker />
              Brasil
            </span>

            <span>
              <GiEarthAmerica />
              português
            </span>
          </div>

          <div className={styles.logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.rightDiv}>
            <span>
              <IoLogIn />
              login
            </span>

            <span>
              <BsHandbag />
              sacola
            </span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.list}>
            <p>crystal lenses</p>

            <p>
              produtos
              <MdOutlineArrowDropDown />
            </p>

            <p>custom</p>

            <p>sobre</p>
          </div>
        </div>
      </div>
    </div>
  );
}
