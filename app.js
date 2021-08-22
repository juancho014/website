const express = require ('express');
const app = express();
const path = require('path');
const products = require('./utils/products')
const title = 'proyecto'



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    products.getAllJuegos((error, products)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(products);
        return res.render('index', {
            title,
            JSONBody
        });

    })
  
});

app.get('/consolas', (req, res)=>{
    products.getAllJuegos((error, products)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(products);
        return res.render('pages/consolas', { title:`${title} | consolas`,
            JSONBody
        });

    })
  
});



app.get('/registro',(rec,res)=>{
    res.render('pages/registro',{title: `${title} | registro` });
});

app.get('/joystick',(rec,res)=>{
    res.render('pages/joystick',{title: `${title} | joystick`});
});

app.listen(3000,()=>{
    console.log('funcionando en el puerto 3000');
})