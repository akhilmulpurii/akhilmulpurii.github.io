import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export const RippleButton = styled(motion.button)`
  background-position: center;
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #846add;
  outline: none;
  transition: background 0.8s;
  &:hover {
    background: #947aed radial-gradient(circle, transparent 1%, #947aed 1%)
      center/15000%;
  }
  &:active {
    background-color: #745acd;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const Button = styled.button`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #e5008d;
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e5008d;
    color: #fff;
  }
  &:active {
    transform: scale(0.95);
  }
  & span {
    margin-left: 10px;
    margin-bottom: 2px;
    font-weight: 900;
  }
`;

export const Spacer = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #e5008d;
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e5008d;
    color: #fff;
  }
  &:active {
    transform: scale(0.95);
  }
  & span {
    margin-left: 10px;
    margin-bottom: 2px;
    font-weight: 900;
  }
`;
