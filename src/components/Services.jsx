import React from "react";
import services from "../constants/services";
import Service from "./composite/Service";

const Services = () => {
  return (
      <section id={'services'}>
      <h4 className={'section-title'}>Our Services</h4>
        <div id={'service-list'}>
          <Service
              jpeg={services.kcse.images.jpeg} webp={services.kcse.images.jpeg}
              alt={'kcse-student'} title={services.kcse.title}
              desc={services.kcse.desc} link={services.kcse.link}
              list={services.kcse.examples}
          />
          <Service
              jpeg={services.international.images.jpeg} webp={services.international.images.jpeg}
              alt={'kcse-student'} title={services.international.title}
              desc={services.international.desc} link={services.international.link}
              list={services.international.examples}
          />
          <Service
              jpeg={services.tests.images.jpeg} webp={services.tests.images.jpeg}
              alt={'kcse-student'} title={services.tests.title}
              desc={services.tests.desc} link={services.tests.link}
              list={services.tests.examples}
          />
          <Service
              jpeg={services.sports.images.jpeg} webp={services.sports.images.jpeg}
              alt={'kcse-student'} title={services.sports.title}
              desc={services.sports.desc} link={services.sports.link}
              list={services.sports.examples}
          />
          <Service
              jpeg={services.language.images.jpeg} webp={services.language.images.jpeg}
              alt={'kcse-student'} title={services.language.title}
              desc={services.language.desc} link={services.language.link}
              list={services.language.examples}
          />
          <Service
              jpeg={services.hobbies.images.jpeg} webp={services.hobbies.images.jpeg}
              alt={'kcse-student'} title={services.hobbies.title}
              desc={services.hobbies.desc} link={services.hobbies.link}
              list={services.hobbies.examples}
          />
          <Service
              jpeg={services.specialNeeds.images.jpeg} webp={services.specialNeeds.images.jpeg}
              alt={'kcse-student'} title={services.specialNeeds.title}
              desc={services.specialNeeds.desc} link={services.specialNeeds.link}
              list={services.specialNeeds.examples}
          />
        </div>
      </section>
  )
};

export default Services;
