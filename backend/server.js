import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import cors from 'cors'

// Configuring dotenv and express app
dotenv.config()
const app = express()
app.use(cors())

// Reading environment variables
const { API_KEY, API_SECRET, REDIRECT_URI, PORT } = process.env

app.get('/', (req, res) => {
  res.json('hi')
})
// Step 1: Redirect user to Dailymotion login
app.get('/auth/login', (req, res) => {
  const url = `https://www.dailymotion.com/oauth/authorize?response_type=code&client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&scope=read`
  res.redirect(url)
})

// Step 2: Handle callback after login
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code
  try {
    const response = await axios.post(
      'https://api.dailymotion.com/oauth/token',
      null,
      {
        params: {
          grant_type: 'authorization_code',
          client_id: API_KEY,
          client_secret: API_SECRET,
          redirect_uri: REDIRECT_URI,
          code
        }
      }
    
    )
    console.log('Token response:', response.data)

    const accessToken = response.data.access_token
    console.log('Access token:', accessToken) // 👈 Add this line
    res.redirect(`http://localhost:5173/token=${accessToken}`)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
