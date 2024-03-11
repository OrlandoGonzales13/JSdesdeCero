//Create Mugiwara  objects
function mugiwara(name, color, ability){
    this.name = name
    this.color = color
    this.ability = ability
    this.isLeader = false

    this.displayInfo = function(){
        console.log(`Mugiwara Information:
        -Name: ${this.name}
        -Color: ${this.color}
        -Ability: ${this.ability} 
        - ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `)
    }

    this.becomeLeader = function(){
        this.isLeader = true
        console.log(`${this.name} es the new Leader of Mugiwaras`)
    }
}

const luffy = new mugiwara('Monkey D. Luffy', 'Red', 'Rubber Human')
const zoro = new mugiwara('Roronoa Zoro', 'Red', 'Swordsman')
const usopp = new mugiwara('Usopp', 'Green', 'Shooter')


luffy.displayInfo()
zoro.displayInfo()
usopp.displayInfo()

luffy.becomeLeader() //cambiamos de líder

luffy.displayInfo()
zoro.displayInfo()
usopp.displayInfo()