import { select } from "d3";

export const tooltip = select("#app")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 0)
  .style("position", "absolute");
