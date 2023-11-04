import { Alg } from "cubing/alg";
import { times } from "lodash";

const MOVES_MAPPER: Record<string, string[]> = {
  F: ["F"],
  B: ["B"],
  L: ["L"],
  R: ["R"],
  U: ["U"],
  D: ["D"],
  M: ["R", "L'"],
  S: ["B", "F'"],
  x: [],
  y: [],
  z: [],
  r: ["L"],
  l: ["R"],
  f: ["B"],
  b: ["F"],
  u: ["D"],
  d: ["U"],
};

const MOVES_AXIS_MAPPER: Record<string, string[]> = {
  F: [],
  B: [],
  L: [],
  R: [],
  U: [],
  D: [],
  x: [],
  y: [],
  z: [],
  M: ["x", "x", "x"],
  S: ["z"],
  r: ["x"],
  l: ["x", "x", "x"],
  f: ["z"],
  b: ["z", "z", "z"],
  u: ["y"],
  d: ["y", "y", "y"],
};

const AXIS_MAPPER: Record<string, string[]> = {
  x: ["F", "U", "B", "D", "F", "f", "u", "b", "d", "f"].reverse(),
  y: ["F", "L", "B", "R", "F", "f", "l", "b", "r", "f"].reverse(),
  z: ["U", "R", "D", "L", "U", "u", "r", "d", "l", "u"].reverse(),
};

/**
 * There is definitely a better way to do this
 */
export function toCanonicalMoves(alg: string | Alg): string {
  const canonicalMoves = [];
  let moves = expandMoves(alg);

  while (moves.length > 0) {
    const move = moves.shift() as string;

    canonicalMoves.push(...MOVES_MAPPER[move]);
    moves.unshift(...MOVES_AXIS_MAPPER[move]);

    if (AXIS_MAPPER[move]) {
      moves = axisTransform(AXIS_MAPPER[move], moves);
    }
  }

  return canonicalMoves.join(" ");
}

function expandMoves(alg: string | Alg): string[] {
  return alg
    .toString()
    .split(" ")
    .flatMap((move) => {
      const baseMove = move[0];
      let amount = 1;

      if (isDoubleMove(move)) {
        amount *= 2;
      }

      if (isCounterClokwiseMove(move)) {
        amount *= 3;
      }

      return times(amount % 4, () => baseMove);
    });
}

function isDoubleMove(move: string): boolean {
  return move.includes("2");
}

function isCounterClokwiseMove(move: string): boolean {
  return move.includes("'");
}

function axisTransform(transformer: string[], remainingMoves: string[]): string[] {
  return remainingMoves.map((move) => {
    const index = transformer.indexOf(move[0]);

    return index >= 0 ? transformer[index + 1] : move;
  });
}
