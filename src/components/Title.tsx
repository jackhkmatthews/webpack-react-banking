import React from "react";
import * as S from "./Title.styled";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <S.Title>{title}</S.Title>;
};
