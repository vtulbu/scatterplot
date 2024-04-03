import {
  NumberValue,
  scaleLinear,
  min,
  max,
  ScaleLinear,
  format,
  timeFormat,
  axisBottom as d3AxisBottom,
  axisLeft as d3AxisLeft,
} from "d3";
import { PADDING, startDate, SVG_HEIGHT, SVG_WIDTH } from "./constants";

export const xScale = (
  dataset: Iterable<NumberValue>,
  accessor: (
    datum: NumberValue,
    index: number,
    array: Iterable<NumberValue>
  ) => any
) =>
  scaleLinear()
    .domain([min(dataset, accessor), max(dataset, accessor)])
    .range([0, SVG_WIDTH - PADDING * 3]);

export const yScale = (
  dataset: Iterable<NumberValue>,
  accessor: (
    datum: NumberValue,
    index: number,
    array: Iterable<NumberValue>
  ) => any
) =>
  scaleLinear()
    .domain([min(dataset, accessor), max(dataset, accessor)])
    .range([0, SVG_HEIGHT - PADDING * 2]);

export const axisBottom = (x: ScaleLinear<number, number, never>) =>
  d3AxisBottom(x).tickFormat(format("d"));

export const axisLeft = (y: ScaleLinear<number, number, never>) =>
  d3AxisLeft(y).tickFormat((_t, i) => {
    const date = new Date(startDate.getTime() + Number(i) * 15 * 1000);
    return timeFormat("%M:%S")(date);
  });
