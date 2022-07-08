import SinglePoke from '../components/SinglePoke'

export default function Pokepage(pkm) {
  return (
    <div key={Math.random()}>
      Pokepage
      {console.log(pkm)}
    </div>
  )
}
