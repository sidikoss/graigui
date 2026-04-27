import { useState } from 'react'

const MOCK_LEADS = [
  { id: 1, name: 'Mamadou Diallo', school: 'École Primaire de Ratoma', status: 'Nouveau', date: '2024-04-25', quantity: 20 },
  { id: 2, name: 'Aminata Touré', school: 'Lycée de Kindia', status: 'Contacté', date: '2024-04-24', quantity: 50 },
  { id: 3, name: 'Ibrahim Kaba', school: 'Collège Boulbinet', status: 'Confirmé', date: '2024-04-23', quantity: 100 },
]

export default function LeadsDashboard() {
  const [leads, setLeads] = useState(MOCK_LEADS)

  return (
    <div className="card p-6 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-guinea-red">📈</span> Gestion des Leads
        </h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold">
            Total: {leads.length}
          </span>
          <span className="px-3 py-1 rounded-full bg-guinea-red/10 text-guinea-red text-xs font-bold">
            Nouveaux: {leads.filter(l => l.status === 'Nouveau').length}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-sm text-zinc-500">
              <th className="py-4 px-2">Client / École</th>
              <th className="py-4 px-2">Date</th>
              <th className="py-4 px-2">Quantité</th>
              <th className="py-4 px-2">Status</th>
              <th className="py-4 px-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="py-4 px-2">
                  <div className="font-bold text-zinc-900 dark:text-white">{lead.name}</div>
                  <div className="text-xs text-zinc-500">{lead.school}</div>
                </td>
                <td className="py-4 px-2 text-sm">{lead.date}</td>
                <td className="py-4 px-2">
                  <span className="font-medium">{lead.quantity} paquets</span>
                </td>
                <td className="py-4 px-2">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    lead.status === 'Confirmé' ? 'bg-green-100 text-green-700' :
                    lead.status === 'Contacté' ? 'bg-blue-100 text-blue-700' :
                    'bg-guinea-red/10 text-guinea-red'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="py-4 px-2 text-right">
                  <button className="text-guinea-red hover:underline text-sm font-bold">Gérer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
