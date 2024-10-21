import React from "react";

export default function FeatureList(url) {
  return [
    {
      title: 'Build IBC Apps',
      Svg: require('@site/static/img/build-svg.svg').default,
      to: `${url}/category/build-ibc-dapps-1`,
      description: (
        <>
          Find out how to leverage Polymer and vIBC to build IBC enabled applications.        
        </>
      ),
    },
    {
      title: 'Follow the Tutorials',
      Svg: require('@site/static/img/tutorial-svg.svg').default,
      to: `${url}/quickstart/start`,
      description: (
        <>
          Follow along with the tutorials to quickly experience how to build new or refactor existing apps to leverage Polymer.
        </>
      ),
    },  
     {
       title: `Explore IBC Data`,
       to: `https://sepolia.polymer.zone/packets`,
       Svg: require('@site/static/img/explorer-svg.svg').default,
       description: (
         <>
           Track important metrics and data related to sending IBC packets through Polymer.
         </>
       ),
     },
     {
       title: `Join the Community`,
       to: "https://discord.gg/hvMQp4qcM6",
       Svg: require('@site/static/img/community-svg.svg').default,
       description: (
         <>
           Connect with other community members, developers and the Polymer Labs team.
         </>
       ),
     },
     {
       title: `Discuss Developer Topics`,
       to: "https://forum.polymerlabs.org",
       Svg: require('@site/static/img/forum-svg.svg').default,
       description: (
         <>
           Collaborative forum for the community to ask/answer questions, share
           information, discuss items and give feedback.
         </>
       ),
     },
   ];
 }
