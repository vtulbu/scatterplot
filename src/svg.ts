import { select } from "d3";
import { SVG_HEIGHT, SVG_WIDTH } from "./constants";

export const svg = select("#app")
  .append("svg")
  .attr("width", SVG_WIDTH)
  .attr("height", SVG_HEIGHT);
