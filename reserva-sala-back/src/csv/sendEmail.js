module.exports = (Usuario) =>{
    var nodemailer = require('nodemailer');
    var conta = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'Pedrianinha@gmail.com', 
            pass: 'senhorapavao' 
        }
    });
    conta.sendMail({
        from: 'Sistema de Reservas Cest <Pedrianinha@gmail.com>',
        to: Usuario.nome+' <'+Usuario.email+'>',
        subject: 'Sistema de Reservas Cest',
        html: 'Ola <b>'+Usuario.nome+'</b> você acabou de ser inscrito no nosso <b>Sistema de Reservas Cest</b> <br>Segue abaixo suas credenciais: <br><b>Login:</b> '+Usuario.email+' <br><b>Senha:</b> '+Usuario.senha1+'<br> Até Jaja!!!'
    }, function(err){
        if(err)
            throw err;
    });
};