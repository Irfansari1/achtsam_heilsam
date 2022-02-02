const data = [
  {
    id: 1,
    name: "Frauennetzwerk Weimar",
    link: "https://frauenzentrum-weimar.de/",
    text: "Stärkung des eigenen Potentials und der jedem Menschen innewohnenden Schönheit und Einmaligkeit und der jedem Menschen innewohnenden Schönheit und Einmaligkeit",
    imageurl:
      "https://frauenzentrum-weimar.de/wp-content/uploads/2018/09/cropped-FZW_RGB-1.png",
  },
  {
    id: 2,
    name: "Frauenmuseum",
    link: "https://www.frauenmuseum.de/",
    text: "Das Frauenmuseum Bonn fördert die Kunst der Frauen mit dem Ziel, diese auch in der Kunstgeschichte zu verankern.die Kunst der Frauen mit dem Ziel, diese auch in der Kunstgeschichte zu verankern.",
    imageurl:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=280x10000:format=jpg/path/sdb99ff14f00d6235/image/ib51183a4004954b8/version/1641201552/image.jpg",
  },
  {
    id: 3,
    name: "Benediktushof",
    link: "http://www.benediktushof-holzkirchen.de/",
    text: "Hier können Menschen in Stille zu sich selbst kommen, sich auf Wesentliches besinnen und mit lebenspraktischen Impulsen gestärkt in den Alltag zurückkehren.",
    imageurl:
      "https://www.galerie-lindelbach.de/wp-content/uploads/Holzkirchen-97292-011-VS1.jpg",
  },
  {
    id: 4,
    name: "Eckhart Tolle",
    link: "https://eckharttolle.de/",
    text: "Wie wäre dein Leben ohne die Gedanken an Gestern und die Sorgen um Morgen? – Glücklicher, leichter, freier? Die gute Nachricht: Ein Leben im Hier und Jetzt ist möglich!",
    imageurl:
      "https://res.cloudinary.com/pim-red/image/upload/c_thumb,f_auto,g_face,h_500,q_auto,r_max,w_500/v1624012621/kamphausen/persons/PHOTO-Eckhart_1916R_square-2048x2048_i8sqse.jpg",
  },
  {
    id: 5,
    name: "Team Benedikt",
    link: "https://teambenedikt.de/",
    text: "Wertebewusste Entwicklung für Menschen und Organisationen. Wenn Sie Kontakt zu einem unserer Kursleiter wünschen, stellen wir die Verbindung gerne her.",
    imageurl:
      "https://teambenedikt.de/wp-content/themes/tbsv_special/img/logo_150px_web.png",
  },

  {
    id: 6,
    name: "Natur & Heilen",
    link: "https://www.naturundheilen.de/",
    text: "Käse steckt heutzutage in vielen unserer Lieblingsgerichte – sei es in der Lasagne, auf der Pizza vom Italiener nebenan, im Caesar Salat oder auf dem Brot, das wir mit auf den Berg oder ins Büro nehmen.",
    imageurl:
      "https://v-z-b.de/wp-content/uploads/2021/11/Natur-Heilen_edited.jpg",
  },
  {
    id: 7,
    name: "Yoga in Weimar",
    link: "https://www.yoga-weimar.de/",
    text: "Kurse, Werkstatt, Seminare, Tagesseminare, Gastseminare, Einzelkonsultationen, AchtsamkeitsTraining, Yoga-Meditation-Wellness-Aktiv.Reisen ",
    imageurl:
      "https://www.yoga-weimar.de/webyep-system/daten/1-2-im-FotoLinks-5512-tn.jpg",
  },
  {
    id: 8,
    name: "Yoga Steffen",
    link: "https://steffenkatz.de/",
    text: "Auf der Suche nach einem besonderen Geschenk? Warum nicht einmal einen Gutschein für einen Yogakurs! ",
    imageurl:
      "https://steffenkatz.de/wp-content/uploads/2019/05/yoga-katz-logo.png",
  },
  {
    id: 9,
    name: "Astrologie",
    link: "https://www.astrologie-thueringen.de/",
    text: "Hier können Menschen in Stille zu sich selbst kommen, sich auf Wesentliches besinnen und mit lebenspraktischen Impulsen gestärkt in den Alltag zurückkehren.",
    imageurl: "https://www.astrologie-thueringen.de/images/horoskop.jpg",
  },
  {
    id: 10,
    name: "Heiligenfeld Feld der Heilung",
    link: "https://www.heiligenfeld.de/",
    text: "Wie wäre dein Leben ohne die Gedanken an Gestern und die Sorgen um Morgen? – Glücklicher, leichter, freier? Die gute Nachricht: Ein Leben im Hier und Jetzt ist möglich!",
    imageurl:
      "https://www.heiligenfeld.de/wp-content/uploads/2021/01/Logo_u_Slogan_191-1024x580.png",
  },
  {
    id: 11,
    name: "Klinik Silima",
    link: "http://www.praxis-silima.de/",
    text: "Wertebewusste Entwicklung für Menschen und Organisationen. Wenn Sie Kontakt zu einem unserer Kursleiter wünschen, stellen wir die Verbindung gerne her.",
    imageurl: "http://www.klinik-silima.de/Grafiken/KlinikSilima.png",
  },

  {
    id: 12,
    name: "Habichtswald-Klinik für Ganzheitsmedizin und Naturheilkunde",
    link: "https://habichtswaldklinik.de/",
    text: "Käse steckt heutzutage in vielen unserer Lieblingsgerichte – sei es in der Lasagne, auf der Pizza vom Italiener nebenan, im Caesar Salat oder auf dem Brot, das wir mit auf den Berg oder ins Büro nehmen.",
    imageurl:
      "https://habichtswaldklinik.de/wp-content/themes/HWK/img/logo.svg",
  },
  {
    id: 13,
    name: "Kunsthandwerker",
    link: "http://www.figurentheater-silberfuchs.de/",
    text: "Wertebewusste Entwicklung für Menschen und Organisationen. Wenn Sie Kontakt zu einem unserer Kursleiter wünschen, stellen wir die Verbindung gerne her.",
    imageurl:
      "http://www.figurentheater-silberfuchs.de/figurentheater-bilder/silberfuchs-startseite.jpeg",
  },

  {
    id: 14,
    name: "Meine Heimatstadt",
    link: "https://www.weimar.de/",
    text: "Käse steckt heutzutage in vielen unserer Lieblingsgerichte – sei es in der Lasagne, auf der Pizza vom Italiener nebenan, im Caesar Salat oder auf dem Brot, das wir mit auf den Berg oder ins Büro nehmen.",
    imageurl:
      "https://www.weimar.de/fileadmin/Redaktion/_processed_/c/f/csm_Stadtschloss-Weimar_-Foto-Klapproth-_-Koch_f732de6b31.jpg",
  },
];

export default data;
