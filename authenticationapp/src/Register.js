import { useRef,useState, useEffect } from "react";
import React from 'react'
import {faCheck, faTimes, FaInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const USER_REGEX =/^[a-zA-Z][w]{3,23}$/;
const PWD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register