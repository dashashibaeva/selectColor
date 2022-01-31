import './App.css';
import Modal from "./components/Modal";
import {useState} from "react";
import {PopUpSettings} from "./components/IndexPopUp";

const App = () => {
    const [modalActive, setModalActive] = useState()


    return (
        <div className="App screenCenter flex">
            <button className="settingButton" onClick={() => setModalActive(true)}>
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <PopUpSettings/>
            </Modal>
        </div>
    );
}


export default App;
