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

  // Rich descriptions for each attraction - expanded for all plans
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
    "麗池公園": `馬德里的城市綠洲，一百二十五公頃的綠地裡藏著一座水晶宮。這座全玻璃與金屬結構的建築在陽光下閃耀，倒映在人工湖面上，像一顆從維多利亞時代掉落的寶石。當地人在湖上划船、在樹蔭下野餐，這裡是馬德里人週末的避風港。`,
    "索菲亞王后藝術中心": `這裡是現代藝術的殿堂，也是畢卡索《格爾尼卡》的永久居所。這幅七點八公尺長的反戰巨作，是二十世紀最重要的藝術作品之一。站在它面前，你能感受到畢卡索對戰爭的憤怒與對人性的悲憫。館內還有米羅、達利的超現實主義傑作。`,
    "德波神廟": `一座從埃及搬來的兩千年神廟，就坐落在馬德里市中心的山丘上。夕陽時分，金色的光芒灑在石柱上，遠處是馬德里的天際線。這裡是馬德里最浪漫的約會地點，也是攝影師的最愛。`,
    "Sevilla 大教堂": `世界最大的哥德式教堂，哥倫布的靈柩就在這裡。四個銅像抬著他的石棺，象徵著西班牙曾經的海上霸權。旁邊的吉拉達塔是摩爾時期的宣禮塔改建的鐘樓，登頂可以俯瞰整個 Sevilla 的紅瓦屋頂。`,
    "西班牙廣場": `一九二九年為了博覽會建造的半圓形廣場，五十八座瓷磚長椅代表西班牙五十八個省。廣場中央的噴泉、護城河上的拱橋、以及那些精美的馬賽克裝飾，讓這裡成為 Sevilla 最上鏡的地方。下午的光影打在瓷磚上，色彩絢麗到不真實。`,
    "Albaicín 阿爾拜辛區": `格拉納達最古老的街區，也是 UNESCO 世界遺產。蜿蜒的白色小巷、隱藏的庭院、從牆頭探出的九重葛，每一個轉角都像是一千零一夜的插畫。在這裡迷路是一種享受，因為你永遠不知道下一個轉角會遇見什麼風景。`,
    "奎爾公園": `高第原本想打造一座童話般的花園社區，雖然計畫沒有完全實現，但留下來的紀念碑區域已經足夠夢幻。彩色馬賽克的蜥蜴噴泉、波浪形的長椅、像糖果屋一樣的門房——這裡是巴塞隆納最適合拍照的地方。`,
    "哥德區": `巴塞隆納的靈魂所在。兩千年的歷史層疊在這些狹窄的街道裡：羅馬城牆的遺跡、中世紀的教堂、文藝復興時期的宮殿。找到聖伊莉莎白廣場和主教橋，你會發現巴塞隆納最安靜、最美的一面。`,
    "巴塞隆納音樂宮": `現代主義建築大師蒙塔內爾的傑作，也是 UNESCO 世界遺產。音樂廳內的彩色玻璃天窗是整個建築的靈魂——當陽光透過那些彩色玻璃灑落，整個音樂廳變成了一座光的教堂。即使不聽音樂會，導覽參觀也絕對值得。`,
    "Bunkers del Carmel": `巴塞隆納最佳觀景台，也是當地人看夕陽的秘密基地。這裡曾是西班牙內戰時期的防空砲台，如今變成了三百六十度的城市觀景台。帶上一瓶酒和一些 Tapas，等待夕陽把整座城市染成金紅色。`,
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
        <div className="grid md:grid-cols-2 gap-8 stagger-grid">
          {attractions.map((a, i) => {
            const isExpanded = expandedCard === i;
            const richDesc = richDescriptions[a.name] || a.description;

            return (
              <article
                key={i}
                className={`card-editorial card-shine overflow-hidden group hover-lift ${isExpanded ? 'md:col-span-2' : ''}`}
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

                  {/* Blog Links */}
                  {a.blogLinks && a.blogLinks.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-[#e8dcc8]/30">
                      <h4 className="text-xs font-semibold text-[#8a7a5a] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.501 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.499 1.253" />
                        </svg>
                        延伸閱讀
                      </h4>
                      <div className="flex flex-col gap-1">
                        {a.blogLinks.map((bl, bi) => (
                          <a key={bi} href={bl.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#b8954e] hover:text-[#1e3a5f] transition-colors flex items-center gap-1">
                            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            {bl.title}
                          </a>
                        ))}
                      </div>
                    </div>
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
