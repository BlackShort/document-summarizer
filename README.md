# 📝 Intelligent Document Summarizer

## Overview

The **Intelligent Document Summarizer** is a powerful web application designed to simplify text-heavy workflows. This tool leverages advanced AI models to generate concise summaries of lengthy text inputs, significantly reducing manual effort. It aims to improve efficiency by up to 60% for professionals dealing with extensive documents.

---

## ✨ Key Features

- **AI-Powered Summarization**: Uses Hugging Face Transformers to deliver high-accuracy text summaries.
- **Responsive Web Interface**: A user-friendly frontend built with HTML, CSS, and JavaScript for seamless interactions.
- **Real-Time API**: Built on FastAPI, enabling quick responses to summarization requests.
- **Customizable**: Easily extensible for domain-specific summarization needs.

---

## 🛠️ Tech Stack

- 🐍 **Backend**: Python, FastAPI
- 🌐 **Frontend**: HTML, CSS, JavaScript
- 🤖 **AI Models**: Hugging Face Transformers
- ☁️ **Deployment**: Uvicorn for local development; AWS-ready for scalable deployments

---

## 📂 Project Structure
```
document_summarizer
├── 📂app
│   ├── 📄main.py                    # Entry point for FastAPI app
│   ├── 📄app.py                     # Starting point for FastAPI app
│   ├── 📄config.py                  # Configuration settings (AWS keys, API settings, etc.)
│   ├── 📂services                   # Business logic and core functionality
│   ├── 📂utils                      # Helper functions and utilities
│   ├── 📂controllers                # Functionality and management 
│   ├── 📂constants                  # Constants configuration
│   ├── 📂app_logging                # Logging configuration
│   ├── 📂models                     # Data models and schemas
│   └── 📂middlewares                # Custom middlewares (e.g., authentication, logging)
│
├── 📂artifact                       # Dataset files
├── 📂client                         # Next.js application 
├── 📂config                         # yaml file for configuration settings 
├── 📂docker                         # Docker configuration
├── 📂ipynb                          # notebook files
├── 📂logs                           # logs files
├── 📂scripts                        # scripts files
├── 📄example.env                    # Example file of environment variables (e.g., API keys, AWS credentials)
├── 📄.gitignore                     # Files and directories to ignore in Git
├── 📄LICENSE                        # License information
├── 📄README.md                      # Project overview, setup instructions
└── 📄requirements.txt               #  Python dependencies
```
---

## ⚙️ Setup and Installation

1. **📥 Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/document-summarizer.git
   cd document-summarizer
   ```

2. **🌐 Set up a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **📦 Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **▶️ Run the application locally**:
   ```bash
   python app.app
   ```

5. **🌍 Access the application**:
   Open your browser and navigate to `http://127.0.0.1:8080`.

6. **🌍 Run Next.js application to access frontend**:
   ``` javascript
   // install the dependencies
   npm install

   // after installing the dependencies run this command
   npm run dev
   ```

---

## 🎯 Usage

1. **Navigate to the Homepage**:
   - Access the application to explore options such as login, signup, and text summarization.

2. **Summarize Text**:
   - Go to the `Summarizer` page, input your text, and get a concise summary powered by AI.

---

## 🚀 Future Enhancements

- **User Authentication**: Secure user accounts for saving summarization history.
- **Batch Processing**: Allow users to upload multiple documents for summarization.
- **Custom AI Models**: Fine-tune models for specific industries (e.g., legal, medical).

---

## 📜 License

This project is licensed under the MIT License.

---

For feedback or contributions, feel free to create a pull request or open an issue on [GitHub](https://github.com/YourUsername/document-summarizer).
