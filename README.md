# VAT-ID-Checker
A simple Node.js + Express application with EJS templating that validates European VAT IDs using the [VATLayer API](https://vatlayer.com/documentation).

## Features
- Lookup VAT IDs for EU member states + UK
- Displays validation result (valid/invalid)
- Shows company name and address (if available)
- Clean UI built with Bootstrap

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/VAT-ID-Checker.git
   cd VAT-ID-Checker

2. Install dependencies
   ```bash
    npm i

4. Get your own VATLayer API access key:
    - Create a free account at https://vatlayer.com/.
    - Access your dashboard or the documentation page (https://vatlayer.com/documentation) to see your API key.

5. Create an .env file in project root and add your own API Key.
   ```env
   API_KEY=your_api_key_here

7. Start server:
   ```bash
   node index.js
   ```
   or if using nodemon:
   ```bash 
   npx nodemon index.js
   ```

## Usage
1. Open your browser and go to:
    http://localhost:3000
    
2. Enter in a VAT ID(e.g GB123456789) and click "Validate".

3. View the results.

## Technologies Used
- Node.js
- Express
- EJS
- Axios
- Bootstrap
- dotenv

## Environmental Variables
The app requires the following environmental variable:

| Variable  | Description           |
| --------- | --------------------- |
| `API_KEY` | Your VATLayer API key |

## License
MIT License - you are welcome to use and modify this project.
