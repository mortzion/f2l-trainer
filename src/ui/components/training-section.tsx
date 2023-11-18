import { random, sample, times } from "lodash";
import { Alg } from "cubing/alg";
import { useEffect, useState, useRef } from "react";

import { OLLS, PLLS } from "../../core/algs";
import { useSelectedAlgs } from "../state/algs";
//@ts-ignore
import min2phase from "../../core/lib/min2phase";
import { toCanonicalMoves } from "../../core/utils/to-canonical-moves";
import { TwistyPlayer } from "cubing/twisty";

min2phase.initFull();

export function TrainingSection() {
  const selectedAlgs = useSelectedAlgs();
  const [scramble, setScramble] = useState<string>();

  useEffect(() => {
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyUp]);

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  function onKeyUp(event: KeyboardEvent) {
    if (event.key !== " ") {
      return;
    }
    event.preventDefault();
    computeNewScramble();
  }

  function computeNewScramble() {
    const randomAlg = sample(selectedAlgs);

    if (!randomAlg) {
      return;
    }

    const search = new min2phase.Search();
    const naiveScramble = computeNaiveScramble(randomAlg.alg);
    /**
     * I have to transform the scramble to use 'canonical' moves due to a
     * limitation (or lack of knowledge in my part) of the min2phase lib
     */
    const canonicalNaiveScramble = toCanonicalMoves(naiveScramble);
    const state = min2phase.fromScramble(canonicalNaiveScramble);
    const optimizedScramble = search.solution(state, 21, 1e9, 0, 2);

    setScramble(optimizedScramble);
  }

  function computeNaiveScramble(f2l: string): string {
    /**
     * I chose to use a random oll and pll as a prefix to the scramble so that
     * each scramble looks a bit different. There may be a better way to do this
     */
    const oll = sample(OLLS)!;
    const pll = sample(PLLS)!;

    /**
     * I chose to add random U moves as a suffix to the scramble so that the case
     * 'alignment' changes every scramble. The way this is setup, the correct
     * 'alignment' should happen more often than each other individually
     */
    return new Alg(oll)
      .concat(pll)
      .concat(new Alg(f2l).expand().invert())
      .toString()
      .concat(times(random(0, 4), () => "U").join(" "));
  }

  if (!scramble) {
    return (
      <div>
        <button className="sm:hidden text-center" onClick={computeNewScramble}>
          Select at least a single case below and tap here to generate a scramble. Afterwards you can press the scramble itself to generate
          a new case.
        </button>
        <p className="max-sm:hidden text-center">Select at least a single case below and press space to generate a scramble</p>
      </div>
    );
  }

  return <div className="w-3/4 m-auto mb-5">{scramble && <Scramble scramble={scramble} onPressScramble={computeNewScramble} />}</div>;
}

interface ScrambleProps {
  scramble: string;
  onPressScramble: () => void;
}

function Scramble(props: ScrambleProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current!.innerHTML = "";

    const player = new TwistyPlayer({
      experimentalSetupAlg: "z2 " + props.scramble,
      experimentalSetupAnchor: "end",
      hintFacelets: "none",
      controlPanel: "none",
      visualization: "PG3D",
      experimentalStickeringMaskOrbits: "EDGES:----IIII----,CORNERS:----IIII,CENTERS:-----I",
      background: "none",
    });

    divRef.current?.appendChild(player);

    () => {};
  }, [props.scramble]);

  return (
    <span>
      <span ref={divRef} className="flex justify-center"></span>
      <div className="flex justify-center">
        <button onClick={props.onPressScramble} className="text-3xl font-bold">
          {props.scramble}
        </button>
      </div>
    </span>
  );
}
