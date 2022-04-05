import { useDispatch, useSelector } from "react-redux";
import { BsCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import Swiper from "swiper/react";
import { SwiperSlide } from "swiper/react";
import './Main.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import 'swiper/css'