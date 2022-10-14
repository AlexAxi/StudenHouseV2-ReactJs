import React from 'react'
import { withEventConsumer } from '../context'
import Title from '../components/global/Title'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES} from "@contentful/rich-text-types";
import style from '../components/singleEventPage/styles/SingleEvent.module.css'

 function Privacy({context}) {
    const{locale, privacyPolicy} = context
console.log(privacyPolicy);
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
  return (<>
    <div style={{marginTop:"em"}}>
      <Title title={"PRIVACY POLICY & COOKIES"}/>
    </div>
    <div className={style.privacyWrapper}>
        <p>{documentToReactComponents(privacyPolicy, RICHTEXT_OPTIONS)}</p>
    </div>
    </>
  )
}

export default withEventConsumer(Privacy);