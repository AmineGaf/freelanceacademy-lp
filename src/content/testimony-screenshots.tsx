const SCREENSHOTS_BASE = "/assets/images/testimony-section/screenshots";

export const TESTIMONY_SCREENSHOTS_CONTENT = {
  ticket: "شهادات الطالبة",
  title: "شهادات حقيقية من اللي قراو عندنا",
  subtitle: "آراء و تقييمات الطالبة بعد ما جربوا الأكاديمي",
  screenshots: [
    "Capture d'écran 2025-10-16 123255.png",
    "Capture d'écran 2025-10-19 155605.png",
    "IMG_1484.jpg",
    "IMG_1485.jpg",
    "WhatsApp Image 2025-10-16 at 14.59.42.jpeg",
    "WhatsApp Image 2025-12-21 at 19.41.03.jpeg",
  ].map((name) => `${SCREENSHOTS_BASE}/${encodeURIComponent(name)}`),
};
