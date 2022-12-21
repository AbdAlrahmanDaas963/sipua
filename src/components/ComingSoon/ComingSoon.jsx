import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import FormInput from "../common/FormInput";
import Linkss from "./../common/Linkss";
import Fram from "../img/soon.png";
import "./soon.css";

function ComingSoon() {
  const [trueEmail, setTrueEmail] = useState(true);
  const [text, setText] = useState("");
  const [email, setEmail] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [err, setErr] = useState(null);
  // const [Db, setDb] = useState();

  const firebaseConfig = {
    apiKey: "AIzaSyAd69gUQxo2X73T4zIOhbLCEf4KpDZECQE",
    authDomain: "testemails-b7425.firebaseapp.com",
    projectId: "testemails-b7425",
    storageBucket: "testemails-b7425.appspot.com",
    messagingSenderId: "175454053843",
    appId: "1:175454053843:web:01660c8f0d47bc250ebb26",
    measurementId: "G-0LHJSX9B7N",
  };
  const app = initializeApp(firebaseConfig);
  const Db = getFirestore(app);

  const validate2 = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      // console.log("Email is Not Correct");
      setEmail({ email: text });
      setTrueEmail(false);
      return false;
    } else {
      setEmail({ email: text });
      setTrueEmail(true);
      // console.log("Email is Correct");
    }
  };

  const getter = async () => {
    try {
      const docRef = doc(Db, "emails", "emailsList");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      setTrueEmail(true);
      setErr(null);
    } catch (error) {
      console.log(error);
      setTrueEmail(false);
      setErr("شغل بروكسي الله يسفرك");
      setErr({ text: "شغل بروكسي الله يسفرك", type: "proxy" });
    }
  };
  useEffect(() => {
    getter();
  }, []);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      try {
        const docData = {
          email: trimmedMessage,
          time: serverTimestamp(),
        };

        await setDoc(doc(Db, "emails", docData.email), docData);
        setErr({ text: "Your Email is sent successfully", type: "secc" });
      } catch (error) {
        console.log(error);
      }
      setNewMessage("");
      console.log("done");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="coming-soon">
      <div className="soon-body">
        <div className="img">
          <img src={Fram} alt="" width="100%" height="100%" />
        </div>
        <div>Launching soon</div>
        <div>Thank you for waiting</div>
        <div>sipua.inbox@gmail.com</div>
      </div>
      <div className="soon-form">
        <div>Your Email</div>
        <FormInput
          type={"email"}
          validate={validate2}
          error={!trueEmail}
          value={newMessage}
          change={handleOnChange}
          err={err}
        />
        <button
          className="notify"
          disabled={!trueEmail}
          onClick={handleOnSubmit}
        >
          Notify me
        </button>
      </div>
      <div className="soon-footer">
        <div>Let’s keep in touch</div>
        <Linkss />
      </div>
    </div>
  );
}

export default ComingSoon;
