import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { appUrl } from '../../utils/appUrl';
import { apiUrl } from '../../utils/apiUrl';
import fetchPropertyPosts from '../../utils/fetchPropertyPosts';

import Head from 'next/head';
import { baseUrl } from '../../utils/baseUrl';
import Container from '../../components/Container.component';
import Footer from '../../sections/Footer.component';
import PageTop from '../../components/PageTop.component';

import { submitUtmSource } from '../../utils/gtag';
import fetchLeasingSteps from '../../utils/fetchLeasingSteps';
import NavV3 from '../../components/v2/NavV3/NavV3.component';
import { populate } from '../../utils/populate';
import { parseStrapiSingleImage } from '../../utils/parseStrapiImages';
import fetchStressTest from '../../utils/fetchStressTest';

import AOS from 'aos';
import "aos/dist/aos.css";
import authHeaders from '../../utils/strapiAuthHeaders';
import listings40mcgill from '../../temp/40mcgill';
import InstagramFeed from '../../components/v3/InstagramFeed/InstagramFeed.component';
import fetchInstagramRecentPosts from '../../utils/fetchInstagramRecentPosts';
import FullVideoHero from '../../components/v3/FullVideoHero/FullVideoHero.component';
import KeyFeaturesSwiper from '../../components/v3/KeyFeaturesSwiper/KeyFeaturesSwiper';
import Link from 'next/link';
import FeaturedFloorplans from '../../components/v3/FeaturedFloorplans/FeaturedFloorplans.component';
import ContactFormPopup from '../../components/v3/ContactFormPopup/ContactFormPopup.component';
import ContactPopup2025 from '../../components/v2/Contact/ContactPopup2025.component';
import ContactPopupTrigger from '../../components/v2/Contact/ContactPopupTrigger.component';


