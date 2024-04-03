export const createTextLabels = (
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
) => {
  svg
    .append("text")
    .attr("y", 30)
    .attr("x", 250)
    .text("Doping in Professional Bicycle Racing")
    .style("font-size", "30px");

  svg
    .append("text")
    .attr("x", 350)
    .attr("y", 55)
    .text("35 Fastest times up Alpe d'Huez")
    .style("font-size", "20px");

  svg
    .append("text")
    .attr("x", -30)
    .attr("y", -130)
    .text("Time in Minutes")
    .style("font-size", "18px")
    .attr("transform", "rotate(270, 200, 20)");
};
