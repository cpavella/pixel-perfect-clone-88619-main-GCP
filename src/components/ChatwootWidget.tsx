import { useEffect } from "react";

const BASE_URL = "https://p-chatwoot-girardota-chatwoot.axhtza.easypanel.host";
const WEBSITE_TOKEN = "hRY8CinA2DiGpABaHZFJRGh2";

declare global {
  interface Window {
    chatwootSDK?: { run: (opts: { websiteToken: string; baseUrl: string }) => void };
    chatwootSettings?: Record<string, unknown>;
  }
}

export function ChatwootWidget() {
  useEffect(() => {
    if (document.getElementById("chatwoot-sdk")) return;

    window.chatwootSettings = {
      position: "right",
      type: "standard",
      launcherTitle: "Asistente virtual",
      locale: "es",
    };

    const script = document.createElement("script");
    script.id = "chatwoot-sdk";
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: WEBSITE_TOKEN,
        baseUrl: BASE_URL,
      });
    };
    document.head.appendChild(script);
  }, []);

  return null;
}
