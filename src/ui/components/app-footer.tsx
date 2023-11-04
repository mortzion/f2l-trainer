export function AppFooter() {
  return (
    <div id="acknowledgments" className="mx-10 mb-10">
      <p>
        Cube visualization using{" "}
        <a className="text-blue-500 underline" href="https://js.cubing.net/cubing/">
          cubing.js
        </a>
      </p>
      <p>
        Scramble generation using solver from{" "}
        <a className="text-blue-500 underline" href="https://github.com/cs0x7f/min2phase">
          min2phase
        </a>
      </p>
      <p>
        Algorithms, cases and images from{" "}
        <a className="text-blue-500 underline" href="https://bit.ly/bestf2l">
          jperm's pdf
        </a>
      </p>
    </div>
  );
}
