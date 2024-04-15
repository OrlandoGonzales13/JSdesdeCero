/* Ejercicio: Encuentra al ganador del torneo.
1. Crear una función para determinar el ganador del torneo.
2. Leer los resultados y competiciones desde los arrays proporcionados.
3. Crear una lógica para asignar puntos a los equipos según los resultados (3 puntos por victoria, 0 puntos por derrota).
4. Asegurarse de que cada equipo compita una vez con todos los demás equipos.
5. Determinar el equipo con la mayor cantidad de puntos como el ganador del torneo.
*/

function ganadorDelTorneo (competitions, results) {
    const scores = {}
    let ganador = ''

    for( let i = 0; i < competitions.length; i++){
        const [home, away] = competitions[i]
        const equipoGanador = results[i] === 0 ? away : home

        scores[equipoGanador] = (scores[equipoGanador] || 0) + 3

        if( !ganador || scores[equipoGanador] > scores[ganador]){
            ganador = equipoGanador
        }
    }
    return ganador
}

const competitions=[
    ['JavaScript','C#'],
    ['C#','Python']
    ,['Python','JavaScript']
]

const results=[0,0,1]

console.log(ganadorDelTorneo (competitions, results))