
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son obligatorios.' });
    }
  
    res.status(200).json({ message: 'Login exitoso', token: 'exampleToken' });
  });
  
  app.get('/api/auth/me', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No autorizado' });
    }
  
    res.status(200).json({ email: 'usuario@ejemplo.com', name: 'Usuario Ejemplo' });
  });
  