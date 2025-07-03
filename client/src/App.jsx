import { useEffect } from "react";

const PUBLIC_KEY = "BPfl4ea9WMRkQeWqrRO2Cn6dBYo3Mz1rwCjTSpgNuvixMq9Tphb6blcFzxmX9U2wRi5vj_yoCLxf9dPwEyNy2nY";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(async registration => {
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(PUBLIC_KEY),
        });

        await fetch("http://localhost:5000/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscription),
        }).then(res => {
          if (res.ok) {
            console.log("✅ Berhasil subscribe ke backend");
          } else {
            console.error("❌ Gagal subscribe ke backend");
          }
        });
      });
    }
  }, []);

  const kirimNotifikasi = () => {
    fetch("http://localhost:5000/send", {
      method: "POST",
    });
  };

  return (
    <div>
      <h1>Demo Web Push Notification</h1>
      <button onClick={kirimNotifikasi}>Kirim Notifikasi</button>
    </div>
  );
}

export default App;
