import { useState }from "react"
import { Select } from "./Select"
import { SelectMulti } from "./SelectMulti"

const options = [
  { label: "First", value: 1},
  { label: "Second", value: 2},
  { label: "Third", value: 3},
  { label: "Fourth", value: 4},
  { label: "Fith", value: 5}
]

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
  const [valueMulti, setValueMulti] = useState<typeof options[0] | undefined>(options[0])
  return (
    <>
      <Select options={options} value={value} onChange={ o => setValue(o)}/>
      <SelectMulti options={options} value={valueMulti} onChange={ o => setValueMulti(o)}/>
    </>
  )
}

export default App
