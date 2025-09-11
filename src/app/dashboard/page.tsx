+export default function Dashboard() {
+    return (
+        <div className="h-full">
+            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
+            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
+                <div className="bg-white p-6 rounded-lg shadow-sm border">
+                    <h3 className="text-sm font-medium text-gray-500 mb-2">Total de Leads</h3>
+                    <p className="text-3xl font-bold text-gray-900">127</p>
+                </div>
+                <div className="bg-white p-6 rounded-lg shadow-sm border">
+                    <h3 className="text-sm font-medium text-gray-500 mb-2">Vendas do Mês</h3>
+                    <p className="text-3xl font-bold text-green-600">R$ 45.230</p>
+                </div>
+                <div className="bg-white p-6 rounded-lg shadow-sm border">
+                    <h3 className="text-sm font-medium text-gray-500 mb-2">Taxa de Conversão</h3>
+                    <p className="text-3xl font-bold text-blue-600">23%</p>
+                </div>
+                <div className="bg-white p-6 rounded-lg shadow-sm border">
+                    <h3 className="text-sm font-medium text-gray-500 mb-2">Negócios Ativos</h3>
+                    <p className="text-3xl font-bold text-orange-600">18</p>
+                </div>
+            </div>
+            <div className="bg-white p-6 rounded-lg shadow-sm border">
+                <h2 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h2>
+                <div className="space-y-3">
+                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
+                        <span className="text-gray-700">Novo lead adicionado</span>
+                        <span className="text-sm text-gray-500">2 min atrás</span>
+                    </div>
+                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
+                        <span className="text-gray-700">Proposta enviada para cliente</span>
+                        <span className="text-sm text-gray-500">1 hora atrás</span>
+                    </div>
+                    <div className="flex items-center justify-between py-2">
+                        <span className="text-gray-700">Reunião agendada</span>
+                        <span className="text-sm text-gray-500">3 horas atrás</span>
+                    </div>
+                </div>
+            </div>
+        </div>
+    );
+}
+