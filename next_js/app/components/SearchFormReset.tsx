'use client'
import Link from "next/link"
const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search_form') as HTMLFormElement
        form.reset()
    }
    return (
        <button type="reset" onClick={reset} >
            <Link href='/'className="search_button text-white">
            X
            </Link>
        </button>
    )
}

export default SearchFormReset