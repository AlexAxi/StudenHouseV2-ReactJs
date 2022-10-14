import React from "react";
import { withEventConsumer } from "../../context";
import style from "./styles/Administration.module.css";

function Administration({context}) {
  const {administration ,
    imgAdministration1,
    imgAdministration2,
    imgAdministration3,
    imgAdministration4, 
    imgAdministration5,
    imgAdministration6,
    locale} = context

    let name1 = Object(administration[0]).name;
    let role1 = Object(administration[0]).role;
    let email1 = Object(administration[0]).email;
    let name2 = Object(administration[1]).name;
    let role2 = Object(administration[1]).role;
    let email2 = Object(administration[1]).email;
    let name3 = Object(administration[2]).name;
    let role3 = Object(administration[2]).role;
    let email3 = Object(administration[2]).email;
    let name4 = Object(administration[3]).name;
    let role4 = Object(administration[3]).role;
    let email4 = Object(administration[3]).email;
    let name5 = Object(administration[4]).name;
    let role5 = Object(administration[4]).role;
    let email5 = Object(administration[4]).email;
    let name6 = Object(administration[5]).name;
    let role6 = Object(administration[5]).role;
    let email6 = Object(administration[5]).email;


  return (
    <div className={style.MainContainerContact}>
      <div className={style.cardGrid}>
        {/*  ----------------------------------------------- */}
        <div className={style.cardStyle}>
          <img className={style.imgContainer} src={imgAdministration1} alt="avatar" />

          <div className={style.textContainer}>
            <h1 className={style.CardTitle}>{name1}</h1>
            <h2 className={style.CardHeader}>{role1}</h2>
            <a
              href={`mailto: ${email1}`}
              className={style.contactTag}
            >
             {email1}
            </a>
          </div>
        </div>
        {/*  ----------------------------------------------- */}

        <div className={style.cardStyle}>
          <img className={style.imgContainer} src={imgAdministration2} alt="avatar" />

          <div className={style.textContainer1}>
            <h1 className={style.CardTitle}>{name2}</h1>
            <h2 className={style.CardHeader}>{role2}</h2>
            <a href={`mailto: ${email2}`} className={style.contactTag}>
            {email2}
            </a>
          </div>
        </div>
        {/*  ----------------------------------------------- */}
        <div className={style.cardStyle}>
          <img className={style.imgContainer} src={imgAdministration3} alt="avatar" />

          <div className={style.textContainer}>
            <h1 className={style.CardTitle}>{name3}</h1>
            <h2 className={style.CardHeader}>{role3}</h2>
            <a href={`mailto: ${email3}`} className={style.contactTag}>
              {email3}
            </a>
          </div>
        </div>
        {/*  ----------------------------------------------- */}

        <div className={style.cardStyle}>
          <img className={style.imgContainer} src={imgAdministration4} alt="avatar" />

          <div className={style.textContainer1}>
            <h1 className={style.CardTitle}>{name4}</h1>
            <h2 className={style.CardHeader}>{role4}</h2>
            <a
              href={`mailto: ${email4}`}
              className={style.contactTag}
            >
             {email4}
            </a>
          </div>
        </div>
        {/*  ----------------------------------------------- */}

        <div className={style.cardStyle}>
          <img className={style.imgContainer} src={imgAdministration5} alt="avatar" />

          <div className={style.textContainer}>
            <h1 className={style.CardTitle}>{name5}</h1>
            <h2 className={style.CardHeader}>{role5}</h2>
            <a href={`mailto: ${email5}`} className={style.contactTag}>
              {email5}
            </a>
          </div>
        </div>
        {/*  ----------------------------------------------- */}

        <div className={style.cardStyle}>
          <img className={style.imgContainer} src={imgAdministration6} alt="avatar" />

          <div className={style.textContainer1}>
            <h1 className={style.CardTitle}>{name6}</h1>
            <h2 className={style.CardHeader}>{role6}</h2>
            <a href={`mailto: ${email6}`} className={style.contactTag}>
              {email6}
            </a>
          </div>
        </div>
        {/*  ----------------------------------------------- */}
      </div>
    </div>
  );
}

export default withEventConsumer(Administration);