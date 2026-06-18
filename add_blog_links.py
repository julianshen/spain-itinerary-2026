#!/usr/bin/env python3
"""Add blogLinks to highlights in data.ts"""

with open('src/data.ts', 'r') as f:
    content = f.read()

# Map of highlight title substrings to blogLinks
blog_links = {
    '塞維亞王宮 Alcázar': [
        {'title': 'Spanish Sabores Sevilla 攻略', 'url': 'https://spanishsabores.com/seville-with-kids/'},
        {'title': 'Lonely Planet Sevilla 必知', 'url': 'https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-seville'}
    ],
    '阿罕布拉宮 Alhambra': [
        {'title': 'Rick Steves Alhambra', 'url': 'https://blog.ricksteves.com/blog/granadas-alhambra/'},
        {'title': 'Lonely Planet Granada', 'url': 'https://www.lonelyplanet.com/articles/top-things-to-do-in-granada-spain'}
    ],
    '聖家堂 Sagrada Familia': [
        {'title': 'Lonely Planet 聖家堂指南', 'url': 'https://www.lonelyplanet.com/articles/guide-to-la-sagrada-familia-barcelona'},
        {'title': 'Atlas Obscura 聖家堂', 'url': 'https://www.atlasobscura.com/places/sagrada-familia'}
    ],
    '巴特略之家 Casa Batlló': [
        {'title': 'Travel Lemming Casa Batlló', 'url': 'https://travellemming.com/casa-batllo/'},
        {'title': 'BCN.travel 指南', 'url': 'https://www.bcn.travel/casa-batllo-guide/'}
    ],
    '米拉之家 Casa Milà': [
        {'title': 'Guardian Casa Milà', 'url': 'https://www.theguardian.com/artanddesign/2026/may/04/the-last-resident-of-casa-mila-on-life-in-gaudis-masterwork'},
        {'title': 'Rick Steves Barcelona', 'url': 'https://www.ricksteves.com/europe/spain/barcelona'}
    ],
    '奎爾公園 Park Güell': [
        {'title': 'The Tour Guy 公園指南', 'url': 'https://thetourguy.com/travel-blog/spain/barcelona/park-guell/guide-to-park-guell/'},
        {'title': 'Geographical Cure 公園攻略', 'url': 'https://www.thegeographicalcure.com/post/guide-to-park-guell'}
    ],
    'Córdoba 大清真寺': [
        {'title': 'Approach Guides 清真寺', 'url': 'https://approachguides.com/guide/spain-cordoba-mezquita/'},
        {'title': 'Mi Brava 清真寺攻略', 'url': 'https://www.mibrava.com/post/the-mosque-cathedral-of-cordoba-making-the-most-of-your-time'}
    ],
    '馬德里皇宮': [
        {'title': 'Rick Steves 馬德里', 'url': 'https://www.ricksteves.com/watch-read-listen/read/articles/a-blitz-tour-of-madrid'},
        {'title': 'Lonely Planet 馬德里', 'url': 'https://www.lonelyplanet.com/articles/top-things-to-do-in-madrid'}
    ],
    '聖地亞哥·伯納烏球場': [
        {'title': '伯納烏球場終極指南', 'url': 'https://www.aroundtheworld4u.com/santiago-bernabeu-stadium/'}
    ],
    '索菲亞王后藝術中心': [
        {'title': 'Guardian Reina Sofía', 'url': 'https://www.theguardian.com/world/2026/feb/17/reina-sofia-madrid-museum-rehang-spain'},
        {'title': 'Rick Steves 馬德里', 'url': 'https://www.ricksteves.com/europe/spain/madrid'}
    ],
    '巴塞隆納主教座堂': [
        {'title': 'Creative Adventurer 主教座堂', 'url': 'https://thecreativeadventurer.com/the-ultimate-self-guided-tour-of-the-barcelona-cathedral/'},
        {'title': 'Lonely Planet 主教座堂', 'url': 'https://www.lonelyplanet.com/points-of-interest/la-catedral/1204430'}
    ],
    '巴塞隆納音樂宮': [
        {'title': 'Barcelona Urbana 音樂宮', 'url': 'https://barcelonaurbana.com/en/blog/palau-musica-catalana-visit-guide'},
        {'title': 'Geographical Cure 音樂宮', 'url': 'https://www.thegeographicalcure.com/post/guide-to-palau-de-la-musica'}
    ],
    'Bunkers del Carmel': [
        {'title': 'Third Eye Traveller Bunkers', 'url': 'https://thirdeyetraveller.com/barcelona-bunkers-del-carmel/'},
        {'title': 'Barcelona Hacks Bunkers', 'url': 'https://barcelonahacks.com/bunkers-del-carmel/'}
    ],
    '巴塞海灘 Barceloneta': [
        {'title': 'WeBarcelona 海灘', 'url': 'https://www.webarcelona.net/beaches-barcelona/barceloneta'},
        {'title': 'Lonely Planet 巴塞海灘', 'url': 'https://www.lonelyplanet.com/articles/best-beach-barcelona'}
    ],
    '蘭布拉大道': [
        {'title': 'Barcelona Hacks 蘭布拉', 'url': 'https://barcelonahacks.com/la-rambla-guide/'},
        {'title': 'Barcelona Life 蘭布拉', 'url': 'https://www.barcelona-life.com/barcelona/las-ramblas'}
    ],
    '博蓋利亞市場': [
        {'title': 'Devour Tours 巴塞行程', 'url': 'https://devourtours.com/destinations/spain/barcelona/'},
        {'title': 'CK Travels Boquería', 'url': 'https://www.cktravels.com/morning-food-tour-boqueria-market-barcelona/'}
    ],
    '西班牙廣場': [
        {'title': 'Wanderlust Rose 西班牙廣場', 'url': 'https://thewanderlustrose.com/a-guide-to-plaza-de-espana-in-seville-a-must-visit-gem/'},
        {'title': 'TripSavvy 西班牙廣場', 'url': 'https://www.tripsavvy.com/seville-plaza-de-espana-the-complete-guide-4582054'}
    ],
    '佛朗明哥': [
        {'title': 'BBC 佛朗明哥指南', 'url': 'https://www.bbc.com/travel/article/20241107-a-flamenco-dancers-guide-to-seville'},
        {'title': 'Where and Wander 佛朗明哥', 'url': 'https://whereandwander.com/ultimate-guide-authentic-flamenco-seville/'}
    ],
    'Plaza de Toros 鬥牛場': [
        {'title': 'Ronda Today 鬥牛場', 'url': 'https://rondatoday.com/plaza-de-toros-bullring/'},
        {'title': 'Culture Trip 鬥牛場', 'url': 'https://theculturetrip.com/europe/spain/articles/spains-most-impressive-bullrings'}
    ],
    'Puente Nuevo 新橋': [
        {'title': 'Guide to Andalucía Puente Nuevo', 'url': 'https://guidetoandalucia.com/ronda-puente-nuevo/'},
        {'title': 'Big World Small Pockets Ronda', 'url': 'https://www.bigworldsmallpockets.com/ronda-spain-bridge/'}
    ],
    '畢卡索美術館': [
        {'title': 'I Travel for the Stars Málaga', 'url': 'https://itravelforthestars.com/malaga-travel-guide/'},
        {'title': 'Vivre Málaga 畢卡索', 'url': 'https://vivremalaga.com/en/picasso-museum-malaga/'}
    ],
    '都市陽傘 Setas': [
        {'title': 'Seville Adventures 都市陽傘', 'url': 'https://sevilleadventures.com/things-to-do/setas-de-sevilla-metropol-parasol/'}
    ],
    '德波神廟': [
        {'title': 'Atlas Obscura 德波神廟', 'url': 'https://www.atlasobscura.com/places/templo-de-debod'}
    ],
    'Sevilla 大教堂': [
        {'title': 'España Guide Sevilla', 'url': 'https://www.espanaguide.com/seville/things-to-do-in-seville/'},
        {'title': 'Map and Camera Sevilla', 'url': 'https://mapandcamera.com/one-day-in-seville/'}
    ],
    '入住 Parador': [
        {'title': 'Paradores 官網', 'url': 'https://www.paradores.es/'}
    ],
    'La Malagueta 海灘': [
        {'title': 'Old Town Málaga 海灘', 'url': 'https://oldtownmalaga.com/malagueta-beach/'}
    ],
    'Málaga 羅馬劇場': [
        {'title': 'Alcazaba Málaga 指南', 'url': 'https://mylittleworldoftravelling.com/guide-to-visiting-malaga-alcazaba/'},
        {'title': 'Oh My Good Guide Alcazaba', 'url': 'https://ohmygoodguide.com/malaga/alcazaba-tour-malaga-roman-theatre/'}
    ],
    'Albaicín 阿爾拜辛區': [
        {'title': 'Andalucía Mia Albaicín', 'url': 'https://www.andaluciamia.com/en/albaicin-in-granada-like-a-trip-to-al-andalus/'},
        {'title': 'Love Granada Albaicín', 'url': 'https://www.lovegranada.com/places/albaicin/'}
    ],
    '百花巷': [
        {'title': 'Andalucía Mia 花巷', 'url': 'https://www.andaluciamia.com/en/calleja-de-las-flores-cordoba/'}
    ],
    '羅馬橋夕陽': [
        {'title': 'A Luxury Travel Blog Córdoba', 'url': 'https://www.aluxurytravelblog.com/2017/02/20/5-things-to-do-in-cordoba/'}
    ],
    '麗池公園': [
        {'title': 'Lonely Planet 馬德里', 'url': 'https://www.lonelyplanet.com/articles/top-things-to-do-in-madrid'},
        {'title': 'Rick Steves 馬德里', 'url': 'https://www.ricksteves.com/europe/spain/madrid'}
    ],
    'La Boqueria 市場午餐': [
        {'title': 'Devour Tours 巴塞行程', 'url': 'https://devourtours.com/destinations/spain/barcelona/'},
        {'title': 'CK Travels Boquería', 'url': 'https://www.cktravels.com/morning-food-tour-boqueria-market-barcelona/'}
    ],
    'Málaga 海灘晨跑': [
        {'title': 'Old Town Málaga 海灘', 'url': 'https://oldtownmalaga.com/malagueta-beach/'}
    ],
}

