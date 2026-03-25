import { Download, X, Smartphone, Star } from "lucide-react";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { Button } from "@/components/ui/button";

/**
 * PWA Install Prompt Banner
 * Shows a dismissible banner when the app can be installed to home screen
 */
export function PWAInstallPrompt() {
  const { canInstall, install, dismiss } = usePWAInstall();

  if (!canInstall) return null;

  return (
    <div className="fixed bottom-20 left-3 right-3 md:bottom-6 md:left-auto md:right-5 md:max-w-[340px] z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950/80 to-slate-900 text-white rounded-2xl shadow-2xl border border-white/10 p-4">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10" />

        <div className="flex items-start gap-3 relative">
          {/* App icon placeholder */}
          <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
            <Smartphone className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <h3 className="font-bold text-sm">EquiProfile</h3>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-white/60 leading-tight">
              Install to your home screen for the full app experience — fast, offline-ready, and always accessible.
            </p>

            <div className="flex gap-2 mt-3">
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 h-8 text-xs font-semibold px-3 gap-1.5"
                onClick={install}
              >
                <Download className="w-3.5 h-3.5" />
                Install App
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white/60 hover:text-white hover:bg-white/10 h-8 text-xs"
                onClick={dismiss}
              >
                Not now
              </Button>
            </div>
          </div>

          <button
            onClick={dismiss}
            className="p-1 hover:bg-white/10 rounded-md transition-colors shrink-0"
            aria-label="Dismiss install prompt"
          >
            <X className="w-4 h-4 text-white/50" />
          </button>
        </div>
      </div>
    </div>
  );
}
