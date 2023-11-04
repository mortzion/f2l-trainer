import { Section } from "./ui/components/section";
import { F2L_SECTIONS } from "./core/algs/f2ls";
import { TrainingSection } from "./ui/components/training-section";
import { AppHeader } from "./ui/components/app-header";
import { AppFooter } from "./ui/components/app-footer";

function App() {
  return (
    <div className="flex align-middle flex-col gap-10">
      <AppHeader />
      <TrainingSection />
      {F2L_SECTIONS.map((section) => (
        <Section key={section.name} section={section} />
      ))}
      <AppFooter />
    </div>
  );
}

export default App;
