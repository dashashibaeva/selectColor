import '../App.css';
import React from "react";
import save from "../assets/images/save.svg";
import close from "../assets/images/close.svg";
import last from "../assets/images/last.svg"

export function MoreSettings() {
    return (
        <div className="popupSettings">
            <div className="popupSettings__block">

                <div className="popupSettings__row flex flex_space-between ">

                    <div className="popupSettings__title popupSettings__title-window flex">

                        <div className="popupSettings__buttons">
                            <button id="lastButton">
                                <img src={last} className="popupSettings__button-last" alt="close"/>
                            </button>
                        </div>
                        Цвета меню
                    </div>

                    <div className="popupSettings__buttons flex">
                        <button id="saveButton">
                            <img src={save} className="popupSettings__button-save" alt="save"/>
                        </button>

                        <button id="closeButton">
                            <img src={close} className="popupSettings__button-close" alt="close"/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
MoreSettings();
