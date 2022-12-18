/**
 * Return all numbers in a string
 */
export function ints(s: string) {
  return s.match(/\d+/g).map((x) => Number(x));
}

export function intersect(set1: Set<unknown>, set2: Set<unknown>) {
  const intersect = new Set();
  for (const x of set1) {
    if (set2.has(x)) intersect.add(x);
  }

  return intersect;
}

export function union(set1: Set<unknown>, set2: Set<unknown>) {
  const union = new Set();
  for (const x of set1) {
    union.add(x);
  }

  for (const x of set2) {
    union.add(x);
  }

  return union;
}

export function splitIndex(str: string, index: number) {
  return [str.slice(0, index), str.slice(index)];
}

export function areCoordinatesAdjacent(
  coord1: [number, number],
  coord2: [number, number]
): boolean {
  // Check if the coordinates are adjacent
  return (
    Math.abs(coord1[0] - coord2[0]) <= 1 && Math.abs(coord1[1] - coord2[1]) <= 1
  );
}

export function convertStringNumber(input: string): string | number {
  const num = Number(input);
  if (!isNaN(num)) {
    return num;
  } else {
    return input;
  }
}

export function logObject(...objs: unknown[]) {
  console.log(...objs.map((obj) => JSON.parse(JSON.stringify(obj))));
}

export function createGrid<T>(x: number, y?: number, value?: T): T[][] {
  if (y === undefined) y = x;

  const grid: T[][] = [];
  for (let i = 0; i < x; i++) {
    grid[i] = [];

    if (value !== undefined) {
      for (let j = 0; j < y; j++) {
        grid[i][j] = value;
      }
    }
  }
  return grid;
}

export function range(x: number, y: number): number[] {
  const arr: number[] = [];
  if (y >= x) {
    for (let i = x; i <= y; i++) {
      arr.push(i);
    }
  } else {
    for (let i = x; i >= y; i--) {
      arr.push(i);
    }
  }
  return arr;
}

export function swap<T>(x: T, y: T): [T, T] {
  return [y, x];
}

export function arrayToString(arr: unknown[][]) {
  return arr.map((row) => row.join("")).join("\n");
}

export function sum(arr: number[]) {
  return arr.reduce((total, current) => total + current, 0);
}

//TODO: add more helpers
