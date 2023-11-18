import * as f2l from "../../core/algs/f2ls";
import { Case } from "./case";
import { StyledText } from "./styled-text";

interface Props {
  set: f2l.SubSectionSet;
}

export function Set(props: Props) {
  return (
    <div className="mb-14">
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
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {props.set.cases.map((f2l, index) => (
          <Case key={index} case={f2l} />
        ))}
      </div>
    </div>
  );
}
