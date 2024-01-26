import dayjs from "dayjs";
import { useEffect } from "react";
import { useDataAstronomyContext } from "../../context/DataAstronomyContext";
import * as S from "./styles";

export function Home() {
  const { data, getData } = useDataAstronomyContext();

  const formatDate = (date: Date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  useEffect(() => {
    //getData(formatDate(new Date()));
  }, []);

  return (
    <S.Home>
      <S.BoxImage>
        <S.Title>{data.title}</S.Title>

        <S.Box>
          <S.Image src={data?.url} />
          <S.Description>Description: {data.explanation}</S.Description>
        </S.Box>
        <S.CopyRight>{data.copyright} &#169;</S.CopyRight>
      </S.BoxImage>
    </S.Home>
  );
}
