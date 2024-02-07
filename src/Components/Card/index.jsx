import React from 'react'
import { useState } from 'react'


export default function Card(props) {
    function deleteModal(){
        props.modal(true)
        props.backOpasity(true)
    }
  return (
    <>
      <div class="card">
                <div class="header">
                <span class="icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                </span>
                <p class="alert">{props.text}</p>
                <button onClick={deleteModal} class="closeButton">x</button>
                </div>

                <p class="message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo
                unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                </p>

                <div class="actions">
                <button onClick={deleteModal} href="" class="read">
                    {" "}
                    Learn more{" "}
                </button>

                <button onClick={deleteModal} href="" class="mark-as-read">
                    {" "}
                    About us{" "}
                </button>
                </div>
      </div>
    </>
  )
}
