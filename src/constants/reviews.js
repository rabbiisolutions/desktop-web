import texts from "./texts";

const clientReviews = [
  {
    name: 'Mutunga Katola', description: 'Buruburu', key: "1", url: 'mkatola@associate.crcna.org',
    stars: {
      shade: [texts.turquoise, texts.turquoise, texts.turquoise, texts.turquoise, texts.grey],
      size: "2", mobileSize: "1"
    }, comment: 'I’m grateful for the good tutoring work you are doing. (Parent)'
  },
  {
    name: 'Mutai Sharon', description: 'Physics and Maths Teacher', key: "2",  url: 'https://www.facebook.com/mutai.sharo',
    stars: {
      shade:[texts.turquoise, texts.turquoise, texts.turquoise, texts.turquoise, texts.turquoise],
      size: "2", mobileSize: "1"
    }, comment: 'Rabbii  is a very good educational company,I love how they have good relationship ' +
        'between the teachers and parents.They are well organized, determined in fulfilling their' +
        ' goals and vision.\n Working with them has been easy for me. I highly recommend the' +
        ' company for their work.\n'
  },
  {
    name: 'Mr. Calvins Okello', description: 'National Examiner', key: "3", url: 'https://twitter.com/OkelloOnuko',
    stars: {
      shade: [texts.turquoise, texts.turquoise, texts.turquoise, texts.turquoise, texts.grey],
      size: "2", mobileSize: "1"
    }, comment: 'Rabbii has provided a remarkable teaching and learning experience where' +
        ' resources and teaching services are provided to learners at the comfort of their homes'
  },
  {
    name: 'John Mwendwa', description: 'Kahawa Wendani', key: "4", url: 'https://www.facebook.com/john.mwendwa.33',
    stars: {
      shade: [texts.turquoise, texts.turquoise, texts.turquoise, texts.grey, texts.grey],
      size: "2", mobileSize: "1"
    }, comment: 'I appreciate the professionalism applied to the TeeCha process, from' +
        ' registration, scrutiny of tutors and clients to the management of the tuition process'
  }
];

export default clientReviews;
