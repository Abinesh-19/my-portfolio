// #region agent log
const fs = require("fs"),
  path = require("path");
const p = path.join(process.cwd(), "node_modules", "framer-motion");
const out = path.join(process.cwd(), "..", ".cursor", "debug.log");
try {
  fs.appendFileSync(
    out,
    JSON.stringify({
      location: "debug-deps.js",
      message: "framer-motion check",
      data: { framerMotionExists: fs.existsSync(p), cwd: process.cwd() },
      timestamp: Date.now(),
      sessionId: "debug-session",
      hypothesisId: "A",
      runId: "post-fix",
    }) + "\n",
  );
} catch (e) {}
// #endregion
