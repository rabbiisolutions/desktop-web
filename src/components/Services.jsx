import React from "react";
import services from "../constants/services";
import ImageWebp from "../helpers/ImageWebp";
import ButtonLink from "./basic/ButtonLink";

const GetTutor = (links) => {
  return (
      <div className={'get-a-tutor'}>
        { links.map((link) => (
            <ButtonLink link={link.link} key={link.key} className="services"
                        value={ link.value ? link.value : "Get a Tutor"}/>
        ))}
      </div>
  )
};

const Desc = (list) => {
  return list.map((item) => (<p key={item.key} className={'desc'}>{item.value}</p>));
};

const Service = (props) => {
  return (
      <div className={'service'}>
        <ImageWebp
            src={props.jpeg}
            srcWebp={props.webp}
            className={'service-image'}
            alt={props.alt}
        />
        <div className={'text'}>
          <h2 className={'title'}>{props.title}</h2>
          <hr/>
          {Desc(props.desc)}
          {props.list}
          {GetTutor(props.links)}
        </div>
      </div>
  )
};

const Services = () => {
  return (
      <section id={'services'}>
      <h4 className={'section-title'}>Our Services</h4>
        <div id={'service-list'}>
          {services.map((service) => (
              <Service
                  jpeg={service.value.images.jpeg} webp={service.value.images.jpeg}
                  alt={'area-photo'} title={service.value.title}
                  desc={service.value.desc} links={service.value.links}
                  list={service.value.examples} key={service.key}
              />
          ))}
        </div>
      </section>
  )
};

export default Services;
