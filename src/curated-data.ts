import { Attraction, CityVideo, DayPlan, Hotel } from "./types";

export const DAYS: DayPlan[] = [
  { day: 1, date: "10/22（四）", title: "台北 → 巴塞隆納 → 馬德里", subtitle: "抵達日只移動，不追景點", emoji: "plane", highlights: [
    { icon: "plane", time: "13:25", title: "抵達巴塞隆納", description: "入境、領行李後前往 Barcelona Sants；長途航班後保留充足緩衝。", duration: "約 2.5–3h" },
    { icon: "train", time: "17:25 之後", title: "前往馬德里", description: "選擇傍晚直達 Madrid Puerta de Atocha 的高速列車，避免原規劃 15:00 班次的轉乘風險。", duration: "約 2h40m–3h20m", link: "https://www.renfe.com/" },
    { icon: "hotel", time: "15:00 後", title: "入住 Atocha 公寓（已預訂）", description: "Piso elegante Atocha 2H/2B by Berlany España，Calle de Atocha 94。自助入住連結會於抵達前 24 小時傳至手機。", tip: "10/26 11:00 前退房；門鎖密碼請勿放在公開頁面" },
  ], transport: { mode: "✈️＋🚄", from: "台北 TPE", to: "馬德里", duration: "全日移動", details: "BCN 入境後轉乘傍晚高速列車；不要購買 15:00 班次。" } },
  { day: 2, date: "10/23（五）", title: "馬德里 — 藝術與舊城", subtitle: "普拉多、麗池公園、城市核心", emoji: "art", highlights: [
    { icon: "art", time: "10:00–13:00", title: "普拉多美術館", description: "集中欣賞委拉斯奎茲、哥雅與葛雷柯代表作。", duration: "3h", tip: "預約 10:00 開館首批時段", link: "https://www.museodelprado.es/" },
    { icon: "leaf", time: "12:30–15:00", title: "麗池公園＋午餐", description: "慢走人工湖與林蔭大道，保留完整午餐時間。" },
    { icon: "city", time: "傍晚", title: "Sol → Plaza Mayor", description: "沿太陽門、馬約爾廣場與 Mercado de San Miguel 漫步，晚上到 San Ginés 吃 Churros。" },
  ] },
  { day: 3, date: "10/24（六）", title: "馬德里 — 王室與足球彈性日", subtitle: "與10/25依正式開球日互換", emoji: "crown", highlights: [
    { icon: "crown", time: "10:00–12:30", title: "馬德里皇宮", description: "參觀皇家廳室，順遊 Almudena Cathedral。", duration: "2.5h", tip: "預約 10:00 首批時段，09:45 抵達", link: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
    { icon: "city", time: "12:30–14:30", title: "La Latina 午餐", description: "在老城小巷享用 Tapas，避免跨城趕場。" },
    { icon: "theater", time: "15:30–17:30", title: "Reina Sofía 或 Bernabéu Tour", description: "若今天沒有球賽，藝術愛好者看《格爾尼卡》；足球迷可參觀 Bernabéu。" },
    { icon: "sunset", time: "傍晚", title: "德波神廟", description: "以城市夕陽為馬德里行程收尾。" },
  ] },
  { day: 4, date: "10/25（日）", title: "馬德里 — Atlético 主場候選日", subtitle: "Atlético Madrid vs RC Deportivo", emoji: "soccer", highlights: [
    { icon: "soccer", time: "10/24 或 10/25・待定", title: "Atlético Madrid vs RC Deportivo", description: "西甲第10輪，Riyadh Air Metropolitano 主場。對戰與週末已確認，確切日期及開球時間尚未公布。", tip: "只從 Atlético 官方票務購買；先登記 Avísame 到貨通知", link: "https://www.atleticodemadrid.com/abonos" },
    { icon: "city", time: "非比賽時段", title: "Bernabéu Tour 或 Madrid 自由活動", description: "Real Madrid 本週末作客 Barcelona，Bernabéu 沒有男子一隊主場賽。" },
    { icon: "train", time: "睡前確認", title: "隔日交通保留彈性", description: "若比賽排週日晚場，10/26 選中午左右前往 Sevilla 的班次。" },
  ] },
  { day: 5, date: "10/26（一）", title: "馬德里 → 塞維亞", subtitle: "高速列車南下，下午輕鬆探索", emoji: "train", highlights: [
    { icon: "train", time: "建議 10:00–13:00 出發", title: "Madrid Atocha → Sevilla Santa Justa", description: "鎖定中午前後的直達 AVE／iryo；常態行車約2小時40分，最終班次以售票頁為準。", duration: "約 2h40m", link: "https://www.renfe.com/" },
    { icon: "hotel", time: "16:00 起", title: "入住 Hotel Rey Alfonso X（已預訂）", description: "庭院景標準雙人房加床，2 成人＋1 位兒童；位於 Santa Cruz 核心區。", tip: "Room Only；10/25 前免費取消，10/28 12:00 前退房" },
    { icon: "cityscape", time: "傍晚", title: "Santa Cruz＋河畔", description: "走到黃金塔與 Triana，晚餐品嘗 Sevilla Tapas。" },
  ], transport: { mode: "🚄 AVE／iryo", from: "Madrid Atocha", to: "Sevilla Santa Justa", duration: "約 2h40m", details: "球賽若排10/25晚場，優先選10/26中午班次。" } },
  { day: 6, date: "10/27（二）", title: "塞維亞 — 王宮、教堂與佛朗明哥", subtitle: "完整的一天留給安達魯西亞首府", emoji: "dance", highlights: [
    { icon: "castle", time: "09:30–12:00", title: "Real Alcázar", description: "十月採冬季時段，預約09:30首批入場。", duration: "2.5h", link: "https://alcazarsevilla.org/prepara-la-visita/" },
    { icon: "church", time: "14:00–16:00", title: "Sevilla Cathedral＋Giralda", description: "午餐後參觀大教堂與登塔。", duration: "2h" },
    { icon: "cityscape", time: "16:30–18:30", title: "Plaza de España", description: "傍晚光線較柔和，順遊 María Luisa 公園。" },
    { icon: "dance", time: "20:00 後", title: "佛朗明哥表演", description: "選 Santa Cruz 或 Triana 正規場館，提前預約。" },
  ] },
  { day: 7, date: "10/28（三）", title: "塞維亞 → 格拉納達", subtitle: "上午移動，午後進入摩爾老城", emoji: "train", highlights: [
    { icon: "hotel", time: "搭車前", title: "Hotel Rey Alfonso X 退房", description: "依最終車次提早辦理退房，飯店規定最晚 12:00 前。" },
    { icon: "train", time: "建議 07:14 起的上午班次", title: "Sevilla Santa Justa → Granada", description: "Renfe 官方目前列出首班自07:14起；鎖定上午直達 Avant，約2小時30分。", duration: "約 2h30m", link: "https://www.renfe.com/es/es/experiencias/rutas/sevilla-granada" },
    { icon: "hotel", time: "15:00 起", title: "入住 Room Mate Leo（已預訂）", description: "Deluxe room，2 位成人、2 晚，含早餐；位於 Campo Verde 1 的 Centro 核心區。", tip: "10/21 前可免費取消；10/30 12:00 前退房" },
    { icon: "city", time: "15:00–18:30", title: "Albaicín＋San Nicolás", description: "搭車上坡後步行下行，日落前抵達觀景台。" },
  ], transport: { mode: "🚄 Avant", from: "Sevilla Santa Justa", to: "Granada", duration: "約 2h30m", details: "建議選上午直達班次；正式時刻開賣後再鎖定。" } },
  { day: 8, date: "10/29（四）", title: "格拉納達 — Alhambra 全日", subtitle: "全程最優先預約", emoji: "landmark", highlights: [
    { icon: "train", time: "07:45", title: "從 Room Mate Leo 出發", description: "搭計程車或市區公車前往 Alhambra，目標 08:15–08:25 抵達園區。" },
    { icon: "landmark", time: "09:00 Nasrid 入場", title: "Alhambra 宮殿群（已預訂）", description: "Alhambra General Visit，包含 Nasrid Palaces、Alcazaba、Partal 與 Generalife；園區其他區域自 08:30 起參觀。", duration: "4–5h", price: "€22.27", tip: "08:40 前到 Nasrid 入口；攜帶購票所用護照正本", link: "https://tickets.alhambra-patronato.es/en/producto/alhambra-general/" },
    { icon: "food", time: "13:30–15:00", title: "午餐與休息", description: "上午步行量大，下午刻意放慢。" },
    { icon: "church", time: "16:00–18:00", title: "大教堂＋皇家禮拜堂", description: "若體力不足可取消，不影響主行程。" },
  ] },
  { day: 9, date: "10/30（五）", title: "格拉納達 → 巴塞隆納", subtitle: "直飛，抵達後不綁定門票", emoji: "flight", highlights: [
    { icon: "flight", time: "優先上午直飛", title: "Vueling GRX → BCN", description: "航程約1小時30分；10/30已有Vueling航班銷售跡象，實際班號與票價須在官網選日期確認。", duration: "約 1h30m", link: "https://www.vueling.com/en/flights-from-granada-to-barcelona" },
    { icon: "hotel", time: "12:00 前", title: "Room Mate Leo 退房", description: "早餐後完成退房，再前往 Granada 機場搭機。" },
    { icon: "hotel", time: "下午", title: "入住 Barcelona", description: "連住兩晚；選 Eixample 或 Plaça Catalunya 周邊。" },
    { icon: "city", time: "傍晚", title: "哥德區或 Passeig de Gràcia", description: "依實際落地時間自由選擇，不預購定時票。" },
  ], transport: { mode: "✈️ Vueling", from: "Granada GRX", to: "Barcelona BCN", duration: "約 1h30m", details: "優先上午直飛並加購托運行李；不要用Basic票價估算總成本。" } },
  { day: 10, date: "10/31（六）", title: "巴塞隆納 — 聖家堂主日程", subtitle: "唯一不可取代的 Barcelona 重點", emoji: "landmark", highlights: [
    { icon: "landmark", time: "09:00 入場・09:15 登塔", title: "Sagrada Família（已預訂）", description: "General 門票含 Audioguide；參觀 Basilica，接著登 Passion Tower。08:30 前抵達並完成安檢。", duration: "2–2.5h", price: "€36", tip: "票券限指定時段；塔樓可能因天候關閉", link: "https://sagradafamilia.org/en/tickets" },
    { icon: "city", time: "12:00 後", title: "午餐＋哥德區或 Passeig de Gràcia", description: "聖家堂結束後安排不需預約的城市散步，午後保持彈性。" },
    { icon: "soccer", time: "10/31 下午／晚間・候補", title: "Barcelona vs Alavés", description: "正式賽程若排在聖家堂行程結束後才考慮；若排11/1則因回程不安排。", link: "https://www.fcbarcelona.com/en/futbol/primer-equipo/calendario" },
  ] },
  { day: 11, date: "11/1（日）", title: "巴塞隆納 → 台北", subtitle: "從同一基地從容返程", emoji: "plane", highlights: [
    { icon: "plane", title: "前往 BCN 機場", description: "依航班時間提早出發，結束四座城市、三次換宿的西班牙之旅。" },
  ] },
];

export const HOTELS: Hotel[] = [
  { name: "Piso elegante Atocha 2H/2B by Berlany España", city: "Madrid（10/22–26）", nights: 4, stars: 0, priceRange: "✓ 已預訂", description: "Calle de Atocha 94, 28012 Madrid。2 位成人入住 1 間公寓，連住 4 晚；鄰近 Atocha，方便抵達日與南下 Sevilla。", highlights: ["入住｜10/22（四）15:00 後", "退房｜10/26（一）11:00 前", "方式｜門碼自助入住，不需下載 App", "提醒｜抵達前 24 小時會收到手機入住連結"], image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1000&q=80", bookingLinks: [{ name: "Google Maps 查看地址", url: "https://www.google.com/maps/search/?api=1&query=Calle+de+Atocha+94%2C+28012+Madrid" }], note: "已確認住宿。請將入住連結與門鎖密碼保留在私人訊息中，不要放到公開網站。" },
  { name: "Hotel Rey Alfonso X IMG Hoteles", city: "Sevilla（10/26–28）", nights: 2, stars: 0, priceRange: "✓ 已預訂・€457.60", description: "Ximénez de Enciso 35, 41004 Sevilla。庭院景標準雙人房加床，2 成人與 1 位兒童入住、連住 2 晚；位於 Santa Cruz 核心區。", highlights: ["入住｜10/26（一）16:00 起", "退房｜10/28（三）12:00 前", "房型｜Standard Double with extra bed・Courtyard View", "方案｜Autumn Promotion・Room Only・Wi-Fi", "付款｜飯店現場付款，信用卡僅作擔保", "取消｜10/25 前免費取消"], image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=1000&q=80", bookingLinks: [{ name: "Hotel Rey Alfonso X 官網", url: "https://www.hotelreyalfonsox.es/en/" }, { name: "Google Maps 查看地址", url: "https://www.google.com/maps/search/?api=1&query=Hotel+Rey+Alfonso+X%2C+Ximenez+de+Enciso+35%2C+41004+Sevilla" }], note: "已確認住宿，總價 €457.60。訂房代碼與旅客聯絡資料不放在公開網站。" },
  { name: "Hotel Room Mate Leo", city: "Granada（10/28–30）", nights: 2, stars: 0, priceRange: "✓ 已預訂・€391.88", description: "Campo Verde 1, 18001 Granada。Deluxe room，2 位成人入住 1 間客房、連住 2 晚；Centro 地點方便用餐，Alhambra 日搭公車或計程車上山。", highlights: ["入住｜10/28（三）15:00 起", "退房｜10/30（五）12:00 前", "房型｜Deluxe room・Special Web Rate Semi Flexible", "餐食｜兩天皆含自助早餐", "付款｜信用卡 100% 預付", "取消｜10/21 前免費取消"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=1000&q=80", bookingLinks: [{ name: "Room Mate Leo 官網", url: "https://room-matehotels.com/en/leo/" }, { name: "Google Maps 查看地址", url: "https://www.google.com/maps/search/?api=1&query=Hotel+Room+Mate+Leo%2C+Campo+Verde+1%2C+18001+Granada" }], note: "已確認住宿，總價 €391.88。訂房代碼與旅客聯絡資料不放在公開網站。" },
  { name: "Barcelona｜Eixample／Plaça Catalunya", city: "Barcelona（10/30–11/1）", nights: 2, stars: 0, priceRange: "約 €150–350+／晚", description: "Halloween週末加上Barcelona主場候選日，四城中供給風險最高；只住兩晚，位置比房間大小重要。", highlights: ["供給｜週末需求高，建議立即訂可取消房", "首選｜Hotel Jazz：交通最全面", "實惠｜Praktik Bakery：Eixample位置佳", "升級｜H10 Metropolitan：Plaça Catalunya旁"], image: "https://images.unsplash.com/photo-1507619579562-f2e10da1ec86?w=1000&q=80", bookingLinks: [{ name: "Hotel Jazz 官網", url: "https://www.hoteljazz.com/en/" }, { name: "Praktik Bakery 官網", url: "https://www.hotelpraktikbakery.com/en/" }, { name: "H10 Metropolitan 官網", url: "https://www.h10hotels.com/en/barcelona-hotels/h10-metropolitan" }, { name: "查 10/30–11/1 即時房況", url: "https://www.booking.com/searchresults.html?ss=Barcelona&checkin=2026-10-30&checkout=2026-11-01&group_adults=2&no_rooms=1&group_children=0" }], note: "Hotel Jazz官網有依供給提供入住前24小時免費取消的方案；仍須以結帳條款為準。" },
];

export const ATTRACTIONS: Attraction[] = [
  { name: "普拉多美術館", city: "Madrid", emoji: "art", description: "西班牙古典藝術核心收藏。", tips: ["預留3小時", "提前選定必看作品", "建議上午入場"], image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=1000&q=80", timeNeeded: "3h", ticketLink: "https://www.museodelprado.es/" },
  { name: "馬德里皇宮", city: "Madrid", emoji: "crown", description: "王室歷史與宏偉廳室。", tips: ["預約時段", "與Almudena Cathedral同遊", "約2–2.5小時"], image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1000&q=80", timeNeeded: "2.5h", ticketLink: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
  { name: "Atlético vs Deportivo", city: "Madrid", emoji: "soccer", description: "10/24或10/25的西甲主場賽，是本行程的足球重點。", tips: ["日期與開球時間待定", "先登記官方到貨通知", "兩天行程保持可互換"], image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1000&q=80", timeNeeded: "半日", ticketLink: "https://www.atleticodemadrid.com/abonos" },
  { name: "Real Alcázar", city: "Sevilla", emoji: "castle", description: "塞維亞最重要的宮殿與花園。", tips: ["預約09:30", "十月為冬季時段", "預留2.5小時"], image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=1000&q=80", timeNeeded: "2.5h", ticketLink: "https://alcazarsevilla.org/prepara-la-visita/" },
  { name: "Alhambra", city: "Granada", emoji: "landmark", description: "本次旅程最重要的摩爾建築與花園；Alhambra General Visit 已完成預訂。", tips: ["10/29 Nasrid 09:00", "08:40 前到 Nasrid 入口", "攜帶護照正本", "票價＋手續費 €22.27"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=1000&q=80", timeNeeded: "4–5h", ticketLink: "https://tickets.alhambra-patronato.es/en/" },
  { name: "聖家堂", city: "Barcelona", emoji: "church", description: "高第最具代表性的建築；General 門票、Audioguide 與 Passion Tower 已完成預訂。", tips: ["10/31 09:00 入場", "09:15 Passion Tower", "08:30 前抵達安檢", "票價 €36"], image: "https://images.unsplash.com/photo-1656597787628-62741d181641?w=1000&q=80", timeNeeded: "2–2.5h", ticketLink: "https://sagradafamilia.org/en/tickets" },
];

export const CITY_VIDEOS: CityVideo[] = [
  { city: "馬德里 Madrid", embedId: "l1qH6XLC-2I", title: "Madrid Travel Guide" },
  { city: "塞維亞 Sevilla", embedId: "9T7B8ulI6zo", title: "Sevilla Travel Guide" },
  { city: "格拉納達 Granada", embedId: "fL2Mno5ll9k", title: "Granada & Alhambra Guide" },
  { city: "巴塞隆納 Barcelona", embedId: "wMfVjW7ldUc", title: "Barcelona Travel Guide" },
];

export const CITY_INFO = [
  { name: "馬德里", coords: [40.4168, -3.7038] as [number, number], emoji: "crown", desc: "4晚" },
  { name: "塞維亞", coords: [37.3891, -5.9845] as [number, number], emoji: "dance", desc: "2晚" },
  { name: "格拉納達", coords: [37.1773, -3.5986] as [number, number], emoji: "landmark", desc: "2晚" },
  { name: "巴塞隆納", coords: [41.3874, 2.1686] as [number, number], emoji: "art", desc: "2晚" },
];
