// 1 - iniciando projeto
// console.log('Express + TS!!!');

// 2 - init express
import express, {NextFunction, Request, Response} from 'express';

const app = express();

app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path); // exibe o path no terminal
  next();
}

app.use(showPath);

// 3 - rota com POST
app.get('/', (req, res) => {
  return res.send('Hello Express!');
});

app.post('/api/product', (req, res) => {
  console.log(req.body);
  return res.send('Produto adicionado!');
});

// 4 - rota para todos os verbos
app.all('/api/product/check', (req, res) => {
  // req.method = VERBO HTTP
  const method = req.method;

  if (method === 'POST') {
    return res.send('Inseriu algum registro!');
  } else if (method === 'GET') {
    return res.send('Leu algum registro!');
  } else {
    return res.send('Não podemos realizar esta operação!');
  }
});

// 5 interfaces do express
app.get('/api/interfaces', (req: Request, res: Response) => {
  return res.send('Utilizando as interfaces');
});

// 6 - enviando json
app.get('/api/json', (req: Request, res: Response) => {
  return res.json({
    name: 'Shirt',
    price: 30.00,
    color: 'Blue',
    sizes: ['P', 'M', 'G']
  });
});

// 7 - router parameters
app.get('/api/product/:id', (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === '1') {
    const product = {
      id: 1,
      name: 'Boné',
      price: 10
    };

    return res.json(product);
  }

  return res.send('Produto não encontrado!');
});

// 8 - rotas complexas
app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
  console.log(req.params);
  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// 9 - router handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com o id: ${req.params.id}`);

  return res.send('O usuário foi encontrado');
}
app.get('/api/user/:id', getUser);

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === '1') {
    console.log('Pode seguir!');
    next();
  } else {
    console.log('Acesso restrito!');
  }
}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
  return res.json({
    msg: 'Bem-vindo a área administrativa!'
  });
});

// 12 - req e res com generics
app.get('/api/user/:id/details/:name', (
    req: Request<{ id: string; name: string }>, 
    res: Response<{ status: boolean }>
  ) => {
    console.log( `ID: ${req.params.id}`);
    console.log( `Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

// 13 - tratando erros
app.get('/api/error', (req: Request, res: Response) => {
  try {
    // a nossa lógica
    throw new Error('Algo deu errado!');
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
});

app.listen(3000, () => {
  console.log('Aplicação de TS + Express funcionando!');
});