const Property = ({ popup, property, city, contactInfo, posts, testimonials, leasingSteps, featuredListings, contactUs, stressTest, siblingProperties, instagramPosts }) => {
    const { meta, pageId, logos, propertySuite, modelSuites, name, address, features, listings, gallery, displayMap, map, orbit, contact, global, suiteDesignFeatures, suiteFinishFeatures, faqs, mapCopy, leasingCopy } = property;

    const title = `${name} | Lépine Apartments`;
    const phoneNumber = contactInfo.info.phone;
    const phoneHref = `tel:${phoneNumber}`;

    const [navSecondarySticky, setNavSecondarySticky] = useState(false);
    const [contactPopupIsActive, setContactPopupIsActive] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        contactPopupIsActive ? body.classList.add('noscroll') : body.classList.remove('noscroll');
      }, [contactPopupIsActive])

    const listingsPopupBuildingImage = baseUrl(listings?.popupImage.data.attributes.url);

    const logoDark = baseUrl(logos.dark.data.attributes.url);
    const logoLight = baseUrl(logos.light.data.attributes.url);
    const logoMap = baseUrl(logos.markers.propertyPage.data.attributes.url);

    const [paramsSubmitted, setParamsSubmitted] = useState(false);
    const [showMeeting, setShowMeeting] = useState(false);

    const [links, setLinks] = useState({
        listings: null,
        propertyFeatures: null,
        propertyMap: null,
        faq: null,
        contact: null
    });

    const [content, setContent] = useState(null);

    const router = useRouter();

    const checkUrlParams = async () => {
        if (!paramsSubmitted && router.query.utm_source) {
            await submitUtmSource(router.query.id, router.query.utm_source);
            setParamsSubmitted(true);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', () => window.scrollY > 1 ? setNavSecondarySticky(true) : setNavSecondarySticky(false));

        checkUrlParams();

        AOS.init({
            easing: "ease",
            once: true,
            offset: 0,
            duration: 600,
        });
    }, []);

    useEffect(() => {
        setNavSecondarySticky(false);
    }, [router.pathname]);

    useEffect(() => {
        const links = {
            listings: document.getElementById('listings') ? '#listings' : null,
            propertyFeatures: document.getElementById('propertyFeatures') ? '#propertyFeatures' : null,
            propertyMap: document.getElementById('propertyMap') ? '#propertyMap' : null,
            faq: document.getElementById('faq') ? '#faq' : null,
            blog: posts && posts.length > 0 ? '#newsroom' : null,
            contact: document.getElementById('contact') ? '#contact' : null,
        }

        setLinks(links);
    }, []);

    useEffect(() => {
        const sections = ['hero', 'bienvenue'];
        let current = 0;
        const init = document.getElementById('hero');        
        let isScrolling = false;
        let disableScrolling = false;

        if (window.scrollY > 200) disableScrolling = true;

        !disableScrolling && document.addEventListener('scroll', (e) => {
            if (!disableScrolling) {
                e.preventDefault();

                if (isScrolling) {
                    return false;
                } else {
                    isScrolling = true;

                    // Scroll action happens
                    if (current < sections.length - 1) {
                        current = current + 1;
                    } else {
                        disableScrolling = true;
                    }

                    const scroll = document.getElementById(sections[current]).offsetTop;        

                    window.scrollTo({
                        top: scroll,
                        behavior: "smooth",
                    });
                        
                    setTimeout(() => {
                        isScrolling = false;
                        if (sections[current] === sections[sections.length - 1]) {
                            disableScrolling = true;
                        }
                    }, 1000);
                }
            }
        });

        
    }, []);

    useEffect(() => {
        const content = window.location.href.split('content=')[1];
        
        if (content) {
            setContent(content);
        }
    }, []);

     const image = baseUrl(propertySuite?.image.image.data.attributes.url);

     const leasingStepsV2 = {
        header: leasingSteps.header,
        copy: leasingSteps.copy,
        steps: leasingSteps.steps.map(step => step.item),
        image: parseStrapiSingleImage(leasingSteps.image)
    }

    // const renderAvailabilityCopy = (availabilityCopy) => {
    //     if (!minmax.error) {
    //         switch (availabilityCopy) {
    //             case 'none':
    //                 return null;
                
    //             case '*sqft.min* to *sqft.max* apartments available starting at *price.min*':
    //                 return `${minmax.sqft.min} sqft to ${minmax.sqft.max} sqft apartments available starting at $${minmax.price.min}`;
            
    //             default:
    //                 return null;
    //         }
    //     } else return null;
    // };

    // const availabilityCopy = renderAvailabilityCopy(property.availabilityCopy);

    const availabilityCopy = '';

    const logo = {
        dark: baseUrl(logos.dark.data.attributes.url),
        light: baseUrl(logos.light.data.attributes.url),
        map: baseUrl(logos.markers.propertyPage.data.attributes.url)    
    }

    const currentTime = Date.now();
    const popupExpires = popup?.content?.expires ? Date.parse(popup?.content?.expires) : null;
    const popupExpired = currentTime > popupExpires;

    const floorplans = [
        {
            type: 'main',
            name: 'Unit 426',
            unitType: '2 Bed + Office + Balcony',
            sqft: 1132,
            description: 'Enjoy 1,132 sq. ft. of open-concept living in this spacious 2-bedroom + office apartment with a private balcony. Finished with multilayered hardwood floors, granite countertops, natural wood cabinetry, and 9-foot ceilings. Concrete construction offers superior soundproofing, while panoramic windows bring in abundant natural light. Modern comforts include individual temperature control and high-efficiency climate systems.',
            image: 'https://lepine-storage.nyc3.digitaloceanspaces.com/f40f95f7fb52d30dc9c109d17a933800.png',
            pdf: 'https://lepine-storage.nyc3.digitaloceanspaces.com/9b5f6beb7eb8ea3a162f23ecd656546a.pdf'
        },
        {
            type: 'main',
            name: 'Unit 108',
            unitType: '2 Bed + Terrace',
            sqft: 1029,
            description: 'Experience stylish, functional living in this spacious 2-bedroom apartment featuring a private walk-out terrace. The open layout includes multilayered hardwood floors, granite kitchen countertops, natural wood cabinetry, and soaring 9-foot ceilings in the main living area. Built with concrete construction for enhanced soundproofing, the suite also features acoustically insulated panoramic windows that flood the space with natural light. Enjoy year-round comfort with individual temperature control and high-efficiency heating/cooling.',
            image: 'https://lepine-storage.nyc3.digitaloceanspaces.com/fee056520e98518fbbaa0f02668b7487.png',
            pdf: 'https://lepine-storage.nyc3.digitaloceanspaces.com/9a4f8c7dc520c1593cd328f6ee57bae2.pdf'
        },
        {
            type: 'sub',
            name: 'Unit 220',
            unitType: '1 Bed + Office + Powder Room (LX) + Balcony',
            sqft: 1168,
            description: '1-Bedroom + Office with Balcony – 1,168 sq. ft. This spacious LX layout offers 1,168 sq. ft. of open-concept living, featuring a large bedroom, dedicated office space, and convenient powder room. Enjoy modern finishes throughout, including multilayered hardwood flooring, granite kitchen countertops, natural wood cabinetry, and 9-foot ceilings in the main living area. Acoustically insulated panoramic windows provide abundant natural light, while concrete construction ensures excellent soundproofing. Stay comfortable year-round with individual temperature control and high-efficiency heating and cooling',
            image: 'https://lepine-storage.nyc3.digitaloceanspaces.com/61ba97d6abbd6061634ebe4ff912c78a.png',
            pdf: 'https://lepine-storage.nyc3.digitaloceanspaces.com/721bd647a2c943cc17a50ef153f563a1.pdf'
        },
        {
            type: 'sub',
            name: 'Unit 137',
            unitType: '1 Bed + Office + Powder Room (LX) + Terrace',
            sqft: 910,
            description: 'This bright and modern LX apartment offers 910 sq. ft. of thoughtfully designed living space, featuring a spacious bedroom, dedicated office, and convenient powder room. Step out onto your private walk-out terrace and enjoy the outdoors from home. Interior highlights include multilayered hardwood flooring, granite kitchen countertops, natural wood cabinetry, and 9-foot ceilings in the main living area. Designed for comfort with acoustically insulated panoramic windows, individual temperature control, and high-efficiency heating and cooling',
            image: 'https://lepine-storage.nyc3.digitaloceanspaces.com/a4bcca16890c6747006507e3cf97f430.png',
            pdf: 'https://lepine-storage.nyc3.digitaloceanspaces.com/d1bc1328989618441b5872bfb2d2886b.pdf'
        },
        {
            type: 'sub',
            name: 'Unit 122',
            unitType: '2 Bed + Office + Terrace',
            sqft: 1285,
            description: null,
            image: 'https://lepine-storage.nyc3.digitaloceanspaces.com/bb2ae3dd99a7dea360551d8af66c1971.png',
            pdf: 'https://lepine-storage.nyc3.digitaloceanspaces.com/74df4fa989a09cbf291af082fe962554.pdf'
        },
        {
            type: 'sub',
            name: 'Unit 316',
            unitType: '2 Bed + Office',
            sqft: 1234,
            description: null,
            image: 'https://lepine-storage.nyc3.digitaloceanspaces.com/ecf91c358092ddca7b08d238ac1570e6.png',
            pdf: 'https://lepine-storage.nyc3.digitaloceanspaces.com/f47e95dce7edb31878c399cefb51efae.pdf'
        },
    ];

    const keyFeatures = [
        //     {
        //       type: 'image',
        //       header: 'A History of Excellence',
        //       copy: `With roots dating back to Montreal’s founding in 1642, the Lépine family has spent over 70 years shaping multi-family real estate across Eastern Ontario.
        // Lépine communities blend quality craftsmanship, elegant design, and modern convenience—redefining rental living in Ottawa, Carleton Place, Renfrew, and Smiths Falls.
        // Guided by strong family values, we build sustainable, accessible homes where Canadians can grow, thrive, and belong for generations.`,
        //       url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/aff5b2ad2aaf0e85ec65c9a9e6062a13.jpg'
        //     },
            {
              type: 'image',
              header: 'Discover the Heart of Kanata',
              copy: `Carré Saint Louis is perfectly positioned in Kanata, offering seamless access to upscale shopping, dining, and entertainment. Whether you're heading to the Canadian Tire Centre or enjoying convenient transit with nearby LRT stations and highway access, everything you need is just steps away.`,
              url: 'https://nyc3.digitaloceanspaces.com/lepine-storage/942372b60dac15f3f3b144133b2923d0.png'
            },
            {
              type: 'image',
              header: 'The Perfect Blend of Location and Lifestyle',
              copy: 'Carré Saint Louis is nestled in a vibrant, well-connected community that offers both suburban tranquility and urban convenience. Kanata is known for its family-friendly environment, excellent schools, and abundant green spaces. With top-tier shopping, dining, and proximity to tech-driven industries, this is a place where residents can thrive personally and professionally.',
              url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/aa7479f1a4a897574720da9125f036cb.jpg'
            },
            {
              type: 'image',
              header: 'Convenience and Community, Right at Your Doorstep',
              copy: `The ground-floor commercial spaces at Carré Saint Louis bring convenience and vibrancy to your lifestyle. From restaurants and boutiques to essential services, everything you need is just steps away. Carefully selected businesses enhance the community, providing easy access to daily essentials and leisure activities while fostering a connected, dynamic neighborhood.`,
              url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/5125b5e81c05186af8ce56efb1344c44.jpg'
            },
            {
              type: 'image',
              header: 'Curated Finishes for Distinctive Living',
              copy: `Bright and airy elegance with soft creamy tones, warm oak flooring, and gold fixtures for a timeless aesthetic.`,
              url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/e2c0222606336bd745800542a823569c.jpg'
            },
            {
              type: 'image',
              header: 'Premium Essence Collection',
              copy: `Rich, natural wood tones, deep brown countertops, and sleek black fixtures for a modern, refined atmosphere.`,
              url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/03ddb628b58b5e4a9ae44cd571a6c2f0.png'
            },
            {
              type: 'image',
              header: 'A Community Built on Style and Quality',
              copy: `Carré Saint Louis is more than just a residence—it’s a refined living experience rooted in thoughtful design, quality craftsmanship, and a strong sense of community. With Lépine’s commitment to excellence, you’re investing in a home that is both beautiful and built to last.`,
              url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/bc8b1d9c6cf52deaa93c1677d5c3e04c.jpg'
            },
            {
              type: 'image',
              header: 'Designed for Your Well-Being',
              copy: 'Designed for Your Well-Being Carré Saint Louis blends comfort, convenience, and style through thoughtfully designed spaces and amenities. Enjoy a welcoming lobby, lounge, party room, fitness centre, yoga studio, and indoor saltwater pool. Heated underground parking and dedicated storage offer everyday ease. Outside, relax in the landscaped courtyard featuring a water feature that highlights a moment in Canadian history, alongside a herb garden. Secure access, 24/7 surveillance, and barrier-free design ensure peace of mind.',
              url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/c42766bdb241f5cb66e544afd63ff527.jpg'
            },
            {
              type: 'image',
              header: 'A Reflective Oasis with a Story to Tell',
              copy: 'At the heart of Carré Saint Louis’s landscaped courtyard lies a serene outdoor pond, thoughtfully designed to offer a peaceful retreat just steps from home. More than just a place to relax, the pond features a water installation that pays tribute to a defining moment in Canadian history—inviting reflection, connection, and a sense of peace. Surrounded by lush greenery, garden pathways, and seating areas, it creates a unique outdoor experience where residents can unwind, socialize, or simply enjoy the calming presence of nature in a truly meaningful setting.',
              url: 'https://lepine-storage.nyc3.digitaloceanspaces.com/e58e80f9f4d1a43b6cde6109c5658770.png'
            },
            // {
            //   type: 'video',
            //   header: 'Key Feature 5',
            //   copy: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia dolore rerum consectetur distinctio, corrupti illum maiores commodi eaque cum? Autem excepturi in dignissimos ipsa voluptatem omnis commodi recusandae atque velit!',
            //   url: 'https://cdn.pixabay.com/video/2019/02/13/21368-317182818_large.mp4'
            // }
    ];
  
    return (
       <Container page="propertyV2" theme={pageId} brand="2025">
            <Head>
                <title>{meta?.title ? meta?.title : title}</title>
                {meta?.description && <meta name="description" content={meta?.description} />}
                {meta?.keywords && <meta name="keywords" content={meta?.keywords} />}
            </Head>

            <NavV3 rentCopy="Rent Today" links={links} navSecondarySticky={false} logoDark={logoDark} logoLight={logoLight} pageId={pageId} current="communities" city={city} phoneNumber={phoneNumber} phoneHref={phoneHref} contact={contactInfo} />
            <PageTop />

            <FullVideoHero
                id="hero"
                type="property"
                header={property.hero.header}
                subtitle={`${property.address.streetAddress}, ${property.address.city.name}`}
                copy={property.hero.description}
                showcaseColSize={50}
                showcaseHeight={100}
                copyColSize={50}
                cornerImageLeft
                // video={property.hero.content.video}
                availabilityCopy={availabilityCopy}
                bgImage={baseUrl(property.hero.content.image.data.attributes.url)}
                reverse
                featuredListingsLength={featuredListings.length}
                logos={logo}
            />

                {/* <NavSecondary links={links} v2 sticky={false} setNavSecondarySticky={setNavSecondarySticky} logo={logoLight} phoneNumber={phoneNumber} phoneHref={phoneHref} blogPosts={posts.length} propertyNav rentCopy="Rent Today" /> */}

                <div className="bienvenue" id="bienvenue" data-page="carresaintlouis">
                    <div className="bienvenue__wrapper sp" data-page="carresaintlouis">
                        <div className="contentWrapper bienvenue__content" data-wrapper="xl">
                            <h2 className="themeHeader" data-aos="fade-right" data-aos-delay="50">Experience Refined Living<br />at Carré Saint Louis </h2>
                            <p data-aos="fade-left" data-aos-delay="100">Welcome to Kanata’s newest resort-style community, where timeless elegance meets modern convenience. Building on the success of The Normand and Saint Emilion, is the latest addition to Lépine’s exceptional portfolio in this vibrant neighbourhood.</p>

                            <p data-aos="fade-left" data-aos-delay="150">This six-storey residence features European-inspired architecture with 236 thoughtfully designed suites. Each home offers spacious layouts, sophisticated finishes, and abundant natural light. Choose from one, two, and three-bedroom suites and enjoy premier amenities such as a fitness centre, saltwater pool, yoga studio, and tranquil outdoor spaces.</p>

                            <p data-aos="fade-left" data-aos-delay="200">Ideally situated at 1050 Canadian Shield Avenue, you’re steps from Kanata Centrum’s upscale dining and shopping, entertainment at the Canadian Tire Centre, and seamless transit with nearby LRT stations and highway access. More than just a residence, Carré Saint Louis is a destination where sophistication, comfort, and community come together to create an unparalleled lifestyle.</p>

                            <div className="btn themeBtn" data-aos="fade-up" data-aos-delay="500" onClick={() => setContactPopupIsActive(true)}>Register Today</div>
                        </div>
                    </div>
                </div>

                <FeaturedFloorplans items={floorplans} contactPopupIsActive={contactPopupIsActive} setContactPopupIsActive={setContactPopupIsActive} />

                <KeyFeaturesSwiper items={keyFeatures} />

                {/* {faqs && <FAQ content={faqs} bgImage={baseUrl(property.hero.content.image.data.attributes.url)} v2 />} */}

                <div className="bigimage" id="contactform" data-page="carresaintlouis">
                    <div className="bigimage__content">
                        <ContactPopup2025
                            htmlFormId="hs-form-1"
                            type="form"
                            pageId={pageId}
                            portalId={contact.portalId}
                            goalName="carresaintlouis_property_form_submitted"
                            formId={contact.formId}
                            phone={contactInfo.phone}
                            contactPopupIsActive={contactPopupIsActive}
                            setContactPopupIsActive={setContactPopupIsActive}
                        />
                    </div>
                </div>

                <ContactPopupTrigger setContactOpen={setContactPopupIsActive} />

                <ContactFormPopup contactPopupIsActive={contactPopupIsActive} setContactPopupIsActive={setContactPopupIsActive}>
                    <ContactPopup2025
                        type="form"
                        htmlFormId="hs-form-2"
                        pageId={pageId}
                        portalId={contact.portalId}
                        goalName="carresaintlouis_property_form_submitted"
                        formId={contact.formId}
                        phone={contactInfo.phone}
                        setContactPopupIsActive={setContactPopupIsActive}
                    />
                </ContactFormPopup>
                
                <Link href="/commercial" className="contactV2__banner" style={{ fontWeight: "bold" }}>
                    <div className="contactV2__banner--overlay"></div>
                    <div data-aos="fade" data-aos-delay="250">Interested in retail space? Click here to find out more about Les Boutiques at Carré Saint Louis</div>
                </Link>

                {/* {posts.length > 0 &&  <Newsroom header="Latest News" posts={posts} newsroom />} */}
                {instagramPosts.length > 0 && <InstagramFeed posts={instagramPosts} />}

                <Footer findMyApartment content={contactInfo} />
       </Container>
    )
}

