import { BOOKING_ITEMS, BOOKING_SOURCES, BookingPriority } from "../booking-data";

const priorityStyles: Record<BookingPriority, string> = {
  "已預訂": "bg-[#edf8f1] text-[#28794e] border-[#abd4bb]",
  "最優先": "bg-[#fff1ed] text-[#a64b36] border-[#f2c5ba]",
  "建議預約": "bg-[#faf6ee] text-[#8a6e3a] border-[#e8d7ad]",
  "等候開賣": "bg-[#eef5f7] text-[#2a6b7a] border-[#bdd8de]",
  "不用預約": "bg-[#eef7f2] text-[#3a7a5a] border-[#c5dfd0]",
};

export default function BookingSection() {
  return (
    <section id="bookings" className="py-20 md:py-28 px-5 md:px-8 bg-[#f8f6f3] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="tag-terracotta">Booking timeline</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-4 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            預約與購票時間表
          </h2>
          <p className="text-[#6b6b6b] mt-4 leading-relaxed">
            依照少換宿精選路線排序。開賣規則與「何時該買」分開標示；日期以西班牙當地時間為準，最後核對於 2026 年 8 月 2 日。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-7">
          {([
            ["已預訂", "資料已確認，出發前再檢查入住通知"],
            ["最優先", "先處理 Alhambra、跨城交通與可取消住宿"],
            ["建議預約", "主行程確定後即鎖定"],
            ["等候開賣", "先設提醒，不買轉售票"],
            ["不用預約", "保留現場彈性"],
          ] as [BookingPriority, string][]).map(([label, description]) => (
            <div key={label} className="rounded-2xl border border-black/5 bg-white p-4">
              <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${priorityStyles[label]}`}>{label}</span>
              <p className="mt-2 text-xs leading-relaxed text-[#777]">{description}</p>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-[0_8px_35px_rgba(0,0,0,0.06)]">
          <table className="w-full min-w-[1180px] border-collapse text-left">
            <caption className="sr-only">2026 西班牙行程景點、活動、住宿及交通預約時間表</caption>
            <thead>
              <tr className="bg-[#22201d] text-white">
                <th className="booking-th">行程日期</th>
                <th className="booking-th">類別／預約項目</th>
                <th className="booking-th">開始售票時間</th>
                <th className="booking-th">建議下單時間</th>
                <th className="booking-th">搭配行程的時段</th>
                <th className="booking-th">狀態／官方連結</th>
              </tr>
            </thead>
            <tbody>
              {BOOKING_ITEMS.map((booking, index) => (
                <tr key={`${booking.date}-${booking.item}`} className={index % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"}>
                  <td className="booking-td align-top">
                    <div className="font-bold text-[#1a1a1a] whitespace-nowrap">{booking.date}</div>
                    <div className="text-xs text-[#888] mt-1.5">{booking.itinerary}</div>
                  </td>
                  <td className="booking-td align-top">
                    <span className="text-[11px] font-semibold tracking-wide text-[#b8735a]">{booking.category}</span>
                    <div className="font-semibold text-[#292724] mt-1 leading-snug">{booking.item}</div>
                  </td>
                  <td className="booking-td align-top text-sm leading-relaxed text-[#5f5b56]">{booking.saleStart}</td>
                  <td className="booking-td align-top">
                    <div className="text-sm font-semibold leading-relaxed text-[#2f2c29]">{booking.action}</div>
                    <div className="text-xs leading-relaxed text-[#888] mt-2">{booking.note}</div>
                  </td>
                  <td className="booking-td align-top text-sm font-medium text-[#2a6b7a]">{booking.slot}</td>
                  <td className="booking-td align-top">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${priorityStyles[booking.priority]}`}>
                      {booking.priority}
                    </span>
                    <a href={booking.url} target={booking.url.startsWith("http") ? "_blank" : undefined} rel={booking.url.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#9b783d] hover:text-[#6f5428]">
                      {booking.linkLabel}<span aria-hidden="true">↗</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e8d7ad] bg-[#fffaf0] p-5 md:flex md:items-start md:justify-between md:gap-8">
          <div>
            <h3 className="font-semibold text-[#47391f]">售票時間怎麼看</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#706044] max-w-3xl">
              「最長可提前」不代表所有班次會一次上架。Renfe、球賽與部分景點可能分批載入或調整；表中的日期是開始追蹤點，結帳前仍以官方頁面顯示為準。
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2 md:justify-end">
            {BOOKING_SOURCES.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#ddc995] bg-white px-3 py-2 text-xs font-medium text-[#7a602c] hover:bg-[#faf2df]">
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
