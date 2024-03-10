const personalizedMessage = () => 'see you later cowboy'

function Rocket (name,  ownMessage) {
    this.name = name
    this.launchMessage = ownMessage 
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const RocketWhitArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => `Successful launch !`
const falcon9Rocket1 = RocketWhitArrowFunction('Falcon9 I', personalizedMessageForArrowFunction)

console.log(falcon9Rocket1.name)
console.log(falcon9Rocket1.launchMessage())