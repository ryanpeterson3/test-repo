import Link from "next/link";
import ContentWrapper from "../../../sections/ContentWrapper.component";
import { renderRichText } from "../../../utils/renderRichText";

import { useEffect, useState } from 'react';
import Image from "next/image";
const LepineCommunities = ({ header, copy, neighbourhoods }) => {
    const [currentCommunity, setCurrentCommunity] = useState(0);
    const [currentTimer, setCurrentTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState(7500);
    const [disableTimer, setDisableTimer] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('');
    
    const communities = [
        { name: 'Kanata', copy: 'Kanata content', bgImage: "https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/example/city1.jpg" },
        { name: 'Smiths Falls', copy: 'Smiths Falls content', bgImage: "https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/example/city2.jpg" },
        { name: 'Carleton Place', copy: 'Carleton Place content', bgImage: "https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/example/city1.jpg" },
        { name: 'Renfrew', copy: 'Renfrew content', bgImage: "https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/example/city2.jpg" },
        { name: 'Barrhaven', copy: 'Barrhaven content', bgImage: "https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/example/city1.jpg" },
        { name: 'Orleans', copy: 'Orleans content', bgImage: "https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/example/city2.jpg" }
    ];

    const iterate = () => {
        if (currentCommunity < communities.length - 1) {
            setCurrentCommunity(currentCommunity + 1);
        } else {
            setCurrentCommunity(0);
        }

        setCurrentTimer(0);
    }

    useEffect(() => {
        let interval1;
        let interval2;

        interval1 = setInterval(() => {
            !disableTimer && iterate();
        }, timerInterval + 1000);

        interval2 = setInterval(() => {
            !disableTimer && setCurrentTimer((prev) => prev + 1);
        }, (timerInterval / 100))

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, [currentCommunity]);

    const resetComponent = (i) => {
        setCurrentCommunity(i);
        disableAuto();
        return () => clearInterval(interval);
    }

    const disableAuto = () => {
        setTimerInterval(0);
        setDisableTimer(true);
        setCurrentTimer(100);
    }

    const progressClasses = ['lepineCommunities__progress'];

    const bgStyle = {
        backgroundImage: `url('${communities[currentCommunity].bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <section className="lepineCommunities__container">
                <div className="lepineCommunities__cities">
                    {communities.map((c, i) => {
                        const classes = ['lepineCommunities__city'];
                        i === currentCommunity && classes.push('active');
                        return <div className={classes.join(' ')} data-community={c.name} key={i} onClick={() => resetComponent(i)}>
                            <h3>{c.name}</h3>
                        </div>
                    })}
                </div>

                <div className="lepineCommunities__overlay">
                    <div className="lepineCommunities__overlay--gradient"></div>
                    <div className="lepineCommunities__overlay--image" style={bgStyle}></div>
                </div>


                <div className="lepineCommunities__content">
                    {communities.map((c, i) => {
                        const classes = ['lepineCommunities__content--wrapper'];
                        i === currentCommunity && classes.push('active');

                        return (<div key={i} className={classes.join(' ')} onClick={() => resetComponent(currentCommunity)}>
                            {neighbourhoods.filter(n => n.city === communities[currentCommunity].name).map((n, i) => {
                                return <Link href={n.href} className="lepineCommunities__card" data-neighbourhood={n.name} key={i} onMouseOver={() => disableAuto()}>
                                    <div className="lepineCommunities__card--image">
                                        <Image src={n.image} alt={n.name} height={300} width={300} />
                                    </div>

                                    <div className="lepineCommunities__card--content">
                                        <h3>{n.name}</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </Link>
                            })}
                        </div>);
                    })}

                    <div className="lepineCommunities__timer">
                        {currentTimer > 1 && <div className={progressClasses.join(' ')} style={{
                            width: `${currentTimer}%`,
                            transition: 'all 0.25s linear'
                        }}></div>}
                    </div>
                </div>
        </section>
    );
}

export default LepineCommunities;