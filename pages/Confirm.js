import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from './components/RideSelector'
import Link from 'next/link';

const Confirm = () => {
  const router = useRouter();
  const { pickUp, dropOff } = router.query;

  const [pickUpCoordinates, setPickUpCoordinates] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0]);

  const getPickUpCoordinates = (pickUp) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibmF2aWRraGFuIiwiYSI6ImNreG1jbmg1MjZ6YjczMXEzZ2N6Ynh0bnMifQ.s_D8U372bdBhzzjwJL-vnw",
          limit: 1,
        })
    )
      .then((resp) => resp.json())
      .then((data) => {
        setPickUpCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropOff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibmF2aWRraGFuIiwiYSI6ImNreG1jbmg1MjZ6YjczMXEzZ2N6Ynh0bnMifQ.s_D8U372bdBhzzjwJL-vnw",
          limit: 1,
        })
    )
      .then((resp) => resp.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUpCoordinates(pickUp);
    getDropOffCoordinates(dropOff);
  }, [pickUp, dropOff]);

  return (
    <Wrapper>
    <ButtonContainer>
        <Link href='/Search'>
        <BackButton src='https://previews.123rf.com/images/get4net/get4net1712/get4net171200454/91295909-a-back-button-icon-on-isolated-background.jpg'/>
        </Link> 
    </ButtonContainer>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector 
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}

        />
      </RideContainer>
      <ConfirmButtonContainer>
      <ConfirmButton>
          Confirm UberX 
        </ConfirmButton>
      </ConfirmButtonContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex
h-screen
flex-col
`;

const RideContainer = tw.div`
flex
`;

// const RideSelector = tw.div``;

const ConfirmButtonContainer = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
items-center
justify-center
text-center
border-t-2
my-4
mx-4
py-4 
px-4
text-xl
bg-black
text-white`

const ButtonContainer = tw.div`
rounded-full 
absolute
top-4 
left-4 
z-10 
bg-white 
shadow-md 
cursor-pointer 
`; 

const BackButton = tw.img`
h-12
w-12 
object-contain
rounded-full
`; 
