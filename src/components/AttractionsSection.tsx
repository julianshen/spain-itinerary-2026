"use client";

import { useState } from "react";
import { Attraction } from "../types";

interface AttractionsSectionProps {
  attractions: Attraction[];
  title?: string;
  subtitle?: string;
}

export default function AttractionsSection({
  attractions,
  title = "必去景點",
  subtitle = "從馬德里皇宮到聖家堂，每一個都是此生必訪",
}: AttractionsSectionProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Rich descriptions for each attraction
  const richDescriptions: Record<string, string> = {
    "普拉多美術館": `走進普拉多，就像走進西班牙的靈魂。這座兩百年歷史的美術館，收藏了從哥雅到委拉斯奎茲、從葛雷柯到魯本斯的曠世鉅作。站在《裸體的瑪哈》前，你會感受到哥雅筆下那種直視人性的勇氣；而《宮女》則是委拉斯奎茲對視覺與權力的終極詰問。這裡不只是博物館，而是一場與人類最偉大心靈的對話。`,
    "馬德里皇宮": `歐洲第三大皇宮，僅次於凡爾賽宮。三千間房間、無數的壁畫、掛毯與鐘錶，每一個角落都在訴說著西班牙帝國的輝煌與滄桑。別錯過王座廳的壯麗穹頂，以及皇家軍械庫中那些曾經征戰歐洲的盔甲與武器。`,
    "伯納烏球場": `這不只是一座球場，而是全球數億球迷的朝聖地。走進球員通道，觸摸那塊無數傳奇踏過的草皮，站在更衣室裡想像C羅、齊達內、拉莫斯曾經在此備戰。獎盃室裡陳列的十四座歐冠獎盃，是皇馬「永遠追求更多」精神的最好見證。`,
    "Córdoba 清真寺大教堂": `這是世界上最獨特的宗教建築。摩爾人在這裡建造了宏偉的清真寺，八百五十六根雙色拱柱撐起一片紅白相間的森林。後來天主教徒沒有拆除它，而是在清真寺的心臟位置蓋了一座哥德式教堂。兩種信仰、兩種文明，在這裡和平共存了五百年。`,
    "塞維亞王宮 Alcázar": `《權力遊戲》多恩王國的拍攝地，但真實的 Alcázar 比影集更夢幻。摩爾人留下的精緻石膏雕花、葡萄牙瓷磚、哥德式拱頂，以及那座讓人迷失方向的後花園——每一個轉角都是一場視覺的驚喜。`,
    "阿罕布拉宮 Alhambra": `「世上沒有比阿罕布拉更悲傷的廢墟了。」華盛頓·歐文這樣寫道。這座紅色城堡坐落在格拉納達的山巔，是摩爾人在伊比利亞的最後堡壘。納斯利宮的阿拉伯式雕花精緻到令人窒息，Generalife 花園的流水聲讓時間靜止。當夕陽把阿罕布拉染成金紅色，你會明白為什麼這裡被稱為「天堂的倒影」。`,
    "聖家堂": `高第說：「直線屬於人類，曲線屬於上帝。」聖家堂就是這句話的終極詮釋。這座建了超過一百四十年的教堂，內部像一座石頭森林，陽光透過彩繪玻璃灑落，把整個空間染成金黃、碧藍與翠綠。二〇二六年，它終於要完工了——而你將見證這個歷史時刻。`,
    "巴特略之家": `高第把這棟公寓變成了海洋的神話。外牆像巨龍的鱗片，屋頂像聖喬治屠龍後的脊背，陽台像面具，內部沒有一條直線。AR導覽會讓你看到牆壁上的魚群游動、天花板的漩渦旋轉——這不是建築，而是一場沈浸式的夢境。`,
    "Puente Nuevo 新橋": `Ronda 的靈魂。這座九十八公尺高的石橋橫跨 El Tajo 峽谷，連接新舊城區。它建於十八世紀，橋身中間還藏著一間曾經關押囚犯的房間。從谷底仰望，你會感受到人類對抗地心引力的狂妄與詩意。`,
    "Ronda 鬥牛場": `西班牙最古老的鬥牛場，建於一七八五年。環形的觀眾席、沙質的鬥牛場地、那些掛在牆上的鬥牛士畫像——這裡是鬥牛文化的精神原鄉。即使你不認同鬥牛，這座建築本身的對稱美與歷史重量也值得一訪。`,
    "畢卡索美術館": `Málaga 是畢卡索的出生地，這座美術館收藏了兩百多幅作品，從他十四歲的早熟之作，到立體派的革命性實驗。你會看到一個天才如何不斷背叛自己、不斷重生。週日免費入場，但建議平日去，人少一些。`,
    "Málaga 羅馬劇場": `兩千年前的古羅馬劇場，就藏在 Málaga 老城區的街道下方。西元一世紀，這裡曾經上演過索福克勒斯的悲劇；如今，殘存的石階與舞台依然散發著古典的莊嚴。旁邊的 Alcazaba 城堡是摩爾時期的遺跡，兩種文明在此層疊。`,
  };

  return (
    <section id="attractions" className="py-20 md:py-28 px-5 md:px-8 section-alt mosaic-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="tag-gold mb-4 inline-block">Must-See</span>
          <h2 className="text-display font-bold text-[#1a1a1a] mt-4 mb-4 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {title}
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Blog-style cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((a, i) => {
            const isExpanded = expandedCard === i;
            const richDesc = richDescriptions[a.name] || a.description;

            return (
              <article
                key={i}
                className={`card-editorial overflow-hidden group hover-lift ${isExpanded ? 'md:col-span-2' : ''}`}
              >
                {/* Image with overlay */}
                <div className="relative aspect-[16/10] overflow-hidden img-zoom">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag-gold text-white/90 bg-white/20 backdrop-blur-sm border-0">
                        {a.city}
                      </span>
                      <span className="text-xs text-white/70 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        建議 {a.timeNeeded}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      {a.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Rich description */}
                  <div className={`text-[#5a5a5a] leading-relaxed text-base mb-6 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {richDesc.split('\n').map((paragraph, idx) => (
                      <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Expand button */}
                  {richDesc.length > 150 && (
                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : i)}
                      className="text-[#c9a84c] text-sm font-medium flex items-center gap-1 hover:text-[#a0843a] transition-colors mb-6"
                    >
                      {isExpanded ? '收起' : '閱讀更多'}
                      <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Tips as styled list */}
                  <div className="bg-[#faf7ef] rounded-xl p-5 mb-6">
                    <h4 className="text-sm font-semibold text-[#a0843a] mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      旅遊貼士
                    </h4>
                    <ul className="custom-list">
                      {a.tips.map((tip, j) => (
                        <li key={j} className="text-sm text-[#5a5a5a]">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  {a.ticketLink && (
                    <a
                      href={a.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center w-full text-center"
                    >
                      預約門票
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
