import React from 'react'
import './FilterBar.css';

export const FilterBar = () => {
  return (
    <div className = ' z-[300] absolute right-0 flex gap-x-10 p-4'>
      <div class="select">
        <div
          class="selected"
          data-default="All"
          data-one="option-music"
          data-two="option-literary"
          data-three="option-art"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            class="arrow"
          >
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            ></path>
          </svg>

          <div class="main-box">
            <span id="selected-option">Type</span>
          </div>
        </div>
        <div class="options">
          
          <div title="option-music">
            <input id="option-music" name="option" type="checkbox" />
            <label class="option" for="option-music" data-txt="music"></label>
          </div>
          <div title="option-2">
            <input id="option-literary" name="option" type="checkbox" />
            <label class="option" for="option-literary" data-txt="literary"></label>
          </div>
          <div title="option-3">
            <input id="option-art" name="option" type="checkbox" />
            <label class="option" for="option-art" data-txt="art"></label>
          </div>
        </div>
      </div>      
    </div>
  )
}
