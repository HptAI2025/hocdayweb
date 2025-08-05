export interface QuadraticSolution {
  a: number;
  b: number;
  c: number;
  discriminant: number;
  solutions: (number | { real: number; imaginary: number })[];
  type: "two_real" | "one_real" | "complex";
}

export function solveQuadratic(a: number, b: number, c: number): QuadraticSolution {
  if (a === 0) {
    throw new Error("Coefficient 'a' cannot be zero for a quadratic equation");
  }

  const discriminant = b * b - 4 * a * c;
  let solutions: (number | { real: number; imaginary: number })[] = [];
  let type: "two_real" | "one_real" | "complex";

  if (discriminant > 0) {
    // Two distinct real solutions
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const x1 = (-b + sqrtDiscriminant) / (2 * a);
    const x2 = (-b - sqrtDiscriminant) / (2 * a);
    solutions = [x1, x2];
    type = "two_real";
  } else if (discriminant === 0) {
    // One real solution (repeated root)
    const x = -b / (2 * a);
    solutions = [x];
    type = "one_real";
  } else {
    // Complex solutions
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    solutions = [
      { real: realPart, imaginary: imaginaryPart },
      { real: realPart, imaginary: -imaginaryPart }
    ];
    type = "complex";
  }

  return {
    a,
    b,
    c,
    discriminant,
    solutions,
    type
  };
}
