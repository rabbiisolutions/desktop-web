import ListItem from "../components/basic/ListItems";
import kcseJpeg from "../assets/images/services/jCIMcOpFHig.jpg";
import kcseWebp from "../assets/images/services/jCIMcOpFHig.webp";
import interJpeg from "../assets/images/services/jCIMcOpFHig-1.jpg";
import interWebp from "../assets/images/services/jCIMcOpFHig-1.webp";
import testsJpeg from "../assets/images/services/jCIMcOpFHig-2.jpg";
import testsWebp from "../assets/images/services/jCIMcOpFHig-2.webp";
import languageJpeg from "../assets/images/services/jCIMcOpFHig-3.png";
import languageWebp from "../assets/images/services/jCIMcOpFHig-3.webp";
import specialJpeg from "../assets/images/services/jCIMcOpFHig-4.jpg";
import specialWebp from "../assets/images/services/jCIMcOpFHig-4.webp";
import hobbiesJpeg from "../assets/images/services/jCIMcOpFHig-5.jpg";
import hobbiesWebp from "../assets/images/services/jCIMcOpFHig-5.webp";
import gamesJpeg from "../assets/images/services/jCIMcOpFHig-6.png";
import gamesWebp from "../assets/images/services/jCIMcOpFHig-6.webp";

const kcse = {
  title: 'Pass KCPE/KCSE',
  desc: [{key: 'x1',
    value: 'We provide competent teachers to help your child revise for the national exams and ' +
        'revise difficult concepts in their schoolwork.'},
    {key: 'x2', value: 'Get a tutor for any class in:'}
    ],
  examples: ListItem(
      [
        {key: 'aaa', text: 'Primary school'}, {key: 'aab', text: 'High school'},
        {key: 'aac', text: 'KCPE'}, {key: 'aae', text: 'KCSE'},
      ]
  ),
  images: {jpeg: kcseJpeg, webp: kcseWebp},
  link: "https://forms.gle/rd339azC1NoXo1YB6"
};
const international = {
  title: 'Tutors for International School Systems',
  desc: [
    {key: 'x3',
      value: 'We provide teachers from different international schools, who are willing and able to' +
          ' help your child with schoolwork regardless of the system they are in.'},
    {key: 'x4', value: 'Get a tutor in:'}
    ],
  examples: ListItem(
      [{key: 'c1', text: 'IGCSE'}, {key: 'c2', text: 'American'}, {key: 'c3', text: 'IB...etc'}]
  ),
  images: {jpeg: interJpeg, webp: interWebp},
  link: "https://forms.gle/7fkAVe5DHNwomAJWA"
};
const tests = {
  title: 'Pass Your Tests',
  desc: [
    {key: 'x5',
      value: 'We help you pass your KASNEB exams or any university exam or any tests to join ' +
          'universities abroad'},
    {key: 'x6', value: 'Get a tutor for:'}
  ],
  examples: ListItem(
      [{key: 'd1', text: 'CPA exams'}, {key: 'd2', text: 'CIFA exams'}, {key: 'd3', text: 'SAT'},
      {key: 'd4', text: 'ACT'}, {key: 'd5', text: 'Statistics...etc'}]
  ),
  images: {jpeg: testsJpeg, webp: testsWebp},
  link: "https://forms.gle/edZLndJ9WuNb48u39"
};
const sports = {
  title: 'Learn New Sports Games',
  desc: [
    {key: 'x7',
      value: 'We provide professional trainers to help you or your child grow in, and enjoy more, ' +
          'the sport or game they love.'},
    {key: 'x8', value: 'You can get a tutor for:'}
  ],
  examples: ListItem(
      [{key: 'b1', text: 'Chess'}, {key: 'b2', text: 'Swimming'},
      {key: 'b3', text: 'Skating...etc'}]
  ),
  images: {jpeg: gamesJpeg, webp: gamesWebp},
  link: "https://forms.gle/EZZya9AMuVcqC2eh8"
};
const language = {
  title: 'Speak a Foreign Language',
  desc: [
    {key: 'x9',
      value: 'You can help yourself or your child be more competitive and ready to adapt in this ' +
          'global village by getting them a foreign language teacher.'},
    {key: 'x10', value: 'You can get a tutor for:'}
  ],
  examples: ListItem(
      [{key: 'a1', text: 'Chinese'}, {key: 'a2', text: 'French'},
      {key: 'a3', text: 'German etc'}]
  ),
  images: {jpeg: languageJpeg, webp: languageWebp},
  link: "https://forms.gle/RFwpeWNTrf2kZTJ9A"
};
const hobbies = {
  title: 'Developing your Hobbies and Interests',
  desc:[
    {key: 'x11', value: 'We provide qualified trainers to help you grow & perfect a hobby you are ' +
          'interested in.'},
    {key: 'x12', value: 'You can get a trainer for:'}
  ],
  examples: ListItem(
      [{key: 'e4', text: 'Photography'}, {key: 'e5', text: 'Dance'},
      {key: 'e6', text: 'Music'}, {key: 'e7', text: 'Art'}, {key: 'e8', text: 'Vocals'},
      {key: 'e9', text: 'Dj...etc'}]
  ),
  images: {jpeg: hobbiesJpeg, webp: hobbiesWebp},
  link: "https://forms.gle/EZZya9AMuVcqC2eh8"
};
const specialNeeds = {
  title: 'Special Needs',
  desc: [
    {key:'x13', value: 'You can get a qualified special needs teacher to give more personalized care' +
          ' and support to your child, so as to help them reach their full potential.'},
    {key: 'x14', value: 'You can get a tutor for:'}
  ],
  examples: ListItem(
      [{key: 'f4', text: 'Physical'}, {key: 'f5', text: 'Developmental'},
      {key: 'f6', text: 'Behavioural/Emotional'}, {key: 'f7', text: 'Sensory/Impaired...etc'}]
  ),
  images: {jpeg: specialJpeg, webp: specialWebp},
  link: "https://forms.gle/wWkfoAQbSgDzrtoY7"
};
const proAppSoftware = {
  title: 'Professional Application Software', icon: '',
  desc: [
    {key:'x15', value: 'You can get a trainer to help you master or learn how to use any professional' +
          ' application software relevant in our career or any other field you may be interested in.'},
    {key: 'x16', value: 'You can get a tutor for:'}
  ],
  examples: ListItem(
      [{key: 'g4', text: 'Programming languages'}, {key: 'g5', text: 'CAD/CAM'},
        {key: 'g6', text: 'QuickBooks'}, {key: 'g7', text: 'SAGE … etc.'}]
  ),
  images: {jpeg: '', webp: ''},
  link: "#"
};

const services = [
  {key: 's1', value: kcse}, {key: 's2', value: international},
  {key: 's3', value: tests}, {key: 's4', value: sports},
  {key: 's5', value: language}, {key: 's6', value: hobbies},
  {key: 's7', value: specialNeeds}, {key: 's8', value: proAppSoftware}
];

export default services;
