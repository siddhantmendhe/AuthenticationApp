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

  const [errMsg, setErrMsg]= useState('');
  const [success, setSuccess]= useState(false);
  useEffect(()=>{
    userRef.current.focust();
  },[])
  useEffect(()=>{
    const result= USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  },[user])

  useEffect(()=>{
    const result=PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match=pwd===matchPwd;
    setValidMatch(match);

  }, [pwd,matchPwd]);

  useEffect(()=>{
    setErrMsg('');

  }, [user,pwd, matchPwd])

  return (
    <section>
      

    </section>
  )
}

export default Register