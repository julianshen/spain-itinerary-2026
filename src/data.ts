import { DayPlan, Hotel, Attraction, CityVideo } from "./types";

export const DAYS: DayPlan[] = [
  {
    day: 1,
    date: "10/22（四）",
    title: "出發！台北 → 馬德里",
    subtitle: "長途飛行 + 馬德里夜漫步",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", time: "00:30", title: "台北出發", description: "搭乘阿聯酋航空 EK387，飛往杜拜轉機", duration: "5h", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80" },
      { icon: "☕", time: "05:15→08:15", title: "杜拜轉機", description: "杜拜機場 3 小時轉機，逛 Duty Free 或休息", duration: "3h" },
      { icon: "🛬", time: "13:25", title: "抵達巴塞隆納", description: "到 BCN，出關領行李", duration: "~1h" },
      { icon: "🚄", time: "15:00→17:30", title: "AVE 高鐵到馬德里", description: "從 BCN 搭 AVE 直達 Madrid Puerta de Atocha，每小時都有班次", duration: "2h30m", price: "€40-70", link: "https://www.renfe.com/" },
      { icon: "🌆", time: "18:00", title: "馬德里夜間散步", description: "Check-in 後沿 Gran Vía → 太陽門廣場（零公里標誌）→ 馬約爾廣場 → Mercado de San Miguel 吃 Tapas", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80" },
    ],
    transport: { mode: "🚄 AVE", from: "巴塞隆納 BCN", to: "馬德里 Atocha", duration: "2h30m", price: "€40-70", details: "Renfe AVE 高鐵，直達 Madrid Puerta de Atocha。班次密集（每小時約 2 班），建議提前在 renfe.com 購票享早鳥優惠。" },
  },
  {
    day: 2,
    date: "10/23（五）",
    title: "馬德里 — 藝術之日",
    subtitle: "普拉多美術館、皇宮、麗池公園",
    emoji: "🎨",
    highlights: [
      { icon: "🎨", time: "09:00-12:00", title: "普拉多美術館", description: "西班牙最重要的美術館，收藏哥雅、委拉斯奎茲、葛雷柯等大師鉅作。必看：哥雅《裸體的瑪哈》、委拉斯奎茲《宮女》", duration: "3h", tip: "門票 €15，下午 6-8 點免費入場但排隊很長", link: "https://www.museodelprado.es/", image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80" },
      { icon: "🌿", time: "12:00-13:00", title: "麗池公園", description: "馬德里的城市綠洲。在人工湖划船、看水晶宮（Palacio de Cristal）", image: "https://images.unsplash.com/photo-1645203494470-1507ae7f1a40?w=800&q=80" },
      { icon: "👑", time: "14:30-16:30", title: "馬德里皇宮", description: "歐洲第三大皇宮，僅次於凡爾賽宮和美景宮。奢華的內部裝潢、壁畫、兵器廣場", duration: "2h", tip: "門票 €12，建議提前官網預約", link: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid", image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80" },
      { icon: "🍫", time: "晚上", title: "San Ginés 吃 Churros", description: "開業於 1894 年的老字號，招牌是 Churros con Chocolate 巧克力油條，24 小時營業！" },
    ],
  },
  {
    day: 3,
    date: "10/24（六）",
    title: "馬德里 — 經典巡禮",
    subtitle: "格爾尼卡、La Latina、伯納烏",
    emoji: "🏛️",
    highlights: [
      { icon: "🎭", time: "09:30-11:30", title: "索菲亞王后藝術中心", description: "現代藝術美術館，鎮館之寶——畢卡索《格爾尼卡》！這幅反戰巨作長 7.8 公尺，親眼看到非常震撼", duration: "2h", tip: "門票 €12，週一、週三至週六 19:00-21:00 免費，週日 13:30-19:00 免費", link: "https://www.museoreinasofia.es/en", image: "https://images.unsplash.com/photo-1564565899675-a159063d17be?w=800&q=80" },
      { icon: "🏘️", time: "12:00-14:00", title: "La Latina 區午餐", description: "馬德里最古老的街區，蜿蜒的小巷裡藏著無數 Tapas 酒吧。推薦吃 Callos（燉牛肚）或 Tortilla Española" },
      { icon: "⚽", time: "15:00-17:00", title: "聖地亞哥·伯納烏球場", description: "皇家馬德里主場！參觀球場、更衣室、獎盃室、球員通道，球迷必去聖地！", duration: "2h", tip: "門票 €25-40，官網預約可選導覽", link: "https://www.realmadrid.com/en/visit-the-bernabeu", image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80" },
      { icon: "🌅", time: "17:30-19:00", title: "德波神廟夕陽", description: "從埃及搬來的神廟，馬德里最浪漫的夕陽景點。免費入場，夕陽時分整個神廟和天空超美" },
    ],
  },
  {
    day: 4,
    date: "10/25（日）",
    title: "南下！Córdoba + Sevilla",
    subtitle: "清真寺古城 → 佛朗明哥之都",
    emoji: "🚄",
    highlights: [
      { icon: "🚄", time: "09:00→10:45", title: "AVE 到 Córdoba", description: "馬德里 Atocha 出發，1h45m 直達 Córdoba", duration: "1h45m", price: "€30-50" },
      { icon: "🕌", time: "10:45-14:00", title: "Córdoba 大清真寺", description: "世界文化遺產，摩爾人興建的大清真寺內有 856 根雙色拱柱，後來天主教徒在裡面蓋了一座教堂，形成伊斯蘭+基督教的獨特融合", duration: "2-3h", tip: "門票 €13，建議上午去光線最好", link: "https://mezquita-catedraldecordoba.es/", image: "https://images.unsplash.com/photo-1632904080322-e71e16a5987f?w=800&q=80" },
      { icon: "🌸", time: "12:00-13:00", title: "百花巷 + 羅馬橋", description: "著名的藍白瓷磚小巷（Calleja de las Flores），以及西元 1 世紀建的羅馬橋" },
      { icon: "🚄", time: "15:00→15:45", title: "Córdoba→Sevilla", description: "AVE 只要 45 分鐘，打個盹就到了！", duration: "45min", price: "€20-35" },
      { icon: "💃", time: "晚上", title: "Sevilla 夜生活", description: "到 Sevilla 入住後，晚上去 Triana 區吃 Tapas，佛朗明哥的發源地就從這裡開始！" },
    ],
    transport: { mode: "🚄 AVE", from: "馬德里 Atocha", to: "Córdoba", duration: "1h45m", price: "€30-50", details: "Renfe AVE 直達。建議 09:00 左右的班次，到 Córdoba 約 10:45，玩到下午再搭 45min AVE 到 Sevilla。" },
  },
  {
    day: 5,
    date: "10/26（一）",
    title: "Sevilla — 佛朗明哥與皇城",
    subtitle: "Alcázar、大教堂、西班牙廣場",
    emoji: "💃",
    highlights: [
      { icon: "🏰", time: "09:00-11:30", title: "塞維亞王宮 Alcázar", description: "歐洲最古老的皇家宮殿之一，也是《權力遊戲》多恩王國花園的拍攝地！摩爾式建築+哥德式風格，後花園絕美", duration: "2.5h", tip: "門票 €13.5，務必提前官網預約！排隊很恐怖", link: "https://www.alcazarsevilla.org/en/", image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80" },
      { icon: "⛪", time: "12:00-14:00", title: "Sevilla 大教堂 + 吉拉達塔", description: "世界最大的哥德式教堂，哥倫布的靈柩在此。旁邊的吉拉達塔是摩爾時期宣禮塔改建的鐘樓", duration: "1.5h", tip: "門票 €12，包含登塔", image: "https://images.unsplash.com/photo-1534106659956-d02ca15d30fb?w=800&q=80" },
      { icon: "🌆", time: "15:00-17:00", title: "西班牙廣場", description: "1929 年博覽會所建，半圓形廣場上有 58 座瓷磚長椅，代表西班牙各省。下午光影打在瓷磚上超美！一定要划船", duration: "2h", tip: "免費，傍晚夕陽時最美", image: "https://images.unsplash.com/photo-1559386081-325882507af7?w=800&q=80" },
      { icon: "💃", time: "晚上", title: "佛朗明哥秀", description: "在 Triana 區或 Santa Cruz 區看一場真正的佛朗明哥表演，感動到起雞皮疙瘩！" },
    ],
  },
  {
    day: 6,
    date: "10/27（二）",
    title: "Sevilla → Granada",
    subtitle: "AVE 前進阿罕布拉宮腳下",
    emoji: "🏰",
    highlights: [
      { icon: "🚄", time: "10:00→12:30", title: "AVE 到 Granada", description: "Sevilla 到 Granada 高鐵直達，約 2.5h", duration: "2h30m", price: "€25-45" },
      { icon: "🏨", time: "13:00", title: "入住 Parador de Granada", description: "位於 Alhambra 宮殿內的傳奇飯店，前身是 15 世紀修道院，陽台就能看到阿罕布拉花園", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🏘️", time: "14:00-16:00", title: "Albaicín 阿爾拜辛區", description: "UNESCO 世界遺產的摩爾人舊城區，蜿蜒的白色小巷、磁磚庭院，像走入一千零一夜的世界" },
      { icon: "🌅", time: "16:30-17:30", title: "聖尼古拉斯瞭望台", description: "遠眺 Alhambra 的最佳點！夕陽時分，阿罕布拉宮在內華達山脈前閃耀金紅色光芒" },
    ],
    transport: { mode: "🚄 AVE", from: "Sevilla Santa Justa", to: "Granada", duration: "2h30m", price: "€25-45", details: "Renfe AVE 直達 Granada 車站。建議 10:00 出發，12:30 到，下午開始探索。" },
  },
  {
    day: 7,
    date: "10/28（三）",
    title: "Granada — Alhambra 全日",
    subtitle: "此生必去的宮殿奇蹟",
    emoji: "🏛️",
    highlights: [
      { icon: "🏛️", time: "09:00-13:00", title: "阿罕布拉宮 Alhambra", description: "西班牙的瑰寶、摩爾人的最後城堡！包含納斯利宮（超精緻阿拉伯雕刻）、Generalife 夏宮花園、卡洛斯五世宮殿。每走一步都是驚嘆！", duration: "4h+", tip: "⚠️ 一定要 2 個月前預約！門票 €19.09，Nasrid Palaces 有時段限制，不能遲到！", link: "https://tickets.alhambra-patronato.es/en/", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🍤", time: "13:00-15:00", title: "Granada Tapas 文化", description: "Granada 是全西班牙唯一點酒就送 Tapas 的城市！Calle Navas 上每家 bar 都有驚喜，吃一圈就飽了！" },
      { icon: "⛪", time: "15:30-17:00", title: "Granada 大教堂 + 皇家禮拜堂", description: "伊莎貝拉一世女王與費迪南德國王安葬於此。禮拜堂內有他們的石棺和珍貴的中世紀藝術品" },
    ],
  },
  {
    day: 8,
    date: "10/29（四）",
    title: "✈️ 回巴塞隆納 高第之旅開始！",
    subtitle: "聖家堂初見",
    emoji: "🛩️",
    highlights: [
      { icon: "🛩️", time: "10:00→11:40", title: "Granada 飛巴塞隆納", description: "Vueling 直飛 BCN，飛行僅 1h40m，輕鬆接上下午行程", duration: "1h40m", price: "€25-50", tip: "Vueling 官網早買有優惠", link: "https://www.vueling.com/" },
      { icon: "🏛️", time: "14:00-17:00", title: "聖家堂 Sagrada Familia", description: "高第的畢生傑作，也是世界唯一尚未完工就被列為世界遺產的建築。光影透過彩繪玻璃灑落，宛如走進森林迷宮！預計 2026 年完工！", duration: "3h", tip: "門票 €26-40，一定要預約！建議選 Passion 塔登頂", link: "https://sagradafamilia.org/en/tickets", image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80" },
    ],
    transport: { mode: "✈️ 飛機", from: "Granada GRX", to: "巴塞隆納 BCN", duration: "1h40m", price: "€25-50", details: "Vueling 直飛，每日多班。飛行時間短，建議訂中午前航班，下午還能跑行程。" },
  },
  {
    day: 9,
    date: "10/30（五）",
    title: "巴塞隆納 — 高第建築巡禮",
    subtitle: "巴特略之家、米拉之家、奎爾公園",
    emoji: "🎨",
    highlights: [
      { icon: "🏡", time: "09:30-11:00", title: "巴特略之家 Casa Batlló", description: "高第的海洋主題傑作，外牆像彩色龍鱗，內部沒有直線！沉浸式導覽用 AR 超酷", duration: "1.5h", tip: "門票 €35-45，官網有夜間燈光秀", link: "https://www.casabatllo.es/en/", image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80" },
      { icon: "🏠", time: "11:30-13:00", title: "米拉之家 Casa Milà", description: "高第最後的民用建築，波浪型石造外牆、煙囪屋頂像星際大戰的場景。屋頂必去！", duration: "1.5h", tip: "門票 €25，屋頂看夕陽特別美", image: "https://images.unsplash.com/photo-1568921097010-b59ee67056df?w=800&q=80" },
      { icon: "🌳", time: "15:00-17:00", title: "奎爾公園 Park Güell", description: "高第打造的童話花園社區，彩色馬賽克蜥蜴、波浪長椅、世界最長的曲線長椅", duration: "2h", tip: "紀念碑區域門票 €10，可線上預約", image: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?w=800&q=80" },
    ],
  },
  {
    day: 10,
    date: "10/31（六）",
    title: "巴塞隆納 — 漫步日",
    subtitle: "哥德區、蘭布拉大道、博蓋利亞市場",
    emoji: "🏘️",
    highlights: [
      { icon: "🏘️", time: "09:00-11:00", title: "哥德區 Barri Gòtic", description: "巴塞最古老的街區，狹窄的中世紀小巷、隱藏廣場。找到聖伊莉莎白廣場和主教橋" },
      { icon: "🛍️", time: "11:00-13:00", title: "蘭布拉大道 La Rambla", description: "巴塞隆納最著名的林蔭大道，街頭藝人、花店、咖啡座，走到底就是哥倫布紀念碑和海港" },
      { icon: "🐟", time: "11:30-13:00", title: "博蓋利亞市場", description: "歐洲最大市場之一，鮮豔的水果攤、伊比利火腿、現榨果汁、海鮮⋯⋯五感全開！", image: "https://images.unsplash.com/photo-1614635454419-36aa631da264?w=800&q=80" },
      { icon: "🌊", time: "15:00-17:00", title: "巴塞海灘 Barceloneta", description: "地中海陽光、沙灘、海鮮 Paella，旅程尾聲放空一下" },
    ],
  },
  {
    day: 11,
    date: "11/1（日）",
    title: "回程 ✈️ 台灣",
    subtitle: "帶著滿滿回憶回家",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", title: "巴塞隆納 → 杜拜 → 台北", description: "搭阿聯酋航空回程，結束 11 天的西班牙大冒險！🇪🇸 期待下次再來～", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
    ],
  },
];

export const DAYS_RONDA: DayPlan[] = [
  {
    day: 1,
    date: "10/22（四）",
    title: "出發！台北 → 馬德里",
    subtitle: "長途飛行 + 馬德里夜漫步",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", time: "00:30", title: "台北出發", description: "搭乘阿聯酋航空 EK387，飛往杜拜轉機", duration: "5h", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80" },
      { icon: "☕", time: "05:15→08:15", title: "杜拜轉機", description: "杜拜機場 3 小時轉機，逛 Duty Free 或休息", duration: "3h" },
      { icon: "🛬", time: "13:25", title: "抵達巴塞隆納", description: "到 BCN，出關領行李", duration: "~1h" },
      { icon: "🚄", time: "15:00→17:30", title: "AVE 高鐵到馬德里", description: "從 BCN 搭 AVE 直達 Madrid Puerta de Atocha，每小時都有班次", duration: "2h30m", price: "€40-70", link: "https://www.renfe.com/" },
      { icon: "🌆", time: "18:00", title: "馬德里夜間散步", description: "Check-in 後沿 Gran Vía → 太陽門廣場（零公里標誌）→ 馬約爾廣場 → Mercado de San Miguel 吃 Tapas", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80" },
    ],
    transport: { mode: "🚄 AVE", from: "巴塞隆納 BCN", to: "馬德里 Atocha", duration: "2h30m", price: "€40-70", details: "Renfe AVE 高鐵，直達 Madrid Puerta de Atocha。班次密集（每小時約 2 班），建議提前在 renfe.com 購票享早鳥優惠。" },
  },
  {
    day: 2,
    date: "10/23（五）",
    title: "馬德里 — 藝術之日",
    subtitle: "普拉多美術館、皇宮、麗池公園",
    emoji: "🎨",
    highlights: [
      { icon: "🎨", time: "09:00-12:00", title: "普拉多美術館", description: "西班牙最重要的美術館，收藏哥雅、委拉斯奎茲、葛雷柯等大師鉅作。必看：哥雅《裸體的瑪哈》、委拉斯奎茲《宮女》", duration: "3h", tip: "門票 €15，下午 6-8 點免費入場但排隊很長", link: "https://www.museodelprado.es/", image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80" },
      { icon: "🌿", time: "12:00-13:00", title: "麗池公園", description: "馬德里的城市綠洲。在人工湖划船、看水晶宮（Palacio de Cristal）", image: "https://images.unsplash.com/photo-1645203494470-1507ae7f1a40?w=800&q=80" },
      { icon: "👑", time: "14:30-16:30", title: "馬德里皇宮", description: "歐洲第三大皇宮，僅次於凡爾賽宮和美景宮。奢華的內部裝潢、壁畫、兵器廣場", duration: "2h", tip: "門票 €12，建議提前官網預約", link: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid", image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80" },
      { icon: "🍫", time: "晚上", title: "San Ginés 吃 Churros", description: "開業於 1894 年的老字號，招牌是 Churros con Chocolate 巧克力油條，24 小時營業！" },
    ],
  },
  {
    day: 3,
    date: "10/24（六）",
    title: "馬德里 — 經典巡禮",
    subtitle: "格爾尼卡、La Latina、伯納烏",
    emoji: "🏛️",
    highlights: [
      { icon: "🎭", time: "09:30-11:30", title: "索菲亞王后藝術中心", description: "現代藝術美術館，鎮館之寶——畢卡索《格爾尼卡》！這幅反戰巨作長 7.8 公尺，親眼看到非常震撼", duration: "2h", tip: "門票 €12，週一、週三至週六 19:00-21:00 免費，週日 13:30-19:00 免費", link: "https://www.museoreinasofia.es/en", image: "https://images.unsplash.com/photo-1564565899675-a159063d17be?w=800&q=80" },
      { icon: "🏘️", time: "12:00-14:00", title: "La Latina 區午餐", description: "馬德里最古老的街區，蜿蜒的小巷裡藏著無數 Tapas 酒吧。推薦吃 Callos（燉牛肚）或 Tortilla Española" },
      { icon: "⚽", time: "15:00-17:00", title: "聖地亞哥·伯納烏球場", description: "皇家馬德里主場！參觀球場、更衣室、獎盃室、球員通道，球迷必去聖地！", duration: "2h", tip: "門票 €25-40，官網預約可選導覽", link: "https://www.realmadrid.com/en/visit-the-bernabeu", image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80" },
      { icon: "🌅", time: "17:30-19:00", title: "德波神廟夕陽", description: "從埃及搬來的神廟，馬德里最浪漫的夕陽景點。免費入場，夕陽時分整個神廟和天空超美" },
    ],
  },
  {
    day: 4,
    date: "10/25（日）",
    title: "南下！Córdoba + Ronda",
    subtitle: "清真寺古城 → 懸崖小鎮",
    emoji: "🚄",
    highlights: [
      { icon: "🚄", time: "09:00→10:45", title: "AVE 到 Córdoba", description: "馬德里 Atocha 出發，1h45m 直達 Córdoba", duration: "1h45m", price: "€30-50" },
      { icon: "🕌", time: "10:45-14:00", title: "Córdoba 大清真寺", description: "世界文化遺產，摩爾人興建的大清真寺內有 856 根雙色拱柱，後來天主教徒在裡面蓋了一座教堂，形成伊斯蘭+基督教的獨特融合", duration: "2-3h", tip: "門票 €13，建議上午去光線最好", link: "https://mezquita-catedraldecordoba.es/", image: "https://images.unsplash.com/photo-1632904080322-e71e16a5987f?w=800&q=80" },
      { icon: "🌸", time: "12:00-13:00", title: "百花巷 + 羅馬橋", description: "著名的藍白瓷磚小巷（Calleja de las Flores），以及西元 1 世紀建的羅馬橋" },
      { icon: "🚗", time: "15:00→17:00", title: "Córdoba → Ronda", description: "租車或搭巴士前往 Ronda，約 2 小時。沿途是安達魯西亞最美鄉村公路，橄欖樹與葡萄園交錯", duration: "2h", price: "€15-25" },
      { icon: "🌉", time: "17:30-19:00", title: "Puente Nuevo 新橋夕陽", description: "Ronda 地標！98 公尺高的新橋橫跨 El Tajo 峽谷，連接新舊城區。夕陽時分，懸崖與橋身在金光中宛如電影場景", image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=800&q=80" },
    ],
    transport: { mode: "🚄 AVE + 🚗 租車/巴士", from: "馬德里 Atocha", to: "Ronda", duration: "4h+", price: "€45-75", details: "Renfe AVE 到 Córdoba（1h45m），玩半天後租車或搭巴士到 Ronda（2h）。Ronda 無火車站，建議在 Córdoba 租車自駕，後續行程更靈活。" },
  },
  {
    day: 5,
    date: "10/26（一）",
    title: "Ronda — 懸崖上的白色小鎮",
    subtitle: "鬥牛場、阿拉伯浴場、峽谷步道",
    emoji: "🌉",
    highlights: [
      { icon: "🌉", time: "09:00-10:30", title: "Puente Nuevo 新橋徒步", description: "清晨走過新橋，從谷底仰望這座 18 世紀的石橋巨構。橋身中間還藏著一間舊監獄，現在是展覽館", duration: "1.5h", tip: "免費，清晨光線最佳，遊客也少", image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=800&q=80" },
      { icon: "🐂", time: "11:00-12:30", title: "Plaza de Toros 鬥牛場", description: "西班牙最古老的鬥牛場之一（1785 年），也是鬥牛士的朝聖地。環形建築本身就很美，博物館講述鬥牛文化歷史", duration: "1.5h", tip: "門票 €8.5，包含博物館與鬥牛場內部", link: "https://www.rmcr.org/", image: "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=800&q=80" },
      { icon: "🏛️", time: "14:00-15:30", title: "阿拉伯浴場 + 老城區", description: "13 世紀的摩爾人浴場遺跡，保存完好的拱頂與蒸汽系統。附近是白色小屋密佈的老城區，每個轉角都是明信片", duration: "1.5h", tip: "浴場門票 €3.5，週日免費" },
      { icon: "🍷", time: "16:00-18:00", title: "Ronda 酒莊品酒", description: "Ronda 是 Malaga 葡萄酒產區的核心，高海拔種植的紅酒濃郁奔放。推薦 Bodega Joaquín Fernández 或 Descalzos Viejos", duration: "2h", tip: "品酒 €15-25，需預約" },
    ],
  },
  {
    day: 6,
    date: "10/27（二）",
    title: "Ronda → Sevilla",
    subtitle: "白色山城 → 佛朗明哥之都",
    emoji: "💃",
    highlights: [
      { icon: "🚗", time: "09:00→11:00", title: "Ronda → Sevilla 自駕", description: "沿 A-376 公路穿越安達魯西亞鄉村，約 2 小時。途中可停 Setenil de las Bodegas——岩石下鑿出的白色小鎮，超有特色！", duration: "2h", price: "油費約 €15" },
      { icon: "🏨", time: "12:00", title: "Sevilla 入住 + 午餐", description: "抵達 Sevilla，入住 Santa Cruz 區或 Triana 區，附近吃 Sevilla 風味 Tapas" },
      { icon: "🌆", time: "15:00-17:00", title: "西班牙廣場", description: "1929 年博覽會所建，半圓形廣場上有 58 座瓷磚長椅，代表西班牙各省。下午光影打在瓷磚上超美！一定要划船", duration: "2h", tip: "免費，傍晚夕陽時最美", image: "https://images.unsplash.com/photo-1559386081-325882507af7?w=800&q=80" },
      { icon: "💃", time: "晚上", title: "佛朗明哥秀", description: "在 Triana 區或 Santa Cruz 區看一場真正的佛朗明哥表演，感動到起雞皮疙瘩！" },
    ],
    transport: { mode: "🚗 自駕", from: "Ronda", to: "Sevilla", duration: "2h", price: "油費 €15", details: "Ronda 無火車站，建議自駕或租車前往 Sevilla（2h）。途中可停 Setenil de las Bodegas（岩石小鎮，30min）。" },
  },
  {
    day: 7,
    date: "10/28（三）",
    title: "Sevilla — 佛朗明哥與皇城",
    subtitle: "Alcázar、大教堂、都市陽傘",
    emoji: "🏰",
    highlights: [
      { icon: "🏰", time: "09:00-11:30", title: "塞維亞王宮 Alcázar", description: "歐洲最古老的皇家宮殿之一，也是《權力遊戲》多恩王國花園的拍攝地！摩爾式建築+哥德式風格，後花園絕美", duration: "2.5h", tip: "門票 €13.5，務必提前官網預約！排隊很恐怖", link: "https://www.alcazarsevilla.org/en/", image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80" },
      { icon: "⛪", time: "12:00-14:00", title: "Sevilla 大教堂 + 吉拉達塔", description: "世界最大的哥德式教堂，哥倫布的靈柩在此。旁邊的吉拉達塔是摩爾時期宣禮塔改建的鐘樓", duration: "1.5h", tip: "門票 €12，包含登塔", image: "https://images.unsplash.com/photo-1534106659956-d02ca15d30fb?w=800&q=80" },
      { icon: "🍄", time: "15:00-16:30", title: "都市陽傘 Setas de Sevilla", description: "世界最大的木造建築，像巨型蘑菇群。頂層觀景台可 360° 俯瞰 Sevilla 全城，夕陽時分最浪漫", duration: "1.5h", tip: "門票 €15，含觀景台 + 展覽" },
      { icon: "🌅", time: "17:00-18:30", title: "瓜達幾維河河畔夕陽", description: "沿著黃金塔到 Triana 橋散步，看夕陽把河水染成金色，Sevilla 最愜意的時刻" },
    ],
  },
  {
    day: 8,
    date: "10/29（四）",
    title: "Sevilla → Granada",
    subtitle: "AVE 前進阿罕布拉宮腳下",
    emoji: "🏰",
    highlights: [
      { icon: "🚄", time: "10:00→12:30", title: "AVE 到 Granada", description: "Sevilla 到 Granada 高鐵直達，約 2.5h", duration: "2h30m", price: "€25-45" },
      { icon: "🏨", time: "13:00", title: "入住 Parador de Granada", description: "位於 Alhambra 宮殿內的傳奇飯店，前身是 15 世紀修道院，陽台就能看到阿罕布拉花園", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🏘️", time: "14:00-16:00", title: "Albaicín 阿爾拜辛區", description: "UNESCO 世界遺產的摩爾人舊城區，蜿蜒的白色小巷、磁磚庭院，像走入一千零一夜的世界" },
      { icon: "🌅", time: "16:30-17:30", title: "聖尼古拉斯瞭望台", description: "遠眺 Alhambra 的最佳點！夕陽時分，阿罕布拉宮在內華達山脈前閃耀金紅色光芒" },
    ],
    transport: { mode: "🚄 AVE", from: "Sevilla Santa Justa", to: "Granada", duration: "2h30m", price: "€25-45", details: "Renfe AVE 直達 Granada 車站。建議 10:00 出發，12:30 到，下午開始探索。" },
  },
  {
    day: 9,
    date: "10/30（五）",
    title: "Granada — Alhambra 全日",
    subtitle: "此生必去的宮殿奇蹟",
    emoji: "🏛️",
    highlights: [
      { icon: "🏛️", time: "09:00-13:00", title: "阿罕布拉宮 Alhambra", description: "西班牙的瑰寶、摩爾人的最後城堡！包含納斯利宮（超精緻阿拉伯雕刻）、Generalife 夏宮花園、卡洛斯五世宮殿。每走一步都是驚嘆！", duration: "4h+", tip: "⚠️ 一定要 2 個月前預約！門票 €19.09，Nasrid Palaces 有時段限制，不能遲到！", link: "https://tickets.alhambra-patronato.es/en/", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🍤", time: "13:00-15:00", title: "Granada Tapas 文化", description: "Granada 是全西班牙唯一點酒就送 Tapas 的城市！Calle Navas 上每家 bar 都有驚喜，吃一圈就飽了！" },
      { icon: "⛪", time: "15:30-17:00", title: "Granada 大教堂 + 皇家禮拜堂", description: "伊莎貝拉一世女王與費迪南德國王安葬於此。禮拜堂內有他們的石棺和珍貴的中世紀藝術品" },
    ],
  },
  {
    day: 10,
    date: "10/31（六）",
    title: "✈️ 回巴塞隆納 高第之旅開始！",
    subtitle: "聖家堂初見",
    emoji: "🛩️",
    highlights: [
      { icon: "🛩️", time: "10:00→11:40", title: "Granada 飛巴塞隆納", description: "Vueling 直飛 BCN，飛行僅 1h40m，輕鬆接上下午行程", duration: "1h40m", price: "€25-50", tip: "Vueling 官網早買有優惠", link: "https://www.vueling.com/" },
      { icon: "🏛️", time: "14:00-17:00", title: "聖家堂 Sagrada Familia", description: "高第的畢生傑作，也是世界唯一尚未完工就被列為世界遺產的建築。光影透過彩繪玻璃灑落，宛如走進森林迷宮！預計 2026 年完工！", duration: "3h", tip: "門票 €26-40，一定要預約！建議選 Passion 塔登頂", link: "https://sagradafamilia.org/en/tickets", image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80" },
    ],
    transport: { mode: "✈️ 飛機", from: "Granada GRX", to: "巴塞隆納 BCN", duration: "1h40m", price: "€25-50", details: "Vueling 直飛，每日多班。飛行時間短，建議訂中午前航班，下午還能跑行程。" },
  },
  {
    day: 11,
    date: "11/1（日）",
    title: "巴塞隆納 — 高第建築巡禮",
    subtitle: "巴特略之家、米拉之家、奎爾公園",
    emoji: "🎨",
    highlights: [
      { icon: "🏡", time: "09:30-11:00", title: "巴特略之家 Casa Batlló", description: "高第的海洋主題傑作，外牆像彩色龍鱗，內部沒有直線！沉浸式導覽用 AR 超酷", duration: "1.5h", tip: "門票 €35-45，官網有夜間燈光秀", link: "https://www.casabatllo.es/en/", image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80" },
      { icon: "🏠", time: "11:30-13:00", title: "米拉之家 Casa Milà", description: "高第最後的民用建築，波浪型石造外牆、煙囪屋頂像星際大戰的場景。屋頂必去！", duration: "1.5h", tip: "門票 €25，屋頂看夕陽特別美", image: "https://images.unsplash.com/photo-1568921097010-b59ee67056df?w=800&q=80" },
      { icon: "🌳", time: "15:00-17:00", title: "奎爾公園 Park Güell", description: "高第打造的童話花園社區，彩色馬賽克蜥蜴、波浪長椅、世界最長的曲線長椅", duration: "2h", tip: "紀念碑區域門票 €10，可線上預約", image: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?w=800&q=80" },
    ],
  },
  {
    day: 12,
    date: "11/2（一）",
    title: "巴塞隆納 — 漫步日",
    subtitle: "哥德區、蘭布拉大道、博蓋利亞市場",
    emoji: "🏘️",
    highlights: [
      { icon: "🏘️", time: "09:00-11:00", title: "哥德區 Barri Gòtic", description: "巴塞最古老的街區，狹窄的中世紀小巷、隱藏廣場。找到聖伊莉莎白廣場和主教橋" },
      { icon: "🛍️", time: "11:00-13:00", title: "蘭布拉大道 La Rambla", description: "巴塞隆納最著名的林蔭大道，街頭藝人、花店、咖啡座，走到底就是哥倫布紀念碑和海港" },
      { icon: "🐟", time: "11:30-13:00", title: "博蓋利亞市場", description: "歐洲最大市場之一，鮮豔的水果攤、伊比利火腿、現榨果汁、海鮮⋯⋯五感全開！", image: "https://images.unsplash.com/photo-1614635454419-36aa631da264?w=800&q=80" },
      { icon: "🌊", time: "15:00-17:00", title: "巴塞海灘 Barceloneta", description: "地中海陽光、沙灘、海鮮 Paella，旅程尾聲放空一下" },
    ],
  },
  {
    day: 13,
    date: "11/3（二）",
    title: "回程 ✈️ 台灣",
    subtitle: "帶著滿滿回憶回家",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", title: "巴塞隆納 → 杜拜 → 台北", description: "搭阿聯酋航空回程，結束 11 天的西班牙大冒險！🇪🇸 期待下次再來～", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
    ],
  },
];

// ========== 方案三：反向路線（先到 Sevilla 往回玩）==========

export const DAYS_REVERSE: DayPlan[] = [
  {
    day: 1,
    date: "10/22（四）",
    title: "出發！台北 → 巴塞隆納 → Sevilla",
    subtitle: "直飛安達魯西亞，不走回頭路",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", time: "00:30", title: "台北出發", description: "搭乘阿聯酋航空 EK387，飛往杜拜轉機", duration: "5h", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80" },
      { icon: "☕", time: "05:15→08:15", title: "杜拜轉機", description: "杜拜機場 3 小時轉機，逛 Duty Free 或休息", duration: "3h" },
      { icon: "🛬", time: "13:25", title: "抵達巴塞隆納", description: "到 BCN，直接轉國內航班或高鐵南下", duration: "~1h" },
      { icon: "✈️", time: "15:30→17:00", title: "BCN → Sevilla", description: "Vueling 直飛 Sevilla，約 1.5h，傍晚抵達佛朗明哥之都", duration: "1h30m", price: "€25-50", link: "https://www.vueling.com/" },
      { icon: "🌆", time: "18:00", title: "Sevilla 夜間散步", description: "Check-in 後沿瓜達幾維河散步，看黃金塔夜景，Triana 區吃 Tapas", image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80" },
    ],
    transport: { mode: "✈️ 飛機", from: "台北 TPE", to: "Sevilla SVQ", duration: "~20h", price: "€500-800", details: "阿聯酋航空飛 BCN（經杜拜），轉 Vueling 飛 Sevilla。或選擇 Iberia 直飛 MAD 再轉國內線到 SVQ。" },
  },
  {
    day: 2,
    date: "10/23（五）",
    title: "Sevilla — 佛朗明哥與皇城",
    subtitle: "Alcázar、大教堂、西班牙廣場",
    emoji: "💃",
    highlights: [
      { icon: "🏰", time: "09:00-11:30", title: "塞維亞王宮 Alcázar", description: "歐洲最古老的皇家宮殿之一，也是《權力遊戲》多恩王國花園的拍攝地！摩爾式建築+哥德式風格，後花園絕美", duration: "2.5h", tip: "門票 €13.5，務必提前官網預約！排隊很恐怖", link: "https://www.alcazarsevilla.org/en/", image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80" },
      { icon: "⛪", time: "12:00-14:00", title: "Sevilla 大教堂 + 吉拉達塔", description: "世界最大的哥德式教堂，哥倫布的靈柩在此。旁邊的吉拉達塔是摩爾時期宣禮塔改建的鐘樓", duration: "1.5h", tip: "門票 €12，包含登塔", image: "https://images.unsplash.com/photo-1534106659956-d02ca15d30fb?w=800&q=80" },
      { icon: "🌆", time: "15:00-17:00", title: "西班牙廣場", description: "1929 年博覽會所建，半圓形廣場上有 58 座瓷磚長椅，代表西班牙各省。下午光影打在瓷磚上超美！一定要划船", duration: "2h", tip: "免費，傍晚夕陽時最美", image: "https://images.unsplash.com/photo-1559386081-325882507af7?w=800&q=80" },
      { icon: "💃", time: "晚上", title: "佛朗明哥秀", description: "在 Triana 區或 Santa Cruz 區看一場真正的佛朗明哥表演，感動到起雞皮疙瘩！" },
    ],
  },
  {
    day: 3,
    date: "10/24（六）",
    title: "Sevilla → Granada",
    subtitle: "AVE 前進阿罕布拉宮腳下",
    emoji: "🏰",
    highlights: [
      { icon: "🚄", time: "10:00→12:30", title: "AVE 到 Granada", description: "Sevilla 到 Granada 高鐵直達，約 2.5h", duration: "2h30m", price: "€25-45" },
      { icon: "🏨", time: "13:00", title: "入住 Parador de Granada", description: "位於 Alhambra 宮殿內的傳奇飯店，前身是 15 世紀修道院，陽台就能看到阿罕布拉花園", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🏘️", time: "14:00-16:00", title: "Albaicín 阿爾拜辛區", description: "UNESCO 世界遺產的摩爾人舊城區，蜿蜒的白色小巷、磁磚庭院，像走入一千零一夜的世界" },
      { icon: "🌅", time: "16:30-17:30", title: "聖尼古拉斯瞭望台", description: "遠眺 Alhambra 的最佳點！夕陽時分，阿罕布拉宮在內華達山脈前閃耀金紅色光芒" },
    ],
    transport: { mode: "🚄 AVE", from: "Sevilla Santa Justa", to: "Granada", duration: "2h30m", price: "€25-45", details: "Renfe AVE 直達 Granada 車站。建議 10:00 出發，12:30 到，下午開始探索。" },
  },
  {
    day: 4,
    date: "10/25（日）",
    title: "Granada — Alhambra 全日",
    subtitle: "此生必去的宮殿奇蹟",
    emoji: "🏛️",
    highlights: [
      { icon: "🏛️", time: "09:00-13:00", title: "阿罕布拉宮 Alhambra", description: "西班牙的瑰寶、摩爾人的最後城堡！包含納斯利宮（超精緻阿拉伯雕刻）、Generalife 夏宮花園、卡洛斯五世宮殿。每走一步都是驚嘆！", duration: "4h+", tip: "⚠️ 一定要 2 個月前預約！門票 €19.09，Nasrid Palaces 有時段限制，不能遲到！", link: "https://tickets.alhambra-patronato.es/en/", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🍤", time: "13:00-15:00", title: "Granada Tapas 文化", description: "Granada 是全西班牙唯一點酒就送 Tapas 的城市！Calle Navas 上每家 bar 都有驚喜，吃一圈就飽了！" },
      { icon: "⛪", time: "15:30-17:00", title: "Granada 大教堂 + 皇家禮拜堂", description: "伊莎貝拉一世女王與費迪南德國王安葬於此。禮拜堂內有他們的石棺和珍貴的中世紀藝術品" },
    ],
  },
  {
    day: 5,
    date: "10/26（一）",
    title: "Granada → Córdoba",
    subtitle: "北上！重返摩爾人帝國的心臟",
    emoji: "🚄",
    highlights: [
      { icon: "🚄", time: "09:00→11:30", title: "AVE 到 Córdoba", description: "Granada 到 Córdoba 高鐵直達，約 2.5h", duration: "2h30m", price: "€25-45" },
      { icon: "🕌", time: "12:00-15:00", title: "Córdoba 大清真寺", description: "世界文化遺產，摩爾人興建的大清真寺內有 856 根雙色拱柱，後來天主教徒在裡面蓋了一座教堂，形成伊斯蘭+基督教的獨特融合", duration: "2-3h", tip: "門票 €13，建議上午去光線最好", link: "https://mezquita-catedraldecordoba.es/", image: "https://images.unsplash.com/photo-1632904080322-e71e16a5987f?w=800&q=80" },
      { icon: "🌸", time: "15:30-16:30", title: "百花巷 + 羅馬橋", description: "著名的藍白瓷磚小巷（Calleja de las Flores），以及西元 1 世紀建的羅馬橋" },
      { icon: "🌉", time: "17:00-18:30", title: "羅馬橋夕陽", description: "古羅馬橋橫跨瓜達幾維河，遠眺清真寺全景，夕陽時分金光灑落最美" },
    ],
    transport: { mode: "🚄 AVE", from: "Granada", to: "Córdoba", duration: "2h30m", price: "€25-45", details: "Renfe AVE 直達。建議 09:00 出發，11:30 到，下午開始探索。" },
  },
  {
    day: 6,
    date: "10/27（二）",
    title: "Córdoba → 馬德里",
    subtitle: "北上首都，藝術與王權",
    emoji: "👑",
    highlights: [
      { icon: "🚄", time: "09:00→10:45", title: "AVE 到馬德里", description: "Córdoba 到馬德里高鐵直達，約 1h45m", duration: "1h45m", price: "€30-50" },
      { icon: "🎨", time: "11:00-14:00", title: "普拉多美術館", description: "西班牙最重要的美術館，收藏哥雅、委拉斯奎茲、葛雷柯等大師鉅作。必看：哥雅《裸體的瑪哈》、委拉斯奎茲《宮女》", duration: "3h", tip: "門票 €15，下午 6-8 點免費入場但排隊很長", link: "https://www.museodelprado.es/", image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80" },
      { icon: "🌿", time: "14:00-15:00", title: "麗池公園", description: "馬德里的城市綠洲。在人工湖划船、看水晶宮（Palacio de Cristal）", image: "https://images.unsplash.com/photo-1645203494470-1507ae7f1a40?w=800&q=80" },
      { icon: "👑", time: "15:30-17:30", title: "馬德里皇宮", description: "歐洲第三大皇宮，僅次於凡爾賽宮和美景宮。奢華的內部裝潢、壁畫、兵器廣場", duration: "2h", tip: "門票 €12，建議提前官網預約", link: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid", image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80" },
      { icon: "🍫", time: "晚上", title: "San Ginés 吃 Churros", description: "開業於 1894 年的老字號，招牌是 Churros con Chocolate 巧克力油條，24 小時營業！" },
    ],
    transport: { mode: "🚄 AVE", from: "Córdoba", to: "馬德里 Atocha", duration: "1h45m", price: "€30-50", details: "Renfe AVE 直達。建議 09:00 出發，10:45 到，開始馬德里藝術之旅。" },
  },
  {
    day: 7,
    date: "10/28（三）",
    title: "馬德里 — 經典巡禮",
    subtitle: "格爾尼卡、La Latina、伯納烏",
    emoji: "🏛️",
    highlights: [
      { icon: "🎭", time: "09:30-11:30", title: "索菲亞王后藝術中心", description: "現代藝術美術館，鎮館之寶——畢卡索《格爾尼卡》！這幅反戰巨作長 7.8 公尺，親眼看到非常震撼", duration: "2h", tip: "門票 €12，週一、週三至週六 19:00-21:00 免費，週日 13:30-19:00 免費", link: "https://www.museoreinasofia.es/en", image: "https://images.unsplash.com/photo-1564565899675-a159063d17be?w=800&q=80" },
      { icon: "🏘️", time: "12:00-14:00", title: "La Latina 區午餐", description: "馬德里最古老的街區，蜿蜒的小巷裡藏著無數 Tapas 酒吧。推薦吃 Callos（燉牛肚）或 Tortilla Española" },
      { icon: "⚽", time: "15:00-17:00", title: "聖地亞哥·伯納烏球場", description: "皇家馬德里主場！參觀球場、更衣室、獎盃室、球員通道，球迷必去聖地！", duration: "2h", tip: "門票 €25-40，官網預約可選導覽", link: "https://www.realmadrid.com/en/visit-the-bernabeu", image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80" },
      { icon: "🌅", time: "17:30-19:00", title: "德波神廟夕陽", description: "從埃及搬來的神廟，馬德里最浪漫的夕陽景點。免費入場，夕陽時分整個神廟和天空超美" },
    ],
  },
  {
    day: 8,
    date: "10/29（四）",
    title: "馬德里 → 巴塞隆納",
    subtitle: "AVE 直達高第之城",
    emoji: "🚄",
    highlights: [
      { icon: "🚄", time: "09:00→11:30", title: "AVE 到巴塞隆納", description: "馬德里到巴塞隆納高鐵直達，約 2.5h", duration: "2h30m", price: "€40-70" },
      { icon: "🏨", time: "12:00", title: "入住巴塞隆納飯店", description: "建議住在 Eixample 擴展區（高第建築都在這）或哥德區附近", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🍽️", time: "13:00-14:30", title: "La Boqueria 市場午餐", description: "巴塞隆納最著名市場，新鮮海鮮、果汁、Tapas", image: "https://images.unsplash.com/photo-1614635454419-36aa631da264?w=800&q=80" },
      { icon: "🏛️", time: "15:00-17:00", title: "聖家堂 Sagrada Familia", description: "高第的畢生傑作，也是世界唯一尚未完工就被列為世界遺產的建築。光影透過彩繪玻璃灑落，宛如走進森林迷宮！預計 2026 年完工！", duration: "3h", tip: "門票 €26-40，一定要預約！建議選 Passion 塔登頂", link: "https://sagradafamilia.org/en/tickets", image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80" },
    ],
    transport: { mode: "🚄 AVE", from: "馬德里 Atocha", to: "巴塞隆納 Sants", duration: "2h30m", price: "€40-70", details: "Renfe AVE 直達。建議 09:00 出發，11:30 到，下午開始高第之旅。" },
  },
  {
    day: 9,
    date: "10/30（五）",
    title: "巴塞隆納 — 高第建築巡禮",
    subtitle: "巴特略之家、米拉之家、奎爾公園",
    emoji: "🎨",
    highlights: [
      { icon: "🏡", time: "09:30-11:00", title: "巴特略之家 Casa Batlló", description: "高第的海洋主題傑作，外牆像彩色龍鱗，內部沒有直線！沉浸式導覽用 AR 超酷", duration: "1.5h", tip: "門票 €35-45，官網有夜間燈光秀", link: "https://www.casabatllo.es/en/", image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80" },
      { icon: "🏠", time: "11:30-13:00", title: "米拉之家 Casa Milà", description: "高第最後的民用建築，波浪型石造外牆、煙囪屋頂像星際大戰的場景。屋頂必去！", duration: "1.5h", tip: "門票 €25，屋頂看夕陽特別美", image: "https://images.unsplash.com/photo-1568921097010-b59ee67056df?w=800&q=80" },
      { icon: "🌳", time: "15:00-17:00", title: "奎爾公園 Park Güell", description: "高第打造的童話花園社區，彩色馬賽克蜥蜴、波浪長椅、世界最長的曲線長椅", duration: "2h", tip: "紀念碑區域門票 €10，可線上預約", image: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?w=800&q=80" },
    ],
  },
  {
    day: 10,
    date: "10/31（六）",
    title: "巴塞隆納 — 漫步日",
    subtitle: "哥德區、蘭布拉大道、博蓋利亞市場",
    emoji: "🏘️",
    highlights: [
      { icon: "🏘️", time: "09:00-11:00", title: "哥德區 Barri Gòtic", description: "巴塞最古老的街區，狹窄的中世紀小巷、隱藏廣場。找到聖伊莉莎白廣場和主教橋" },
      { icon: "🛍️", time: "11:00-13:00", title: "蘭布拉大道 La Rambla", description: "巴塞隆納最著名的林蔭大道，街頭藝人、花店、咖啡座，走到底就是哥倫布紀念碑和海港" },
      { icon: "🐟", time: "11:30-13:00", title: "博蓋利亞市場", description: "歐洲最大市場之一，鮮豔的水果攤、伊比利火腿、現榨果汁、海鮮⋯⋯五感全開！", image: "https://images.unsplash.com/photo-1614635454419-36aa631da264?w=800&q=80" },
      { icon: "🌊", time: "15:00-17:00", title: "巴塞海灘 Barceloneta", description: "地中海陽光、沙灘、海鮮 Paella，旅程尾聲放空一下" },
    ],
  },
  {
    day: 11,
    date: "11/1（日）",
    title: "回程 ✈️ 台灣",
    subtitle: "帶著滿滿回憶回家",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", title: "巴塞隆納 → 杜拜 → 台北", description: "搭阿聯酋航空回程，結束 11 天的西班牙大冒險！🇪🇸 期待下次再來～", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
    ],
  },
];

export const HOTELS_REVERSE: Hotel[] = [
  {
    name: "Sevilla 飯店推薦",
    city: "Sevilla（10/22-23）",
    nights: 2,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在 Santa Cruz 區（舊城區）或 Triana 區，靠近 Alcázar 和大教堂。",
    highlights: ["📍 Santa Cruz（近 Alcázar，最方便）", "📍 Triana（對岸，佛朗明哥氣氛）", "🌟 Hotel Casa 1800（9.1分，古典莊園風）", "🌟 Hotel Alhambra Palace 系列"],
    image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80",
    bookingLinks: [
      { name: "📘 Hotel Casa 1800 查價", url: "https://www.booking.com/hotel/es/casa-1800-granada.html" },
    ],
  },
  {
    name: "Parador de Granada",
    city: "Granada（10/24-25）",
    nights: 2,
    stars: 4,
    priceRange: "€268-400 / 晚",
    description: "位於 Alhambra 宮殿內，前身是 15 世紀修道院。住在世界遺產裡是什麼感覺？只有 40 間房，極度搶手！",
    highlights: ["在 Alhambra 裡面！陽台看宮殿花園", "餐廳露台有 Alhambra 全景", "僅 40 間房，極致寧靜", "古典 Andalusian 裝潢風格"],
    image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80",
    bookingLinks: [
      { name: "🏛️ 官網 Paradores.es", url: "https://paradores.es/en/parador-de-granada" },
      { name: "📘 Booking.com", url: "https://www.booking.com/hotel/es/parador-de-granada.html" },
      { name: "🧳 Trip.com", url: "https://www.trip.com/hotels/granada-hotel-detail-2564852/parador-de-granada/" },
    ],
    note: "⚠️ 極度熱門，建議提前 3 個月以上訂房！",
  },
  {
    name: "馬德里飯店推薦",
    city: "Madrid（10/26-27）",
    nights: 2,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在太陽門廣場或 Gran Vía 附近，去哪都用走的。推薦兩間：",
    highlights: ["📍 區域：Sol / Gran Vía 最方便", "🌟 Room Mate Leo（現代設計，€80+）", "🌟 Barceló Carmen Granada（有泳池，$100+）", "離 Atocha 車站搭地鐵 10 分鐘"],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    bookingLinks: [
      { name: "📘 Room Mate Leo 查價", url: "https://www.booking.com/hotel/es/room-mate-leo.html" },
      { name: "📘 Barceló Carmen 查價", url: "https://www.booking.com/hotel/es/barcelo-carmen-granada.html" },
    ],
  },
  {
    name: "巴塞隆納飯店推薦",
    city: "BCN（10/28-31）",
    nights: 4,
    stars: 0,
    priceRange: "$100-250 / 晚",
    description: "建議住在 Eixample 擴展區（高第建築都在這）或哥德區附近。",
    highlights: ["📍 Eixample（高第路線，精品飯店多）", "📍 哥德區（近蘭布拉大道）", "🌟 Catalonia Cathedral（位置極佳）", "🌟 Hotel España（設計旅店，$150+）"],
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80",
    bookingLinks: [
      { name: "📘 Catalonia Cathedral 查價", url: "https://www.booking.com/hotel/es/catalonia-catedral.html" },
    ],
  },
];

export const ATTRACTIONS_REVERSE: Attraction[] = [
  { name: "塞維亞王宮 Alcázar", city: "Sevilla", emoji: "🏰", description: "歐洲最古老皇家宮殿，《權力遊戲》拍攝地", tips: ["門票 €13.5，務必預約", "後花園超美", "GOT 迷必去多恩花園場景"], image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80", timeNeeded: "2.5h", ticketLink: "https://www.alcazarsevilla.org/en/" },
  { name: "阿罕布拉宮 Alhambra", city: "Granada", emoji: "🏛️", description: "西班牙最偉大的伊斯蘭建築，摩爾人的最後榮光", tips: ["⚠️ 提前 2 個月預約！", "門票 €19.09", "Nasrid 宮殿有時段限制"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80", timeNeeded: "4h+", ticketLink: "https://tickets.alhambra-patronato.es/en/" },
  { name: "Córdoba 清真寺大教堂", city: "Córdoba", emoji: "🕌", description: "世界遺產，伊斯蘭+基督教融合的建築奇蹟", tips: ["門票 €13", "早上光線最好", "856 根雙色拱柱是必看"], image: "https://images.unsplash.com/photo-1632904080322-e71e16a5987f?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://mezquita-catedraldecordoba.es/" },
  { name: "普拉多美術館", city: "Madrid", emoji: "🎨", description: "世界最頂尖的藝術博物館之一，收藏西班牙黃金時代巨作", tips: ["門票 €15，18:00-20:00 免費", "預留至少 2-3 小時", "必看哥雅《裸體的瑪哈》"], image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://www.museodelprado.es/" },
  { name: "馬德里皇宮", city: "Madrid", emoji: "👑", description: "歐洲第三大皇宮，奢華程度令人咋舌", tips: ["門票 €12，建議預約", "包含兵器廣場和藥局", "旁邊就是阿穆德納教堂"], image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80", timeNeeded: "1.5-2h", ticketLink: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
  { name: "伯納烏球場", city: "Madrid", emoji: "⚽", description: "皇家馬德里主場，足球迷的聖地", tips: ["門票 €25-40", "包含獎盃室和球員通道", "比賽日可能不開放參觀"], image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80", timeNeeded: "2h", ticketLink: "https://www.realmadrid.com/en/visit-the-bernabeu" },
  { name: "聖家堂", city: "BCN", emoji: "⛪", description: "高第畢生傑作，2026 年終於要完工！", tips: ["門票 €26-40，預約", "選 Passion 塔登頂", "下午光影最美"], image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://sagradafamilia.org/en/tickets" },
  { name: "巴特略之家", city: "BCN", emoji: "🏡", description: "高第海洋主題建築，沒有直線的童話之家", tips: ["門票 €35-45", "AR 導覽超酷", "夜間燈光秀可考慮"], image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80", timeNeeded: "1.5h", ticketLink: "https://www.casabatllo.es/en/" },
];

export const CITY_VIDEOS_REVERSE: CityVideo[] = [
  { city: "塞維亞 Sevilla", embedId: "GDCeuQFs0v0", title: "Sevilla Travel Guide - Complete Tour" },
  { city: "格拉納達 Granada & Alhambra", embedId: "fL2Mno5ll9k", title: "Granada Spain Travel Guide" },
  { city: "馬德里 Madrid", embedId: "l1qH6XLC-2I", title: "馬德里旅遊｜西班牙馬德里必去景點" },
  { city: "巴塞隆納 Barcelona", embedId: "wMfVjW7ldUc", title: "Barcelona Travel Guide - Best Things to Do" },
];

export const ROUTE_COORDS_REVERSE: [number, number][] = [
  [37.3891, -5.9845], // Sevilla
  [37.1773, -3.5986], // Granada
  [37.8882, -4.7794], // Córdoba
  [40.4168, -3.7038], // Madrid
  [41.3874, 2.1686],  // Barcelona
];

export const CITY_INFO_REVERSE = [
  { name: "塞維亞", coords: [37.3891, -5.9845] as [number, number], emoji: "💃", desc: "停留 2 天" },
  { name: "格拉納達", coords: [37.1773, -3.5986] as [number, number], emoji: "🏰", desc: "停留 2 天" },
  { name: "哥多華", coords: [37.8882, -4.7794] as [number, number], emoji: "🕌", desc: "過路半天" },
  { name: "馬德里", coords: [40.4168, -3.7038] as [number, number], emoji: "👑", desc: "停留 2 天" },
  { name: "巴塞隆納", coords: [41.3874, 2.1686] as [number, number], emoji: "🎨", desc: "停留 4 天" },
];

export const HOTELS: Hotel[] = [
  {
    name: "Parador de Granada",
    city: "Granada（10/27-28）",
    nights: 2,
    stars: 4,
    priceRange: "€268-400 / 晚",
    description: "位於 Alhambra 宮殿內，前身是 15 世紀修道院。住在世界遺產裡是什麼感覺？只有 40 間房，極度搶手！",
    highlights: ["在 Alhambra 裡面！陽台看宮殿花園", "餐廳露台有 Alhambra 全景", "僅 40 間房，極致寧靜", "古典 Andalusian 裝潢風格"],
    image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80",
    bookingLinks: [
      { name: "🏛️ 官網 Paradores.es", url: "https://paradores.es/en/parador-de-granada" },
      { name: "📘 Booking.com", url: "https://www.booking.com/hotel/es/parador-de-granada.html" },
      { name: "🧳 Trip.com", url: "https://www.trip.com/hotels/granada-hotel-detail-2564852/parador-de-granada/" },
    ],
    note: "⚠️ 極度熱門，建議提前 3 個月以上訂房！",
  },
  {
    name: "馬德里飯店推薦",
    city: "Madrid（10/22-24）",
    nights: 3,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在太陽門廣場或 Gran Vía 附近，去哪都用走的。推薦兩間：",
    highlights: ["📍 區域：Sol / Gran Vía 最方便", "🌟 Room Mate Leo（現代設計，€80+）", "🌟 Barceló Carmen Granada（有泳池，$100+）", "離 Atocha 車站搭地鐵 10 分鐘"],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    bookingLinks: [
      { name: "📘 Room Mate Leo 查價", url: "https://www.booking.com/hotel/es/room-mate-leo.html" },
      { name: "📘 Barceló Carmen 查價", url: "https://www.booking.com/hotel/es/barcelo-carmen-granada.html" },
    ],
  },
  {
    name: "Sevilla 飯店推薦",
    city: "Sevilla（10/25-26）",
    nights: 2,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在 Santa Cruz 區（舊城區）或 Triana 區，靠近 Alcázar 和大教堂。",
    highlights: ["📍 Santa Cruz（近 Alcázar，最方便）", "📍 Triana（對岸，佛朗明哥氣氛）", "🌟 Hotel Casa 1800（9.1分，古典莊園風）", "🌟 Hotel Alhambra Palace 系列"],
    image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80",
    bookingLinks: [
      { name: "📘 Hotel Casa 1800 查價", url: "https://www.booking.com/hotel/es/casa-1800-granada.html" },
    ],
  },
  {
    name: "巴塞隆納飯店推薦",
    city: "BCN（10/29-31）",
    nights: 3,
    stars: 0,
    priceRange: "$100-250 / 晚",
    description: "建議住在 Eixample 擴展區（高第建築都在這）或哥德區附近。",
    highlights: ["📍 Eixample（高第路線，精品飯店多）", "📍 哥德區（近蘭布拉大道）", "🌟 Catalonia Cathedral（位置極佳）", "🌟 Hotel España（設計旅店，$150+）"],
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80",
    bookingLinks: [
      { name: "📘 Catalonia Cathedral 查價", url: "https://www.booking.com/hotel/es/catalonia-catedral.html" },
    ],
  },
];

export const HOTELS_RONDA: Hotel[] = [
  {
    name: "Parador de Ronda",
    city: "Ronda（10/25-26）",
    nights: 2,
    stars: 4,
    priceRange: "€180-280 / 晚",
    description: "位於 Ronda 舊城區邊緣，前身是市政廳改建。露台直接俯瞰 El Tajo 峽谷與 Puente Nuevo 新橋，景觀無敵！",
    highlights: ["露台直視新橋與峽谷", "歷史建築改建，古典優雅", "步行 5 分鐘到鬥牛場", "Ronda 最搶手的景觀飯店"],
    image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=800&q=80",
    bookingLinks: [
      { name: "🏛️ 官網 Paradores.es", url: "https://paradores.es/en/parador-de-ronda" },
      { name: "📘 Booking.com", url: "https://www.booking.com/hotel/es/parador-de-ronda.html" },
    ],
    note: "⚠️ 景觀房極度熱門，建議提前 3 個月訂房！",
  },
  {
    name: "Parador de Granada",
    city: "Granada（10/29-30）",
    nights: 2,
    stars: 4,
    priceRange: "€268-400 / 晚",
    description: "位於 Alhambra 宮殿內，前身是 15 世紀修道院。住在世界遺產裡是什麼感覺？只有 40 間房，極度搶手！",
    highlights: ["在 Alhambra 裡面！陽台看宮殿花園", "餐廳露台有 Alhambra 全景", "僅 40 間房，極致寧靜", "古典 Andalusian 裝潢風格"],
    image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80",
    bookingLinks: [
      { name: "🏛️ 官網 Paradores.es", url: "https://paradores.es/en/parador-de-granada" },
      { name: "📘 Booking.com", url: "https://www.booking.com/hotel/es/parador-de-granada.html" },
      { name: "🧳 Trip.com", url: "https://www.trip.com/hotels/granada-hotel-detail-2564852/parador-de-granada/" },
    ],
    note: "⚠️ 極度熱門，建議提前 3 個月以上訂房！",
  },
  {
    name: "馬德里飯店推薦",
    city: "Madrid（10/22-24）",
    nights: 3,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在太陽門廣場或 Gran Vía 附近，去哪都用走的。推薦兩間：",
    highlights: ["📍 區域：Sol / Gran Vía 最方便", "🌟 Room Mate Leo（現代設計，€80+）", "🌟 Barceló Carmen Granada（有泳池，$100+）", "離 Atocha 車站搭地鐵 10 分鐘"],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    bookingLinks: [
      { name: "📘 Room Mate Leo 查價", url: "https://www.booking.com/hotel/es/room-mate-leo.html" },
      { name: "📘 Barceló Carmen 查價", url: "https://www.booking.com/hotel/es/barcelo-carmen-granada.html" },
    ],
  },
  {
    name: "Sevilla 飯店推薦",
    city: "Sevilla（10/27-28）",
    nights: 2,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在 Santa Cruz 區（舊城區）或 Triana 區，靠近 Alcázar 和大教堂。",
    highlights: ["📍 Santa Cruz（近 Alcázar，最方便）", "📍 Triana（對岸，佛朗明哥氣氛）", "🌟 Hotel Casa 1800（9.1分，古典莊園風）", "🌟 Hotel Alhambra Palace 系列"],
    image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80",
    bookingLinks: [
      { name: "📘 Hotel Casa 1800 查價", url: "https://www.booking.com/hotel/es/casa-1800-granada.html" },
    ],
  },
  {
    name: "巴塞隆納飯店推薦",
    city: "BCN（10/31-11/2）",
    nights: 3,
    stars: 0,
    priceRange: "$100-250 / 晚",
    description: "建議住在 Eixample 擴展區（高第建築都在這）或哥德區附近。",
    highlights: ["📍 Eixample（高第路線，精品飯店多）", "📍 哥德區（近蘭布拉大道）", "🌟 Catalonia Cathedral（位置極佳）", "🌟 Hotel España（設計旅店，$150+）"],
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80",
    bookingLinks: [
      { name: "📘 Catalonia Cathedral 查價", url: "https://www.booking.com/hotel/es/catalonia-catedral.html" },
    ],
  },
];

export const ATTRACTIONS: Attraction[] = [
  { name: "普拉多美術館", city: "Madrid", emoji: "🎨", description: "世界最頂尖的藝術博物館之一，收藏西班牙黃金時代巨作", tips: ["門票 €15，18:00-20:00 免費", "預留至少 2-3 小時", "必看哥雅《裸體的瑪哈》"], image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://www.museodelprado.es/" },
  { name: "馬德里皇宮", city: "Madrid", emoji: "👑", description: "歐洲第三大皇宮，奢華程度令人咋舌", tips: ["門票 €12，建議預約", "包含兵器廣場和藥局", "旁邊就是阿穆德納教堂"], image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80", timeNeeded: "1.5-2h", ticketLink: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
  { name: "伯納烏球場", city: "Madrid", emoji: "⚽", description: "皇家馬德里主場，足球迷的聖地", tips: ["門票 €25-40", "包含獎盃室和球員通道", "比賽日可能不開放參觀"], image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80", timeNeeded: "2h", ticketLink: "https://www.realmadrid.com/en/visit-the-bernabeu" },
  { name: "Córdoba 清真寺大教堂", city: "Córdoba", emoji: "🕌", description: "世界遺產，伊斯蘭+基督教融合的建築奇蹟", tips: ["門票 €13", "早上光線最好", "856 根雙色拱柱是必看"], image: "https://images.unsplash.com/photo-1632904080322-e71e16a5987f?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://mezquita-catedraldecordoba.es/" },
  { name: "塞維亞王宮 Alcázar", city: "Sevilla", emoji: "🏰", description: "歐洲最古老皇家宮殿，《權力遊戲》拍攝地", tips: ["門票 €13.5，務必預約", "後花園超美", "GOT 迷必去多恩花園場景"], image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80", timeNeeded: "2.5h", ticketLink: "https://www.alcazarsevilla.org/en/" },
  { name: "阿罕布拉宮 Alhambra", city: "Granada", emoji: "🏛️", description: "西班牙最偉大的伊斯蘭建築，摩爾人的最後榮光", tips: ["⚠️ 提前 2 個月預約！", "門票 €19.09", "Nasrid 宮殿有時段限制"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80", timeNeeded: "4h+", ticketLink: "https://tickets.alhambra-patronato.es/en/" },
  { name: "聖家堂", city: "BCN", emoji: "⛪", description: "高第畢生傑作，2026 年終於要完工！", tips: ["門票 €26-40，預約", "選 Passion 塔登頂", "下午光影最美"], image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://sagradafamilia.org/en/tickets" },
  { name: "巴特略之家", city: "BCN", emoji: "🏡", description: "高第海洋主題建築，沒有直線的童話之家", tips: ["門票 €35-45", "AR 導覽超酷", "夜間燈光秀可考慮"], image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80", timeNeeded: "1.5h", ticketLink: "https://www.casabatllo.es/en/" },
];

export const ATTRACTIONS_RONDA: Attraction[] = [
  { name: "普拉多美術館", city: "Madrid", emoji: "🎨", description: "世界最頂尖的藝術博物館之一，收藏西班牙黃金時代巨作", tips: ["門票 €15，18:00-20:00 免費", "預留至少 2-3 小時", "必看哥雅《裸體的瑪哈》"], image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://www.museodelprado.es/" },
  { name: "馬德里皇宮", city: "Madrid", emoji: "👑", description: "歐洲第三大皇宮，奢華程度令人咋舌", tips: ["門票 €12，建議預約", "包含兵器廣場和藥局", "旁邊就是阿穆德納教堂"], image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80", timeNeeded: "1.5-2h", ticketLink: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
  { name: "伯納烏球場", city: "Madrid", emoji: "⚽", description: "皇家馬德里主場，足球迷的聖地", tips: ["門票 €25-40", "包含獎盃室和球員通道", "比賽日可能不開放參觀"], image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80", timeNeeded: "2h", ticketLink: "https://www.realmadrid.com/en/visit-the-bernabeu" },
  { name: "Córdoba 清真寺大教堂", city: "Córdoba", emoji: "🕌", description: "世界遺產，伊斯蘭+基督教融合的建築奇蹟", tips: ["門票 €13", "早上光線最好", "856 根雙色拱柱是必看"], image: "https://images.unsplash.com/photo-1632904080322-e71e16a5987f?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://mezquita-catedraldecordoba.es/" },
  { name: "Puente Nuevo 新橋", city: "Ronda", emoji: "🌉", description: "Ronda 地標，98 公尺高橫跨 El Tajo 峽谷，連接新舊城區", tips: ["免費，清晨或夕陽最美", "橋身中間藏有舊監獄展覽館", "從谷底仰望最壯觀"], image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=800&q=80", timeNeeded: "1-2h", ticketLink: "" },
  { name: "Ronda 鬥牛場", city: "Ronda", emoji: "🐂", description: "西班牙最古老鬥牛場（1785 年），鬥牛士朝聖地", tips: ["門票 €8.5，含博物館", "環形建築本身就很美", "週日可能有免費時段"], image: "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=800&q=80", timeNeeded: "1.5h", ticketLink: "https://www.rmcr.org/" },
  { name: "塞維亞王宮 Alcázar", city: "Sevilla", emoji: "🏰", description: "歐洲最古老皇家宮殿，《權力遊戲》拍攝地", tips: ["門票 €13.5，務必預約", "後花園超美", "GOT 迷必去多恩花園場景"], image: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=800&q=80", timeNeeded: "2.5h", ticketLink: "https://www.alcazarsevilla.org/en/" },
  { name: "阿罕布拉宮 Alhambra", city: "Granada", emoji: "🏛️", description: "西班牙最偉大的伊斯蘭建築，摩爾人的最後榮光", tips: ["⚠️ 提前 2 個月預約！", "門票 €19.09", "Nasrid 宮殿有時段限制"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80", timeNeeded: "4h+", ticketLink: "https://tickets.alhambra-patronato.es/en/" },
  { name: "聖家堂", city: "BCN", emoji: "⛪", description: "高第畢生傑作，2026 年終於要完工！", tips: ["門票 €26-40，預約", "選 Passion 塔登頂", "下午光影最美"], image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://sagradafamilia.org/en/tickets" },
  { name: "巴特略之家", city: "BCN", emoji: "🏡", description: "高第海洋主題建築，沒有直線的童話之家", tips: ["門票 €35-45", "AR 導覽超酷", "夜間燈光秀可考慮"], image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80", timeNeeded: "1.5h", ticketLink: "https://www.casabatllo.es/en/" },
];

export const CITY_VIDEOS: CityVideo[] = [
  { city: "馬德里 Madrid", embedId: "l1qH6XLC-2I", title: "馬德里旅遊｜西班牙馬德里必去景點" },
  { city: "塞維亞 Sevilla", embedId: "GDCeuQFs0v0", title: "Sevilla Travel Guide - Complete Tour" },
  { city: "格拉納達 Granada & Alhambra", embedId: "fL2Mno5ll9k", title: "Granada Spain Travel Guide" },
  { city: "巴塞隆納 Barcelona", embedId: "wMfVjW7ldUc", title: "Barcelona Travel Guide - Best Things to Do" },
];

export const CITY_VIDEOS_RONDA: CityVideo[] = [
  { city: "馬德里 Madrid", embedId: "l1qH6XLC-2I", title: "馬德里旅遊｜西班牙馬德里必去景點" },
  { city: "Ronda", embedId: "8XxD6LhdG1w", title: "Ronda Spain Travel Guide - The Most Beautiful Village" },
  { city: "塞維亞 Sevilla", embedId: "GDCeuQFs0v0", title: "Sevilla Travel Guide - Complete Tour" },
  { city: "格拉納達 Granada & Alhambra", embedId: "fL2Mno5ll9k", title: "Granada Spain Travel Guide" },
  { city: "巴塞隆納 Barcelona", embedId: "wMfVjW7ldUc", title: "Barcelona Travel Guide - Best Things to Do" },
];

export const ROUTE_COORDS: [number, number][] = [
  [40.4168, -3.7038], // Madrid
  [37.8882, -4.7794], // Córdoba
  [37.3891, -5.9845], // Sevilla
  [37.1773, -3.5986], // Granada
  [41.3874, 2.1686],  // Barcelona
];

export const ROUTE_COORDS_RONDA: [number, number][] = [
  [40.4168, -3.7038], // Madrid
  [37.8882, -4.7794], // Córdoba
  [36.7462, -5.1611], // Ronda
  [37.3891, -5.9845], // Sevilla
  [37.1773, -3.5986], // Granada
  [41.3874, 2.1686],  // Barcelona
];

export const CITY_INFO = [
  { name: "馬德里", coords: [40.4168, -3.7038] as [number, number], emoji: "👑", desc: "停留 3 天" },
  { name: "哥多華", coords: [37.8882, -4.7794] as [number, number], emoji: "🕌", desc: "過路半天" },
  { name: "塞維亞", coords: [37.3891, -5.9845] as [number, number], emoji: "💃", desc: "停留 2 天" },
  { name: "格拉納達", coords: [37.1773, -3.5986] as [number, number], emoji: "🏰", desc: "停留 3 天" },
  { name: "巴塞隆納", coords: [41.3874, 2.1686] as [number, number], emoji: "🎨", desc: "停留 3 天" },
];

// ========== 方案四：Madrid + Granada + Málaga + Ronda（不留宿）+ BCN ==========

export const DAYS_MALAGA: DayPlan[] = [
  {
    day: 1,
    date: "10/22（四）",
    title: "出發！台北 → 馬德里",
    subtitle: "長途飛行 + 馬德里夜漫步",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", time: "00:30", title: "台北出發", description: "搭乘阿聯酋航空 EK387，飛往杜拜轉機", duration: "5h", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80" },
      { icon: "☕", time: "05:15→08:15", title: "杜拜轉機", description: "杜拜機場 3 小時轉機，逛 Duty Free 或休息", duration: "3h" },
      { icon: "🛬", time: "13:25", title: "抵達巴塞隆納", description: "到 BCN，出關領行李", duration: "~1h" },
      { icon: "🚄", time: "15:00→17:30", title: "AVE 高鐵到馬德里", description: "從 BCN 搭 AVE 直達 Madrid Puerta de Atocha，每小時都有班次", duration: "2h30m", price: "€40-70", link: "https://www.renfe.com/" },
      { icon: "🌆", time: "18:00", title: "馬德里夜間散步", description: "Check-in 後沿 Gran Vía → 太陽門廣場（零公里標誌）→ 馬約爾廣場 → Mercado de San Miguel 吃 Tapas", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80" },
    ],
    transport: { mode: "🚄 AVE", from: "巴塞隆納 BCN", to: "馬德里 Atocha", duration: "2h30m", price: "€40-70", details: "Renfe AVE 高鐵，直達 Madrid Puerta de Atocha。班次密集（每小時約 2 班），建議提前在 renfe.com 購票享早鳥優惠。" },
  },
  {
    day: 2,
    date: "10/23（五）",
    title: "馬德里 — 藝術之日",
    subtitle: "普拉多美術館、皇宮、麗池公園",
    emoji: "🎨",
    highlights: [
      { icon: "🎨", time: "09:00-12:00", title: "普拉多美術館", description: "西班牙最重要的美術館，收藏哥雅、委拉斯奎茲、葛雷柯等大師鉅作。必看：哥雅《裸體的瑪哈》、委拉斯奎茲《宮女》", duration: "3h", tip: "門票 €15，下午 6-8 點免費入場但排隊很長", link: "https://www.museodelprado.es/", image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80" },
      { icon: "🌿", time: "12:00-13:00", title: "麗池公園", description: "馬德里的城市綠洲。在人工湖划船、看水晶宮（Palacio de Cristal）", image: "https://images.unsplash.com/photo-1645203494470-1507ae7f1a40?w=800&q=80" },
      { icon: "👑", time: "14:30-16:30", title: "馬德里皇宮", description: "歐洲第三大皇宮，僅次於凡爾賽宮和美景宮。奢華的內部裝潢、壁畫、兵器廣場", duration: "2h", tip: "門票 €12，建議提前官網預約", link: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid", image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80" },
      { icon: "🍫", time: "晚上", title: "San Ginés 吃 Churros", description: "開業於 1894 年的老字號，招牌是 Churros con Chocolate 巧克力油條，24 小時營業！" },
    ],
  },
  {
    day: 3,
    date: "10/24（六）",
    title: "馬德里 → Granada",
    subtitle: "AVE 直達阿罕布拉宮腳下",
    emoji: "🏰",
    highlights: [
      { icon: "🚄", time: "08:00→10:30", title: "AVE 到 Granada", description: "馬德里 Atocha 出發，2.5h 直達 Granada", duration: "2h30m", price: "€40-70" },
      { icon: "🏨", time: "11:00", title: "入住 Parador de Granada", description: "位於 Alhambra 宮殿內的傳奇飯店，前身是 15 世紀修道院，陽台就能看到阿罕布拉花園", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🏘️", time: "12:00-14:00", title: "Albaicín 阿爾拜辛區午餐", description: "UNESCO 世界遺產的摩爾人舊城區，蜿蜒的白色小巷、磁磚庭院，像走入一千零一夜的世界" },
      { icon: "🌅", time: "14:30-16:00", title: "聖尼古拉斯瞭望台", description: "遠眺 Alhambra 的最佳點！下午光影打在宮殿上超美" },
      { icon: "🍤", time: "晚上", title: "Granada Tapas 巡禮", description: "Granada 是全西班牙唯一點酒就送 Tapas 的城市！Calle Navas 上每家 bar 都有驚喜" },
    ],
    transport: { mode: "🚄 AVE", from: "馬德里 Atocha", to: "Granada", duration: "2h30m", price: "€40-70", details: "Renfe AVE 直達 Granada 車站。建議 08:00 出發，10:30 到，開始探索。" },
  },
  {
    day: 4,
    date: "10/25（日）",
    title: "Granada — Alhambra 全日",
    subtitle: "此生必去的宮殿奇蹟",
    emoji: "🏛️",
    highlights: [
      { icon: "🏛️", time: "08:30-13:00", title: "阿罕布拉宮 Alhambra", description: "西班牙的瑰寶、摩爾人的最後城堡！包含納斯利宮（超精緻阿拉伯雕刻）、Generalife 夏宮花園、卡洛斯五世宮殿。每走一步都是驚嘆！", duration: "4h+", tip: "⚠️ 一定要 2 個月前預約！門票 €19.09，Nasrid Palaces 有時段限制，不能遲到！", link: "https://tickets.alhambra-patronato.es/en/", image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80" },
      { icon: "🍽️", time: "13:00-14:30", title: "Parador 午餐", description: "在 Alhambra 宮殿內的國營旅館用餐，享受歷史氛圍" },
      { icon: "⛪", time: "15:00-16:30", title: "Granada 大教堂 + 皇家禮拜堂", description: "伊莎貝拉一世女王與費迪南德國王安葬於此。禮拜堂內有他們的石棺和珍貴的中世紀藝術品" },
      { icon: "🌃", time: "17:00-18:30", title: "阿爾拜辛區夜景", description: "再次登上聖尼古拉斯觀景台，Alhambra 夜景燈火" },
    ],
  },
  {
    day: 5,
    date: "10/26（一）",
    title: "Granada → Málaga",
    subtitle: "太陽海岸的藝術與海灘",
    emoji: "🌊",
    highlights: [
      { icon: "🚗", time: "09:00→10:30", title: "Granada → Málaga 自駕", description: "租車沿 A-92 公路南下，約 1.5h。沿途是安達魯西亞鄉村與橄欖樹", duration: "1.5h", price: "€20-30" },
      { icon: "🏨", time: "11:00", title: "入住 Málaga 飯店", description: "建議住在老城區或港口附近，方便步行探索", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🎨", time: "12:00-14:00", title: "畢卡索美術館", description: "Málaga 是畢卡索出生地，美術館收藏 200+ 幅作品，從早期到立體派都有", duration: "2h", tip: "門票 €9，週日免費", link: "https://www.museopicassomalaga.org/", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🏛️", time: "14:30-15:30", title: "Málaga 羅馬劇場 + 城堡", description: "西元 1 世紀的羅馬劇場，以及摩爾時期的 Alcazaba 城堡，俯瞰港口", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🌊", time: "16:00-18:00", title: "La Malagueta 海灘", description: "Málaga 市區海灘，地中海陽光、沙灘、海鮮餐廳，放鬆一下", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🍽️", time: "晚上", title: "港口區晚餐", description: "Muelle Uno 港口區，現代餐廳與傳統 Tapas 並存，海鮮超新鮮" },
    ],
    transport: { mode: "🚗 租車", from: "Granada", to: "Málaga", duration: "1.5h", price: "€20-30", details: "Granada 租車沿 A-92 南下到 Málaga（1.5h）。Málaga 有還車點，後續可搭火車或繼續自駕。" },
  },
  {
    day: 6,
    date: "10/27（二）",
    title: "Málaga + Ronda 一日遊",
    subtitle: "太陽海岸 → 懸崖小鎮",
    emoji: "🌉",
    highlights: [
      { icon: "🌊", time: "08:00-09:30", title: "Málaga 海灘晨跑", description: "La Malagueta 海灘晨間散步，地中海晨光超療癒", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🚗", time: "10:00→11:30", title: "Málaga → Ronda", description: "自駕沿 A-357 公路穿越山區，約 1.5h。沿途是安達魯西亞最美鄉村公路", duration: "1.5h", price: "油費約 €10" },
      { icon: "🌉", time: "12:00-13:30", title: "Puente Nuevo 新橋", description: "Ronda 地標！98 公尺高的新橋橫跨 El Tajo 峽谷，連接新舊城區。橋身中間還藏著一間舊監獄展覽館", image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=800&q=80" },
      { icon: "🐂", time: "14:00-15:30", title: "Ronda 鬥牛場 + 老城區", description: "西班牙最古老的鬥牛場之一（1785 年），環形建築本身就很美。附近白色小屋密佈的老城區每個轉角都是明信片", duration: "1.5h", tip: "鬥牛場門票 €8.5，含博物館", link: "https://www.rmcr.org/", image: "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=800&q=80" },
      { icon: "🍷", time: "16:00-17:30", title: "Ronda 酒莊品酒", description: "Ronda 是 Malaga 葡萄酒產區的核心，高海拔種植的紅酒濃郁奔放。推薦 Bodega Joaquín Fernández", duration: "1.5h", tip: "品酒 €15-25，需預約" },
      { icon: "🚗", time: "18:00→19:30", title: "Ronda → Málaga", description: "傍晚開回 Málaga，約 1.5h。可順路停觀景台看夕陽", duration: "1.5h" },
      { icon: "🍽️", time: "晚上", title: "Málaga 老城區晚餐", description: "Atarazanas 市場附近，傳統 Tapas 酒吧巡禮" },
    ],
    transport: { mode: "🚗 租車", from: "Málaga", to: "Ronda", duration: "1.5h", price: "油費 €10", details: "Málaga 租車當日來回 Ronda（1.5h 單程）。Ronda 無火車站，建議自駕。當天回 Málaga 還車。" },
  },
  {
    day: 7,
    date: "10/28（三）",
    title: "Málaga → 巴塞隆納",
    subtitle: "AVE 直達高第之城",
    emoji: "🚄",
    highlights: [
      { icon: "🚄", time: "09:00→14:30", title: "Málaga → BCN AVE", description: "Málaga 到巴塞隆納高鐵直達，約 5.5h。沿途經過 Córdoba、Madrid，可欣賞安達魯西亞到加泰隆尼亞的風景變化", duration: "5h30m", price: "€50-90" },
      { icon: "🏨", time: "15:00", title: "入住巴塞隆納飯店", description: "建議住在 Eixample 擴展區（高第建築都在這）或哥德區附近", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🍽️", time: "16:00-17:30", title: "Passeig de Gràcia 散步", description: "巴塞隆納最時尚大道，先踩點巴特略之家和米拉之家外觀，為明天做準備" },
      { icon: "🌃", time: "18:00-20:00", title: "蘭布拉大道夜景", description: "巴塞隆納最熱鬧街道，街頭藝人、咖啡廳、夜生活", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
    ],
    transport: { mode: "🚄 AVE", from: "Málaga María Zambrano", to: "巴塞隆納 Sants", duration: "5h30m", price: "€50-90", details: "Renfe AVE 直達，每日多班。建議訂 09:00 班次，14:30 到，下午開始探索。" },
  },
  {
    day: 8,
    date: "10/29（四）",
    title: "巴塞隆納 — 高第建築巡禮",
    subtitle: "巴特略之家、米拉之家、聖家堂",
    emoji: "🎨",
    highlights: [
      { icon: "🏡", time: "09:30-11:00", title: "巴特略之家 Casa Batlló", description: "高第的海洋主題傑作，外牆像彩色龍鱗，內部沒有直線！沉浸式導覽用 AR 超酷", duration: "1.5h", tip: "門票 €35-45，官網有夜間燈光秀", link: "https://www.casabatllo.es/en/", image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80" },
      { icon: "🏠", time: "11:30-13:00", title: "米拉之家 Casa Milà", description: "高第最後的民用建築，波浪型石造外牆、煙囪屋頂像星際大戰的場景。屋頂必去！", duration: "1.5h", tip: "門票 €25，屋頂看夕陽特別美", image: "https://images.unsplash.com/photo-1568921097010-b59ee67056df?w=800&q=80" },
      { icon: "🏛️", time: "14:00-17:00", title: "聖家堂 Sagrada Familia", description: "高第的畢生傑作，也是世界唯一尚未完工就被列為世界遺產的建築。光影透過彩繪玻璃灑落，宛如走進森林迷宮！預計 2026 年完工！", duration: "3h", tip: "門票 €26-40，一定要預約！建議選 Passion 塔登頂", link: "https://sagradafamilia.org/en/tickets", image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80" },
    ],
  },
  {
    day: 9,
    date: "10/30（五）",
    title: "巴塞隆納 — 奎爾公園 + 哥德區",
    subtitle: "童話花園與中世紀迷宮",
    emoji: "🌳",
    highlights: [
      { icon: "🌳", time: "09:00-11:00", title: "奎爾公園 Park Güell", description: "高第打造的童話花園社區，彩色馬賽克蜥蜴、波浪長椅、世界最長的曲線長椅", duration: "2h", tip: "紀念碑區域門票 €10，可線上預約", image: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?w=800&q=80" },
      { icon: "🏘️", time: "12:00-14:00", title: "哥德區 Barri Gòtic", description: "巴塞最古老的街區，狹窄的中世紀小巷、隱藏廣場。找到聖伊莉莎白廣場和主教橋" },
      { icon: "🐟", time: "14:00-15:30", title: "博蓋利亞市場午餐", description: "歐洲最大市場之一，鮮豔的水果攤、伊比利火腿、現榨果汁、海鮮⋯⋯五感全開！", image: "https://images.unsplash.com/photo-1614635454419-36aa631da264?w=800&q=80" },
      { icon: "🏛️", time: "16:00-17:00", title: "巴塞隆納主教座堂", description: "哥德區核心，13世紀哥德式建築，屋頂觀景台", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🌊", time: "17:30-19:00", title: "巴塞海灘 Barceloneta", description: "地中海陽光、沙灘、海鮮 Paella，旅程尾聲放空一下", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
    ],
  },
  {
    day: 10,
    date: "10/31（六）",
    title: "巴塞隆納 — 漫步日",
    subtitle: "蘭布拉大道、El Born、海灘",
    emoji: "🏘️",
    highlights: [
      { icon: "🛍️", time: "09:00-11:00", title: "蘭布拉大道 La Rambla", description: "巴塞隆納最著名的林蔭大道，街頭藝人、花店、咖啡座，走到底就是哥倫布紀念碑和海港" },
      { icon: "🍽️", time: "11:00-13:00", title: "El Born 區午餐", description: "巴塞隆納最潮街區，設計師店、創意料理、藝術畫廊" },
      { icon: "🏛️", time: "14:00-15:30", title: "巴塞隆納音樂宮", description: "現代主義音樂廳，彩色玻璃天窗，世界遺產", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🌅", time: "16:00-17:30", title: "Bunkers del Carmel", description: "巴塞隆納最佳觀景台，360度城市全景，夕陽絕美", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
      { icon: "🍽️", time: "晚上", title: "告別晚餐", description: "Carrer de Blai 步行街，Pinchos 酒吧巡禮", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80" },
    ],
  },
  {
    day: 11,
    date: "11/1（日）",
    title: "回程 ✈️ 台灣",
    subtitle: "帶著滿滿回憶回家",
    emoji: "🛫",
    highlights: [
      { icon: "🛫", title: "巴塞隆納 → 杜拜 → 台北", description: "搭阿聯酋航空回程，結束 11 天的西班牙大冒險！🇪🇸 期待下次再來～", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
    ],
  },
];

export const HOTELS_MALAGA: Hotel[] = [
  {
    name: "Parador de Granada",
    city: "Granada（10/24-25）",
    nights: 2,
    stars: 4,
    priceRange: "€268-400 / 晚",
    description: "位於 Alhambra 宮殿內，前身是 15 世紀修道院。住在世界遺產裡是什麼感覺？只有 40 間房，極度搶手！",
    highlights: ["在 Alhambra 裡面！陽台看宮殿花園", "餐廳露台有 Alhambra 全景", "僅 40 間房，極致寧靜", "古典 Andalusian 裝潢風格"],
    image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80",
    bookingLinks: [
      { name: "🏛️ 官網 Paradores.es", url: "https://paradores.es/en/parador-de-granada" },
      { name: "📘 Booking.com", url: "https://www.booking.com/hotel/es/parador-de-granada.html" },
      { name: "🧳 Trip.com", url: "https://www.trip.com/hotels/granada-hotel-detail-2564852/parador-de-granada/" },
    ],
    note: "⚠️ 極度熱門，建議提前 3 個月以上訂房！",
  },
  {
    name: "Málaga 飯店推薦",
    city: "Málaga（10/26-27）",
    nights: 2,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在老城區（Centro Histórico）或港口附近（Muelle Uno），方便步行探索。",
    highlights: ["📍 老城區（近畢卡索美術館、羅馬劇場）", "📍 港口區（現代餐廳、海灘步行距離）", "🌟 Room Mate Valeria（設計旅店，€90+）", "🌟 Molina Lario（四星，位置極佳，$150+）"],
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    bookingLinks: [
      { name: "📘 Room Mate Valeria 查價", url: "https://www.booking.com/hotel/es/room-mate-valeria.html" },
      { name: "📘 Molina Lario 查價", url: "https://www.booking.com/hotel/es/molina-lario.html" },
    ],
  },
  {
    name: "馬德里飯店推薦",
    city: "Madrid（10/22-23）",
    nights: 2,
    stars: 0,
    priceRange: "$80-200 / 晚",
    description: "建議住在太陽門廣場或 Gran Vía 附近，去哪都用走的。推薦兩間：",
    highlights: ["📍 區域：Sol / Gran Vía 最方便", "🌟 Room Mate Leo（現代設計，€80+）", "🌟 Barceló Carmen Granada（有泳池，$100+）", "離 Atocha 車站搭地鐵 10 分鐘"],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    bookingLinks: [
      { name: "📘 Room Mate Leo 查價", url: "https://www.booking.com/hotel/es/room-mate-leo.html" },
      { name: "📘 Barceló Carmen 查價", url: "https://www.booking.com/hotel/es/barcelo-carmen-granada.html" },
    ],
  },
  {
    name: "巴塞隆納飯店推薦",
    city: "BCN（10/28-31）",
    nights: 4,
    stars: 0,
    priceRange: "$100-250 / 晚",
    description: "建議住在 Eixample 擴展區（高第建築都在這）或哥德區附近。",
    highlights: ["📍 Eixample（高第路線，精品飯店多）", "📍 哥德區（近蘭布拉大道）", "🌟 Catalonia Cathedral（位置極佳）", "🌟 Hotel España（設計旅店，$150+）"],
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80",
    bookingLinks: [
      { name: "📘 Catalonia Cathedral 查價", url: "https://www.booking.com/hotel/es/catalonia-catedral.html" },
    ],
  },
];

export const ATTRACTIONS_MALAGA: Attraction[] = [
  { name: "普拉多美術館", city: "Madrid", emoji: "🎨", description: "世界最頂尖的藝術博物館之一，收藏西班牙黃金時代巨作", tips: ["門票 €15，18:00-20:00 免費", "預留至少 2-3 小時", "必看哥雅《裸體的瑪哈》"], image: "https://images.unsplash.com/photo-1651902519299-9eaf6548b364?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://www.museodelprado.es/" },
  { name: "馬德里皇宮", city: "Madrid", emoji: "👑", description: "歐洲第三大皇宮，奢華程度令人咋舌", tips: ["門票 €12，建議預約", "包含兵器廣場和藥局", "旁邊就是阿穆德納教堂"], image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80", timeNeeded: "1.5-2h", ticketLink: "https://www.patrimonionacional.es/en/visita/palacio-real-de-madrid" },
  { name: "伯納烏球場", city: "Madrid", emoji: "⚽", description: "皇家馬德里主場，足球迷的聖地", tips: ["門票 €25-40", "包含獎盃室和球員通道", "比賽日可能不開放參觀"], image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80", timeNeeded: "2h", ticketLink: "https://www.realmadrid.com/en/visit-the-bernabeu" },
  { name: "阿罕布拉宮 Alhambra", city: "Granada", emoji: "🏛️", description: "西班牙最偉大的伊斯蘭建築，摩爾人的最後榮光", tips: ["⚠️ 提前 2 個月預約！", "門票 €19.09", "Nasrid 宮殿有時段限制"], image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=800&q=80", timeNeeded: "4h+", ticketLink: "https://tickets.alhambra-patronato.es/en/" },
  { name: "畢卡索美術館", city: "Málaga", emoji: "🎨", description: "Málaga 是畢卡索出生地，收藏 200+ 幅作品", tips: ["門票 €9，週日免費", "從早期到立體派都有", "建議 2 小時"], image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80", timeNeeded: "2h", ticketLink: "https://www.museopicassomalaga.org/" },
  { name: "Málaga 羅馬劇場", city: "Málaga", emoji: "🏛️", description: "西元 1 世紀古羅馬遺跡，免費參觀", tips: ["免費", "旁邊就是 Alcazaba 城堡", "可買聯票"], image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80", timeNeeded: "1h", ticketLink: "" },
  { name: "Puente Nuevo 新橋", city: "Ronda", emoji: "🌉", description: "Ronda 地標，98 公尺高橫跨 El Tajo 峽谷", tips: ["免費", "橋身中間藏有舊監獄展覽館", "從谷底仰望最壯觀"], image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=800&q=80", timeNeeded: "1-2h", ticketLink: "" },
  { name: "Ronda 鬥牛場", city: "Ronda", emoji: "🐂", description: "西班牙最古老鬥牛場（1785 年）", tips: ["門票 €8.5，含博物館", "環形建築本身就很美", "週日可能有免費時段"], image: "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=800&q=80", timeNeeded: "1.5h", ticketLink: "https://www.rmcr.org/" },
  { name: "聖家堂", city: "BCN", emoji: "⛪", description: "高第畢生傑作，2026 年終於要完工！", tips: ["門票 €26-40，預約", "選 Passion 塔登頂", "下午光影最美"], image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80", timeNeeded: "2-3h", ticketLink: "https://sagradafamilia.org/en/tickets" },
  { name: "巴特略之家", city: "BCN", emoji: "🏡", description: "高第海洋主題建築，沒有直線的童話之家", tips: ["門票 €35-45", "AR 導覽超酷", "夜間燈光秀可考慮"], image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80", timeNeeded: "1.5h", ticketLink: "https://www.casabatllo.es/en/" },
];

export const CITY_VIDEOS_MALAGA: CityVideo[] = [
  { city: "馬德里 Madrid", embedId: "l1qH6XLC-2I", title: "馬德里旅遊｜西班牙馬德里必去景點" },
  { city: "格拉納達 Granada & Alhambra", embedId: "fL2Mno5ll9k", title: "Granada Spain Travel Guide" },
  { city: "Málaga", embedId: "x9L_RI69rks", title: "3 Days in Malaga, Spain | 15 Things to Do, Eat & Drink" },
  { city: "巴塞隆納 Barcelona", embedId: "wMfVjW7ldUc", title: "Barcelona Travel Guide - Best Things to Do" },
];

export const ROUTE_COORDS_MALAGA: [number, number][] = [
  [40.4168, -3.7038], // Madrid
  [37.1773, -3.5986], // Granada
  [36.7213, -4.4214], // Málaga
  [36.7462, -5.1611], // Ronda (day trip)
  [41.3874, 2.1686],  // Barcelona
];

export const CITY_INFO_MALAGA = [
  { name: "馬德里", coords: [40.4168, -3.7038] as [number, number], emoji: "👑", desc: "停留 2 天" },
  { name: "格拉納達", coords: [37.1773, -3.5986] as [number, number], emoji: "🏰", desc: "停留 2 天" },
  { name: "Málaga", coords: [36.7213, -4.4214] as [number, number], emoji: "🌊", desc: "停留 2 天" },
  { name: "Ronda", coords: [36.7462, -5.1611] as [number, number], emoji: "🌉", desc: "一日遊" },
  { name: "巴塞隆納", coords: [41.3874, 2.1686] as [number, number], emoji: "🎨", desc: "停留 4 天" },
];

export const CITY_INFO_RONDA = [
  { name: "馬德里", coords: [40.4168, -3.7038] as [number, number], emoji: "👑", desc: "停留 3 天" },
  { name: "哥多華", coords: [37.8882, -4.7794] as [number, number], emoji: "🕌", desc: "過路半天" },
  { name: "Ronda", coords: [36.7462, -5.1611] as [number, number], emoji: "🌉", desc: "停留 2 天" },
  { name: "塞維亞", coords: [37.3891, -5.9845] as [number, number], emoji: "💃", desc: "停留 2 天" },
  { name: "格拉納達", coords: [37.1773, -3.5986] as [number, number], emoji: "🏰", desc: "停留 2 天" },
  { name: "巴塞隆納", coords: [41.3874, 2.1686] as [number, number], emoji: "🎨", desc: "停留 3 天" },
];