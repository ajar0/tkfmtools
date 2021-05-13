import React, { useMemo } from "react";
import styled from "styled-components";

import charData from "data/character.json";

import Scrollable from "containers/Scrollable";
import { useLanguage } from "containers/LanguageProvider";

import Header from "components/Header";
import Table from "components/Table";

import { TableHead } from "./table-head";
import { TableBody } from "./table-body";

// same old combination function
function* combinations(elements, num) {
  for (let i = 0; i < elements.length; i++) {
    if (num === 1) yield [elements[i]];
    else {
      const remaining = combinations(
        elements.slice(i + 1, elements.length),
        num - 1
      );
      for (let next of remaining) yield [elements[i], ...next];
    }
  }
}

// check if every input tags are in target tags
const checkTags = (inputTags, targetTags) =>
  targetTags.every((v) => inputTags.includes(v));

// calculate priority score
const calculateScore = (characters) => {
  // 3 - SSR, 2 - SR, 1 - R, 0 - N
  const existedRarity = {
    0: false,
    1: false,
    2: false,
    3: false,
  };

  characters.forEach((c) => {
    existedRarity[c.rarity] = true;
  });

  // SSR (for Leader tag only)
  if (existedRarity[3]) return 3;

  if (existedRarity[0]) {
    if (existedRarity[2]) {
      // N, R, and SR
      if (existedRarity[1]) {
        return 0.75;
      }
      // N and SR
      return 0.5;
    }
    // N and R
    if (existedRarity[1]) return 0.25;
    // only N
    return 0;
  }

  if (existedRarity[1]) {
    // R and SR
    if (existedRarity[2]) return 1.5;

    // only R
    return 1;
  }

  // only SR
  return 2;
};

export const ResultTablePanel = (props) => {
  const { pageString } = useLanguage();
  const { filterTags, enlistHour, handleModalOpen, maxHeight, striped } = props;

  // get data from json only once (empty dependency)
  const availableCharacters = useMemo(() => charData
    .filter((char) => char.tags.available)
    .map((char) => {
      const { id, rarity, tags } = char;
      const { else: elseTags, ...otherTags } = tags;
      return {
        id,
        rarity,
        tags: [...Object.values(otherTags), ...elseTags],
      };
    }), [])

  const sortedData = useMemo(() => {
    const sortedTags = [...filterTags].sort();
    if (sortedTags.length === 0) {
      return [];
    }

    // type = Array<string, { tags: Array<number>, characters: { id: string, rarity: number, tags: Array<number> }, score: number }>
    const result = [];

    // max length of combination is 3
    const combinationLength = Math.min(sortedTags.length, 3);

    for (let i = combinationLength; i > 0; i--) {
      const tagCombination = Array.from(combinations(sortedTags, i));

      tagCombination.forEach((tags) => {
        // shallow copy is enough as we didn't change anything in object
        let survivors = [...availableCharacters];

        // rarity filtering
        // 20 -> Leader Tag
        if (!tags.includes(20)) {
          // 19 -> Elite Tag
          const rarityCheck = enlistHour < 4 && !tags.includes(19) ? 2 : 3;
          survivors = survivors.filter((char) => char.rarity < rarityCheck);
        }

        // tags filtering
        survivors = survivors.filter((d) => checkTags(d.tags, tags));

        // put data into result
        if (survivors.length > 0) {
          result.push({
            tags,
            characters: survivors,
            score: calculateScore(survivors),
          });
        }
      });
    }

    // return the sorted data by score
    return result.sort((a, b) => b.score - a.score);
  }, [filterTags, enlistHour]);

  return (
    <>
      <Header
        title={pageString.items.drop.filter.resultTitle}
        withHelp
        onClickHelp={handleModalOpen}
        border
      />
      <TableWrapper $maxHeight={maxHeight}>
        <StyledTable stickyHeader $striped={striped} size="small">
          <TableHead />
          <TableBody sortedData={sortedData} />
        </StyledTable>
      </TableWrapper>
    </>
  );
};

const TableWrapper = styled(Scrollable)`
  max-height: ${(props) => props.$maxHeight};
  overflow-x: hidden;
  overflow-y: auto;
`;

const StyledTable = styled(Table)`
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
  td {
    padding-left: 0.75rem;
  }
`;
