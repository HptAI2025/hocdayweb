import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import EquationDisplay from "./EquationDisplay";
import ResultsPanel from "./ResultsPanel";
import { solveQuadratic, type QuadraticSolution } from "@/lib/quadratic";

const coefficientSchema = z.object({
  a: z.number().refine((val) => val !== 0, {
    message: "Hệ số a phải khác 0 để tạo thành phương trình bậc 2"
  }),
  b: z.number(),
  c: z.number()
});

type CoefficientForm = z.infer<typeof coefficientSchema>;

export default function QuadraticSolver() {
  const [solution, setSolution] = useState<QuadraticSolution | null>(null);
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CoefficientForm>({
    resolver: zodResolver(coefficientSchema),
    defaultValues: { a: 1, b: 0, c: 0 }
  });

  const watchedValues = watch();

  const onSubmit = (data: CoefficientForm) => {
    try {
      const result = solveQuadratic(data.a, data.b, data.c);
      setSolution(result);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setSolution(null);
    }
  };

  const onReset = () => {
    reset({ a: 1, b: 0, c: 0 });
    setSolution(null);
    setHasError(false);
  };

  const loadExample = (a: number, b: number, c: number) => {
    setValue("a", a);
    setValue("b", b);
    setValue("c", c);
    setSolution(null);
    setHasError(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Nhập hệ số phương trình
        </h2>
        
        <EquationDisplay a={watchedValues.a} b={watchedValues.b} c={watchedValues.c} />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Coefficient A */}
          <div className="relative">
            <Input
              {...register("a", { valueAsNumber: true })}
              type="number"
              step="any"
              id="coefficient-a"
              className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-transparent"
              placeholder="Hệ số a"
            />
            <Label
              htmlFor="coefficient-a"
              className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-blue-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Hệ số a (khác 0)
            </Label>
          </div>

          {/* Coefficient B */}
          <div className="relative">
            <Input
              {...register("b", { valueAsNumber: true })}
              type="number"
              step="any"
              id="coefficient-b"
              className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors placeholder-transparent"
              placeholder="Hệ số b"
            />
            <Label
              htmlFor="coefficient-b"
              className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-green-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-600"
            >
              Hệ số b
            </Label>
          </div>

          {/* Coefficient C */}
          <div className="relative">
            <Input
              {...register("c", { valueAsNumber: true })}
              type="number"
              step="any"
              id="coefficient-c"
              className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors placeholder-transparent"
              placeholder="Hệ số c"
            />
            <Label
              htmlFor="coefficient-c"
              className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-purple-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
            >
              Hệ số c
            </Label>
          </div>

          {/* Error Messages */}
          {(errors.a || hasError) && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {errors.a?.message || "Đã xảy ra lỗi khi tính toán"}
              </AlertDescription>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Giải phương trình
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onReset}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              Xóa
            </Button>
          </div>
        </form>

        {/* Examples Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Ví dụ:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              variant="ghost"
              onClick={() => loadExample(1, 2, 1)}
              className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors justify-start h-auto"
            >
              <div>
                <div className="font-mono text-sm">x² + 2x + 1 = 0</div>
                <div className="text-xs text-gray-600">1 nghiệm kép</div>
              </div>
            </Button>
            <Button
              variant="ghost"
              onClick={() => loadExample(1, 0, -4)}
              className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors justify-start h-auto"
            >
              <div>
                <div className="font-mono text-sm">x² - 4 = 0</div>
                <div className="text-xs text-gray-600">2 nghiệm phân biệt</div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Results Panel */}
      <ResultsPanel solution={solution} />
    </div>
  );
}
