'use client'


const dictionary = {
    en:{
        boldCaption: 'Where passion meets pixels, creativity ascends,\n Thats Legit.',
        smallCaption: "Photgrapher, Videographer, Content creator.",
        '/': 'Home',
        '/about': 'About LegitShot',
        '/contact': 'Contact Me',
        '/myprojects': 'My Projects',
        '/blog': 'Blog',
        callMe: "CALL ME",
        firstName: "Firstname",
        lastName: "Lastname",
        yourMessage: "Your Message...",
        email: "Email",
        phoneNumber: "Phone",
        aboutBoldCaption: "About LegitShot.",
        aboutSmallCaption: `

        Hello, and welcome to my photography & Video page. I am delighted to have this platform to share my passion for capturing the beauty of the world around me. My name is Ayomide Gbasin and you can call me Ayo, and I am a photo/videographer who finds immense joy in telling stories through my camera lens.
        
        As the founder of Legit Shot, photography, for me, is not merely about taking pictures; it is an art form that allows me to express my creativity and evoke emotions in others. Whether I am capturing breathtaking landscapes, intimate portraits, or the vibrant essence of street life, my goal is to create images that are both visually appealing and emotionally resonant.
        
        Over the past few years, I have dedicated myself to honing my craft and expanding my professional portfolio. I have had the privilege of working with a diverse range of clients, including magazines, businesses, and individuals. Each project has presented me with unique challenges and opportunities for growth, which I have embraced wholeheartedly.
        
        With each new project and every click of the shutter, I am fueled by an insatiable thirst for growth and a relentless desire to challenge myself. The future holds endless possibilities, and I am excited to see where this journey will take me.
        
        Thank you for joining me on this adventure. I invite you to explore my art, where I will share my insights, experiences, and, of course, my photographs. Together, let us celebrate the beauty of the world and the magic of storytelling through the art of photography and videos.
        
        Feel free to connect with me.
        
        Ayomide Gbasin`,
        comingSoon: 'Coming Soon...'
    },
    tr:{
        boldCaption: "Tutkunun piksellerle buluştuğu yerde yaratıcılık yükselir, \n That's Legit.",
        smallCaption: "Fotoğrafçı, Kameraman, İçerik yaratıcısı.",
        '/' : "Ev",
        "/about": "LegitShot hakkında.",
        '/contact': "Bana ulaşın",
        "/myprojects": "Benim projelerim",
        '/blog': 'Blog',
        callMe: "Ara beni",
        firstName: "İlk adı",
        lastName: "Soy isim",
        yourMessage: "Mesajın...",
        email: "e-posta",
        phoneNumber: "telefon numarası",
        aboutBoldCaption: "LegitShot hakkında.",
        aboutSmallCaption: `

Merhaba, Fotoğraf ve Video sayfama hoş geldiniz. Etrafımdaki dünyanın güzelliğini yakalama tutkumu paylaşmak için bu platforma sahip olduğum için çok mutluyum. Benim adım Ayomide Gbasin ve bana Ayo diyebilirsiniz ve ben kamera merceğimden hikayeler anlatmaktan büyük keyif alan bir fotoğraf/kameramanım.

Legit Shot'ın kurucusu olarak benim için fotoğrafçılık sadece fotoğraf çekmekten ibaret değil; yaratıcılığımı ifade etmeme ve başkalarında duygu uyandırmama izin veren bir sanat biçimidir. Nefes kesici manzaralar, samimi portreler veya sokak yaşamının canlı özünü çekiyor olsam da amacım hem görsel olarak çekici hem de duygusal açıdan yankı uyandıran görüntüler yaratmak.

Geçtiğimiz birkaç yılda kendimi zanaatımı geliştirmeye ve profesyonel portföyümü genişletmeye adadım. Dergiler, işletmeler ve bireyler dahil olmak üzere çok çeşitli müşterilerle çalışma ayrıcalığına sahip oldum. Her proje bana, tüm kalbimle kucakladığım benzersiz zorluklar ve büyüme fırsatları sundu.

Her yeni projede ve deklanşöre her basışta, büyümek için doymak bilmez bir susuzluk ve kendime meydan okumak için amansız bir arzuyla doluyorum. Gelecek sonsuz olasılıklar barındırıyor ve bu yolculuğun beni nereye götüreceğini görmek beni heyecanlandırıyor.

Bu macerada bana katıldığınız için teşekkür ederim. Sizi içgörülerimi, deneyimlerimi ve tabii ki fotoğraflarımı paylaşacağım sanatımı keşfetmeye davet ediyorum. Fotoğraf ve video sanatı aracılığıyla dünyanın güzelliğini ve hikaye anlatmanın büyüsünü birlikte kutlayalım.

Benimle bağlantı kurmaktan çekinmeyin.

Ayomide Gbasin`,

comingSoon: 'yakında gelecek...'
}

} as {[key: string] : any} 


export default function getLanguage(){

    const supportedLanguages = ['en' , 'tr']
  
    let language = navigator.languages ? navigator.languages[0] : navigator.language
  
    if(!supportedLanguages.includes(language)) language = 'en'
  
    return dictionary[language]
}