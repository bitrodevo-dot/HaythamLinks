import { Video, MessageSquare } from 'lucide-react';

const TelegramIcon = () => (
  <svg className="w-7 h-7 text-[#2AABEE]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.282-.346-.086l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.138c.498-.18.932.11.725.991z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function App() {
  const telegramLinks = [
    { name: 'تحديثات سلاح المصمم', url: 'https://t.me/DW_Updates' },
    { name: 'تصاميم الإبداع الإسلامي', url: 'http://t.me/zidan_designs' },
    { name: 'نقاشات مركز المصممين', url: 'https://t.me/Designers_Center' },
    { name: 'مركز المصممين', url: 'https://t.me/DesignersCenter' },
    { name: 'خطوط هيثم الضناوي', url: 'http://t.me/shkwgs' },
    { name: 'نقاشات خطوط هيثم الضناوي', url: 'http://t.me/fontdannawi' },
    { name: 'قناة بيترو', url: 'https://t.me/bitroMW' },
    { name: 'ملتقى المبرمجين', url: 'https://t.me/bitrocode' },
  ];

  const botLinks = [
    { name: 'بوت تواصل احمد زيدان', url: 'http://t.me/ZidanContactBot' },
    { name: 'بوت تواصل هيثم الضناوي', url: 'http://t.me/tajrubabotbot' },
  ];

  const mediaLinks = [
    { 
      name: 'تيك توك', 
      url: 'https://www.tiktok.com/@dzvw28?_r=1&_d=eg5he57fl9k6c6&sec_uid=MS4wLjABAAAA7AhItc0SqqE4E5xSKvqjoLFQ-YkMcRkWlsn40r3xzsKCEnkgQMmrIO1Lh22fCyhb&share_author_id=7206534885938430982&sharer_language=ar&source=h5_m&u_code=e6jab7hk3hmdbm&timestamp=1773407047&user_id=7206534885938430982&sec_user_id=MS4wLjABAAAA7AhItc0SqqE4E5xSKvqjoLFQ-YkMcRkWlsn40r3xzsKCEnkgQMmrIO1Lh22fCyhb&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7616659055780448021&share_link_id=8eab2062-98d6-4956-8919-38a15655df3d&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1',
      icon: <TikTokIcon />
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1d24] text-gray-200 font-cairo flex justify-center py-12 px-6" dir="rtl">
      <div className="w-full max-w-md space-y-14">
        
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white">باقة قنوات هيثم الضناوي</h1>
        </div>

        {/* Telegram Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 relative pb-3">
            <TelegramIcon />
            <h2 className="text-2xl font-bold text-white tracking-wide">باقة قنوات تليجرام</h2>
            <div className="absolute bottom-0 right-0 w-16 h-[3px] bg-[#d4af37]"></div>
          </div>
          
          <div className="space-y-6 pr-4">
            {telegramLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-[#a0aab2] hover:text-white transition-colors duration-200 text-lg font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bots Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 relative pb-3">
            <MessageSquare className="w-6 h-6 text-[#2AABEE] fill-[#2AABEE]" />
            <h2 className="text-2xl font-bold text-white tracking-wide">بوتات التواصل</h2>
            <div className="absolute bottom-0 right-0 w-16 h-[3px] bg-[#d4af37]"></div>
          </div>
          
          <div className="space-y-6 pr-4">
            {botLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-[#a0aab2] hover:text-white transition-colors duration-200 text-lg font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Media Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 relative pb-3">
            <Video className="w-7 h-7 text-red-600 fill-red-600" />
            <h2 className="text-2xl font-bold text-white tracking-wide">الميديا والشبكات</h2>
            <div className="absolute bottom-0 right-0 w-16 h-[3px] bg-[#d4af37]"></div>
          </div>
          
          <div className="space-y-6 pr-4">
            {mediaLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#a0aab2] hover:text-white transition-colors duration-200 text-lg font-semibold group"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 mt-16 border-t border-gray-600/50 text-center text-sm text-[#a0aab2] leading-loose">
          <p>
            تمت برمجة الموقع بواسطة{' '}
            <a 
              href="https://t.me/MZ9BT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white font-bold transition-colors"
            >
              بيترو
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}