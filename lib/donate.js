exports.donate = (id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
 *TERIMAKASIH SUDAH DONASI... SEMOGA REJEKINYA MAKIN BANYAK, SEMAKIN LANCAR, POKOKNYA TERIMAKASIH YA CUY...*        
╔════════════════════
║ *DONASI KE ${A187}*
╠════════════════════
║╭──❉ *DONASI YUK* ❉────
║│➸ *DANA*: _+62 817-7661-2563_
║│➸ *PULSA*: _+62 851-5644-6057_
║│➸ *KUOTA*: _XL/TELKOM_
║╰───────────────────
╠════════════════════
║  *${A187}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│➸ *Group WhatsApp*
║│ _${groupwhatsapp}_
║│➸ *YouTube <subscribe>*
║│ _${youtube}_
║│➸ *Instagram <Follow>*
║│ _${instagram}_
║│➸ *Creator ${A187}*
║│ _${nomer}_
║╰───────────────────
╠════════════════════
║ _*POWERED BY AHRKING BOT*_
╚════════════════════`
}

