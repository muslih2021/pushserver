const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

const app = express();
app.use(cors());
app.use(express.json()); // Gantilah body-parser

const vapidKeys = {
	publicKey:
		"BPfl4ea9WMRkQeWqrRO2Cn6dBYo3Mz1rwCjTSpgNuvixMq9Tphb6blcFzxmX9U2wRi5vj_yoCLxf9dPwEyNy2nY",
	privateKey: "ybYr5T1H7wFh3dH_DmdRK2Jk5-m-YacDdLqltyJ-ep4",
};

webpush.setVapidDetails(
	"mailto:kamu@email.com",
	vapidKeys.publicKey,
	vapidKeys.privateKey
);

let subscription = null;

app.post("/subscribe", (req, res) => {
	console.log("📩 Menerima subscription:");
	console.log(JSON.stringify(req.body, null, 2)); // Tampilkan isinya dengan rapi
	subscription = req.body;
	res.status(201).json({ message: "Subscribed" });
});

app.post("/send", async (req, res) => {
	if (!subscription) {
		console.log("⚠️ Tidak ada subscription tersimpan.");
		return res.status(400).json({ error: "No subscription" });
	}

	const payload = JSON.stringify({
		title: "Halo!",
		body: "Kamu menekan tombol notifikasi 🎉",
	});

	try {
		await webpush.sendNotification(subscription, payload);
		console.log("✅ Notifikasi berhasil dikirim");
		res.status(200).json({ success: true });
	} catch (err) {
		console.error("❌ Gagal kirim notifikasi:", err);
		res.status(500).json({ error: "Failed to send push" });
	}
});

app.listen(5000, () => {
	console.log("✅ Backend jalan di http://localhost:5000");
});
