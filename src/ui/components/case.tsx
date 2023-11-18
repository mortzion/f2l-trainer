import classNames from "classnames";
import { F2lCase } from "../../core/algs/f2ls";
import { Alg } from "./alg";

interface CaseProps {
  case: F2lCase;
}

export function Case(props: CaseProps) {
  return (
    <div className={classNames("flex border-black border flex-grow")} style={{ marginLeft: -1, marginTop: -1 }}>
      <div className="border-r border-black">
        <img src={`/cases/${props.case.picture}`} width={64} height={64} />
      </div>
      <div className="px-1">
        {props.case.algs.map((alg, index) => (
          <Alg key={index} alg={alg} />
        ))}
      </div>
    </div>
  );
}
