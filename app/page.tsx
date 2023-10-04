"use client";

import HomeBackground from "@/components/Background/Home/Home";
import { useAppSelector } from "@/redux/hooks";
import { decrement, increment, incrementByAmount } from "@/redux/slice/counterSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  return <HomeBackground />;
}
