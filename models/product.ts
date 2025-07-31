export interface Product {
  brand: string;
  model: string;
  description: string;
  img: string;
  year: string;
  citation: string;
  instax: boolean;
}

export interface Point {
  x: number; // % of width
  y: number; // % of height
  tooltipx: number;
  tooltipy: number;
  title: string;
  text: string;
  show: boolean;
  pointEl?: HTMLElement | null;
  tooltipEl?: HTMLElement | null;
  lineRef?: SVGLineElement | null;
  line?: { x1: number; y1: number; x2: number; y2: number };
}