import re
import json

total_added = 0
for key, links in blog_links.items():
    blog_str = ', blogLinks: ' + json.dumps(links, ensure_ascii=False)
    # Find highlight entries containing this title keyword
    # We look for: title: "...key..." and then find the end of that highlight object
    # Pattern: the title line, everything until the closing },
    # We insert blogLinks before },
    
    # Escape special regex chars in key
    escaped_key = re.escape(key)
    
    # Find pattern: title: "KEY", ... }\s*,
    # But we need to be careful - some highlights already have blogLinks
    # We add blogLinks before the last } in the highlight entry
    
    # Strategy: find lines containing the key title that DON'T already have blogLinks
    # and add blogLinks before the closing },
    
    # First find all occurrences
    pattern = r'(title: "' + escaped_key + r'"[^}]*?)(}\s*,)'
    matches = list(re.finditer(pattern, content))
    
    filtered = []
    for m in matches:
        # Check if this match already has blogLinks
        match_text = m.group(0)
        if 'blogLinks' not in match_text:
            filtered.append(m)
    
    if filtered:
        # Replace from the end to avoid position shifts
        for m in reversed(filtered):
            start, end = m.start(1) + len(m.group(1)), m.end()
            # Insert blogLinks before },
            insert_pos = content.rfind('}', m.start(), m.end())
            if insert_pos >= 0:
                content = content[:insert_pos] + blog_str + content[insert_pos:]
                total_added += 1

with open('src/data.ts', 'w') as f:
    f.write(content)

print(f'Added blogLinks to {total_added} highlights')