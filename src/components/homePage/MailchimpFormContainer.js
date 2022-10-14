import React from "react";
import { withEventConsumer } from "../../context";
import style from "./styles/Newsletter.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

function MailchimpFormContainer({ context }) {
  const { locale } = context;
 
  const postUrl = `https://gmail.us12.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className={style.newsletter}>
      <div className={style.wrapper}>
        <div>
          {locale === "da" ? (
            <h1 className={style.headingNewsletter}>
              TILMELD DIG VORES &nbsp;
              <span style={{ color: "#5874B6" }}>NYHEDSBREV &nbsp;</span>
              AT FÅ OPDATERINGER OM DE NYESTE BEGIVENHEDER OG TILBUD!
            </h1>
          ) : (
            <h1 className={style.headingNewsletter}>
              JOIN OUR &nbsp;
              <span style={{ color: "#5874B6" }}>NEWSLETTER &nbsp;</span>
              TO GET UPDATES ABOUT THE LATEST EVENTS AND OFFERS!
            </h1>
          )}
        </div>
        <div>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default withEventConsumer(MailchimpFormContainer);
