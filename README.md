# techjamWinners 

## Project Setup Guide:
## Frontend

1. **Install Node.js**:
   - Make sure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).

2. **Navigate to the project directory**:
   - Open a terminal and navigate to the `tiktokshop` directory:
     ```sh
     cd /tiktokshop
     ```

3. **Install npm packages**:
   - In the terminal, run the following command to install the necessary npm packages:
     ```sh
     npm install
     ```

4. **Start the frontend server**:
   - To start the frontend server, run:
     ```sh
     npm start
     ```
   - The frontend application will be running on port **3000**.

## Backend

1. **Install Python**:
   - Ensure Python is installed on your machine. You can download it from [here](https://www.python.org/).

2. **Create .env file**:
   - In the root directory of the project, create a `.env` file and add your API keys:
     ```plaintext
     OPENAI_API_KEY = "your openai key"
     PC_API_KEY = "your pinecone key"
     ```

3. **Set up a virtual environment**:
   - Create a virtual environment by running the following command in the terminal:
     ```sh
     python -m venv venv
     ```
   - Or for Python 3.x:
     ```sh
     python3 -m venv venv
     ```

4. **Activate the virtual environment**:
   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```sh
     source venv/bin/activate
     ```

5. **Navigate to the backend directory**:
   - Use the `cd` command to navigate to the backend directory:
     ```sh
     cd /backend
     ```

6. **Install the required packages**:
   - Install the necessary Python packages by running:
     ```sh
     pip install -r requirements.txt
     ```
   - Or for Python 3.x:
     ```sh
     pip3 install -r requirements.txt
     ```

7. **Start the backend server**:
   - Run the following command in the terminal to start the backend server:
     ```sh
     uvicorn main:app --reload
     ```
   - You can view the API documentation at `http://127.0.0.1:8000/docs`. 
   - The backend application will be running on port **8000**.
