import { useMemo } from "react";
import { F2lAlg } from "../../core/algs";
import { useAlgSelection } from "../state/algs";
import { StyledText } from "./styled-text";
import classNames from "classnames";

interface Props {
  alg: F2lAlg;
}

export function Alg(props: Props) {
  const { isAlgSelected, toggleAlgSelection } = useAlgSelection(props.alg);

  const { alg, affectsOtherSlots } = props.alg;

  const algMarkedDown = useMemo(() => alg.replace(/y('|2)?/, (y) => `*${y}*`), [alg]);

  return (
    <div className={isAlgSelected ? "bg-yellow-400" : ""} onClick={() => toggleAlgSelection()}>
      <StyledText
        tag="p"
        className={classNames("font-bold inline-block leading-tight mr-4", { "bg-red-200": affectsOtherSlots })}
        styledClassName="text-blue-600"
      >
        {algMarkedDown}
      </StyledText>
    </div>
  );
}
