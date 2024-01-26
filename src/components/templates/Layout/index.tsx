import { PropsWithChildren } from "react";

import { Aside } from "../../ui/Aside";
import { Content } from "../../ui/Content";
import { MainHeader } from "../../ui/MainHeader";
import * as S from "./styles";

export function Layout({ children }: PropsWithChildren) {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </S.Grid>
  );
}
