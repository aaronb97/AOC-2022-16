import { logResult } from "./logResult";
import { ints } from "./helpers";

function main(input: string, ...args: unknown[]) {
  const graph: Record<string, string[]> = {};
  const flows: Record<string, number> = {};
  const split = input.split("\n");

  for (const line of split) {
    const valves = line.match(/[A-Z]{2}/g);
    const flow = ints(line)[0];
    const group = [];
    for (let i = 1; i < valves.length; i++) {
      group.push(valves[i]);
    }

    if (flow > 0) {
      flows[valves[0]] = flow;
    }

    graph[valves[0]] = group;
  }

  let max = 0;

  const opened: Record<string, number> = {};

  const recurse = (node: string, step: number, prev: string | null) => {
    console.log(step);
    let nextStep = 1;
    if (flows[node] && !opened[node]) {
      opened[node] = step;
      nextStep++;
      prev = null;
    }

    if (
      step >= 30 ||
      Object.keys(flows).length === Object.keys(opened).length
    ) {
      console.log(step, opened);
      return;
    }

    for (const adj of graph[node]) {
      if (prev !== null || adj !== prev) {
        recurse(adj, nextStep + step, node);
      }
    }

    delete opened[node];
  };

  return graph;
}

// logResult("Main", "inputs/input.txt", main, 1);
logResult("Test", "inputs/testInput.txt", main);
