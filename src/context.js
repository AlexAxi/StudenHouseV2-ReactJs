import React, { Component } from "react";
// import items from "./data";
import moment from "moment";
import Client from "./Contentful";

// Client.getEntries({
//   content_type:'events'
// }).then(response =>console.log(response.items));   for testing the connection

const EventContext = React.createContext();

class EventProvider extends Component {
  state = {
    events: [],
    sortedEvents: [],
    featuredEvents: [],
    upcomingEvents: [],
    loading: true,
    type: "All",
    month: "All",
    name: "",
    time: "",
    endTime: "",
    locale: "en-US",
    eventT: "",
    home: [],
    cafe: [],
    hours: [],
    generalContactInfo: [],
    volunteer: [],
    testimonials: [],
    facilities: [],
    about: [],
    administration: [],
    articlesAndReports: [],
    files: [],
  };

  changeLanguage = () => {
    this.setState(
      {
        locale: "da",
      },
      () => {
        this.getData();
        this.getDataHome();
        this.getDataCafe();
        this.getDataVolunteer();
        this.getDataTestimonials();
        this.getDataFacilities();
        this.getDataAbout();
        this.getDataAdministration();
      }
    );
  };
  resetLanguage = () => {
    this.setState(
      {
        locale: "en-US",
      },
      () => {
        this.getData();
        this.getDataHome();
        this.getDataCafe();
        this.getDataVolunteer();
        this.getDataTestimonials();
        this.getDataFacilities();
        this.getDataAbout();
        this.getDataAdministration();
      }
    );
  };

  //getData from API
 
