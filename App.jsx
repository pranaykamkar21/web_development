import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'
import {Navbar} from './components/Navbar.jsx'
import{MatchCard} from './components/MatchCard.jsx'
import{BookingForm} from './components/BookingForm.jsx'
import {Footer} from './components/Footer.jsx'
import './App.css'

export default function App() {
    const[matches, setMatches] = useState([])
    const[selectedMatch, setSelectMatch] = useState(null)
    const[bookings, setBookings] = useState([])
    const[loading, setLoading] = useState(true)

useEffect(() => {
    fetchMatches()