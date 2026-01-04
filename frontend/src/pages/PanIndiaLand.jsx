export default function PanIndiaLand() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Pan India - Land Species</h1>

      {[
        {name:"Bengal Tiger", habitat:"Tropical forests, grasslands"},
        {name:"Asiatic Lion", habitat:"Gir Forest, Gujarat"}
      ].map(s => (
        <div key={s.name} className="bg-white p-6 mb-4 rounded-xl shadow">
          <h2 className="text-xl font-bold">{s.name}</h2>
          <p>Status: Endangered</p>
          <p>Habitat: {s.habitat}</p>
        </div>
      ))}
    </div>
  )
}
