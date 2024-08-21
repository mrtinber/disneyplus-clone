import WreckItRalph from "../../assets/images/ralph-not-found.png"

export const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen px-4">
        <img src={WreckItRalph} alt="Ralph and Vaneloppe flying away with the Wi-Fi." className="w-[30rem]"/>
        <div className="text-white text-center flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Oops! Page not found.</h2>
            <p className="font-thin">Looks like there's a glitch because we couldn't find what you're searching for.</p>
        </div>
    </div>
  )
}
