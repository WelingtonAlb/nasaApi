import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";
import { useDataAstronomyContext } from "../../../../context/DataAstronomyContext";
import * as S from "./styles";

export const Calendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { getData } = useDataAstronomyContext();

  const handleDateChange = (e: Date) => {
    setDate(e);
    getData(formatDate(e));
  };

  const formatDate = (date: Date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <S.Calendar>
        <DateCalendar
          className="styleCalendar"
          onChange={(e) => handleDateChange(e)}
          defaultValue={dayjs(new Date())}
        />

        <S.ChoicedDate>Data: {formatDate(date)}</S.ChoicedDate>
      </S.Calendar>
    </LocalizationProvider>
  );
};
