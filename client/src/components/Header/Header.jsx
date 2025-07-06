import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo-brainflix.svg";
import Avatar from "../../assets/image/Mohan-muruge.jpg";
import UploadIcon from "../../assets/icon/svg/Icon-upload.svg";
import SearchIcon from "../../assets/icon/svg/Icon-search.svg";
import "./Header.scss"; // 🔁 Regular SCSS import (not modules)

export default function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="BrainFlix logo"
                        className="header__logo"
                    />
                </Link>
            </div>

            <div className="header__right">
                <form className="header__search-form">
                    <div className="header__search-wrapper">
                        <input
                            type="text"
                            className="header__search-input"
                            placeholder="Search"
                        />
                        <img
                            src={SearchIcon}
                            alt="Search icon"
                            className="header__search-icon"
                        />
                    </div>
                </form>

                <div className="header__upload-button-container">
                    <Link to="/upload" className="header__upload-button">
                        <img
                            src={UploadIcon}
                            alt="Upload"
                            className="header__upload-icon"
                        />
                        <span className="header__upload-text">Upload</span>
                    </Link>

                    <img
                        src={Avatar}
                        alt="User avatar"
                        className="header__avatar header__avatar--desktop"
                    />
                </div>
            </div>
        </header>
    );
}
