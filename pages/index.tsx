import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {TodoCard} from "../components/TodoCard/TodoCard";

export default function Home() {
  return (
      <div className="flex justify-center items-center min-h-screen">
          <TodoCard name="Payment method via e-commerce" tags={["Research", "UX"]}/>
      </div>
  )
}
