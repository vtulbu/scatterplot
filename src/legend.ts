export const createLegend = (
  legend: d3.Selection<SVGGElement, unknown, HTMLElement, any>
) =>
  Array.from({ length: 2 }).forEach((_, i) => {
    const legendLabel = legend.append("g").attr("class", "legend-label");

    legendLabel
      .append("rect")
      .attr("x", 822)
      .attr("y", i * 40)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", i === 0 ? "rgb(255, 127, 14" : "rgb(31, 119, 180)")
      .attr("transform", "translate(0,250)");

    legendLabel
      .append("text")
      .attr("x", i === 0 ? 715 : 680)
      .attr("y", i * 40 + 12)
      .text(
        i === 0 ? "No doping allegations" : "Riders with doping allegations"
      )
      .style("font-size", "10px")
      .attr("transform", "translate(0,250)");
  });
