const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>DevOps Internship App</title>
            </head>
            <body>
                <h1>Hello from Node.js!</h1>
                <p>CI/CD Pipeline Demo</p>
                <p>Deployed using GitHub Actions and Docker.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});