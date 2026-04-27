import LeadsDashboard from '../components/LeadsDashboard'
import { SEOHead } from '../components/seo/SEOMeta'

export default function AdminPage() {
  return (
    <>
      <SEOHead title="Administration | Craigui" robots="noindex, nofollow" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Tableau de Bord Craigui</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">Suivez vos commandes et vos clients en temps réel.</p>
        </header>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LeadsDashboard />
          </div>
          
          <div className="space-y-8">
            <div className="card p-6 bg-zinc-900 text-white">
              <h3 className="text-xl font-bold mb-4">Objectif Mois</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Ventes</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-guinea-red w-3/4" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Nouveaux Clients</span>
                    <span>40%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-guinea-yellow w-2/5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 border-guinea-green/20 bg-guinea-green/5">
              <h3 className="text-xl font-bold text-guinea-green mb-2">Support Technique</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Besoin d'aide avec l'administration ? Contactez le support technique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
