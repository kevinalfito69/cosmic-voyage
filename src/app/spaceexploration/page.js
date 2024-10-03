import Item from '@/components/item'
import Image from 'next/image'


export default function SpaceExploration() {
  const spaceObjects = [
    { name: 'Planet',content:'See planet', image: '/assets/img/planet.png',link:'planet' },
    { name: 'Solar System', content:' See object near earth', image: '/assets/img/solar-system.png',link:'planet' },
    { name: 'Galaxy',content:'See other galaxy in world', image: '/assets/img/galaxy.png', link:'planet' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">Space Exploration</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {spaceObjects.map((object, index) => (
          <Item key={index} title={object.name} image={object.image} content={object.content} url={object.link}/>
        ))}
      </div>
    </div>
  )
}