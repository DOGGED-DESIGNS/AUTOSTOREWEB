//bg-blue-950 border-blue-950
//bg-zinc-900 border-zinc-900
//bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/Products";

export const COLORS = [
  { label: "black", value: "black", tw: "zinc-900" },
  { label: "blue", value: "blue", tw: "blue-950" },
  { label: "rose", value: "rose", tw: "rose-950" },
] as const;
// iphonex
// iphone11
// iphone12
// iphone13
// iphone14
// iphone15
export const MODELS = {
  name: "models",
  options: [
    {
      label: "iphone X",
      value: "iphonex",
    },
    {
      label: "iphone 11",
      value: "iphone11",
    },
    {
      label: "iphone 12",
      value: "iphone12",
    },
    {
      label: "iphone 13",
      value: "iphone13",
    },
    {
      label: "iphone 14",
      value: "iphone14",
    },
    {
      label: "iphone 15",
      value: "iphone15",
    },
    {
      label: "iphone 16",
      value: "iphone16",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "silicon",
      value: "silicon",
      description: undefined,
      price: PRODUCT_PRICES.material.silicon,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "scratch-resistant coatin",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;
export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "soft grippy textue",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
