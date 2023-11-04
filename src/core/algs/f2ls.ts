export interface Section {
  name: string;
  description: string;
  subSections: SubSection[];
}

export interface SubSection {
  name?: string;
  description?: string;
  set: SubSectionSet[];
}

export interface SubSectionSet {
  description?: string;
  subDescription?: string;
  cases: F2lCase[];
}

export interface F2lCase {
  picture: string;
  algs: F2lAlg[];
}

export interface F2lAlg {
  alg: string;
  affectsOtherSlots?: boolean;
}

/**
 * F2L algs, cases and images from jperm's pdf (not sure if it's his)
 *
 * https://jperm.net/3x3/cfop/f2l
 * https://bit.ly/bestf2l
 */
export const F2L_SECTIONS: Section[] = [
  {
    name: "Section 1: Basic F2L",
    description: "41 basic cases. Most are solved intuitively.",
    subSections: [
      {
        name: "Section 1A",
        description: "Both pieces are on top.",
        set: [
          {
            description: "White Sticker Faces *Up*",
            cases: [
              {
                picture: "1.png",
                algs: [{ alg: "U2 (R U R') U (R U' R')" }, { alg: "y F R U2 R' F'" }],
              },
              {
                picture: "2.png",
                algs: [{ alg: "y U2 (L' U' L) U' (L' U L)" }, { alg: "F' L' U2 L F" }],
              },
              {
                picture: "3.png",
                algs: [{ alg: "U (R U2 R') U (R U' R')" }],
              },
              {
                picture: "4.png",
                algs: [{ alg: "y U' (L' U2 L) U' (L' U L)" }],
              },
              {
                picture: "5.png",
                algs: [
                  { alg: "U (R U' R') U' (R U' R' U R U' R')" },
                  { alg: "U (F R' F' R) U (R U R')" },
                  { alg: "U2 (L F' L' F) (R U R')", affectsOtherSlots: true },
                  { alg: "y U L' U' (L2 F' L' F) (L' U L)" },
                  { alg: "y F' (U' L' U L) F (L' U L)" },
                  { alg: "y' U2 R U' R' U' S R' S'", affectsOtherSlots: true },
                ],
              },
              {
                picture: "6.png",
                algs: [
                  { alg: "y U' (L' U L) U (L' U L U' L' U L)" },
                  { alg: "y U' (F' L F L') U' (L' U' L)" },
                  { alg: "y U2 (R' F R F') (L' U' L)", affectsOtherSlots: true },
                  { alg: "U' R U (R2' F R F') (R U' R')" },
                  { alg: "F (U R U' R') F' (R U' R')" },
                  { alg: "y2 U2 L' U L U S' L S", affectsOtherSlots: true },
                ],
              },
              {
                picture: "7.png",
                algs: [{ alg: "(R U2 R') U' (R U R')" }],
              },
              {
                picture: "8.png",
                algs: [{ alg: "y (L' U2 L) U (L' U' L)" }],
              },
            ],
          },
          {
            description: "White Sticker Faces *Side/Front*",
            subDescription: "Stickers on the U face are *different*:",
            cases: [
              {
                picture: "10.png",
                algs: [{ alg: "(R U R')" }],
              },
              {
                picture: "11.png",
                algs: [{ alg: "y (L' U' L)" }],
              },
              {
                picture: "12.png",
                algs: [
                  { alg: "U' (R U R') U (R U R')" },
                  { alg: "U2 (R U' R') U' (R U R')" },
                  { alg: "R' U R2 U R'", affectsOtherSlots: true },
                ],
              },
              {
                picture: "13.png",
                algs: [
                  { alg: "y U (L' U' L) U' (L' U' L)" },
                  { alg: "y U2 (L' U L) U (L' U' L)" },
                  { alg: "y L U' L2' U' L", affectsOtherSlots: true },
                ],
              },
              {
                picture: "14.png",
                algs: [
                  { alg: "R' U2 R2 U R2' U R" },
                  { alg: "(R U' R') U (R U' R') U2 (R U' R')" },
                  { alg: "R' U2 R2 U R'", affectsOtherSlots: true },
                  { alg: "y U L' U2 L U' y' R U R'" },
                ],
              },
              {
                picture: "15.png",
                algs: [
                  { alg: "y L U2 L2' U' L2 U' L'" },
                  { alg: "y (L' U L) U' (L' U L) U2 (L' U L)" },
                  { alg: "y L U2 L2' U' L", affectsOtherSlots: true },
                  { alg: "U' (R U2 R') U y (L' U' L)" },
                ],
              },
              {
                picture: "16.png",
                algs: [{ alg: "U' (R U' R') U (R U R')" }],
              },
              {
                picture: "17.png",
                algs: [{ alg: "y U (L' U L) U' (L' U' L)" }],
              },
            ],
          },
          {
            description: "White Sticker Faces *Side/Front*",
            subDescription: "Stickers on the U face are the *same*:",
            cases: [
              {
                picture: "18.png",
                algs: [{ alg: "y U' (L' U L)" }],
              },
              {
                picture: "19.png",
                algs: [{ alg: "U (R U' R')" }],
              },
              {
                picture: "20.png",
                algs: [{ alg: "y U (L' U2 L) U2 (L' U L)" }, { alg: "r' U2 R2 U R2' U r" }],
              },
              {
                picture: "21.png",
                algs: [{ alg: "U' (R U2 R') U2 (R U' R')" }, { alg: "y l U2 L2' U' L2 U' l'" }],
              },
              {
                picture: "22.png",
                algs: [{ alg: "U' (R U R') U2 (R U' R')" }, { alg: "y U l' U L U' L' U' l" }],
              },
              {
                picture: "23.png",
                algs: [{ alg: "y U (L' U' L) U2 (L' U L)" }, { alg: "U' r U' R' U R U r'" }],
              },
              {
                picture: "24.png",
                algs: [
                  { alg: "M U (L F' L') U' M'" },
                  { alg: "U' (R' U R) U' (R U R')", affectsOtherSlots: true },
                  { alg: "y (L' U L) y' U2 (R U R')" },
                  { alg: "y' (R2' F R F' R) U2 (R' U R)" },
                  { alg: "y2 (f' L f) U2 (L U L')" },
                ],
              },
              {
                picture: "25.png",
                algs: [
                  { alg: "y M U' (R' F R) U M'" },
                  { alg: "y U (L U' L') U (L' U' L)", affectsOtherSlots: true },
                  { alg: "(R U' R') y U2 (L' U' L)" },
                  { alg: "y2 (L2 F' L' F L') U2 (L U' L')" },
                  { alg: "y' (f R' f') U2 R' U' R" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Section 1B",
        description: "1 piece is in the correct slot.",
        set: [
          {
            description: "Edge in the slot",
            cases: [
              {
                picture: "26.png",
                algs: [{ alg: "U (R U R') U2 (R U R')" }, { alg: "U' (R U2 R') U (R U R')" }, { alg: "y U (L' U L) U2 (L' U L)" }],
              },
              {
                picture: "27.png",
                algs: [{ alg: "y U' (L' U' L) U2 (L' U' L)" }, { alg: "y U (L' U2 L) U' (L' U' L)" }, { alg: "U' R U' R' U2 R U' R'" }],
              },
              {
                picture: "28.png",
                algs: [
                  { alg: "U (F' U' F) U' (R U R')" },
                  { alg: "y U2 (L' U' L) (F' L F L')" },
                  { alg: "y U' M' (U' L' U l) (L' U L)" },
                  { alg: "y U' (L U F' L' F) (L' U L)", affectsOtherSlots: true },
                  { alg: "y' U2 (R' U' R) y U (R U' R')" },
                  { alg: "y' U2 R' U' M U' R U M'" },
                  { alg: "y2 U (f' L' f) U' (L U L')" },
                ],
              },
              {
                picture: "29.png",
                algs: [
                  { alg: "y U' (F U F') U (L' U' L)" },
                  { alg: "U2 (R U R') (F R' F' R)" },
                  { alg: "U M' (U R U' r') (R U' R')" },
                  { alg: "U (R' U' F R F') (R U' R')", affectsOtherSlots: true },
                  { alg: "y2 U2 (L U L') y' U' (L' U L)" },
                  { alg: "y2 U2 L U M U L' U' M'" },
                  { alg: "y' U' (f R f') U (R' U' R)" },
                ],
              },
              {
                picture: "30.png",
                algs: [{ alg: "(U R U' R')3" }],
              },
              {
                picture: "31.png",
                algs: [
                  { alg: "U' (R' F R F') (R U' R')" },
                  { alg: "(R U' R') (F' U2 F)" },
                  { alg: "y' R' U R' F R F' R" },
                  { alg: "y' U' (R' U2 R) (f R f')" },
                ],
              },
            ],
          },
          {
            description: "Corner in the slot",
            cases: [
              {
                picture: "32.png",
                algs: [{ alg: "(R U R') U' (R U R')" }, { alg: "y M' (U' L' U L) (U' L' U l)" }, { alg: "y (L F' L' F)2" }],
              },
              {
                picture: "33.png",
                algs: [{ alg: "y (L' U' L) U (L' U' L)" }, { alg: "M' (U R U' R') (U R U' r')" }, { alg: "(R' F R F')2" }],
              },
              {
                picture: "34.png",
                algs: [{ alg: "(R U' R') U (R U' R')" }],
              },
              {
                picture: "35.png",
                algs: [{ alg: "y (L' U L) U' (L' U L)" }],
              },
              {
                picture: "36.png",
                algs: [
                  { alg: "U' (R' F R F') (R U R')" },
                  { alg: "(R' F' R) (U R U' R') F" },
                  { alg: "U' F' (R U R' U') (R' F R)" },
                  { alg: "y U' (L' U L) (F' L F L')" },
                  { alg: "y2 U' M U L U' M' U L'" },
                  { alg: "y' U' R' U M U' R U M'" },
                ],
              },
              {
                picture: "37.png",
                algs: [
                  { alg: "y U (L F' L' F) (L' U' L)" },
                  { alg: "y (L F L') (U' L' U L) F'" },
                  { alg: "y U F (L' U' L U) (L F' L')" },
                  { alg: "U (R U' R') (F R' F' R)" },
                  { alg: "y' U M U' R' U M' U' R" },
                  { alg: "y2 U L U' M U L' U' M'" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Section 1C",
        description: "Both pieces are in the correct slot.",
        set: [
          {
            cases: [
              {
                picture: "38.png",
                algs: [{ alg: "(R U' R') U (R U2 R' U R U' R')" }, { alg: "y' (L' U L) U (L' U' L U2' L' U L)" }],
              },
              {
                picture: "39.png",
                algs: [{ alg: "y' (L' U L) U' (L' U2' L U' L' U L)" }, { alg: "(R U' R') U' (R U R' U2 R U' R')" }],
              },
              {
                picture: "40.png",
                algs: [
                  { alg: "(R U' R') (F' L' U2 L F)" },
                  { alg: "y (F R U2' R' F') (L' U' L)" },
                  { alg: "y2 L2 F U F' U' L' U L'" },
                  { alg: "y' R' U R' U' F' U F R2" },
                ],
              },
              {
                picture: "41.png",
                algs: [
                  { alg: "y (L' U L) (F R U2' R' F')" },
                  { alg: "(F' L' U2 L F) (R U R')" },
                  { alg: "y' R2' F' U' F U R U' R" },
                  { alg: "y2 L U' L U F U' F' L2'" },
                ],
              },
              {
                picture: "42.png",
                algs: [
                  { alg: "R2' U2' F R2 F' U2' R' U R'" },
                  { alg: "y L2 U2 F' L2' F U2 L U' L" },
                  { alg: "y' (f R' f') U (R' U2' R) U (R' U2' R)" },
                  { alg: "y2 (f' L f) U' (L U2 L') U' (L U2 L')" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Section 2: Advanced F2L",
    description: "36 advanced cases: 1 piece is in the wrong slot.",
    subSections: [
      {
        name: "Section 2A",
        description: "Edge is in the wrong slot.",
        set: [
          {
            description: "White Sticker Faces *Up*",
            cases: [
              {
                picture: "43.png",
                algs: [{ alg: "U' R' U R2 U' R'" }],
              },
              {
                picture: "44.png",
                algs: [{ alg: "y U L U' L2' U L" }],
              },
              {
                picture: "45.png",
                algs: [{ alg: "U2 (R' U R) U' (S R S')" }, { alg: "y R' F R2 U' R' U2 F'" }, { alg: "y2 U2 (L F' L' F) (L U L')" }],
              },
              {
                picture: "46.png",
                algs: [{ alg: "y U2 (L U' L') U (S' L' S)" }, { alg: "L F' L2' U L U2' F" }, { alg: "y' U2 (R' F R F') (R' U' R)" }],
              },
              {
                picture: "47.png",
                algs: [
                  { alg: "U2 L2' u L2 u' L2'" },
                  { alg: "y U2 R2 u' R2' u R2" },
                  { alg: "y' U2 L2' u' L2 u L2'" },
                  { alg: "y2 U2 R2 u R2' u' R2" },
                ],
              },
              {
                picture: "48.png",
                algs: [
                  { alg: "L F' U F L'" },
                  { alg: "y R' F U' F' R" },
                  { alg: "y' (L' u' L) U' (L' u L)" },
                  { alg: "y2 (R u R') U (R u' R')" },
                ],
              },
            ],
          },
          {
            description: "White Sticker Faces *Side/Front*",
            cases: [
              {
                picture: "49.png",
                algs: [{ alg: "R' U' R2 U R'" }],
              },
              {
                picture: "50.png",
                algs: [{ alg: "y L U L2' U' L" }],
              },
              {
                picture: "51.png",
                algs: [{ alg: "F D R D' F'" }, { alg: "y R (F U F') R'" }, { alg: "y2 F (L U L') F'" }, { alg: "y' R u R u' R'" }],
              },
              {
                picture: "52.png",
                algs: [{ alg: "y F' D' L' D F" }, { alg: "L' (F' U' F) L" }, { alg: "y' F' (R' U' R) F" }, { alg: "y2 L' u' L' u L" }],
              },
              {
                picture: "53.png",
                algs: [{ alg: "U' (L' U' L) (R U' R')" }, { alg: "y U2 L' U' L2 U L2' U' L" }],
              },
              {
                picture: "54.png",
                algs: [{ alg: "U (R U R') (L' U L)" }, { alg: "y' U2' R U R2' U' R2 U R'" }],
              },
              {
                picture: "55.png",
                algs: [{ alg: "(F U2 F') (R U R')" }, { alg: "y L U2 L' F U F'" }, { alg: "y' R U2 R' f R f'" }],
              },
              {
                picture: "56.png",
                algs: [{ alg: "y (F' U2 F) (L' U' L)" }, { alg: "R' U2 R F' U' F" }, { alg: "y2 L' U2 L f' L' f" }],
              },
              {
                picture: "57.png",
                algs: [{ alg: "U (R U R') (L U L')" }, { alg: "U' (R U2 R') U' (L U L')" }, { alg: "y U (L' U L) (R' U R)" }],
              },
              {
                picture: "58.png",
                algs: [{ alg: "y U' (L' U' L) (R' U' R)" }, { alg: "y U (L' U2 L) U (R' U' R)" }, { alg: "U' (R U' R') (L U' L')" }],
              },
              {
                picture: "59.png",
                algs: [
                  { alg: "U2 F' (L U L') F" },
                  { alg: "y U2 L' (B U B') L" },
                  { alg: "y' U2 R' (F U F') R" },
                  { alg: "y2 f' U L U' f" },
                ],
              },
              {
                picture: "60.png",
                algs: [
                  { alg: "y U2' F (R' U' R) F'" },
                  { alg: "U2' R (B' U' B) R'" },
                  { alg: "y2 U2' L (F' U' F) L'" },
                  { alg: "y' f U' R' U f'" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Section 2B",
        description: "Corner is in the wrong slot.",
        set: [
          {
            description: "Corner In The *Right Slot*",
            cases: [
              {
                picture: "61.png",
                algs: [{ alg: "U (R U' R') (L' U L)" }],
              },
              {
                picture: "62.png",
                algs: [{ alg: "y (L' U2 L) U' (L U L')" }, { alg: "y U2 (L' U L) U' (L U2 L')" }],
              },
              {
                picture: "63.png",
                algs: [{ alg: "U2 (R U' R') U (L' U' L)" }, { alg: "y (F' L F L') U' (L U2 L')" }],
              },
              {
                picture: "64.png",
                algs: [{ alg: "y U' L' U' L2 U2 L'" }],
              },
              {
                picture: "65.png",
                algs: [{ alg: "(R U R') U' (L' U L)" }, { alg: "y (S' L S)" }],
              },
              {
                picture: "66.png",
                algs: [{ alg: "U' (R U R') (F U F')" }, { alg: "y U (L' U L) U (L U L')" }, { alg: "y U' (F U F') (L U L')" }],
              },
            ],
          },
          {
            description: "Corner In The *Left Slot*",
            cases: [
              {
                picture: "67.png",
                algs: [{ alg: "y U' (L' U L) (R U' R')" }],
              },
              {
                picture: "68.png",
                algs: [{ alg: "(R U2 R') U (R' U' R)" }, { alg: "U2 (R U' R') U (R' U2 R)" }],
              },
              {
                picture: "69.png",
                algs: [{ alg: "(F R' F' R) U (R' U2 R)" }, { alg: "y U2 (L' U L) U' (R U R')" }],
              },
              {
                picture: "70.png",
                algs: [{ alg: "U R U R2' U2 R" }],
              },
              {
                picture: "71.png",
                algs: [{ alg: "(S R' S')" }, { alg: "y (L' U' L) U (R U' R')" }],
              },
              {
                picture: "72.png",
                algs: [{ alg: "U (F U' F') (R' U' R)" }, { alg: "U' (R U' R') U' (R' U R)" }, { alg: "y U (L' U' L) (F' U' F)" }],
              },
            ],
          },
          {
            description: "Corner In The *Opposite Slot*",
            cases: [
              {
                picture: "73.png",
                algs: [{ alg: "U' (F' U F) (L U2 L')" }, { alg: "y U' (L' U L) U' (f R' f')" }],
              },
              {
                picture: "74.png",
                algs: [{ alg: "U (R U' R') U (f' L f)" }, { alg: "y U (F U' F') (R' U2 R)" }],
              },
              {
                picture: "75.png",
                algs: [{ alg: "(R U' R') (L U2 L')" }, { alg: "y (L' U' L) (f R' f')" }],
              },
              {
                picture: "76.png",
                algs: [{ alg: "(R U R') (f' L f)" }, { alg: "y (L' U L) (R' U2 R)" }],
              },
              {
                picture: "77.png",
                algs: [{ alg: "(R U' R') U (L U L')" }, { alg: "y (L F' L' F) (R' U2 R)" }],
              },
              {
                picture: "78.png",
                algs: [{ alg: "(R' F R F') (L U2 L')" }, { alg: "y (L' U' L) U' (R' U' R)" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Section 3: Expert F2L",
    description: "Both pieces are in a slot (only the easy cases).",
    subSections: [
      {
        set: [
          {
            description: "Corner Is Solved",
            cases: [
              {
                picture: "79.png",
                algs: [{ alg: "R2 U' R2' U R2" }, { alg: "y2 L2' U' L2 U L2'" }, { alg: "y F' R' F2 R F" }],
              },
              {
                picture: "80.png",
                algs: [{ alg: "f' R' U R f" }, { alg: "y R' u' R u R" }, { alg: "y' L' u' L u L" }, { alg: "y2 f' D' L D f" }],
              },
              {
                picture: "81.png",
                algs: [{ alg: "y L2' U L2 U' L2'" }, { alg: "y' R2 U R2' U' R2" }, { alg: "F L F2' L' F'" }],
              },
              {
                picture: "82.png",
                algs: [{ alg: "y f L U' L' f'" }, { alg: "L u L' u' L'" }, { alg: "y2 R u R' u' R'" }, { alg: "y' f D R' D' f'" }],
              },
              {
                picture: "83.png",
                algs: [
                  { alg: "L2' u' L2 u L2'" },
                  { alg: "y' R2 u R2' u' R2" },
                  { alg: "y L2' u L2 u' L2'" },
                  { alg: "y2 R2 u' R2' u R2" },
                ],
              },
              {
                picture: "84.png",
                algs: [
                  { alg: "(L' u' L) U (L' u L)" },
                  { alg: "y' (R u R') U' (R u' R')" },
                  { alg: "y (L u L') U' (L u' L')" },
                  { alg: "y2 (R' u' R) U (R' u R)" },
                ],
              },
            ],
          },
          {
            description: "Pair In The Wrong Slot",
            cases: [
              {
                picture: "85.png",
                algs: [
                  { alg: "R' F R2 U' R2' F' R" },
                  { alg: "L F' L2' U' L2 F L'" },
                  { alg: "y (f' L' f) U' (L' U L)" },
                  { alg: "y' (R U R') U' (f R' f')" },
                  { alg: "y2 (f R f') (L U2 L')" },
                ],
              },
              {
                picture: "86.png",
                algs: [
                  { alg: "y L F' L2' U L2 F L'" },
                  { alg: "y R' F R2 U R2' F' R" },
                  { alg: "(f R f') U (R U' R')" },
                  { alg: "y2 (L' U' L) U (f' L f)" },
                  { alg: "y' (f' L' f) (R' U2' R)" },
                ],
              },
              {
                picture: "87.png",
                algs: [{ alg: "R (L U2 L') R'" }, { alg: "y L' (R' U2 R) L" }],
              },
            ],
          },
          {
            description: "Flipped Edge & Corner In Adjacent Slot",
            cases: [
              {
                picture: "88.png",
                algs: [{ alg: "L F2' L' F U' F" }, { alg: "(L F' L' U' F) U' (R U R')" }, { alg: "y (L U' F' L' F) (L' U L)" }],
              },
              {
                picture: "89.png",
                algs: [{ alg: "y R' F2 R F' U F'" }, { alg: "y (R' F R U F') U (L' U' L)" }, { alg: "(R' U F R F') (R U' R')" }],
              },
              {
                picture: "90.png",
                algs: [{ alg: "(R' F R U' F') (R U' R')" }, { alg: "y (L' U' L) U (S' L' S)" }],
              },
              {
                picture: "91.png",
                algs: [{ alg: "y (L F' L' U F) (L' U L)" }, { alg: "(R U R') U' (S R S')" }],
              },
              {
                picture: "92.png",
                algs: [
                  { alg: "(L' U L) (M' U R U' r') (R U' R')" },
                  { alg: "y (L U F' L' F) U2 (L' U' L)" },
                  { alg: "y (L U L') (F U F') U' (L' U L)" },
                ],
              },
              {
                picture: "93.png",
                algs: [
                  { alg: "y (R U' R') (M' U' L' U l) (L' U L)" },
                  { alg: "(R' U' F R F') U2 (R U R')" },
                  { alg: "(R' U' R) (F' U' F) U (R U' R')" },
                ],
              },
            ],
          },
          {
            description: "Other Easy Cases",
            cases: [
              {
                picture: "94.png",
                algs: [{ alg: "(R' F R U' F') U (R U' R')" }, { alg: "R U' R2' u' R' u R" }, { alg: "y2 L U' L2' u' L' u L" }],
              },
              {
                picture: "95.png",
                algs: [{ alg: "y (L F' L' U F) U' (L' U L)" }, { alg: "y L' U L2 u L u' L'" }, { alg: "y' R' U R2 u R u' R'" }],
              },
            ],
          },
        ],
      },
    ],
  },
];
