import QuadraticSolver from "@/components/QuadraticSolver";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Giải Phương Trình Bậc 2
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Giải phương trình dạng ax² + bx + c = 0
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <QuadraticSolver />

        {/* Information Panel */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Thông tin về phương trình bậc 2
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">Δ {'>'} 0</div>
              <div className="text-sm text-gray-600">
                Phương trình có<br />2 nghiệm phân biệt
              </div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-2">Δ = 0</div>
              <div className="text-sm text-gray-600">
                Phương trình có<br />1 nghiệm kép
              </div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">Δ {'<'} 0</div>
              <div className="text-sm text-gray-600">
                Phương trình có<br />2 nghiệm phức
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Công thức tổng quát:</h3>
            <div className="text-center font-mono text-lg">
              x = (-b ± √Δ) / 2a, với Δ = b² - 4ac
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 Giải Phương Trình Bậc 2 - Công cụ học tập toán học</p>
        </div>
      </footer>
    </div>
  );
}
