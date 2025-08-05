import { Calculator } from "lucide-react";
import StepByStep from "./StepByStep";
import type { QuadraticSolution } from "@/lib/quadratic";

interface ResultsPanelProps {
  solution: QuadraticSolution | null;
}

export default function ResultsPanel({ solution }: ResultsPanelProps) {
  if (!solution) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Kết quả giải
        </h2>
        
        <div className="text-center py-12 text-gray-500">
          <Calculator className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <p>Nhập hệ số và nhấn "Giải phương trình" để xem kết quả</p>
        </div>
      </div>
    );
  }

  const { a, b, c, discriminant, solutions, type } = solution;

  const formatSolution = (x: number | { real: number; imaginary: number }) => {
    if (typeof x === "number") {
      return x.toFixed(4).replace(/\.?0+$/, "");
    } else {
      const real = x.real.toFixed(4).replace(/\.?0+$/, "");
      const imag = Math.abs(x.imaginary).toFixed(4).replace(/\.?0+$/, "");
      const sign = x.imaginary >= 0 ? "+" : "-";
      return `${real} ${sign} ${imag}i`;
    }
  };

  const getDiscriminantInterpretation = () => {
    if (discriminant > 0) {
      return "Δ > 0: Phương trình có 2 nghiệm phân biệt";
    } else if (discriminant === 0) {
      return "Δ = 0: Phương trình có 1 nghiệm kép";
    } else {
      return "Δ < 0: Phương trình có 2 nghiệm phức";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Kết quả giải
      </h2>

      {/* Equation Summary */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">Phương trình:</h3>
        <div className="font-mono text-lg text-center">
          {a === 1 ? "" : a === -1 ? "-" : a}x² {b >= 0 && b !== 0 ? "+" : ""}{b !== 0 ? (b === 1 ? "" : b === -1 ? "-" : b) + "x" : ""} {c >= 0 && c !== 0 ? "+" : ""}{c !== 0 ? c : ""} = 0
        </div>
      </div>

      {/* Discriminant */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Tính biệt thức Δ:</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="font-mono mb-2">
            Δ = b² - 4ac = {b}² - 4({a})({c}) = {b * b} - {4 * a * c} = {discriminant}
          </div>
          <div className="text-sm text-gray-600">
            {getDiscriminantInterpretation()}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Nghiệm của phương trình:</h3>
        <div className="space-y-3">
          {type === "one_real" ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="font-mono text-lg">
                x = {formatSolution(solutions[0] as number)}
              </div>
            </div>
          ) : (
            solutions.map((solution, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-mono text-lg">
                  x{index + 1} = {formatSolution(solution)}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Step by Step Solution */}
      <StepByStep solution={solution} />
    </div>
  );
}
