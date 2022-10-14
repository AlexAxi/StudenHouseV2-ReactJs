import React, { Component } from "react";
import defaultBcg from "../images/background_hero.jpg";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { EventContext } from "../context";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

import ReactPlayer from "react-player";

import YouTubeIframe from "react-youtube-iframe";

import style from "../components/singleEventPage/styles/SingleEvent.module.css";
import btnStyle from "../components/global/styles/button/Button.module.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES} from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={style.descriptionBand}>{children}</p>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className={style.linkInlineContentful}
        >
         {children}
        </a>
      );
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 style={{ color: "#4d4c4f" }}>{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 style={{ color: "#4d4c4f" }}>{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 style={{ color: "#4d4c4f", margin: "0px" }}>{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 style={{ color: "#4d4c4f", margin: "0px" }}>{children}</h4>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <li style={{ color: "#4d4c4f", listStyle: "none" }}>{children}</li>
      );
    },
  },

  // renderMark: {
  //   [MARKS.BOLD]: text => {
  //     return <b key={`${text}-key`}> {text} </b>;
  //   },
  // },
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [
        ...children,
        index > 0 && <br key={index} />,
        <br key={index} />,
        textSegment,
      ];
    }, []);
  },
};

export default class SingleEvent extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  static contextType = EventContext;
  // componentDidMount() {}

  render() {
    const { getEvent, locale } = this.context;
    console.log(locale);
    const event = getEvent(this.state.slug);
    // console.log(event);
    if (!event) {
      return (
        <div className="error">
          <h3>No such event could be found...</h3>
          <Link to="/events" className="btn-primary">
            Back To Events
          </Link>
        </div>
      );
    }
    const {
      name,
      images,
      price,
      start,
      doors,
      end,
      subtitle,
      description,
      ticketLink,
      facebookEvent,
      youtube,
      youtube2,
      spotify,
      timeFormat,
      timeFormatEnd,
    } = event;

    console.log(event);
    const [mainImg, ...defaultImg] = images;
    // console.log("SSSSSSS", spotify);
    console.log(event);
    console.log("Desc", description);

    return (
      <>
        <Helmet>
          <title>{name}</title>
          <meta
            name="description"
            content="Student House is a venue located in the center of Aalborg which hosts social events. It consists of a café, concert hall, study rooms and is run by volunteers."
          />
          <meta
            name="keywords"
            content="Café Aalborg, Aalborg Events, Study Café, Events in Aalborg, Music Events Aalborg, Social Events Aalborg"
          />
        </Helmet>
        <Hero
          imageHero={mainImg || this.state.defaultBcg}
          title={name}
          dateField={"DATE:"}
          dateDate={timeFormat}
          timeField={locale === "da" ? "TIMER:" : "TIME:"}
          timeStart={start}
          timeEnd={end}
          doorField={"DOOR:"}
          doorDoor={doors}
          buttonName={"Facebook Event"}
          buttonLink={facebookEvent}
        />
        <section className={style.underHero}>
          <div className={style.wrapperUnder}>
            <div className={style.eventLocation}>
              <div className={style.locationWrapper}>
                <FaMapMarkerAlt className={style.locationIcon} />
                <a
                  href="https://goo.gl/maps/5J6n7KUBBY4uF26H8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4D4C4F" }}
                >
                  <p className={style.pLocation}>Gammeltorv 10, Aalborg 9000</p>
                </a>
              </div>
              {/* <a 
                href="https://goo.gl/maps/Qd8WPkxVHv9mwbjQ8"
                target="_blank"
                className={style.btnPrimary}
                style={{marginLeft:"2vw"}}
              >
                Google Maps
              </a> */}
            </div>
            {price ? (
              <div className={style.tickets}>
                <p className={style.pPrice}>Entrance: {price}kr</p>
                <a
                  href={ticketLink}
                  target="_blank"
                  className={btnStyle.btnPrimary}
                  style={{ marginLeft: "2vw" }}
                >
                  Buy Ticket
                </a>
              </div>
            ) : (
              <div className={style.tickets}>
                <p className={style.pPrice}>Entrance: FREE</p>
              </div>
            )}
          </div>
        </section>

        <section className={style.aboutBand}>
          <div className={style.desc}>
            <p className={style.subtitle}>{subtitle}</p>
            {/* <p className={style.descriptionBand}>
              {description.content[0].content[0].value}
            </p>  */}
            {documentToReactComponents(description, RICHTEXT_OPTIONS)}
          </div>

          <div className={style.imagesBand}>
            {defaultImg.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt={name}
                  className={style.imageBand}
                />
              );
            })}
          </div>
        </section>

        <section style={{ marginTop: "1.5em" }}>
          {spotify ? (
            <div className={style.spotify}>
              <iframe
                style={{ borderRadius: "" }}
                src={spotify}
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          ) : null}

          {youtube || youtube2 ? (
            <div className={style.youtube} style={{ marginTop: "2em" }}>
              <ReactPlayer url={youtube} controls={true} width="100%" />
              {youtube2 ? (
                <ReactPlayer url={youtube2} controls={true} width="100%" />
              ) : null}
            </div>
          ) : null}
        </section>
      </>
    );
  }
}
