import React from "react";
import styled from "styled-components";
import {
  TableBody as MuiTableBody,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from "@mui/material";
import { useLanguage } from "containers/LanguageProvider";
import { ImgCard } from "components/Card";

export const TableBody = ({ sortedData }) => {
  const { charString } = useLanguage();

  return (
    <MuiTableBody>
      {sortedData.map((d, i) => (
        <MuiTableRow key={i}>
          <MuiTableCell padding="none">{i + 1}<div>{d.score.toFixed(2)}</div></MuiTableCell>
          <MuiTableCell>
            <TextWrapper>
              {d.tags.map((i) => charString.tags[i]).join(", ")}
            </TextWrapper>
          </MuiTableCell>
          <MuiTableCell>
            <CardRow>
              {d.characters.map((character) => (
                <Card rarity={character.rarity} key={character.id}>
                  <CharacterImage
                    rarity={character.rarity}
                    imgType="char_small"
                    imgId={character.id}
                    alt=""
                  />
                  {charString.name[character.id].split(" ").slice(-1)[0]}
                </Card>
              ))}
            </CardRow>
          </MuiTableCell>
        </MuiTableRow>
      ))}
    </MuiTableBody>
  );
};

const TextWrapper = styled.span`
  word-break: keep-all;
  white-space: break-spaces;
  @media screen and (max-width: 600px) {
    font-size: small;
  }
`;
const CardRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 1px 8px 1px 1px;
  margin: 4px;
  background-color: ${theme.colors.dropdownHover + "40"};
  box-shadow: 2px 2px 2px 1px
    ${theme.colors.dropdownHover + "80"};
  border-radius: 3rem;
  color: ${theme.colors.onSurface};
  @media screen and (max-width: 600px) {
    font-size: small;
  }`}
`;
const CharacterImage = styled(ImgCard)`
  margin-right: 2px;
  > div:first-child {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    border: 3px solid
      ${({ theme, rarity }) =>
        theme.colors.rarity[rarity]};
  }
  img {
    border: none;
  }
`;
