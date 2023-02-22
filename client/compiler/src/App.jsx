import './App.css'
import MonacoEditor from 'react-monaco-editor'
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('C++')
  const [output, setOutput] = useState('')

  const handleSubmit = async (e) => {
    setCode(e.target.value)
    const payload = { language, code }

    try {
      const { data } = await axios.post('http://localhost:3000/run', payload)
      setOutput(data.output)
    } catch ({ error })
    {
      if ({ response })
      {
        const errMessage = response.data.err.stderr;
        setOutput(errMessage)
      }
      else {
        setOutput('Server error')
      }
    }
  };

  return (
    <>
    <div className="App">
      <MonacoEditor
        width='800'
        height='600'
        language={language}
          theme='vs-dark'
        />
        <button onClick={ handleSubmit }>
          Execute
        </button><br />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value='C++'>C++</option>
        <option value='Java'>Java</option>
        <option value='Python'>Python</option>
        <option value='JavaScript'>JavaScript</option>
        <option value='PHP'>PHP</option>
        <option value='Ruby'>Ruby</option>
        <option value='C#'>C#</option>
        <option value='C'>C</option>
      </select>
      </div>
      <div>
        Output : {output}
      </div>
    </>
  )
}

export default App