export async function getStaticProps(ctx) {
    const id = 'carresaintlouis';

    const url = `${appUrl}/api/property?id=${id}`;
    const res = await fetch(url);
    const data = await res.json();

    const propertyGlobalUrl = `${appUrl}/api/propertyGlobal`;
    const propertyGlobalRes = await fetch(propertyGlobalUrl);
    const propertyGlobalData = await propertyGlobalRes.json();

    const indexUrl = `${apiUrl}/home?${populate}`;
    const indexRes = await fetch(indexUrl);
    const indexData = await indexRes.json();  

    let featuredListingsData;

    if (id === '40mcgill') {
        featuredListingsData = listings40mcgill;
    } else {
        const featuredListingsUrl = `${appUrl}/api/propertyListings?property=${id}&isFeatured=true`;
        const featuredListingsRes = await fetch(featuredListingsUrl, authHeaders);
        featuredListingsData = await featuredListingsRes.json();  
    }
    
    const propertyPosts = await fetchPropertyPosts(id);
    const leasingSteps = await fetchLeasingSteps();

    const testimonialsUrl = `${appUrl}/api/testimonials?property=${id}`;
    const testimonialsRes = await fetch(testimonialsUrl);
    const testimonialsData = await testimonialsRes.json();

    // const propertyMinMaxUrl = `${apiUrl}/property-listings/minmax?property=${id}`;
    // const propertyMinMaxRes = await fetch(propertyMinMaxUrl, authHeaders);
    // const propertyMinMaxData = await propertyMinMaxRes.json();

    const siblingPropertyUrl = `${appUrl}/api/property/siblings?property=${id}`;
    const siblingPropertyRes = await fetch(siblingPropertyUrl, authHeaders);
    const siblingPropertyData = await siblingPropertyRes.json();
  
    const contactUrl = `${apiUrl}/contact?populate=deep`;
    const contactRes = await fetch(contactUrl);
    const contactData = await contactRes.json();
  
    const contactInfo = {
        info: contactData.data.attributes.info
    }

    const stressTest = await fetchStressTest();

    let popup;
    const popupUrl = data?.data[0]?.attributes?.popup?.url ? data?.data[0]?.attributes?.popup?.url : null;

    const instagramPosts = await fetchInstagramRecentPosts(15);

    if (popupUrl) {
        const popupRes = await fetch(popupUrl);
        const popupData = await popupRes.json();
    
        popup = {
        content: {
            title: popupData?.data?.attributes?.title,
            date: popupData?.data?.attributes?.date,
            time: popupData?.data?.attributes?.time,
            theme: popupData?.data?.attributes?.theme,
            expires: popupData?.data?.attributes?.expires,
            property: {
            name: popupData?.data?.attributes?.property.data.attributes.name,
            streetAddress: popupData?.data?.attributes?.property.data.attributes.address.streetAddress,
            postalCode: popupData?.data?.attributes?.property.data.attributes.address.postalCode,
            city: popupData?.data?.attributes?.property.data.attributes.address.city.data.attributes.name,
            googleMaps: popupData?.data?.attributes?.property.data.attributes.address.googleMaps
            }
        },
        type: data?.data[0]?.attributes?.popup?.collection
        }  
    } else {
        popup = null;
    }

    if (data.meta.pagination.total === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    } else {
        let property = data.data[0].attributes;
        property.global = propertyGlobalData;
        const city = property.address.city.name;

        return {
            props: {
                // minmax: propertyMinMaxData,
                popup,
                property,
                city,
                contactInfo,
                posts: propertyPosts,
                testimonials: testimonialsData,
                contactUs: indexData.data.attributes.contactUs,
                leasingSteps,
                stressTest,
                featuredListings: featuredListingsData,
                siblingProperties: siblingPropertyData[0]?.properties?.length > 0 ? siblingPropertyData[0].properties : [],
                instagramPosts: instagramPosts.data
            },
            revalidate: 1,
        }
    }
}

export default Property;