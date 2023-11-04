import { atom, useAtom } from "jotai";
import { F2lAlg } from "../../core/algs/f2ls";
import { without } from "lodash";

const selectedAlgsAtom = atom<F2lAlg[]>([]);

export function useSelectedAlgs() {
  const [selectedAlgs] = useAtom(selectedAlgsAtom);

  return selectedAlgs;
}

export function useAlgSelection(alg: F2lAlg) {
  const [selectedAlgs, setSelectedAlgs] = useAtom(selectedAlgsAtom);

  const isAlgSelected = selectedAlgs.includes(alg);

  function toggleAlgSelection() {
    if (isAlgSelected) {
      setSelectedAlgs(without(selectedAlgs, alg));
    } else {
      setSelectedAlgs([...selectedAlgs, alg]);
    }
  }

  return {
    isAlgSelected,
    toggleAlgSelection,
  };
}
