import React from "react";
import FrontPageStyle from "../styles/FrontPage.module.css"

export default function frontPage() {
    return (
        <>
            <div className={FrontPageStyle.frontPageContainer}>
                <h1 className={FrontPageStyle.callout}> Front Page</h1>
                <div className={FrontPageStyle.gridContainer}>
                    <div className={FrontPageStyle.blogPost}>
                        <h1 className={FrontPageStyle.postTitle}>Does this look like a rash to anyone else?</h1>
                        <p className={FrontPageStyle.postDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Ornare lectus sit amet est placerat. Mauris a diam maecenas sed enim ut. Faucibus pulvinar elementum integer enim neque. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sit amet consectetur adipiscing elit ut. Risus ultricies tristique nulla aliquet. Sem et tortor consequat id porta. Molestie a iaculis at erat pellentesque. Congue eu consequat ac felis donec et. Leo a diam sollicitudin tempor.
                        </p>
                        <p className={FrontPageStyle.author}>By: Gregory</p>
                    </div>
                    <div className={FrontPageStyle.blogPost}>
                        <h1 className={FrontPageStyle.postTitle}>Top 10 Reasons why I don't like Gregory</h1>
                        <p className={FrontPageStyle.postDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Ornare lectus sit amet est placerat. Mauris a diam maecenas sed enim ut. Faucibus pulvinar elementum integer enim neque. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sit amet consectetur adipiscing elit ut. Risus ultricies tristique nulla aliquet. Sem et tortor consequat id porta. Molestie a iaculis at erat pellentesque. Congue eu consequat ac felis donec et. Leo a diam sollicitudin tempor.
                        </p>
                        <p className={FrontPageStyle.author}>By: Sammy</p>
                    </div>
                    <div className={FrontPageStyle.blogPost}>
                        <h1 className={FrontPageStyle.postTitle}>What I learned from having five cats</h1>
                        <p className={FrontPageStyle.postDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Ornare lectus sit amet est placerat. Mauris a diam maecenas sed enim ut. Faucibus pulvinar elementum integer enim neque. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sit amet consectetur adipiscing elit ut. Risus ultricies tristique nulla aliquet. Sem et tortor consequat id porta. Molestie a iaculis at erat pellentesque. Congue eu consequat ac felis donec et. Leo a diam sollicitudin tempor.
                        </p>
                        <p className={FrontPageStyle.author}>By: Eleanor</p>
                    </div>
                    <div className={FrontPageStyle.blogPost}>
                        <h1 className={FrontPageStyle.postTitle}>The best cartoon from my childhood.</h1>
                        <p className={FrontPageStyle.postDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Ornare lectus sit amet est placerat. Mauris a diam maecenas sed enim ut. Faucibus pulvinar elementum integer enim neque. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sit amet consectetur adipiscing elit ut. Risus ultricies tristique nulla aliquet. Sem et tortor consequat id porta. Molestie a iaculis at erat pellentesque. Congue eu consequat ac felis donec et. Leo a diam sollicitudin tempor.
                        </p>
                        <p className={FrontPageStyle.author}>By: Christopher</p>
                    </div>
                    <div className={FrontPageStyle.blogPost}>
                        <h1 className={FrontPageStyle.postTitle}>Easy recipes</h1>
                        <p className={FrontPageStyle.postDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Ornare lectus sit amet est placerat. Mauris a diam maecenas sed enim ut. Faucibus pulvinar elementum integer enim neque. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sit amet consectetur adipiscing elit ut. Risus ultricies tristique nulla aliquet. Sem et tortor consequat id porta. Molestie a iaculis at erat pellentesque. Congue eu consequat ac felis donec et. Leo a diam sollicitudin tempor.
                        </p>
                        <p className={FrontPageStyle.author}>By: Amy</p>
                    </div>
                </div>
            </div>
        </>
    );
};