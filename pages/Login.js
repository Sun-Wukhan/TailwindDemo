import React, {useState, useEffect} from 'react'
import tw from "tailwind-styled-components";
import {useRouter} from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import {auth, provider} from '../firebase'


const Login = () => {
    const router = useRouter(); router

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])


    return (
        <Wrapper>
        <UberLogo src='https://media.designrush.com/inspirations/129137/conversions/_1521201517_957_UberLogoPreview-preview.jpg'/>
        <Title>Log In to access your account</Title>
        <HeadImage src='https://media.ride.guru/uploads/.thumbnails/AdobeStock_288506404_Editorial_Use_Only.jpeg/AdobeStock_288506404_Editorial_Use_Only-800x0-no-upscale.jpeg' />
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign In With Google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex
flex-col 
h-screen 
bg-gray-200`; 

const SignInButton = tw.button`
bg-black
text-white
text-center
py-4 
mt-8
self-center 
w-full 
cursor-pointer 
`; 

const UberLogo = tw.img`
h-20 
w-auto 
object-contain 
self-start 
`; 

const Title = tw.div`
items-center 
text-5xl
pt-4 
text-gray500 
text-center `; 

const HeadImage = tw.img`
h-2/4
w-2/4 
object-center
justify-center
mx-auto
`; 