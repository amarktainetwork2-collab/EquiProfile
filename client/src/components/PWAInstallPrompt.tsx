import { Download, X, Smartphone } from "lucide-react";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { Button } from "@/components/ui/button";

/**
 * PWA Install Prompt Banner
 * Shows a dismissible banner when the app can be installed
 */
export function PWAInstallPrompt() {
  const { canInstall, install, dismiss } = usePWAInstall();

  if (!canInstall) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-sm z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl shadow-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-white/20 rounded-lg shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm">Install EquiProfile</h3>
            <p className="text-xs text-white/80 mt-0.5">
              Add to your home screen for quick access and offline support
            </p>
            <div className="flex gap-2 mt-3">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white text-indigo-700 hover:bg-white/90 h-8 text-xs"
                onClick={install}
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Install App
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 h-8 text-xs"
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
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
