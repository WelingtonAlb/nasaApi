import axios, { AxiosError } from "axios";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useMutation } from "react-query";
import { NasaModel } from "../domain/models/nasa_model";

interface DataAstronomyContext {
  getData: (date: string) => void;
  data: NasaModel;
}

const dataAstronomyContext = createContext<DataAstronomyContext | undefined>(
  undefined
);

export function DataAstronomyProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<NasaModel>({} as NasaModel);

  const mutationGet = useMutation({
    mutationFn: async (date: string) => {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
      );
      return response.data as NasaModel;
    },
    onSuccess: (data) => {
      setData(data);
    },

    onError: (error: AxiosError) => {
      console.log(`${error.code} - ${error.message}`);
    },
  });

  const getData = async (date: string) => {
    await mutationGet.mutateAsync(date);
  };

  return (
    <dataAstronomyContext.Provider
      value={{
        getData: getData,
        data: data,
      }}
    >
      {children}
    </dataAstronomyContext.Provider>
  );
}

export function useDataAstronomyContext() {
  const context = useContext(dataAstronomyContext);

  if (!context) {
    throw new Error(
      "useDataAstronomyContext must be used within a DataAstronomyProvider"
    );
  }

  return context;
}
