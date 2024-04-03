import "./style.css";
import { GraphData } from "./types";
import { svg } from "./svg";
import { PADDING, SVG_HEIGHT } from "./constants";
import { axisBottom, axisLeft, xScale, yScale } from "./axis";
import { createLegend } from "./legend";
import { createTextLabels } from "./text-labels";
import { tooltip } from "./tooltip";
import { json } from "d3";

json<GraphData>(
  "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
).then((data) => {
  if (!data) {
    throw new Error("Data is undefined");
  }

  const years = data.map((d) => d.Year);
  const seconds = data.map((d) => d.Seconds);
  const x = xScale(years, (d) => d).nice(3);
  const y = yScale(seconds, (d) => d).nice();

  // Add the scatterplot
  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.Year) + PADDING * 2)
    .attr("cy", (d) => y(d.Seconds) + PADDING)
    .attr("r", 6)
    .attr("class", "dot")
    .style("fill", (d) => {
      return d.Doping ? "rgb(31, 119, 180)" : "rgb(255, 127, 14)";
    })
    .on("mouseover", (event, d) => {
      tooltip
        .style("left", event.clientX + 10 + "px")
        .style("top", event.clientY - 25 + "px");

      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip
        .html(
          `${d.Name}: ${d.Nationality}<br>Year: ${d.Year} Time: ${d.Time}${
            d.Doping ? "<br><br>" + d.Doping : ""
          }`
        )
        .attr("data-year", d.Year);
    })
    .on("mouseout", () => {
      tooltip.transition().duration(500).style("opacity", 0);
    });

  // Add the x-axis
  svg
    .append("g")
    .attr("transform", `translate(${PADDING * 2}, ${SVG_HEIGHT - PADDING})`)
    .attr("id", "x-axis")
    .style("font-size", "10px")
    .call(axisBottom(x));

  // Add the y-axis
  svg
    .append("g")
    .attr("transform", `translate(${PADDING * 2}, ${PADDING})`)
    .attr("id", "y-axis")
    .style("font-size", "10px")
    .call(axisLeft(y));

  //create legend
  const legend = svg.append("g").attr("id", "legend");
  createLegend(legend);

  //create text labels
  createTextLabels(svg);
});
