import { chunk } from "lodash";
import * as f2l from "../../core/algs/f2ls";
import { Case } from "./case";
import { StyledText } from "./styled-text";

interface Props {
  set: f2l.SubSectionSet;
}

export function Set(props: Props) {
  return (
    <div className="mx-10 mb-14">
      <div className="flex items-center">
        <div>
          {props.set.description && (
            <StyledText tag="h1" className="text-xl mb-4 font-bold" styledClassName="text-red-600">
              {props.set.description}
            </StyledText>
          )}
          {props.set.subDescription && (
            <StyledText tag="h2" className="text-lg mb-2 font-bold" styledClassName="text-red-600">
              {props.set.subDescription}
            </StyledText>
          )}
        </div>
        <img src="how-to-read.png" width="64" className="ml-auto" />
      </div>
      <table className="border-collapse border-2 border-black w-full">
        <tbody>
          {chunk(props.set.cases, 2).map((row, index) => (
            <tr key={index}>
              {row.map((f2l, index) => (
                <Case key={index} case={f2l} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
