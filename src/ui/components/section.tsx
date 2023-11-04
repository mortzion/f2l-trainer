import * as f2l from "../../core/algs/f2ls";
import { SubSection } from "./sub-section";

interface Props {
  section: f2l.Section;
}

export function Section(props: Props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-6xl underline mb-4">{props.section.name}</h1>
      <h2 className="text-center font-bold text-xl mb-4">{props.section.description}</h2>
      <p className="text-center font-bold mb-5">
        <span className="bg-red-200">Highlighted algorithms affect more than 1 slot.</span>
      </p>
      {props.section.subSections.map((subSection, index) => (
        <SubSection key={index} subSection={subSection} />
      ))}
    </div>
  );
}
