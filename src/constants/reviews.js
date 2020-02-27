import texts from "./texts";
import pilotJpeg from "../assets/images/reviews/slide-1.jpg";
import pilotWebp from "../assets/images/reviews/slide-1.webp";
import engineerJpeg from "../assets/images/reviews/slide-2.jpg";
import engineerWebp from "../assets/images/reviews/slide-2.webp";
import saxJpeg from "../assets/images/reviews/slide-3.jpg";
import saxWebp from "../assets/images/reviews/slide-3.webp";
import photographyJpeg from "../assets/images/reviews/slide-4.jpg";
import photographyWebp from "../assets/images/reviews/slide-4.webp";

const clientReviews = [
  {
    review: {
      name: 'Chris Mutunga', description: 'Buruburu',
      social:{
        url: 'mailto:mkatola@associate.crcna.org', color: 'azure'
      },
      stars: {
        shade: [texts.gold, texts.gold, texts.gold, texts.gold, texts.grey],
        size: "2", mobileSize: "1", key: 11
      }, comment: 'I’m grateful for the good tutoring work you are doing. (Parent)'
    }, images: {jpeg: pilotJpeg, webp: pilotWebp}, key: "ab"
  },

  {
    review: {
      name: 'Akinyi Sharon', description: 'Kasarani',
      social:{
        url: 'https://www.facebook.com/mutai.sharo', color: 'facebook'
      },
      stars: {
        shade:[texts.gold, texts.gold, texts.gold, texts.gold, texts.gold],
        size: "2", mobileSize: "1", key: 12
      }, comment: 'I love how they have good relationship ' +
          'between the teachers and parents.They are well organized, determined in fulfilling their' +
          ' goals and vision. Working with them has been easy for me. (Teacher)'
    }, images: {jpeg: saxJpeg, webp: saxWebp}
  },

  {
    review: {
      name: 'Mr. Bonface Okello', description: 'Starehe', key: "ad",
      social:{
        url: 'https://twitter.com/OkelloOnuko', color: 'twitter'
      },
      stars: {
        shade: [texts.gold, texts.gold, texts.gold, texts.gold, texts.grey],
        size: "2", mobileSize: "1", key: 13
      }, comment: 'Rabbii has provided a remarkable teaching and learning experience where' +
          ' resources and teaching services are provided to learners at the comfort of their' +
          ' homes. (Teacher)'
    }, images: {jpeg: photographyJpeg, webp: photographyWebp}, key: "ac"
  },

  {
    review: {
      name: 'John Mwendwa', description: 'Kahawa Wendani',
      social:{
        url: 'https://www.facebook.com/john.mwendwa.33', color: 'facebook'
      },
      stars: {
        shade: [texts.gold, texts.gold, texts.gold, texts.grey, texts.grey],
        size: "2", mobileSize: "1", key: 14
      }, comment: 'I appreciate the professionalism applied to the TeeCha process, from' +
          ' registration, scrutiny of tutors and clients to the management of the tuition process.' +
          ' (Parent)'
    }, images: {jpeg: engineerJpeg, webp: engineerWebp}, key: "ae"
  }
];

export default clientReviews;
