import React from 'react'
import Form from "next/form"
import SearchFormReset from './SearchFormReset'
import {Search} from 'lucide-react'
const SearchForm = ({ query }: { query?: string }) => {

  return (
    <Form action='/' scroll={false} className='search_form'>
      <input name='query' defaultValue={query} className='search_input' placeholder='search startup' />
      <div className='flex gap-2'>
        {query && <SearchFormReset />}
        <button type='submit' className='search_button text-white'>
          <Search size={16} />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm