import express from "express";

const PORT = 8080;
const RATE_LIMIT = 5;
const WINDOW_SIZE_IN_MS = 60 * 1000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Implement in-memory store mapping IP addresses
 * Apply rateLimiter to:
 *  - /api/time endpoint
 *  - every incomming request
 * In case rate limit have been reached - send a response with appropriate status
 */
function rateLimiter() {}

app.get("/api/time", function (req, res) {
  res.json({ time: new Date().toISOString() });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
