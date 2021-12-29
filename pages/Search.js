import React, {useState, useEffect} from 'react'
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
    const [pickUp, setPickUp] = useState('')
    const [dropOff, setDropOff]     = useState('')

    console.log(pickUp)

    return (
        <Wrapper>
        <ButtonContainer>
        <Link href="/">
            <BackButton src="https://cdn-icons-png.flaticon.com/512/93/93634.png"/>
        </Link>
        </ButtonContainer>
        <InputContainer>
            <FromToIcons>
                <Circle src='https://img.icons8.com/carbon-copy/452/filled-circle.png'/>
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                <Square src="https://img.icons8.com/carbon-copy/452/rounded-square.png" />
            </FromToIcons>
        <InputBoxes>
            <Input placeholder="From"
                value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}

            />
            <Input placeholder="To"
                value={dropOff}
                onChange={(e) => setDropOff(e.target.value)}
            />
        </InputBoxes>
        <PlusIcons src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsz2iLyiAC3a3vGG3OQFcNfYrpa-8pFYfoWhSy9eLGWZDp-rIiZ_mRNO61_ehdCOYSAmQ&usqp=CAU'/>
        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=170667a&w=0&h=FTtipfTGuhZ7QtWBbiv9KO48SWsBgRQwv2Est1-gD8s="/>
        Saved Places
        </SavedPlaces>
        <Link href={{
            pathname: '/Confirm', 
            query: {
                pickUp: pickUp,
                dropOff: dropOff
        }}}>
        <ConfirmButtonContainer>
        Confirm
        </ConfirmButtonContainer>
        </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200
h-screen
`; 

const ButtonContainer = tw.div`
bg-white
px-4
`; 

const BackButton = tw.img`
h-12 
cursor-pointer
`;

const FromToIcons = tw.div`
w-10
flex
flex-col 
mr-2
items-center
`;

const InputContainer = tw.div`
bg-white
flex 
items-center
px-4 

`; 

const InputBoxes = tw.div`
flex
flex-col
flex-1
`;

const Input = tw.input`
h-10
bg-gray-200 
my-2
rounded-2 
p-2
outline-none 
border-none 

`;

const Circle = tw.img`
h-2.5`; 

const Line = tw.img`
h-10`; 

const Square = tw.img`
h-3`;

const StarIcon = tw.img`
bg-gray-400
w-10 
h-10 
p-2
rounded-full`;

const SavedPlaces = tw.div`
flex
items-center
bg-white
px-4 
py-2
`;

const ConfirmButtonContainer = tw.button`
bg-black
text-white
text-center
ml-2
mx-4
px-4 
py-3
mt-2
cursor-pointer
rounded-full
w-full
`; 

// const ConfirmLocation = tw.button`
// bg-black
// text-white
// w-full 
// rounded-full
// px-2
// py-2
// mt-2
// `;

const PlusIcons = tw.img`
h-10
w-10
rounded-full
bg-gray-200
ml-3
`