import { F2lCase } from "../../core/algs/f2ls";
import { Alg } from "./alg";

interface CaseProps {
  case: F2lCase;
}

export function Case(props: CaseProps) {
  return (
    <>
      <td className="border-collapse border-2 border-black align-top" style={{ width: 64 }}>
        <img src={`/cases/${props.case.picture}`} width={64} height={64} />
      </td>
      <td className="border-collapse border-2 border-black align-top">
        {props.case.algs.map((alg, index) => (
          <Alg key={index} alg={alg} />
        ))}
      </td>
    </>
  );
}
