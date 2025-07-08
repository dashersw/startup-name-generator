# 🚀 Startup Name Generator

A simple, elegant web application that generates creative startup names based on your elevator pitch using OpenAI's GPT-4o.

## Features

- 🎯 **AI-Powered**: Uses OpenAI GPT-4o to generate creative and relevant startup names
- 💡 **Smart Analysis**: Analyzes your elevator pitch to understand your startup's core concept
- 🎨 **Creative Names**: Generates 5 unique, memorable names with detailed explanations
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 📋 **Copy Results**: Easy one-click copy functionality for all suggestions

## Prerequisites

- Node.js (v14 or higher)
- OpenAI API key (get one from [OpenAI Platform](https://platform.openai.com/))

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd startup-name-generator
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration (optional)
PORT=3000
```

4. Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and go to `http://localhost:3000`

3. Enter your startup's elevator pitch in the textarea

4. Click "Generate Startup Names" to get 5 creative suggestions

5. Use the "Copy Results" button to copy all suggestions to your clipboard

## Example Elevator Pitch

Here's an example of what you might enter:

> "We're building a platform that connects freelance designers with small businesses who need affordable, high-quality logo design. Our AI matching system pairs clients with the perfect designer based on style preferences and budget."

## Technology Stack

- **Backend**: Express.js
- **Frontend**: Pug templates with modern CSS
- **AI**: OpenAI GPT-4o
- **Styling**: Custom CSS with gradient backgrounds and modern UI

## API Usage

The application uses OpenAI's Chat Completions API with the following configuration:

- Model: `gpt-4o`
- Max tokens: 1000
- Temperature: 0.8 (for creative responses)

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

## File Structure

```
startup-name-generator/
├── public/
│   └── styles.css          # CSS styles
├── views/
│   ├── layout.pug         # Base template
│   ├── index.pug          # Homepage with form
│   └── results.pug        # Results page
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own purposes!

## Support

If you encounter any issues or have questions, please open an issue in the repository.
