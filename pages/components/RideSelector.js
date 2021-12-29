import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../../public/carList'

const RideSelector = ({pickUpCoordinates, dropOffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0);

    console.log('pick up', pickUpCoordinates); 
    console.log('drop off', dropOffCoordinates);

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoibmF2aWRraGFuIiwiYSI6ImNreG1jbmg1MjZ6YjczMXEzZ2N6Ynh0bnMifQ.s_D8U372bdBhzzjwJL-vnw`)
        .then(resp => resp.json())
        .then(data => {
            setRideDuration(data.routes[0].duration /100)
            console.log('the ride is this long', rideDuration)
        })
    }, [pickUpCoordinates, dropOffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            {/* 🔥 FAbio */}
            {/* 🚀 Sam */}
            <CarList>
                { carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                )) }

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`
// 🚀 Devlin
const Car = tw.div`
flex p-4 items-center
`

// 🔥 Heimen
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

// Emeric 🔥
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`