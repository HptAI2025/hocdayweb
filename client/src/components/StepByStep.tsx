import type { QuadraticSolution } from "@/lib/quadratic";

interface StepByStepProps {
  solution: QuadraticSolution;
}

export default function StepByStep({ solution }: StepByStepProps) {
  const { a, b, c, discriminant } = solution;

  return (
    <div className="border-t border-gray-200 pt-6">
      <h3 className="font-semibold text-gray-900 mb-3">Các bước giải:</h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>
          <div>
            <div className="font-semibold">Xác định hệ số:</div>
            <div className="text-gray-600">a = {a}, b = {b}, c = {c}</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
          <div>
            <div className="font-semibold">Tính biệt thức:</div>
            <div className="text-gray-600">Δ = b² - 4ac = {discriminant}</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
          <div>
            <div className="font-semibold">
              {discriminant >= 0 ? "Áp dụng công thức nghiệm:" : "Tính nghiệm phức:"}
            </div>
            <div className="text-gray-600">
              {discriminant >= 0 
                ? "x = (-b ± √Δ) / 2a" 
                : "x = (-b ± i√|Δ|) / 2a"
              }
            </div>
          </div>
        </div>
        {discriminant >= 0 && (
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
            <div>
              <div className="font-semibold">Thay số và tính toán:</div>
              <div className="text-gray-600">
                x = ({-b} ± √{discriminant}) / {2 * a}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
