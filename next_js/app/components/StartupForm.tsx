'use client'
import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'

const StartupForm = () => {
  const [error, setError] = useState<Record<string, string>>({})
  const [pitch, setPitch] = useState("")
  const isPending = false
  return <form action={() => { }} className='startup-form'>
    <div>
      <label htmlFor="title" className='startup-form_label'>
        Title
      </label>
      <input type="text" id='title' className='startup-form_input' name='title' required placeholder='Startup Name' />
      {error.title && <p className='startup-form_error'>{error.title}</p>}
    </div>

    <div>
      <label htmlFor="discription" className='startup-form_label'>
        Description
      </label>
      <textarea id='description' className='startup-form_textarea' name='description' required placeholder='Startup Description' />
      {error.description && <p className='startup-form_error'>{error.description}</p>}
    </div>

    <div>
      <label htmlFor="category" className='startup-form_label'>
        Category
      </label>
      <input type="text" id='categogry' className='startup-form_input' name='categogry' required placeholder='Startup Category' />
      {error.categogry && <p className='startup-form_error'>{error.categogry}</p>}
    </div>

    <div>
      <label htmlFor="link" className='startup-form_label'>
        Image
      </label>
      <input type="text" id='title' className='startup-form_input' name='title' required placeholder='Startup name' />
      {error.title && <p className='startup-form_error'>{error.title}</p>}
    </div>

    <div data-color-mode="light">
      <label htmlFor="pitch" className='startup-form_label'>
        Pitch
      </label>
      <MDEditor value={pitch} onChange={(value) => setPitch(value as string)} id='pitch' preview='edit' height={300}
        style={{ borderRadius: 20, overflow: 'hidden' }} textareaProps={{ placeholder: "Describe your idea" }} previewOptions={{ disallowedElements: ['style'] }} />
      {error.title && <p className='startup-form_error'>{error.title}</p>}
    </div>
    <button type='submit' className='startup-form_btn' disabled={isPending}>
      {isPending ? "Submitting..." : "Submit"}
    </button>
  </form>
}

export default StartupForm