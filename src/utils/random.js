/* funcion que me va recivir la lista o arreglo de elemento y me reotorna un elemento en rando */

export const getRandom = (list)=> {
  const randomIndex = Math.floor(Math.random() * list.length) /* es el indice aleatorio */
  return list[randomIndex] /* me retorna la posicion de mi indice */
}
