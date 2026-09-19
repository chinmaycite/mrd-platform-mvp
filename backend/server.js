const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'allovista-mrd-backend',
    environment: 'mvp'
  });
});

app.get('/api/dashboard-summary', (req, res) => {
  res.json({
    patientId: '10024',
    mrdStatus: 'Detected',
    concordance: 94.2,
    lod: 0.01,
    qc: 'Pass',
    trend: [
      { time: 'W1', mrd: 18.2 },
      { time: 'W2', mrd: 12.6 },
      { time: 'W3', mrd: 8.4 },
      { time: 'W4', mrd: 4.9 },
      { time: 'W5', mrd: 1.7 },
      { time: 'W6', mrd: 0.6 }
    ]
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
