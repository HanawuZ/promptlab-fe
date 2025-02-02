import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translate } from "@/languages/language";
import { Noto_Sans_Thai } from "next/font/google";
import Link from "next/link";
import styles from "./styles.module.css";
import { RiMenu4Fill } from "react-icons/ri";
import Flag from "react-flagkit";
const noto_sans_thai = Noto_Sans_Thai({ weight: "400", subsets: ["thai"] });
import { AiFillHome } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { AiFillVideoCamera } from "react-icons/ai";
import { MdSell, MdOutlineArticle } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaClosedCaptioning } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs"
import { BiLogOut } from "react-icons/bi"
import { AiFillPlusCircle } from "react-icons/ai"
import { useUserContext } from "@/contexts/UserContext";
export const NavbarMobileAfterLogin: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const userContext = useUserContext()
  const [windowWidth, setWindowWidth] = useState(0);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // เรียกใช้งานฟังก์ชัน handleResize เพื่อกำหนดค่าเริ่มต้น

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${noto_sans_thai.className}  navbar navbar-expand-lg navbar-dark bg-dark fixed-top`}
    >
      <div className={`container d-flex mt-auto`}>
        <div className={styles.navbar_header}>
          <h3>Prompt Lab</h3>
        </div>
        <ul className="navbar-nav mt-auto mb-auto ms-auto mb-lg-0">
        </ul>
        {windowWidth < 992 &&
          (
            <li className={`d-flex ${styles.language_dropdown} text-center ps-2 me-4 mt-auto mb-auto nav-item dropdown text-white pe-2`}>
              <a
                className={`nav-link dropdown-toggle`}
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {language === "th" && <Flag className={`${styles.flag_size}`} country="TH" />}
                {language === "eng" && <Flag className={`${styles.flag_size}`} country="US" />}
                {language === "id" && <Flag className={`${styles.flag_size}`} country="ID" />}
              </a>
              <ul className={`dropdown-menu dropdown-menu-dark`} aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className={`dropdown-item ${styles.language_list} `}
                    onClick={() => {
                      setLanguage("eng");
                    }}
                  >
                    <Flag country="US" className={`${styles.flag_size} pe-2`} /> English
                  </a>
                  <a
                    className={`dropdown-item ${styles.language_list} `}
                    onClick={() => {
                      setLanguage("th");
                    }}
                  >
                    <Flag country="TH" className={`${styles.flag_size} pe-2`} /> Thai
                  </a>
                  <a
                    className={`dropdown-item ${styles.language_list}`}
                    onClick={() => {
                      setLanguage("id");
                    }}
                  >
                    <Flag country="ID" className={`${styles.flag_size} pe-2`} /> Indonesia
                  </a>
                </li>
              </ul>
            </li>
          )
        }

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RiMenu4Fill className={styles.offcanvas_menu} />
        </button>
        <div
          className={`${styles.navcollapse} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          {windowWidth < 992 ? (
            <ul className="navbar-nav mt-auto mb-auto ms-auto mb-lg-0 ">
              <li className={`${styles.profile} nav-item text-center `}>
                <div className="pt-4">
                  {/* <Image className={`${styles.user_profile_pic}`} src={userContext?.user?.profilepic || ""} alt="profic-pic"/> */}
                  <img className={`${styles.user_profile_pic}`} src={userContext?.user?.profilepic} alt="profic-pic" />
                  <b>
                    <p className="fs-4 fw-bold pt-2"> {userContext?.user?.name} </p>
                  </b>
                </div>
              </li>
              <div className="pt-3 d-flex justify-content-between p-2 align-items-center">
                <div className="ms-4 d-flex align-items-center">
                  <BsFillCircleFill size={20} className={`${styles.coin}`} />
                  <div className="px-2 text-white user-select-none fs-5">-</div>
                </div>
                <div className={`${styles.add_coin_button} opacity-50 user-select-none me-4 fs-5`}>
                  เติมเหรียญ

                </div>
                {/* <Link href={"/payments"} className={`${styles.add_coin_button} user-select-none me-4 fs-5`}>
                  เติมเหรียญ
                </Link> */}
              </div>
              <li>
                <hr style={{ color: "white" }}></hr>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <button className={styles.navbar_help_button}>
                    <AiFillHome />
                    <Link
                      href={"/"}
                      className={`${styles.remove_underline} ms-2`}
                    >
                      {translate("home.title", language)}
                    </Link>
                  </button>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <button className={styles.navbar_help_button}>
                    <BiHelpCircle />
                    <Link
                      href={"/help"}
                      className={`${styles.remove_underline} ms-2`}
                    >
                      {translate("footer.help", language)}
                    </Link>
                  </button>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <button className={styles.navbar_help_button}>
                    <AiOutlineHistory />
                    <Link
                      href={"/history"}
                      className={`${styles.remove_underline} ms-2`}
                    >
                      {translate("history", language)}
                    </Link>
                  </button>
                </div>
              </li>
              <li>
                <hr style={{ color: "white" }}></hr>
              </li>
              <div>
                <li className="nav-item">
                  <div className="nav-link">
                    <button className={styles.navbar_help_button}>
                      <MdSell />
                      <Link
                        href={"/createSellingPost"}
                        className={`${styles.remove_underline} ms-2`}
                      >
                        {translate("createSellingPost.title", language)}
                      </Link>
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <button className={styles.navbar_help_button}>
                      <HiOutlineLightBulb />
                      <Link
                        href={"/createIdeaContent"}
                        className={`${styles.remove_underline} ms-2`}
                      >
                        {translate("createContents.title", language)}
                      </Link>
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <button className={styles.navbar_help_button}>
                      <MdOutlineArticle />
                      <Link
                        href={"/createArticle"}
                        className={`${styles.remove_underline} ms-2`}
                      >
                        {translate("createArticle.title", language)}
                      </Link>
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <button className={styles.navbar_help_button}>
                      <AiFillVideoCamera />
                      <Link
                        href={"/createShortVideoScripts"}
                        className={`${styles.remove_underline} ms-2`}
                      >
                        {translate("createScripts.title", language)}
                      </Link>
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <button className={styles.navbar_help_button}>
                      <FaClosedCaptioning />
                      <Link
                        href={"/createClickBaitWord"}
                        className={`${styles.remove_underline} ms-2`}
                      >
                        {translate("createClickBait.title", language)}
                      </Link>
                    </button>
                  </div>
                </li>
              </div>
              <li className="nav-item text-center mt-2 mb-2">
                <div className="nav-link ">
                  <button
                    
                    className={`${styles.navbar_logout_button}`}
                    onClick={() => {
                      userContext?.handleLogout();
                    }}
                  >
                    {translate("logout", language)}
                  </button>
                </div>
              </li>
            </ul>
          ) : (
            <ul className="d-flex align-items-center navbar-nav mt-auto mb-auto ms-auto mb-lg-0">
              <li className="nav-item">
                <div className="nav-link d-flex align-items-center">
                  <BsFillCircleFill size={20} className={`${styles.coin}`} />
                  <div className="px-2 user-select-none">-</div>

                  <div className="user-select-none opacity-50 ">
                    <AiFillPlusCircle className={`${styles.add_coin}`} size={34} />
                  </div>
                  {/* <Link href={"/payments"} className="user-select-none">
                    <AiFillPlusCircle className={`${styles.add_coin}`} size={34} />
                  </Link> */}
                </div>
              </li>

              <li
                className={`${styles.language_dropdown} text-center ms-2 mt-auto mb-auto nav-item dropdown`}
              >
                <a
                  className={`nav-link dropdown-toggle`}
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language === "th" && <Flag country="TH" className={`${styles.flag_size}`} />}
                  {language === "eng" && <Flag country="US" className={`${styles.flag_size}`} />}
                  {language === "id" && <Flag country="ID" className={`${styles.flag_size}`} />}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className={`dropdown-item ${styles.language_list}`}
                      onClick={() => {
                        setLanguage("eng");
                      }}
                    >
                      <Flag country="US" className={`${styles.flag_size} me-2`} /> English
                    </a>
                    <a
                      className={`dropdown-item ${styles.language_list}`}
                      onClick={() => {
                        setLanguage("th");
                      }}
                    >
                      <Flag country="TH" className={`${styles.flag_size} me-2`} /> Thai
                    </a>
                    <a
                      className={`dropdown-item ${styles.language_list}`}
                      onClick={() => {
                        setLanguage("id");
                      }}
                    >
                      <Flag country="ID" className={`${styles.flag_size} me-2`} /> Indonesia
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <button className={styles.navbar_help_button}>
                    <Link
                      href={"/help"}
                      className={`${styles.remove_underline}`}
                    >
                      {translate("footer.help", language)}
                    </Link>
                  </button>
                </div>
              </li>
              <li className={`nav-item dropdown`}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className={`${styles.user_profile_pic_desktop}`} src={userContext?.user?.profilepic} alt="profic-pic" />
                </a>
                <ul
                  className={`${styles.login_dropdown_menu} border dropdown-menu px-1`}
                  style={{ marginLeft: "-8rem", background: "#33393F" }}
                >
                  <li><div className="text-white text-center fs-5 fw-semibold text">{userContext?.user?.name}</div></li>
                  <li><hr className="dropdown-divider bg-white" /></li>
                  <li className="text-center py-1">
                    <a className={`${styles.login_dropdown_history_menu} `}>
                      <Link
                        href={"/"}
                        className={`${styles.remove_underline} d-flex align-items-center`}
                      >
                        <AiFillHome className="m-1 ms-2" size={22} />
                        <div className="ps-2 pt-1">{translate("home.title", language)}</div>
                      </Link>
                    </a>
                  </li>
                  <li className=" py-1 ">
                    <a className={`${styles.login_dropdown_history_menu} `}>
                      <Link
                        href={"/history"}
                        className={`${styles.remove_underline} d-flex align-items-center`}
                      >
                        <AiOutlineHistory className="m-1 ms-2" size={22} />
                        <div className="ps-2 pt-1"> {translate("history", language)}</div>
                      </Link>
                    </a>
                  </li>
                  <li className="py-1 ">
                    <Link
                      href="/"
                      
                      className={`${styles.login_dropdown_history_menu} d-flex align-items-center`}
                      onClick={() => {
                        userContext?.handleLogout();
                      }}
                    >
                      <BiLogOut className="m-1 ms-2" size={20} />
                      <div className="ps-2 pt-1"> {translate("logout", language)}</div>
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobileAfterLogin;
