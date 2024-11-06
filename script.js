/* Modo oscuro */

body {
    font-family: Arial, sans-serif;
    background-color: #01010e;
    color: #f1f1f1;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: #1f1f1f;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 500px;
}

h2 {
    text-align: center;
    color: #e0e0e0;
}

input[type="number"],
button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #555;
    background-color: #333;
    color: #f1f1f1;
    font-size: 16px;
}

input[type="number"]:focus,
button:hover {
    border-color: #2196F3;
    background-color: #444;
    outline: none;
}

button {
    background-color: #2196F3;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
}

button:hover {
    background-color: #0b7dda;
}

.result {
    margin-top: 20px;
    background-color: #2a2a2a;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.result p {
    font-size: 16px;
    margin: 8px 0;
    color: #f1f1f1;
}

.result .highlight {
    font-weight: bold;
    color: #2196F3;
}

.alert {
    color: red;
    text-align: center;
    margin: 10px 0;
    font-size: 14px;
}
