import '../App.css';
import React from "react";
import {root} from "../index";
import save from "../assets/images/save.svg";
import close from "../assets/images/close.svg";
import {Quart} from "./Quart";

let popupSettings = document.createElement('div');

export function PopUpSettings() {
    return (
        <div className="popupSettings">

            <div className="popupSettings__block">

                <div className="popupSettings__row flex flex_space-between ">

                    <div className="popupSettings__title popupSettings__title-window">
                        Стили оформления
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

                <div className="popupSettings__row popupSettings__description">
                    Здесь Вы можете настроить цвета сайта
                </div>

                <hr/>
            </div>


            <div className="popupSettings__block">

                <div className="popupSettings__row popupSettings__title popupSettings__title-setting" >
                    Основные цвета
                </div>

                <div className="popupSettings__row popupSettings__row-setting grid">
                    <Quart/>

                    <div className="popupSettings__column-setting">

                        <div className="popupSettings__row-setting__tittle">
                            Оформление меню
                        </div>

                        <div className="popupSettings__row-setting__description">
                            Настройте цвета меню
                        </div>
                    </div>

                    <div className="popupSettings__arrow"/>

                </div>

                <div className="popupSettings__row popupSettings__row-setting grid">

                    <Quart/>

                    <div className="popupSettings__column-setting">

                        <div className="popupSettings__row-setting__tittle">
                            Базовые элементы
                        </div>

                        <div className="popupSettings__row-setting__description">
                            Цвета крупных элементов интерфейса
                        </div>
                    </div>

                    <div className="popupSettings__arrow"/>

                </div>

                <hr/>

            </div>


            <div className="popupSettings__block">

                <div className="popupSettings__row popupSettings__title popupSettings__title-setting">
                    Дополнительные цвета
                </div>

                <div className="popupSettings__row popupSettings__row-setting grid">

                    <Quart/>

                    <div className="popupSettings__column-setting">

                        <div className="popupSettings__row-setting__tittle">
                            Уведомления
                        </div>

                        <div className="popupSettings__row-setting__description">
                            Цвета всплывающих подсказок
                        </div>
                    </div>

                    <div className="popupSettings__arrow"/>

                </div>

            </div>
        </div>
    );
}
PopUpSettings();
