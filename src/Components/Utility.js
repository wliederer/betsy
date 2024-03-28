import gus from './images/gus2.JPG'
import squirrel from './images/squirrel.JPG'
import cowboy from './images/cowboy.JPG'
import nun from './images/nun.JPG'
import fishGus from './images/FishGus.JPG'
import survivorGus from './images/SurvivorGus.JPG'
import spaceGus from './images/SpaceGus.JPG'

export const productsArray = () => {
  return [
    { id: 1, name: 'Gus', price: 'Free', image: gus },
    { id: 2, name: 'Squirrel', price: 'Free', image: squirrel },
    { id: 3, name: 'Cowboy', price: 'Free', image: cowboy },
    { id: 4, name: 'Nun', price: 'Free', image: nun },
    { id: 5, name: 'Fish Gus', price: 'Free', image: fishGus },
    { id: 6, name: 'Survivor Gus', price: 'Free', image: survivorGus },
    { id: 7, name: 'Space Gus', price: 'Free', image: spaceGus },
    // Add more products as needed
  ]
}
