import { useRef,useState, useEffect } from "react";
import React from 'react'
import {faCheck, faTimes, FaInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const USER_REGEX =/^[a-zA-Z][w]{3,23}$/;
const PWD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
  const userRef=useRef();
  const errRef=useRef();

  const [user, setUser]= useState('');
  const [validName, setValidName]= useState(false);
  const [userFocus, setUserFocus]= useState(false);

  const [pwd, setPwd]=useState('');
  const [validPwd, setValidPwd]=useState(false);
  const [pwdFocus,setPwdFocus]=useState(false);

  const [matchPwd, setMathcPwd]= useState('');
  const [validMatch, setValidMatch]=useState(false);
  const [matchFocus, setMatchFocus]=useState(false);
  return (
    <section>
      <p>
        
      </p>

    </section>
  )
}

export default Register