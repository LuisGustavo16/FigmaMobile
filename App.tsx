import {Cinema} from "./src/screens/Cinema/index"
import {Livro} from "./src/screens/Livro/index"
import {Musica} from "./src/screens/Musica/index"
import { useState, Dispatch, SetStateAction } from "react";

export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  if (page == 1) {
    return <Cinema setPageI={setPage}/>
  } else if (page == 2) {
    return <Musica setPageI={setPage}/>
  } else if (page == 3) {
    return <Livro setPageI={setPage}/>
  }
}