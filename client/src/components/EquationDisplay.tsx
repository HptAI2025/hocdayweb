interface EquationDisplayProps {
  a: number;
  b: number;
  c: number;
}

export default function EquationDisplay({ a, b, c }: EquationDisplayProps) {
  const formatCoefficient = (coeff: number, variable: string, isFirst: boolean = false) => {
    if (coeff === 0) return "";
    
    let sign = "";
    let value = Math.abs(coeff);
    
    if (!isFirst) {
      sign = coeff > 0 ? " + " : " - ";
    } else if (coeff < 0) {
      sign = "-";
    }
    
    if (variable && value === 1) {
      return `${sign}${variable}`;
    }
    
    return `${sign}${value}${variable}`;
  };

  const formatEquation = () => {
    let equation = "";
    
    // Handle coefficient a
    if (a === 1) {
      equation = "x²";
    } else if (a === -1) {
      equation = "-x²";
    } else {
      equation = `${a}x²`;
    }
    
    // Handle coefficient b
    const bTerm = formatCoefficient(b, "x");
    equation += bTerm;
    
    // Handle coefficient c
    const cTerm = formatCoefficient(c, "");
    equation += cTerm;
    
    return equation + " = 0";
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <div className="text-center">
        <span className="text-lg font-mono">
          {formatEquation()}
        </span>
      </div>
    </div>
  );
}
