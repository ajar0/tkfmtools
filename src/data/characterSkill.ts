import { CharacterAttribute } from "../types/characters";
import {
  Skill,
  SkillActionType,
  SkillCondition,
  SkillEffectBasis,
  SkillEffectType,
  SkillOn,
  SkillSet,
  SkillTarget,
  UltimateSkill,
  potentialPassive,
} from "../types/skills";

export const data: Readonly<{
  [id: string]: Omit<SkillSet, "ultimate" | "passive" | "extra"> & {
    ultimate: {
      common: UltimateSkill[];
      bond: {
        [overrideIndex: string]: {
          [overrideProperty: string]:
            | number
            | { [overrideProperty: string]: number };
        };
      }[];
    };
    starPassive: (Skill & { star: number })[];
    potentialPassive: (Skill & { potential: number })[];
  };
}> = {
  "101": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 1.25,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.TEAM_EXCEPT_SELF,
        type: SkillEffectType.DEALT_DAMAGE,
        value: -0.1,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 1,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SELF,
          duration: 3,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.TARGET_ATK,
          value: 0.25,
          CD: 4,
          on: SkillOn.BEFORE_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillActionType.ULTIMATE,
          value: 3.3,
          CD: 4,
          on: SkillOn.ON_ACTION,
        },
      ],
      bond: [
        { 0: { value: 0.25, CD: 4 }, 1: { value: 3.3, CD: 4 } },
        { 0: { value: 0.25, CD: 4 }, 1: { value: 3.76, CD: 4 } },
        { 0: { value: 0.25, CD: 4 }, 1: { value: 4.22, CD: 4 } },
        { 0: { value: 0.35, CD: 4 }, 1: { value: 4.22, CD: 4 } },
        { 0: { value: 0.35, CD: 3 }, 1: { value: 4.22, CD: 3 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.NORMAL_ATTACK_DAMAGE,
        value: 0.25,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 3,
        condition: SkillCondition.ATTACKED,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.15,
        on: SkillOn.AFTER_ACTION,
        maxStack: 2,
      },
      {
        star: 5,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.SELF,
        type: SkillActionType.CHANGE_CURRENT_CD,
        value: -1,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.CHANGE_CURRENT_CD,
        value: 2,
        on: SkillOn.AFTER_ACTION,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.NORMAL_ATTACK_DAMAGE),
      potentialPassive(12, SkillEffectType.IMMUNE_SILENCE),
    ],
  },
  "102": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillActionType.TAUNT,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.GUARD_EFFECT,
        value: 0.15,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: -0.25,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SELF,
        type: SkillActionType.GUARD,
        on: SkillOn.ON_ACTION,
      },
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 0.5,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SELF,
          duration: 2,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.TARGET_ATK,
          value: 0.3,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SELF,
          duration: 2,
          type: SkillActionType.TAUNT,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SELF,
          type: SkillActionType.GUARD,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
        },
      ],
      bond: [
        {
          0: { value: 0.3, duration: 2, CD: 4 },
          1: { duration: 2, CD: 4 },
          2: { CD: 4 },
        },
        {
          0: { value: 0.4, duration: 2, CD: 4 },
          1: { duration: 2, CD: 4 },
          2: { CD: 4 },
        },
        {
          0: { value: 0.5, duration: 2, CD: 4 },
          1: { duration: 2, CD: 4 },
          2: { CD: 4 },
        },
        {
          0: { value: 0.5, duration: 3, CD: 4 },
          1: { duration: 3, CD: 4 },
          2: { CD: 4 },
        },
        {
          0: { value: 0.5, duration: 3, CD: 3 },
          1: { duration: 3, CD: 3 },
          2: { CD: 3 },
        },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.DAMAGED,
        value: -0.15,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 3,
        condition: SkillCondition.ATTACKED,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.COUNTER_STRIKE,
        value: 0.75,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillActionType.HEAL,
        basis: SkillEffectBasis.TARGET_MAX_HP,
        value: 0.1,
        on: SkillOn.TURN_END,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.GUARD_EFFECT),
      potentialPassive(12, SkillEffectType.IMMUNE_SLEEP),
    ],
  },
  "103": {
    leader: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.ALL_ENEMIES,
        type: SkillActionType.FOLLOW_UP_ATTACK,
        value: 0.75,
        on: SkillOn.AFTER_ACTION,
        repeat: 1,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 1,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillActionType.ULTIMATE,
          value: 3.88,
          CD: 4,
          on: SkillOn.ON_ACTION,
        },
      ],
      bond: [
        { 0: { value: 3.88, CD: 4 } },
        { 0: { value: 4.45, CD: 4 } },
        { 0: { value: 5.03, CD: 4 } },
        { 0: { value: 5.6, CD: 4 } },
        { 0: { value: 5.6, CD: 3 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.BATTLE_BEGIN,
        otherCondition: SkillCondition.HP_GREATER_THAN,
        otherConditionValue: 0.75,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.15,
        on: SkillOn.BEFORE_ACTION,
      },
      {
        star: 3,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.NORMAL_ATTACK_DAMAGE,
        value: 0.2,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 3,
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SELF,
        type: SkillActionType.HEAL,
        basis: SkillEffectBasis.DAMAGE,
        value: 0.33,
        on: SkillOn.ON_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.25,
        duration: 3,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.NORMAL_ATTACK_DAMAGE),
      potentialPassive(12, SkillEffectType.IMMUNE_PARALYSIS),
    ],
  },
  "104": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.TEAM,
        type: SkillEffectType.NORMAL_ATTACK_DAMAGE,
        value: 0.5,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 1,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillActionType.ULTIMATE,
          value: 4.75,
          CD: 6,
          on: SkillOn.ON_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.TARGET_ATK,
          value: 0.15,
          CD: 6,
          on: SkillOn.AFTER_ACTION,
          duration: 3,
        },
      ],
      bond: [
        { 0: { value: 4.75 }, 1: { value: 0.15 } },
        { 0: { value: 5.5 }, 1: { value: 0.15 } },
        { 0: { value: 6.25 }, 1: { value: 0.15 } },
        { 0: { value: 6.25 }, 1: { value: 0.2 } },
        { 0: { value: 6.25 }, 1: { value: 0.25 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.TEAM,
        type: SkillEffectType.NORMAL_ATTACK_DAMAGE,
        value: 0.075,
        on: SkillOn.AFTER_ACTION,
        duration: 1,
      },
      {
        star: 3,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillEffectType.DAMAGED,
        value: 0.1,
        on: SkillOn.AFTER_ACTION,
        duration: 3,
      },
      {
        star: 3,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.CANCEL_GUARD,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.TURN_BASED,
        conditionValue: 3,
        target: SkillTarget.TEAM,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.2,
        duration: 1,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.NORMAL_ATTACK_DAMAGE),
      potentialPassive(12, SkillEffectType.IMMUNE_PARALYSIS),
    ],
  },
  "105": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.TEAM,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.2,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 1,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillActionType.CANCEL_GUARD,
          CD: 6,
          on: SkillOn.BEFORE_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillActionType.ULTIMATE,
          value: 5.69,
          CD: 6,
          on: SkillOn.ON_ACTION,
        },
      ],
      bond: [
        { 1: { value: 5.69 } },
        { 1: { value: 6.63 } },
        { 1: { value: 7.56 } },
        { 1: { value: 8.5 } },
        { 1: { value: 9.44 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.025,
        on: SkillOn.AFTER_ACTION,
        maxStack: 6,
      },
      {
        star: 3,
        condition: SkillCondition.TURN_BASED,
        conditionValue: 1,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.05,
        on: SkillOn.TURN_BEGIN,
        maxStack: 6,
      },
      {
        star: 5,
        condition: SkillCondition.TURN_BASED,
        conditionValue: 6,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.5,
        duration: 1,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.DAMAGED),
      potentialPassive(12, SkillEffectType.IMMUNE_SILENCE),
    ],
  },
  "106": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.TEAM,
        type: SkillEffectType.ULTIMATE_DAMAGE,
        value: 0.25,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.TEAM,
        type: SkillActionType.HEAL,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.5,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          type: SkillActionType.HEAL,
          basis: SkillEffectBasis.SELF_ATK,
          value: 2,
          CD: 5,
          on: SkillOn.ON_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          type: SkillActionType.HEAL,
          basis: SkillEffectBasis.SELF_ATK,
          value: 0.69,
          CD: 5,
          on: SkillOn.TURN_END,
          duration: 5,
        },
      ],
      bond: [
        { 0: { CD: 5 }, 1: { value: 0.69, CD: 5 } },
        { 0: { CD: 5 }, 1: { value: 0.73, CD: 5 } },
        { 0: { CD: 5 }, 1: { value: 0.76, CD: 5 } },
        { 0: { CD: 5 }, 1: { value: 0.8, CD: 5 } },
        { 0: { CD: 4 }, 1: { value: 0.8, CD: 4 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.TEAM_LEAST_HP,
        type: SkillActionType.HEAL,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.25,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 3,
        condition: SkillCondition.ATTACK,
        target: SkillTarget.TEAM,
        duration: 1,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.2,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.TEAM,
        duration: 1,
        type: SkillEffectType.ULTIMATE_DAMAGE,
        value: 0.25,
        on: SkillOn.AFTER_ACTION,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.GUARD_EFFECT),
      potentialPassive(12, SkillEffectType.IMMUNE_SILENCE),
    ],
  },
  "108": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 4,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillActionType.FREEZE_CD,
        on: SkillOn.TURN_BEGIN,
        duration: 2,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 1,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SELF,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.TARGET_ATK,
          value: 1,
          CD: 4,
          on: SkillOn.ON_ACTION,
          maxStack: 2,
        },
      ],
      bond: [
        { 0: { value: 1 } },
        { 0: { value: 1.05 } },
        { 0: { value: 1.1 } },
        { 0: { value: 1.15 } },
        { 0: { value: 1.25 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.02,
        on: SkillOn.AFTER_ACTION,
        maxStack: 10,
      },
      {
        star: 3,
        condition: SkillCondition.GUARD,
        target: SkillTarget.SELF,
        type: SkillActionType.SHIELD,
        basis: SkillEffectBasis.SELF_ATK,
        value: 1,
        on: SkillOn.AFTER_ACTION,
        duration: 3,
      },
      {
        star: 3,
        condition: SkillCondition.GUARD,
        target: SkillTarget.SELF,
        type: SkillEffectType.DAMAGED,
        value: -0.5,
        on: SkillOn.AFTER_ACTION,
        duration: 2,
      },
      {
        star: 5,
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.FOLLOW_UP_ATTACK,
        value: 0.2,
        on: SkillOn.AFTER_ACTION,
        repeat: 3,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.NORMAL_ATTACK_DAMAGE),
      potentialPassive(12, SkillEffectType.IMMUNE_SLEEP),
    ],
  },
  "125": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.5,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillActionType.CHANGE_CURRENT_CD,
        value: -6,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 0.5,
        on: SkillOn.TURN_END,
        duration: 4,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.TARGET_ATK,
          value: -0.15,
          CD: 6,
          on: SkillOn.AFTER_ACTION,
          duration: 6,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillEffectType.HEALED,
          value: -0.25,
          CD: 6,
          on: SkillOn.AFTER_ACTION,
          duration: 6,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillActionType.ULTIMATE,
          value: 1.385,
          CD: 6,
          on: SkillOn.TURN_END,
          duration: 6,
        },
      ],
      bond: [
        { 2: { value: 1.385 } },
        { 2: { value: 1.604 } },
        { 2: { value: 1.823 } },
        { 2: { value: 2.042 } },
        { 2: { value: 2.26 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.BATTLE_BEGIN,
        otherCondition: SkillCondition.HP_GREATER_THAN,
        otherConditionValue: 0.95,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.2,
        on: SkillOn.BEFORE_ACTION,
      },
      {
        star: 3,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.HEALED,
        value: 0.5,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 5,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillActionType.CHANGE_CD,
        value: -2,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.ATTACK_POWER),
      potentialPassive(12, SkillEffectType.IMMUNE_SILENCE),
    ],
  },
  "126": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillActionType.CHANGE_CD,
        value: -2,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.TEAM,
        type: SkillActionType.HEAL,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.35,
        on: SkillOn.TURN_END,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.TEAM,
        duration: 1,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.3,
        on: SkillOn.AFTER_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          duration: 6,
          type: SkillActionType.HEAL,
          basis: SkillEffectBasis.SELF_ATK,
          value: 0.792,
          CD: 6,
          on: SkillOn.TURN_END,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM_EXCEPT_SELF,
          type: SkillActionType.CHANGE_CURRENT_CD,
          value: -1,
          CD: 6,
          on: SkillOn.AFTER_ACTION,
        },
      ],
      bond: [
        { 0: { value: 0.792 } },
        { 0: { value: 0.917 } },
        { 0: { value: 1.042 } },
        { 0: { value: 1.167 } },
        { 0: { value: 1.292 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.ATTACK,
        target: SkillTarget.TEAM,
        duration: 2,
        type: SkillEffectType.HEALED,
        value: 0.125,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 1,
        condition: SkillCondition.ATTACK,
        target: SkillTarget.TEAM,
        duration: 2,
        type: SkillEffectType.SHIELDED,
        value: 0.125,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 3,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.TEAM,
        duration: 12,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.1,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.TEAM,
        duration: 4,
        type: SkillActionType.SHIELD,
        basis: SkillEffectBasis.SELF_ATK,
        value: 1,
        on: SkillOn.AFTER_ACTION,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.DAMAGED),
      potentialPassive(12, SkillEffectType.IMMUNE_SILENCE),
    ],
  },
  "128": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.9,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.NORMAL_ATTACK_DAMAGE,
        value: 0.45,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.ATTACK,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillActionType.NORMAL_ATTACK,
        value: 1,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillEffectType.ATTRIBUTE_DAMAGED,
          value: 0.12,
          CD: 4,
          on: SkillOn.BEFORE_ACTION,
          maxStack: 2,
          byAttribute: CharacterAttribute.WIND,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SINGLE_ENEMY,
          type: SkillActionType.ULTIMATE,
          value: 3.3,
          CD: 4,
          on: SkillOn.ON_ACTION,
        },
      ],
      bond: [
        { 0: { value: 0.12 }, 1: { value: 3.3 } },
        { 0: { value: 0.12 }, 1: { value: 3.76 } },
        { 0: { value: 0.12 }, 1: { value: 4.22 } },
        { 0: { value: 0.15 }, 1: { value: 4.22 } },
        { 0: { value: 0.18 }, 1: { value: 4.22 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.DAMAGED,
        value: -0.15,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 1,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.ATTRIBUTE_DAMAGED,
        value: 0.3,
        on: SkillOn.TURN_BEGIN,
        byAttribute: CharacterAttribute.FIRE,
      },
      {
        star: 3,
        condition: SkillCondition.GUARD,
        target: SkillTarget.SELF,
        type: SkillActionType.CHANGE_CURRENT_CD,
        value: -1,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.WIND,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.15,
        on: SkillOn.AFTER_ACTION,
        maxStack: 2,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.ULTIMATE_DAMAGE),
      potentialPassive(12, SkillEffectType.IMMUNE_PARALYSIS),
    ],
  },
  "130": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.HEALER,
        type: SkillActionType.ADDSKILL,
        on: SkillOn.TURN_BEGIN,
        skill: {
          type: SkillActionType.NORMAL_ATTACK,
          condition: SkillCondition.NORMAL_ATTACK,
          value: 1,
          target: SkillTarget.SINGLE_ENEMY,
          on: SkillOn.AFTER_ACTION,
        },
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SUPPORT,
        type: SkillActionType.ADDSKILL,
        on: SkillOn.TURN_BEGIN,
        skill: {
          type: SkillActionType.NORMAL_ATTACK,
          condition: SkillCondition.NORMAL_ATTACK,
          value: 1,
          target: SkillTarget.SINGLE_ENEMY,
          on: SkillOn.AFTER_ACTION,
        },
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.HEALER,
        type: SkillActionType.ADDSKILL,
        on: SkillOn.TURN_BEGIN,
        skill: {
          condition: SkillCondition.ULTIMATE,
          type: SkillActionType.ULTIMATE,
          value: 2,
          target: SkillTarget.SINGLE_ENEMY,
          on: SkillOn.AFTER_ACTION,
        },
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SUPPORT,
        type: SkillActionType.ADDSKILL,
        on: SkillOn.TURN_BEGIN,
        skill: {
          condition: SkillCondition.ULTIMATE,
          type: SkillActionType.ULTIMATE,
          value: 2,
          target: SkillTarget.SINGLE_ENEMY,
          on: SkillOn.AFTER_ACTION,
        },
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.TEAM,
        duration: 1,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.3,
        on: SkillOn.AFTER_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          duration: 2,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.TARGET_ATK,
          value: 0.2,
          CD: 4,
          on: SkillOn.BEFORE_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          duration: 1,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.SELF_ATK,
          value: 0.3,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.HEALER,
          type: SkillActionType.ADDSKILL,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
          duration: 2,
          skill: {
            condition: SkillCondition.ATTACK,
            type: SkillEffectType.ATTACK_POWER,
            basis: SkillEffectBasis.TARGET_ATK,
            value: 0.15,
            target: SkillTarget.TEAM,
            on: SkillOn.AFTER_ACTION,
            duration: 1,
          },
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.SUPPORT,
          type: SkillActionType.ADDSKILL,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
          duration: 2,
          skill: {
            condition: SkillCondition.ATTACK,
            type: SkillEffectType.ATTACK_POWER,
            basis: SkillEffectBasis.TARGET_ATK,
            value: 0.15,
            target: SkillTarget.TEAM,
            on: SkillOn.AFTER_ACTION,
            duration: 1,
          },
        },
      ],
      bond: [
        {
          0: { value: 0.2 },
          2: { skill: { value: 0.15 } },
          3: { skill: { value: 0.15 } },
        },
        {
          0: { value: 0.25 },
          2: { skill: { value: 0.15 } },
          3: { skill: { value: 0.15 } },
        },
        {
          0: { value: 0.25 },
          2: { skill: { value: 0.2 } },
          3: { skill: { value: 0.2 } },
        },
        {
          0: { value: 0.3 },
          2: { skill: { value: 0.2 } },
          3: { skill: { value: 0.2 } },
        },
        {
          0: { value: 0.3 },
          2: { skill: { value: 0.25 } },
          3: { skill: { value: 0.25 } },
        },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.ULTIMATE,
        target: SkillTarget.TEAM,
        duration: 1,
        type: SkillActionType.SHIELD,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.1,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 3,
        condition: SkillCondition.TURN_BASED,
        conditionValue: 4,
        target: SkillTarget.SINGLE_ENEMY,
        type: SkillEffectType.DAMAGED,
        value: 0.35,
        on: SkillOn.TURN_BEGIN,
        duration: 1,
      },
      {
        star: 5,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.HEALER,
        type: SkillEffectType.ULTIMATE_DAMAGE,
        value: 0.4,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 5,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SUPPORT,
        type: SkillEffectType.ULTIMATE_DAMAGE,
        value: 0.4,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.DAMAGED),
      potentialPassive(12, SkillEffectType.IMMUNE_SLEEP),
    ],
  },
  "157": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: [0, 2, 4],
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.33,
        on: SkillOn.TURN_BEGIN,
      },
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: [0, 2, 4],
        type: SkillEffectType.ULTIMATE_DAMAGE,
        value: 0.15,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.TEAM,
        duration: 1,
        type: SkillActionType.SHIELD,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.5,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          duration: 2,
          type: SkillActionType.SHIELD,
          basis: SkillEffectBasis.SELF_ATK,
          value: 1.65,
          CD: 4,
          on: SkillOn.ON_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          duration: 2,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.SELF_ATK,
          value: 0.3,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
        },
      ],
      bond: [
        { 0: { value: 1.65, CD: 4 }, 1: { value: 0.3, CD: 4 } },
        { 0: { value: 1.88, CD: 4 }, 1: { value: 0.3, CD: 4 } },
        { 0: { value: 1.88, CD: 3 }, 1: { value: 0.3, CD: 3 } },
        { 0: { value: 2.11, CD: 3 }, 1: { value: 0.3, CD: 3 } },
        { 0: { value: 2.11, CD: 3 }, 1: { value: 0.4, CD: 3 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.BATTLE_BEGIN,
        target: SkillTarget.SELF,
        type: SkillEffectType.NORMAL_ATTACK_DAMAGE,
        value: 0.25,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 3,
        condition: SkillCondition.BATTLE_BEGIN,
        target: [1, 3],
        type: SkillEffectType.DAMAGED,
        value: -0.15,
        on: SkillOn.TURN_BEGIN,
      },
      {
        star: 5,
        condition: SkillCondition.TURN_BASED,
        conditionValue: 6,
        target: [0, 2, 4],
        duration: 2,
        type: SkillEffectType.ULTIMATE_DAMAGE,
        value: 0.5,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.NORMAL_ATTACK_DAMAGE),
      potentialPassive(12, SkillEffectType.IMMUNE_SILENCE),
    ],
  },
  "209": {
    leader: [
      {
        condition: SkillCondition.BATTLE_BEGIN,
        target: [2],
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.5,
        on: SkillOn.TURN_BEGIN,
      },
    ],
    normalAttack: [
      {
        condition: SkillCondition.NORMAL_ATTACK,
        target: SkillTarget.TEAM,
        type: SkillActionType.HEAL,
        basis: SkillEffectBasis.SELF_ATK,
        value: 0.75,
        on: SkillOn.ON_ACTION,
      },
    ],
    ultimate: {
      common: [
        {
          condition: SkillCondition.ULTIMATE,
          target: [2],
          duration: 1,
          type: SkillEffectType.ATTACK_POWER,
          basis: SkillEffectBasis.TARGET_ATK,
          value: 0.3,
          CD: 4,
          on: SkillOn.BEFORE_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: SkillTarget.TEAM,
          type: SkillActionType.HEAL,
          basis: SkillEffectBasis.SELF_ATK,
          value: 1,
          CD: 4,
          on: SkillOn.ON_ACTION,
        },
        {
          condition: SkillCondition.ULTIMATE,
          target: [2],
          type: SkillActionType.CHANGE_CURRENT_CD,
          value: -4,
          CD: 4,
          on: SkillOn.AFTER_ACTION,
        },
      ],
      bond: [
        { 0: { value: 0.3 } },
        { 0: { value: 0.35 } },
        { 0: { value: 0.4 } },
        { 0: { value: 0.45 } },
        { 0: { value: 0.5 } },
      ],
    },
    starPassive: [
      {
        star: 1,
        condition: SkillCondition.NORMAL_ATTACK,
        target: [2],
        duration: 1,
        type: SkillEffectType.ATTACK_POWER,
        basis: SkillEffectBasis.TARGET_ATK,
        value: 0.1,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 3,
        condition: SkillCondition.ULTIMATE,
        target: [2],
        type: SkillActionType.CLEAR_ABNORMAL,
        on: SkillOn.AFTER_ACTION,
      },
      {
        star: 5,
        condition: SkillCondition.ATTACK,
        target: [2],
        type: SkillActionType.CLEAR_DEBUFF,
        on: SkillOn.AFTER_ACTION,
      },
    ],
    potentialPassive: [
      potentialPassive(6, SkillEffectType.DAMAGED),
      potentialPassive(12, SkillEffectType.IMMUNE_PARALYSIS),
    ],
  },
};