  getData = async () => {
    // console.log("CLI",Client);
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "events",
        order: "fields.time",
        locale: this.state.locale,
      });

      let events = this.formatData(response.items);
      // console.log("cccc", events);

      console.log(events);
      var date = new Date();
      var milliseconds = date.getTime();

      events = events.filter((event) =>  event.eventT >= milliseconds)
      //  console.log(milliseconds);
      // let eventTime = new Date(timeFormat);
      // var eventT = eventTime.getTime();

      let featuredEvents = events.filter(
        (event) => event.featured === true && event.eventT >= milliseconds
      );

      console.log("FEATURED CONTEXT", featuredEvents);
      // let upcomingEvents = events.filter(item => moment(item.time,'DD/MM/YYYY').isSameOrAfter(current))
      let upcomingEvents = events;

      this.setState({
        events,
        featuredEvents,
        upcomingEvents,
        sortedEvents: events,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //getData from API HOME
  getDataHome = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "homePage",
        locale: this.state.locale,
      });

      let home = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      // console.log("DDDDD", home[0].heroImage.fields.file.url);
      // let heroImageHome = home[0].heroImage.fields.file.url;
      // let heroDescription = Object(home[0]).heroDescription.content[0].content[0]
      // .value;
      let caffeSectionDescription = Object(home[0]).caffeSectionDescription
        .content[0].content[0].value;

      this.setState({
        home,
        // heroImageHome,
        // heroDescription,
        caffeSectionDescription,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //getData from API CAFFE
  getDataCafe = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "caffePage",
        locale: this.state.locale,
      });

      let cafe = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      // console.log("DDDDD", cafe[0].heroImage.fields.file.url);
      // let heroImageCafe = cafe[0].heroImage.fields.file.url;
      let gallery1 = Object(cafe[0]).gallery[0].fields.file.url;
      let gallery2 = Object(cafe[0]).gallery[1].fields.file.url;
      let gallery3 = Object(cafe[0]).gallery[2].fields.file.url;
      let gallery4 = Object(cafe[0]).gallery[3].fields.file.url;
      let gallery5 = Object(cafe[0]).gallery[4].fields.file.url;

      this.setState({
        cafe,
        // heroImageCafe,
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //getData from API CAFFE
  getDataHours = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "openingHours",
        locale: this.state.locale,
      });

      let hours = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      console.log("Hours", hours);

      this.setState({
        hours,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //getData from API GENERAL CONTACT INFO
  getDataGeneralContactInfo = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "generalContactInfo",
        locale: this.state.locale,
      });

      let generalContactInfo = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      console.log("General CONTACT", generalContactInfo);

      this.setState({
        generalContactInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //getData from API VOLUNTEER
  getDataVolunteer = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "volunteerPage",
        locale: this.state.locale,
      });

      let volunteer = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      console.log("VOLUNTEER", volunteer);
      let heroImageVolunteer = volunteer[0].heroImage.fields.file.url;
      // let heroDescriptionVolunteer = Object(volunteer[0]).heroDescription.content[0].content[0]
      // .value;

      this.setState({
        volunteer,
        heroImageVolunteer,
        // heroDescriptionVolunteer,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //getData from API TESTIMONIALS
  getDataTestimonials = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "testimonials",
        locale: this.state.locale,
      });

      let testimonials = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      console.log("testimonials", testimonials);
      let imageTestimonial1 = testimonials[0].image.fields.file.url;
      let imageTestimonial2 = testimonials[1].image.fields.file.url;
      let imageTestimonial3 = testimonials[2].image.fields.file.url;
      let testimonial1 = Object(testimonials[0]).testimonial.content[0]
        .content[0].value;
      let testimonial2 = Object(testimonials[1]).testimonial.content[0]
        .content[0].value;
      let testimonial3 = Object(testimonials[2]).testimonial.content[0]
        .content[0].value;

      this.setState({
        testimonials,
        imageTestimonial1,
        imageTestimonial2,
        imageTestimonial3,
        testimonial1,
        testimonial2,
        testimonial3,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //getData from API FACILITIES
  getDataFacilities = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "facilities",
        order: "fields.id",
        locale: this.state.locale,
      });

      let facilities = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      console.log("FACILITIES", facilities);
      let titleFacility1 = Object(facilities[0]).title;
      let imgFacility1 = facilities[0].image.fields.file.url;
      let decsFacility1 = Object(facilities[0]).description.content[0]
        .content[0].value;
      let decsFacility11 = Object(facilities[0]).description.content[1]
        .content[0].value;

      let titleFacility2 = Object(facilities[1]).title;
      let imgFacility2 = facilities[1].image.fields.file.url;
      let decsFacility2 = Object(facilities[1]).description.content[0]
        .content[0].value;
      let decsFacility22 = Object(facilities[1]).description.content[1]
        .content[0].value;

      let titleFacility3 = Object(facilities[2]).title;
      let imgFacility3 = facilities[2].image.fields.file.url;
      let decsFacility3 = Object(facilities[2]).description.content[0]
        .content[0].value;
      let decsFacility33 = Object(facilities[2]).description.content[1]
        .content[0].value;

      let titleFacility4 = Object(facilities[3]).title;
      let imgFacility4 = facilities[3].image.fields.file.url;
      let decsFacility4 = Object(facilities[3]).description.content[0]
        .content[0].value;
      let decsFacility44 = Object(facilities[3]).description.content[1]
        .content[0].value;

      let titleFacility5 = Object(facilities[4]).title;
      let imgFacility5 = facilities[4].image.fields.file.url;
      let decsFacility5 = Object(facilities[4]).description.content[0]
        .content[0].value;

      this.setState({
        facilities,
        titleFacility1,
        imgFacility1,
        decsFacility1,
        decsFacility11,
        titleFacility2,
        imgFacility2,
        decsFacility2,
        decsFacility22,
        titleFacility3,
        imgFacility3,
        decsFacility3,
        decsFacility33,
        titleFacility4,
        imgFacility4,
        decsFacility4,
        decsFacility44,
        titleFacility5,
        imgFacility5,
        decsFacility5,
        // decsFacility55,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //getData from API ABOUT
  getDataAbout = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "aboutPage",
        order: "fields.id",
        locale: this.state.locale,
      });

      let about = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      console.log("ABOUT", about);
      let titleAbout1 = Object(about[0]).title;
      let imgAbout1 = about[0].image.fields.file.url;
      let decsAbout1 = Object(about[0]).description.content[0].content[0].value;
      let decsAbout11 = Object(about[0]).description.content[1].content[0]
        .value;

      let titleAbout2 = Object(about[1]).title;
      let imgAbout2 = about[1].image.fields.file.url;
      let decsAbout2 = Object(about[1]).description.content[0].content[0].value;
      let decsAbout22 = Object(about[1]).description.content[1].content[0]
        .value;

      let titleAbout3 = Object(about[2]).title;
      let imgAbout3 = about[2].image.fields.file.url;
      let decsAbout3 = Object(about[2]).description.content[0].content[0].value;
      let decsAbout33 = Object(about[2]).description.content[1].content[0]
        .value;

      this.setState({
        about,
        titleAbout1,
        imgAbout1,
        decsAbout1,
        decsAbout11,
        titleAbout2,
        imgAbout2,
        decsAbout2,
        decsAbout22,
        titleAbout3,
        imgAbout3,
        decsAbout3,
        decsAbout33,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //getData from API ADMINISTRATION
  getDataAdministration = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "administration",
        order: "fields.id",
        locale: this.state.locale,
      });

      let administration = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      console.log("ADMINISTRATION", administration);

      let imgAdministration1 = administration[0].profilePicture.fields.file.url;
      let imgAdministration2 = administration[1].profilePicture.fields.file.url;
      let imgAdministration3 = administration[2].profilePicture.fields.file.url;
      let imgAdministration4 = administration[3].profilePicture.fields.file.url;
      let imgAdministration5 = administration[4].profilePicture.fields.file.url;
      let imgAdministration6 = administration[5].profilePicture.fields.file.url;

      this.setState({
        administration,
        imgAdministration1,
        imgAdministration2,
        imgAdministration3,
        imgAdministration4,
        imgAdministration5,
        imgAdministration6,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //getData from API CAFFE
  getDataReports = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "articlesAndReports",
        locale: this.state.locale,
      });

      let articlesAndReports = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      let files = articlesAndReports[0].files.map((item) => {
        return {
          ...item.fields,
        };
      });

      // console.log("FILES", files);

      this.setState({
        articlesAndReports,
        files,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //getData from Privacy Policy
  getDataPrivacy = async () => {
    try {
      // console.log(this.state.locale);
      let response = await Client.getEntries({
        content_type: "privacyPolicy",
        locale: this.state.locale,
      });

      let privacyPolicy = response.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      // privacyPolicy = privacyPolicy[0].privacyPolicy.fields.file.url
      privacyPolicy = privacyPolicy[0].privacyPolicyText

      // console.log("PRIVACY", privacyPolicy);

      this.setState({
        privacyPolicy,
        
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    this.getDataHome();
    this.getDataCafe();
    this.getDataHours();
    this.getDataGeneralContactInfo();
    this.getDataVolunteer();
    this.getDataTestimonials();
    this.getDataFacilities();
    this.getDataAbout();
    this.getDataAdministration();
    this.getDataReports();
    this.getDataPrivacy();
  }
  //we format the data to get rid of the complex Contentful objects
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let time = item.fields.time;
      let timeFormat = moment(time)
        .utc(+2)
        .format("DD/MM/YYYY");
      let eventTime = new Date(time);
      var eventT = eventTime.getTime();
      let timeEnd = item.fields.endTime;
      let timeFormatEnd = moment(timeEnd)
        .utc(+2)
        .format("DD/MM/YYYY");

      let event = {
        ...item.fields,
        images,
        id,
        timeFormat,
        timeFormatEnd,
        eventT,
      };

      return event;
    });
    return tempItems;
  }

  getEvent = (slug) => {
    let tempEvents = [...this.state.events];
    const event = tempEvents.find((event) => event.slug === slug);
    return event;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
        // callback function
      },
      this.filterEvents
    );

    // console.log(`this is type: ${type}, this is name: ${name}, this is value: ${value}`);
  };

  resetState = (e) => {
    this.setState({
      type: "All",
      month: "All",
      name: "",
    });
    this.handleChange(e);
    e.preventDefault();
  };

  filterEvents = () => {
    let { events, type, month, name, time } = this.state;
    // const current = moment(new Date())
    //   .utc(+2)
    //   .format("DD/MM/YYYY");
    // let timeFormat = moment(time)
    //   .utc(+2)
    //   .format("DD/MM/YYYY");

    // all the events
    let tempEvents = [...events];

    // filter by type
    if (type !== "All") {
      tempEvents = tempEvents.filter((event) => event.type === type);
    }
    // filter by month
    if (month !== "All") {
      tempEvents = tempEvents.filter((event) => event.month === month);
    }

    // filter by name
    if (name !== "") {
      tempEvents = tempEvents.filter((event) =>
        event.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(name, tempEvents);
    }

    this.setState({
      sortedEvents: tempEvents,
    });
  };

  render() {
    return (
      <EventContext.Provider
        value={{
          ...this.state,
          getEvent: this.getEvent,
          handleChange: this.handleChange,
          changeLanguage: this.changeLanguage,
          resetLanguage: this.resetLanguage,
          resetState: this.resetState,
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

const EventConsumer = EventContext.Consumer;

// higher order component to use consumer in EventContainer

export function withEventConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <EventConsumer>
        {(value) => <Component {...props} context={value} />}
      </EventConsumer>
    );
  };
}

export { EventProvider, EventConsumer, EventContext };
