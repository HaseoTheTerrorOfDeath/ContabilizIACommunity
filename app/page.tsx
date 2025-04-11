'use client';

import { useRouter } from 'next/navigation';
import { Calculator, FileText, Wallet, PieChart } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ContabilizIA</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Contabilidade Inteligente para Todos</h2>
        <p className="text-xl text-gray-600 mb-8">
          Simplifique sua vida financeira com nossa IA especializada em contabilidade
        </p>
        <button
          onClick={() => router.push('/chatbot')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Vamos lá!
        </button>
      </main>

      <footer className="bg-white py-6 mt-10">
        <div className="text-center text-gray-500 text-sm">
          © 2025 ContabilizIA. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

