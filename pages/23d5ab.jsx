import { useEffect } from 'react';

import { appUrl } from "../utils/appUrl";
import fetchNeighbourhoods from '../utils/fetchNeighbourhoods';

import Container from "../components/Container.component";
import LepineCommunities from "../components/v3/LepineCommunities/LepineCommuities.component";

import AOS from 'aos';
import "aos/dist/aos.css";

const Home = ({ homeV2, neighbourhoods }) => {
  useEffect(() => {
    AOS.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 0,
        duration: 300,
        disable: 'mobile'
    });
  });

  return (
    <Container page="homeV2">            
      {neighbourhoods && <LepineCommunities
          header={homeV2.neighbourhoods.header}
          copy={homeV2.neighbourhoods.copy}
          neighbourhoods={neighbourhoods}
      />}
    </Container>
  );
}

export async function getStaticProps() {
  const homeV2Url = `${appUrl}/api/home`;
  const homeV2Res = await fetch(homeV2Url);
  const homeV2Data = await homeV2Res.json();

  const neighbourhoods = await fetchNeighbourhoods();

  return {
    props: {
      homeV2: homeV2Data,
      neighbourhoods
    },
    revalidate: 1,
  }
}

export default Home;