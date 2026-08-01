import { Attraction, CityVideo, DayPlan, Hotel } from "./types";

export const DAYS: DayPlan[] = [
  { day: 1, date: "10/22（四）", title: "台北 → 巴塞隆納 → 馬德里", subtitle: "抵達日只移動，不追景點", emoji: "plane", highlights: [
    { icon: "plane", time: "13:25", title: "抵達巴塞隆納", description: "入境、領行李後前往 Barcelona Sants；長途航班後保留充足緩衝。", duration: "約 2.5–3h" },
    { icon: "train", time: "17:25 之後", title: "前往馬德里", description: "選擇傍晚直達 Madrid Puerta de Atocha 的高速列車，避免原規劃 15:00 班次的轉乘風險。", duration: "約 2h40m–3h20m", link: "https://www.renfe.com/" },
    { icon: "hotel", time: "晚上", title: "入住馬德里", description: "抵達後只安排飯店入住與附近晚餐，視體力短暫散步。" },
  ], transport: { mode: "✈️＋🚄", from: "台北 TPE", to: "馬德里", duration: "全日移動", details: "BCN 入境後轉乘傍晚高速列車；不要購買 15:00 班次。" } },
  { day: 2, date: "10/23（五）", title: "馬德里 — 藝術與舊城", subtitle: "普拉多、麗池公園、城市核心", emoji: "art", highlights: [
    { icon: "art", time: "09:30–12:30", title: "普拉多美術館", description: "集中欣賞委拉斯奎茲、哥雅與葛雷柯代表作。", duration: "3h", tip: "建議預約上午時段", link: "https://www.museodelprado.es/" },
    { icon: "leaf", time: "12:30–15:00", title: "麗池公園＋午餐", description: "慢走人工湖與林蔭大道，保留完整午餐時間。" },
    { icon: "city", time: "傍晚", title: "Sol → Plaza Mayor", description: "沿太陽門、馬約爾廣場與 Mercado de San Miguel 漫步，晚上到 San Ginés 吃 Churros。" },
  ] },
  { day: 3, date: "10/24（六）", title: "馬德里 — 王室與現代藝術", subtitle: "皇宮、La Latina、自由選擇", emoji: "crown", highlights: [
    { icon: "crown", time: "09:30–12:00", title: "馬德里皇宮", description: "參觀皇家廳室，順遊 Almudena Cathedral。", duration: "2.5h", tip: "提前預約入場時段", link: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
    { icon: "city", time: "12:30–14:30", title: "La Latina 午餐", description: "在老城小巷享用 Tapas，避免跨城趕場。" },
    { icon: "theater", time: "15:30–17:30", title: "Reina Sofía 或 Bernabéu", description: "藝術愛好者看《格爾尼卡》；足球迷則改選球場導覽，兩者擇一。" },
    { icon: "sunset", time: "傍晚", title: "德波神廟", description: "以城市夕陽為馬德里行程收尾。" },
  ] },
  { day: 4, date: "10/25（日）", title: "馬德里 → 格拉納達", subtitle: "第二個住宿基地", emoji: "train", highlights: [
    { icon: "train", time: "上午", title: "直達格拉納達", description: "依正式售票班次選擇上午直達列車，不預設尚未公布的固定時間。", duration: "約 3h30m", link: "https://www.renfe.com/" },
    { icon: "hotel", time: "下午", title: "入住格拉納達", description: "寄放行李後再開始山城行程。" },
    { icon: "city", time: "15:30–18:30", title: "Albaicín 老城", description: "漫步白色巷弄，預留坡道與休息時間。" },
    { icon: "sunset", time: "日落前", title: "San Nicolás 觀景台", description: "遠眺 Alhambra 與內華達山脈，晚上到市中心吃 Tapas。" },
  ], transport: { mode: "🚄 高速列車", from: "Madrid Atocha", to: "Granada", duration: "約 3h30m", details: "以售票時公布的直達班次為準。" } },
  { day: 5, date: "10/26（一）", title: "格拉納達 — Alhambra 全日", subtitle: "全程最重要的預約", emoji: "landmark", highlights: [
    { icon: "landmark", time: "08:30–13:30", title: "Alhambra 宮殿群", description: "完整參觀 Nasrid Palaces、Alcazaba、Generalife 與 Carlos V Palace。", duration: "4–5h", tip: "依票面時刻準時抵達 Nasrid Palaces，攜帶購票證件", link: "https://tickets.alhambra-patronato.es/en/" },
    { icon: "food", time: "14:00–15:30", title: "午餐與休息", description: "上午步行量大，下午刻意放慢節奏。" },
    { icon: "church", time: "16:00–18:00", title: "大教堂＋皇家禮拜堂", description: "了解天主教雙王與格拉納達歷史；若疲累可延後或取消。" },
  ] },
  { day: 6, date: "10/27（二）", title: "格拉納達 → 巴塞隆納", subtitle: "飛行日不綁定熱門門票", emoji: "flight", highlights: [
    { icon: "flight", time: "上午", title: "飛往巴塞隆納", description: "搭乘直飛班機，預留往返機場、報到與領行李時間。", duration: "飛行約 1h30m" },
    { icon: "hotel", time: "下午", title: "入住巴塞隆納", description: "第三個也是最後一個住宿基地，連住五晚。" },
    { icon: "cityscape", time: "傍晚", title: "Passeig de Gràcia", description: "輕鬆看 Casa Batlló、Casa Milà 外觀，在 Gràcia 區晚餐。" },
  ], transport: { mode: "✈️ 國內線", from: "Granada GRX", to: "Barcelona BCN", duration: "飛行約 1h30m", details: "移動日下午不安排聖家堂等定時票。" } },
  { day: 7, date: "10/28（三）", title: "巴塞隆納 — 聖家堂區", subtitle: "高第與現代主義的第一日", emoji: "landmark", highlights: [
    { icon: "landmark", time: "09:30–12:00", title: "聖家堂", description: "欣賞彩繪玻璃與高第的森林式空間；登塔依開放狀況安排。", duration: "2–2.5h", tip: "門票通常約提前兩個月開放", link: "https://sagradafamilia.org/en/tickets" },
    { icon: "building", time: "14:00–16:00", title: "Sant Pau 建築群", description: "沿 Avinguda de Gaudí 步行前往，路線集中、不需跨城。" },
    { icon: "city", time: "傍晚", title: "自由散步", description: "回飯店休息或前往 Glòries，不再增加付費景點。" },
  ] },
  { day: 8, date: "10/29（四）", title: "巴塞隆納 — Passeig de Gràcia", subtitle: "兩座高第住宅，保留慢旅行節奏", emoji: "art", highlights: [
    { icon: "house", time: "09:30–11:15", title: "Casa Batlló", description: "體驗高第海洋意象與沉浸式導覽。", duration: "1.5h", link: "https://www.casabatllo.es/en/" },
    { icon: "food", time: "11:30–14:00", title: "大道散步＋午餐", description: "不把三個高第景點硬塞在同一天。" },
    { icon: "building", time: "14:30–16:30", title: "Casa Milà", description: "參觀公寓、閣樓與屋頂煙囪。", duration: "1.5–2h" },
    { icon: "city", time: "傍晚", title: "Gràcia 街區", description: "廣場、獨立商店與在地晚餐。" },
  ] },
  { day: 9, date: "10/30（五）", title: "巴塞隆納 — Park Güell 與舊城", subtitle: "童話花園走進中世紀街巷", emoji: "park", highlights: [
    { icon: "park", time: "09:00–11:30", title: "Park Güell", description: "上午參觀紀念碑區，避開午後較多人潮。", duration: "2h", tip: "預約指定入場時段" },
    { icon: "city", time: "13:30–16:30", title: "Gothic Quarter", description: "主教座堂、主教橋與隱藏廣場，午餐後慢慢步行。" },
    { icon: "landmark", time: "傍晚", title: "El Born", description: "視體力加入音樂宮導覽或在 El Born 用餐。" },
  ] },
  { day: 10, date: "10/31（六）", title: "巴塞隆納 — 彈性日", subtitle: "Montserrat 或城市慢遊二選一", emoji: "sunset", highlights: [
    { icon: "mountain", time: "選項 A", title: "Montserrat 日遊", description: "天氣良好時前往修道院與山區，當日往返、不更換住宿。" },
    { icon: "city", time: "選項 B", title: "Barcelona 自由日", description: "Boqueria、La Rambla、Barceloneta 與海鮮晚餐；適合旅程末段放慢。" },
    { icon: "food", time: "晚上", title: "告別晚餐", description: "依當日體力與天氣臨時決定，不預塞過多景點。" },
  ] },
  { day: 11, date: "11/1（日）", title: "巴塞隆納 → 台北", subtitle: "從同一基地從容返程", emoji: "plane", highlights: [
    { icon: "plane", title: "前往 BCN 機場", description: "依航班時間提早出發，結束三座城市、只換兩次住宿的西班牙之旅。" },
  ] },
];

export const HOTELS: Hotel[] = [
  { name: "Madrid 住宿基地", city: "Madrid（10/22–24）", nights: 3, stars: 0, priceRange: "依房型與檔期", description: "建議選 Atocha、Sol 或 Gran Vía；兼顧首日抵達、景點與前往 Granada。", highlights: ["連住3晚", "Atocha交通最省力", "Sol／Gran Vía適合步行觀光"], image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1000&q=80", bookingLinks: [{ name: "搜尋 Madrid 住宿", url: "https://www.booking.com/city/es/madrid.html" }] },
  { name: "Granada 住宿基地", city: "Granada（10/25–26）", nights: 2, stars: 0, priceRange: "依房型與檔期", description: "想要特殊體驗可選 Parador；重視交通則住 Centro、Plaza Nueva 一帶。", highlights: ["連住2晚", "Centro用餐方便", "Parador需最早預訂"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=1000&q=80", bookingLinks: [{ name: "Parador de Granada", url: "https://paradores.es/en/parador-de-granada" }, { name: "搜尋 Granada 住宿", url: "https://www.booking.com/city/es/granada.html" }], note: "Parador 房數有限；住宿不包含 Alhambra 門票。" },
  { name: "Barcelona 住宿基地", city: "Barcelona（10/27–31）", nights: 5, stars: 0, priceRange: "依房型與檔期", description: "Eixample 最適合本行程，前往高第建築、舊城與機場都方便。", highlights: ["連住5晚", "全程最後一次換宿", "Eixample交通與餐飲均衡"], image: "https://images.unsplash.com/photo-1507619579562-f2e10da1ec86?w=1000&q=80", bookingLinks: [{ name: "搜尋 Barcelona 住宿", url: "https://www.booking.com/city/es/barcelona.html" }] },
];

export const ATTRACTIONS: Attraction[] = [
  { name: "普拉多美術館", city: "Madrid", emoji: "art", description: "西班牙古典藝術核心收藏。", tips: ["預留3小時", "提前選定必看作品", "建議上午入場"], image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=1000&q=80", timeNeeded: "3h", ticketLink: "https://www.museodelprado.es/" },
  { name: "馬德里皇宮", city: "Madrid", emoji: "crown", description: "王室歷史與宏偉廳室。", tips: ["預約時段", "與Almudena Cathedral同遊", "約2–2.5小時"], image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1000&q=80", timeNeeded: "2.5h", ticketLink: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
  { name: "Alhambra", city: "Granada", emoji: "landmark", description: "本次旅程最重要的摩爾建築與花園。", tips: ["最優先購票", "Nasrid依票面時間進場", "攜帶購票證件"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=1000&q=80", timeNeeded: "4–5h", ticketLink: "https://tickets.alhambra-patronato.es/en/" },
  { name: "聖家堂", city: "Barcelona", emoji: "church", description: "高第最具代表性的建築。", tips: ["約提前兩個月留意售票", "選上午時段", "登塔視開放狀況"], image: "https://images.unsplash.com/photo-1656597787628-62741d181641?w=1000&q=80", timeNeeded: "2–2.5h", ticketLink: "https://sagradafamilia.org/en/tickets" },
  { name: "Casa Batlló＋Casa Milà", city: "Barcelona", emoji: "house", description: "集中於 Passeig de Gràcia 的兩座高第住宅。", tips: ["分上下午參觀", "中間保留午餐", "不與Park Güell同日硬塞"], image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=1000&q=80", timeNeeded: "半日", ticketLink: "https://www.casabatllo.es/en/" },
  { name: "Park Güell", city: "Barcelona", emoji: "park", description: "高第的戶外童話世界與城市景觀。", tips: ["預約上午", "穿好走的鞋", "與舊城分上下半日"], image: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?w=1000&q=80", timeNeeded: "2h", ticketLink: "https://parkguell.barcelona/" },
];

export const CITY_VIDEOS: CityVideo[] = [
  { city: "馬德里 Madrid", embedId: "l1qH6XLC-2I", title: "Madrid Travel Guide" },
  { city: "格拉納達 Granada", embedId: "fL2Mno5ll9k", title: "Granada & Alhambra Guide" },
  { city: "巴塞隆納 Barcelona", embedId: "wMfVjW7ldUc", title: "Barcelona Travel Guide" },
];

export const CITY_INFO = [
  { name: "馬德里", coords: [40.4168, -3.7038] as [number, number], emoji: "crown", desc: "3晚" },
  { name: "格拉納達", coords: [37.1773, -3.5986] as [number, number], emoji: "landmark", desc: "2晚" },
  { name: "巴塞隆納", coords: [41.3874, 2.1686] as [number, number], emoji: "art", desc: "5晚" },
];
