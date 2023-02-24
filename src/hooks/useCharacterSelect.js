import { useCallback, useState } from "react";
import charMap from "data/charMap";

const getCharSelects = (charState) => {
  const { rarity } = charMap[charState.id];
  const isNCharacter = rarity === 0;
  return {
    star: {
      imgNames:
        "ui_star_" +
        (rarity === 3 ? "ssr" : rarity === 2 ? "sr" : rarity === 1 ? "r" : "n"),
      values: [...Array(6).keys()].slice(rarity),
      disabled: false,
    },
    bond: {
      imgNames: "ui_bond_" + charState.bond,
      values: [...Array(6).keys()].slice(1),
      disabled: false,
    },
    discipline: {
      imgNames: "ui_discipline",
      values: isNCharacter ? ["-"] : [...Array(4).keys()],
      disabled: isNCharacter,
    },
    potential: {
      imgNames: "ui_potentialPassive",
      values: [...Array(rarity < 2 ? 7 : 13).keys()].slice(1),
      disabled: false,
    },
    potentialSub: {
      imgNames: undefined,
      values: Array(6).fill(false),
      disabled: false,
    },
  };
};

const convertLegacyData = (charState) => {
  if (typeof charState.potentialSub !== "object") {
    const newPotentialSub = [...Array(6).keys()].map(
      (i) => i < charState.potentialSub
    );
    charState.potentialSub = newPotentialSub;
  }

  return charState;
};

const useCharacterSelect = (initCharState, onSelect) => {
  const [state, setState] = useState({
    charState: convertLegacyData(initCharState),
    selectItems: getCharSelects(initCharState),
  });

  const setSelect = useCallback(
    (key, value) => {
      const newCharState = { ...state.charState };

      let validatedValue = value;
      // validate state values
      if (key === "level") {
        validatedValue = isNaN(value)
          ? ""
          : value < 1
          ? 1
          : value > 60
          ? 60
          : value;
      } else if (key === "potentialSub") {
        validatedValue = Array.from(newCharState.potentialSub);
        // value as index
        validatedValue[value] = !validatedValue[value];
      }

      newCharState[key] = validatedValue;

      const newCharSelects = getCharSelects(newCharState);

      Object.entries(newCharSelects).forEach(([type, item]) => {
        if (type === "potentialSub") {
          return true;
        }

        const values = item.values;
        if (!values.includes(newCharState[type])) {
          newCharState[type] = values[0];
        }
      });

      setState({
        charState: newCharState,
        selectItems: newCharSelects,
      });

      onSelect(newCharState);
    },
    [state, onSelect]
  );

  const setCharState = useCallback(
    (charState) =>
      setState({
        charState: convertLegacyData(charState),
        selectItems: getCharSelects(charState),
      }),
    []
  );

  return { ...state, setSelect, setCharState };
};

export default useCharacterSelect;
