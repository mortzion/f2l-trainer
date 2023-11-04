import * as f2l from "../../core/algs/f2ls";
import { Set } from "./set";

interface Props {
  subSection: f2l.SubSection;
}

export function SubSection(props: Props) {
  return (
    <div>
      {props.subSection.name && <h1 className="text-center font-bold text-5xl mb-6">{props.subSection.name}</h1>}
      {props.subSection.description && <h2 className="text-center font-bold text-xl mb-7">{props.subSection.description}</h2>}
      {props.subSection.set.map((set, index) => (
        <Set key={index} set={set} />
      ))}
    </div>
  );
}
