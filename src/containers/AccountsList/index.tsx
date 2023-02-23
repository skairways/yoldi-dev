import React from "react";
import useSWR, { SWRResponse } from "swr";
import styled from "@emotion/styled";
import Link from "next/link";

import { Layer } from "@components/common/Layer";
import { SystemTitle } from "@/components/common/Title";
import AxiosAPI from "@/services/api";
import { AppPages } from "@/routes/constant";
import { UserAccount } from "./components/UserAccount";
import { UserModel } from "@/types/user";
import { SystemContainer } from "@/components/common/Container";
import { ApiRoutes } from "@/routes/api";
import { GridLoading } from "@/components/common/GridLoading";

export const AccountsListPage = () => {
  const { data: response, isLoading }: SWRResponse = useSWR(
    ApiRoutes.User,
    AxiosAPI.get
  );
  const users: UserModel[] = response?.data;

  return (
    <StyledLayer>
      <SystemContainer>
        <Wrapper>
          <SystemTitle type="reg">Список аккаунтов</SystemTitle>
          {isLoading && <GridLoading />}
          {users && (
            <List>
              {users.map((user: UserModel) => (
                <Link
                  key={user?.slug}
                  href={`${AppPages.Account}/${user.slug}`}
                >
                  <UserAccount {...user} />
                </Link>
              ))}
            </List>
          )}
        </Wrapper>
      </SystemContainer>
    </StyledLayer>
  );
};

const StyledLayer = styled(Layer)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const Wrapper = styled.div`
  padding: 50px 0;
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  margin-top: 30px;
`;
