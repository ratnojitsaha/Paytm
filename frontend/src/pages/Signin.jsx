import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = ()=>{
    return <div className="flex flex-col min-h-screen"> 
        <Header />
        <div className="bg-slate-300 flex-grow items-center  flex justify-center">
            
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials"} />
                    <InputBox placeholder={"abcd@gmail.com"} label={"Email"}/>
                    <InputBox placeholder={"123456"} label={"Password"}/>
                    <div className="pt-4">
                        <Button label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    </div>
}