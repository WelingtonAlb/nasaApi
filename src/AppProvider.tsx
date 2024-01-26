import { QueryClient, QueryClientProvider } from "react-query";
import { combineProviders } from "./combineProviders";
import { DataAstronomyProvider } from "./context/DataAstronomyContext";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const AppProviders = combineProviders([
  [QueryClientProvider, { client: queryClient }],
  [DataAstronomyProvider],
]);
