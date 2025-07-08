const express = require('express')
const path = require('path')
const OpenAI = require('openai')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Set up Pug as the template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Startup Name Generator' })
})

app.post('/generate', async (req, res) => {
  const { elevatorPitch } = req.body

  if (!elevatorPitch) {
    return res.render('index', {
      title: 'Startup Name Generator',
      error: 'Please provide an elevator pitch for your startup.'
    })
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            "You are a creative startup name generator. Given an elevator pitch, generate exactly 5 unique, catchy, and memorable startup names with brief explanations for each. Format your response as a JSON array with objects containing 'name' and 'explanation' fields. Don't include any other text in your response, no markdown, no html, only JSON."
        },
        {
          role: 'user',
          content: `Generate 5 startup names based on this elevator pitch: "${elevatorPitch}". 

Please respond with a JSON array in this exact format:
[
  {
    "name": "StartupName1",
    "explanation": "Brief explanation of why this name fits the startup"
  },
  {
    "name": "StartupName2", 
    "explanation": "Brief explanation of why this name fits the startup"
  }
]`
        }
      ],
      max_tokens: 1000,
      temperature: 0.8
    })

    const response = completion.choices[0].message.content
    let suggestions

    try {
      suggestions = JSON.parse(response)
    } catch (parseError) {
      // If JSON parsing fails, try to extract suggestions manually
      console.log('JSON parsing failed, response:', response)
      suggestions = [
        {
          name: 'Unable to parse',
          explanation: 'There was an error processing the AI response. Please try again.'
        }
      ]
    }

    res.render('results', {
      title: 'Startup Name Suggestions',
      elevatorPitch,
      suggestions
    })
  } catch (error) {
    console.error('Error generating names:', error)
    res.render('index', {
      title: 'Startup Name Generator',
      error: 'Sorry, there was an error generating names. Please try again.'
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
