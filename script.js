const feed_1 = {
  username: 'SASUKE-Chan',
  like: '990 suka',
  caption: '<b> SASUKE-Chan </b>Objek document adalah model dari dokumen HTML. Objek ini berisi kumpulan fungsi dan atribut berupa objek dari elemen HTML yang bisa digambarkan dalam bentuk pohon seperti ini',
  img: "<img src='../task3/img/js.png' alt='' width='70%' height='100%'>",
  date: '24 hour ago',
};

const feed_2 = {
  username: 'Callme_JJ',
  like: '619 suka',
  caption:
    '<b> Callme_JJ </b> Biar bahasa Inggrismu makin bagus tuh! Apalagi kosakata itu merupakan salah satu unsur terbentuknya kalimat bahasa Inggris yang baik BTW kalo bisa kiss artis mah namanya bukan lumayan lagi ya... Rezeki banget!😭😭😭',
  img: "<img src='../task3/img/22.png' alt='' width='70%' height='100%'>",
  date: '24 hour ago',
};

const feed_3 = {
  username: 'Karina_',
  like: '363 suka',
  caption: '<b> Karina_ </b>Just a Random Caption ',
  img: "<img src='../task3/img/33.png' alt='' width='70%' height='100%'>",
  date: '24 hour ago',
};

document.getElementById('p3').innerHTML = feed_3.username;
document.getElementById('tes3').innerHTML = feed_3.img;
document.getElementById('like3').innerHTML = feed_3.like;
document.getElementById('caption3').innerHTML = feed_3.caption;

document.getElementById('waktu').innerHTML = feed_3.date;
document.getElementById('waktu').innerHTML = feed_2.date;
document.getElementById('waktu').innerHTML = feed_1.date;
