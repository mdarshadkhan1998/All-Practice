import Card from "./Card"

const data ={
    name:"Arshad Khan",
    qualification:"UG",
    organization:"MASAI",
    image:"https://avatars.githubusercontent.com/u/98782705?v=4"
}

const data1 ={
    name:"Gabbar",
    qualification:"DON",
    organization:"SHOLEY",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jSCQa5BccawDR2sK0tPx9gEsDD%26pid%3DApi&f=1"
}

function Employ (){
    return (
        <>
            <Card {...data}/>
            <Card {...data1}/>
        </>
    )
}
export default Employ